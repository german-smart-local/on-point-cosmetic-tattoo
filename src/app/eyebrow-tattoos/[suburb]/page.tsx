import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Faq } from "@/components/Faq";
import { GetInTouch } from "@/components/GetInTouch";
import { WorkStrip } from "@/components/WorkStrip";
import { TechniquePicker } from "@/components/TechniquePicker";
import { Flora } from "@/components/Flora";
import { Tile } from "@/components/Tile";
import { BROW_AREAS, browAreaHref, browAreaPhrase } from "@/lib/browAreas";
import { EXTERNAL, PHONE, PHONE_HREF, ROUTES, SITE_NAME, SITE_URL } from "@/lib/links";

// Only the suburbs in BROW_AREAS exist; any other /eyebrow-tattoos/... is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return BROW_AREAS.map((a) => ({ suburb: a.slug }));
}

const findArea = (slug: string) => BROW_AREAS.find((a) => a.slug === slug);

export async function generateMetadata({ params }: PageProps<"/eyebrow-tattoos/[suburb]">): Promise<Metadata> {
  const area = findArea((await params).suburb);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: browAreaHref(area.slug) },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: browAreaHref(area.slug),
      images: [{ url: "/seo/og-image.jpg", width: 1200, height: 630, alt: SITE_NAME }],
      type: "website",
      siteName: SITE_NAME,
      locale: "en_AU",
    },
  };
}

export default async function BrowAreaPage({ params }: PageProps<"/eyebrow-tattoos/[suburb]">) {
  const area = findArea((await params).suburb);
  if (!area) notFound();
  const others = BROW_AREAS.filter((a) => a.slug !== area.slug);
  const url = `${SITE_URL}${browAreaHref(area.slug)}`;

  // The eyebrow tattoo service for this suburb, provided by the studio in the site-wide schema.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Eyebrow tattoos ${browAreaPhrase(area)}`,
        serviceType: "Eyebrow tattooing",
        description: area.metaDescription,
        url,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "Place", name: `${area.name}, QLD` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Eyebrow tattoos", item: `${SITE_URL}${ROUTES.eyebrows}` },
          { "@type": "ListItem", position: 3, name: area.name, item: url },
        ],
      },
    ],
  };

  return (
    <div className="still-photos">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <PageHero
        title={area.heroTitle}
        lead={area.heroLead}
        image={area.heroImage}
        imageAlt={area.heroAlt}
        texture="grid"
        map={area.heroMap}
      />

      {/* Brows for this suburb, with the technique picker */}
      <section className="section on-white has-flora" aria-labelledby="intro-title">
        <Flora at="br" />
        <div className="wrap grid12 split">
          <Tile className="split__pic" texture="speckle">
            <Image src={area.introImage} alt={area.introAlt} width={1000} height={1400} sizes="(min-width: 900px) 40vw, 90vw" />
          </Tile>
          <div className="split__text">
            <h2 id="intro-title" className="t-head">
              {area.introTitle}
            </h2>
            {area.introParas.map((p) => (
              <p key={p} className="measure-wide">
                {p}
              </p>
            ))}
            <TechniquePicker treatment="brows" />
          </div>
        </div>
      </section>

      {/* The local angle: getting here, healing, timing */}
      <section className="section has-flora" aria-labelledby="local-title">
        <div className="wrap grid12 split split--flip">
          <Tile className="split__pic" texture="stripe" tilt="left">
            <Image src="/images/sub/contact-portrait.jpg" alt="Lisa Eagles in her Buderim studio" width={937} height={960} sizes="(min-width: 900px) 40vw, 90vw" />
          </Tile>
          <div className="split__text">
            <h2 id="local-title" className="t-head">
              {area.localTitle}
            </h2>
            {area.localParas.map((p) => (
              <p key={p} className="measure-wide">
                {p}
              </p>
            ))}
            <ul className="ticks">
              {area.localTicks.map((t) => (
                <li key={t}>{t}</li>
              ))}
              <li>
                <a href={EXTERNAL.maps} target="_blank" rel="noopener noreferrer" className="link">
                  Studio: Buderim, QLD 4556
                </a>
              </li>
            </ul>
            <div className="flex flex-wrap items-center gap-x-9 gap-y-4">
              <Link href={ROUTES.afterCare} className="btn">
                Read the aftercare
              </Link>
              <a href={PHONE_HREF} className="link mt-9">
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <WorkStrip title="Lisa's brow work" images={area.workImages} />

      <Faq title={`Eyebrow tattoos ${browAreaPhrase(area)}: your questions`} items={area.faq} />

      <section className="section on-white" aria-label="Eyebrow tattoos in nearby suburbs">
        <div className="wrap">
          <p className="area-others">
            Also welcoming brow clients{" "}
            {others.map((o, i) => (
              <span key={o.slug}>
                {i > 0 && (i === others.length - 1 ? " and " : ", ")}
                <Link href={browAreaHref(o.slug)} className="link">
                  {browAreaPhrase(o)}
                </Link>
              </span>
            ))}
            . Read more <Link href={ROUTES.eyebrows} className="link">about eyebrow tattoos</Link>, or see{" "}
            <Link href={ROUTES.locations} className="link">all the areas I welcome clients from</Link>.
          </p>
        </div>
      </section>

      <GetInTouch />
    </div>
  );
}
