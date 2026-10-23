// The email Lisa receives for each booking-form enquiry (sent by src/app/api/book/route.ts).
// Styled like the website: cream ground, gold accent, ink text, the serif headings and the spaced
// "On Point" wordmark. Email clients ignore stylesheets and web fonts, so everything is inline,
// laid out in tables, and the fonts fall back to close system faces (Didot / Bodoni 72 and Futura
// on Apple devices, Georgia and Century Gothic / Arial elsewhere). No images, so nothing is blocked.

export interface BookingEnquiry {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  message: string;
}

const C = {
  cream: "#f7f3ea",
  white: "#ffffff",
  gold: "#c09569",
  ink: "#303030",
  soft: "#5a524a",
  line: "#ddd0bd",
} as const;

const SERIF = "'Bodoni Moda','Bodoni 72',Didot,'Didot LT STD',Georgia,'Times New Roman',serif";
const SANS = "Jost,Futura,'Century Gothic','Helvetica Neue',Arial,sans-serif";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c);

/** A pill button that renders in Outlook too (a padded table cell, not a styled link alone). */
function button(href: string, label: string, filled: boolean) {
  const bg = filled ? C.ink : C.white;
  const fg = filled ? C.cream : C.ink;
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="display:inline-table;margin:0 8px 10px 0">
    <tr><td bgcolor="${bg}" style="border-radius:999px;border:1px solid ${C.ink};background:${bg}">
      <a href="${href}" style="display:inline-block;padding:13px 26px;font-family:${SANS};font-size:15px;font-weight:500;color:${fg};text-decoration:none;border-radius:999px">${label}</a>
    </td></tr>
  </table>`;
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:12px 0;border-top:1px solid ${C.line};width:120px;vertical-align:top;font-family:${SANS};font-size:14px;color:${C.soft}">${label}</td>
    <td style="padding:12px 0;border-top:1px solid ${C.line};vertical-align:top;font-family:${SANS};font-size:16px;color:${C.ink}">${value}</td>
  </tr>`;
}

export function renderBookingEmail(f: BookingEnquiry, siteUrl: string, received = new Date()) {
  const firstName = f.name.split(/\s+/)[0];
  const treatment = f.treatment || "Not sure yet";
  const when = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Brisbane",
    dateStyle: "full",
    timeStyle: "short",
  }).format(received);
  const siteHost = siteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const tel = f.phone.replace(/[^\d+]/g, "");
  const replySubject = encodeURIComponent("Your On Point consultation enquiry");

  const subject = `Consultation enquiry from ${f.name}${f.treatment ? ` (${f.treatment})` : ""}`;
  const intro = f.treatment
    ? `${firstName} would like to talk about ${f.treatment.toLowerCase()}.`
    : `${firstName} would like to talk about a treatment.`;
  const preheader = `${intro} ${f.phone ? `Phone ${f.phone}.` : `Email ${f.email}.`}`;

  const link = (href: string, text: string) =>
    `<a href="${href}" style="color:${C.ink};text-decoration:underline;text-decoration-color:${C.gold}">${escapeHtml(text)}</a>`;

  const rows = [
    row("Name", escapeHtml(f.name)),
    f.phone ? row("Phone", link(`tel:${tel}`, f.phone)) : "",
    f.email ? row("Email", link(`mailto:${f.email}?subject=${replySubject}`, f.email)) : "",
    row(
      "Treatment",
      `<span style="display:inline-block;padding:4px 14px;border-radius:999px;background:${C.cream};border:1px solid ${C.line};font-size:14px">${escapeHtml(treatment)}</span>`,
    ),
  ].join("");

  const message = f.message
    ? `<tr><td style="padding:28px 40px 0">
        <p style="margin:0 0 10px;font-family:${SANS};font-size:14px;color:${C.soft}">Their message</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
          <td style="border-left:3px solid ${C.gold};padding:4px 0 4px 18px;font-family:${SANS};font-size:16px;line-height:1.6;color:${C.ink};white-space:pre-wrap">${escapeHtml(f.message)}</td>
        </tr></table>
      </td></tr>`
    : "";

  const actions = [
    f.phone ? button(`tel:${tel}`, `Call ${escapeHtml(firstName)}`, true) : "",
    f.email ? button(`mailto:${f.email}?subject=${replySubject}`, "Reply by email", !f.phone) : "",
  ].join("");

  const html = `<!doctype html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:${C.cream}">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${C.cream}">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.cream}" style="background:${C.cream}">
  <tr><td align="center" style="padding:32px 16px">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px">

      <!-- Wordmark, as in the site's header -->
      <tr><td align="center" style="padding:8px 0 28px">
        <div style="font-family:${SERIF};font-size:30px;letter-spacing:6px;color:${C.gold};line-height:1">ON POINT</div>
        <div style="margin-top:8px;font-family:${SANS};font-size:10px;letter-spacing:4px;color:${C.soft}">&middot; COSMETIC TATTOO STUDIO &middot;</div>
      </td></tr>

      <!-- The enquiry -->
      <tr><td bgcolor="${C.white}" style="background:${C.white};border-radius:24px">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr><td style="padding:40px 40px 0">
            <p style="margin:0 0 12px;font-family:${SANS};font-size:14px;color:${C.gold}">New consultation enquiry</p>
            <h1 style="margin:0;font-family:${SERIF};font-size:34px;line-height:1.15;font-weight:400;color:${C.ink}">${escapeHtml(f.name)}</h1>
            <p style="margin:12px 0 0;font-family:${SANS};font-size:17px;line-height:1.5;color:${C.ink}">${escapeHtml(intro)}</p>
          </td></tr>
          <tr><td style="padding:24px 40px 0">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${rows}</table>
          </td></tr>
          ${message}
          <tr><td style="padding:32px 40px 30px">${actions}</td></tr>
        </table>
      </td></tr>

      <!-- Close, like the site's dark footer -->
      <tr><td style="padding-top:16px">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.ink}" style="background:${C.ink};border-radius:24px">
          <tr><td style="padding:26px 40px">
            <p style="margin:0;font-family:${SERIF};font-size:19px;line-height:1.35;color:${C.gold}">Brows, eyeliner and lips, mapped in Buderim since 2016.</p>
            <p style="margin:12px 0 0;font-family:${SANS};font-size:13px;line-height:1.6;color:#bdb3a6">Sent from the booking form on <a href="${siteUrl}" style="color:${C.cream};text-decoration:underline;text-decoration-color:${C.gold}">${siteHost}</a><br>${when}</p>
          </td></tr>
        </table>
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;

  // Plain-text version for clients that don't show HTML.
  const text = [
    `New consultation enquiry from ${f.name}`,
    intro,
    "",
    `Name: ${f.name}`,
    ...(f.phone ? [`Phone: ${f.phone}`] : []),
    ...(f.email ? [`Email: ${f.email}`] : []),
    `Treatment: ${treatment}`,
    ...(f.message ? ["", "Message:", f.message] : []),
    "",
    `Sent from the booking form on ${siteHost}, ${when}`,
  ].join("\n");

  return { subject, html, text };
}
