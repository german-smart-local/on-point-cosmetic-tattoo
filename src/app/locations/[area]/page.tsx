import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { GetInTouch } from "@/components/GetInTouch";
import { Flora } from "@/components/Flora";
import { Tile } from "@/components/Tile";
import { AREAS, areaHref } from "@/lib/areas";
import { EMAIL, EMAIL_HREF, EXTERNAL, PHONE, PHONE_HREF, ROUTES } from "@/lib/links";

// Only the suburbs in AREAS exist; any other /locations/... is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return AREAS.map((a) => ({ area: a.slug }));
}

const findArea = (slug: string) => AREAS.find((a) => a.slug === slug);

export async function generateMetadata({ params }: PageProps<"/locations/[area]">): Promise<Metadata> {
  const area = findArea((await params).area);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: areaHref(area.slug) },
  };
}

export default async function AreaPage({ params }: PageProps<"/locations/[area]">) {
  const area = findArea((await params).area);
  if (!area) notFound();
  const others = AREAS.filter((a) => a.slug !== area.slug);

  return (
    <>
      <PageHero
        title={area.heroTitle}
        lead={area.heroLead}
        image={area.heroImage}
        imageAlt={area.heroAlt}
        texture="petal"
      />

      {/* The studio */}
      <section className="section on-white has-flora" aria-labelledby="studio-title">
        <Flora at="br" />
        <div className="wrap grid12 split">
          <Tile className="split__pic" texture="speckle">
            <Image src="/images/sub/contact-portrait.jpg" alt="Lisa Eagles in her studio" width={937} height={960} sizes="(min-width: 900px) 40vw, 90vw" />
          </Tile>
          <div className="split__text">
            <h2 id="studio-title" className="t-head">
              {area.introTitle}
            </h2>
            {area.introParas.map((p) => (
              <p key={p} className="measure-wide">
                {p}
              </p>
            ))}
            <p className="measure-wide">
              To book your consultation, call me on{" "}
              <a href={PHONE_HREF} className="link">
                {PHONE}
              </a>
              .
            </p>
            <ul className="ticks">
              <li>
                <a href={EMAIL_HREF} className="link break-all">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={EXTERNAL.maps} target="_blank" rel="noopener noreferrer" className="link">
                  Studio: Buderim, QLD 4556
                </a>
              </li>
            </ul>
            <a href="#book" className="btn">
              Enquire now
            </a>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="section has-flora" aria-labelledby="treatments-title">
        <div className="wrap">
          <h2 id="treatments-title" className="t-head">
            Treatments for {area.name} clients
          </h2>
        </div>
        <div className="mt-12">
          {area.treatments.map((t, i) => (
            <article key={t.title} className="wrap" aria-labelledby={`treatment-${i}`}>
              <div className={`grid12 area area--plain${i % 2 ? " area--flip" : ""}`}>
                <div className="area__pic">
                  <Image src={t.image} alt={t.imageAlt} width={1440} height={900} sizes="(min-width: 900px) 42vw, 100vw" />
                </div>
                <div className="area__text">
                  <h3 id={`treatment-${i}`} className="t-h3">
                    {t.title}
                  </h3>
                  <p className="measure">{t.text}</p>
                  <p>
                    <Link href={t.href} className="link">
                      {t.linkLabel}
                    </Link>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="wrap">
          <p className="area-others">
            Also welcoming clients from{" "}
            {others.map((o, i) => (
              <span key={o.slug}>
                {i > 0 && " and "}
                <Link href={areaHref(o.slug)} className="link">
                  {o.name}
                </Link>
              </span>
            ))}
            , and <Link href={ROUTES.locations} className="link">across the Sunshine Coast</Link>.
          </p>
        </div>
      </section>

      <GetInTouch />
    </>
  );
}
