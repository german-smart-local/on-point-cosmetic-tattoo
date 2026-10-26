import Image from "next/image";
import Link from "next/link";
import {
  ANCHORS,
  EMAIL,
  EMAIL_HREF,
  EXTERNAL,
  GALLERY_ENABLED,
  HOURS,
  PHONE,
  PHONE_HREF,
  ROUTES,
  SOCIAL_LINKS,
} from "@/lib/links";

const COLUMNS = [
  {
    title: "Treatments",
    links: [
      { label: "Eyebrow tattoos", href: ROUTES.eyebrows },
      { label: "Eyeliner tattoos", href: ROUTES.eyeliners },
      { label: "Lip tattoos", href: ROUTES.lips },
      { label: "Aftercare", href: ROUTES.afterCare },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "About Lisa", href: ANCHORS.about },
      ...(GALLERY_ENABLED ? [{ label: "Gallery", href: ROUTES.gallery }] : []),
      { label: "Reviews", href: ANCHORS.testimonials },
      { label: "Areas we serve", href: ROUTES.locations },
      { label: "Contact", href: ROUTES.contact },
    ],
  },
];

export function Footer() {
  return (
    <footer className="foot">
      <Image src="/images/footer-bg.png" alt="" width={972} height={972} className="foot__flowers" aria-hidden />
      <div className="wrap relative">
        <div className="foot__top">
          <Image src="/images/logo-full-light.png" alt="On Point Cosmetic Tattoo Studio" width={1720} height={667} className="foot__logo" />
          <p>Brows, eyeliner and lips, mapped in Buderim since 2016.</p>
        </div>

        <div className="foot__cols">
          {COLUMNS.map((col) => (
            <div key={col.title} className="foot__col">
              <h2>{col.title}</h2>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="foot__col">
            <h2>Follow</h2>
            <ul>
              {SOCIAL_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="foot__col">
            <h2>Hours</h2>
            <ul>
              {HOURS.map((h) => (
                <li key={h.days}>
                  {h.days}, {h.time.toLowerCase()}
                </li>
              ))}
            </ul>
          </div>
          <div className="foot__col">
            <h2>Contact</h2>
            <ul>
              <li>
                <a href={PHONE_HREF}>{PHONE}</a>
              </li>
              <li>
                <a href={EMAIL_HREF} className="break-all">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={EXTERNAL.maps} target="_blank" rel="noopener noreferrer">
                  Buderim, QLD 4556
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot__last">
          <p>
            © {new Date().getFullYear()} On Point Cosmetic Tattoo Studio. Website by{" "}
            <a href={EXTERNAL.smartLocal} target="_blank" rel="noopener" className="foot__credit">
              Smart Local
            </a>
          </p>
          <p>Certified cosmetic tattoo artist. ABN 79 955 974 433</p>
        </div>
      </div>
    </footer>
  );
}
