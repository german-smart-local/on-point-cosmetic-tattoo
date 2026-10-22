// Sends a consultation enquiry from the booking form (src/components/GetInTouch.tsx) through Resend.
// Needs RESEND_API_KEY, CONTACT_FROM and CONTACT_TO set in the environment (.env.local / Vercel).

const LIMITS = { name: 100, phone: 40, email: 200, treatment: 40, message: 4000 } as const;
type Field = keyof typeof LIMITS;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c);

export async function POST(request: Request) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  const to = process.env.CONTACT_TO;
  if (!key || !from || !to) {
    console.error("Booking form: RESEND_API_KEY, CONTACT_FROM or CONTACT_TO is not set");
    return Response.json({ error: "not-configured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "bad-request" }, { status: 400 });
  }

  // A hidden field people never see; bots that fill every input get a quiet success and no email.
  if (typeof body.website === "string" && body.website.trim()) {
    return Response.json({ ok: true });
  }

  const get = (k: Field) => (typeof body[k] === "string" ? (body[k] as string).trim().slice(0, LIMITS[k]) : "");
  const f = {
    name: get("name"),
    phone: get("phone"),
    email: get("email"),
    treatment: get("treatment"),
    message: get("message"),
  };

  // Same rules as the form: a name, and at least one way for Lisa to reply.
  if (!f.name || (!f.phone && !f.email) || (f.email && !EMAIL_RE.test(f.email))) {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  const rows: [string, string][] = [
    ["Name", f.name],
    ["Phone", f.phone],
    ["Email", f.email],
    ["Treatment", f.treatment || "Not sure yet"],
  ];
  const text = [...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`), "", f.message].join("\n");
  const html = `
    <h2 style="font-family:Georgia,serif;font-weight:normal">New consultation enquiry</h2>
    <table style="font-family:Arial,sans-serif;font-size:15px;border-collapse:collapse">
      ${rows
        .filter(([, v]) => v)
        .map(([k, v]) => `<tr><td style="padding:4px 16px 4px 0;color:#777">${k}</td><td style="padding:4px 0">${escapeHtml(v)}</td></tr>`)
        .join("")}
    </table>
    ${f.message ? `<p style="font-family:Arial,sans-serif;font-size:15px;white-space:pre-wrap">${escapeHtml(f.message)}</p>` : ""}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      // Replying in the inbox goes straight to the visitor when they left an email.
      ...(f.email ? { reply_to: f.email } : {}),
      subject: `Consultation enquiry from ${f.name}${f.treatment ? ` (${f.treatment})` : ""}`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error("Booking form: Resend refused the email", res.status, await res.text());
    return Response.json({ error: "send-failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
