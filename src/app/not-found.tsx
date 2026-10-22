import type { Metadata } from "next";
import Link from "next/link";
import { ROUTES } from "@/lib/links";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Page Not Found | On Point Cosmetic Tattoo Studio",
  robots: { index: false },
};

const PAGES = [
  { label: "Eyebrow tattoos", href: ROUTES.eyebrows },
  { label: "Eyeliner tattoos", href: ROUTES.eyeliners },
  { label: "Lip tattoos", href: ROUTES.lips },
  { label: "Aftercare guide", href: ROUTES.afterCare },
  { label: "Gallery", href: ROUTES.gallery },
  { label: "Homepage", href: ROUTES.home },
];

export default function NotFound() {
  return (
    <>
      <PageHero
        title={["This page", "has moved"]}
        lead="The page you were looking for isn't here any more. Everything about brows, eyeliner and lips is a click away."
        image="/images/gallery/intro.jpg"
        imageAlt="Client with softly shaded, healed brows"
        texture="grid"
      />
      <section className="section on-white" aria-labelledby="pages-title">
        <div className="wrap">
          <h2 id="pages-title" className="t-head">
            Where to next
          </h2>
          <ul className="ticks t-lead mt-8">
            {PAGES.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="link">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
