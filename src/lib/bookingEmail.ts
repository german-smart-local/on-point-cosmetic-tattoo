// The email Lisa receives for each booking-form enquiry (sent by src/app/api/book/route.ts).
// Styled like the website: cream ground, gold accent, ink text, Bodoni headings, the arch monogram
// and wordmark from the site header, and the dark footer with the light logo. Styles are inline and
// laid out in tables. Bodoni Moda and Jost load from Google Fonts where the mail app allows it (Apple
// Mail, iOS); elsewhere they fall back to close system faces. The logos are served from the live site
// and carry alt text, so the email still reads if images are blocked.

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
  footLine: "#4a4540",
  footText: "#bdb3a6",
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
  const img = (path: string) => `${siteUrl.replace(/\/$/, "")}/images/${path}`;
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
<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500&family=Jost:wght@400;500&display=swap" rel="stylesheet">
</head>
<body style="margin:0;padding:0;background:${C.cream}">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${C.cream}">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.cream}" style="background:${C.cream}">
  <tr><td align="center" style="padding:32px 16px">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px">

      <!-- Arch monogram and wordmark, as in the site's header -->
      <tr><td align="center" style="padding:4px 0 28px">
        <a href="${siteUrl}" style="text-decoration:none">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
            <td style="padding-right:14px;vertical-align:middle"><img src="${img("arch-monogram.png")}" width="40" height="45" alt="" style="display:block;width:40px;height:45px;border:0"></td>
            <td style="vertical-align:middle"><img src="${img("logo-nav.png")}" width="210" height="34" alt="ON POINT &middot; Cosmetic Tattoo Studio" style="display:block;width:210px;height:34px;border:0;font-family:${SERIF};font-size:20px;letter-spacing:4px;color:${C.gold}"></td>
          </tr></table>
        </a>
      </td></tr>

      <!-- The enquiry -->
      <tr><td bgcolor="${C.white}" style="background:${C.white};border-radius:24px">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr><td style="padding:40px 40px 0">
            <p style="margin:0 0 12px;font-family:${SANS};font-size:14px;color:${C.gold}">New consultation enquiry</p>
            <h1 style="margin:0;font-family:${SERIF};font-size:40px;line-height:1.15;font-weight:400;color:${C.ink}">${escapeHtml(f.name)}</h1>
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
          <tr><td style="padding:32px 40px 0">
            <img src="${img("logo-full-light.png")}" width="180" height="70" alt="On Point Cosmetic Tattoo Studio" style="display:block;width:180px;height:70px;border:0;font-family:${SERIF};font-size:18px;color:${C.cream}">
            <p style="margin:18px 0 0;padding-bottom:22px;border-bottom:1px solid ${C.footLine};font-family:${SERIF};font-size:21px;line-height:1.3;color:${C.gold}">Brows, eyeliner and lips, mapped in Buderim since 2016.</p>
          </td></tr>
          <tr><td style="padding:18px 40px 28px">
            <p style="margin:0;font-family:${SANS};font-size:13px;line-height:1.6;color:${C.footText}">Sent from the booking form on <a href="${siteUrl}" style="color:${C.cream};text-decoration:underline;text-decoration-color:${C.gold}">${siteHost}</a><br>${when}</p>
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
