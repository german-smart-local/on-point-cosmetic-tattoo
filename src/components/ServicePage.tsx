import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Faq, type FaqItem } from "@/components/Faq";
import { GetInTouch } from "@/components/GetInTouch";
import { WorkStrip } from "@/components/WorkStrip";
import { TechniquePicker } from "@/components/TechniquePicker";
import type { TreatmentId } from "@/lib/techniques";
import { PHONE, PHONE_HREF, ROUTES } from "@/lib/links";
import { Flora } from "@/components/Flora";
import { Tile, type Texture } from "@/components/Tile";

// Each treatment page's hero photo sits on its own line pattern, like a mapping sheet.
const HERO_TEXTURE: Record<TreatmentId, Texture> = {
  brows: "grid",
  eyeliner: "hatch",
  lips: "ruled",
};

export interface ServicePageData {
  heroTitle: [string, string];
  heroLead: string;
  heroImage: string;
  heroAlt: string;
  mappingTitle: string;
  mappingParas: string[];
  designImage: string;
  designAlt: string;
  treatment: TreatmentId;
  techniqueTitle: string;
  techniqueParas: string[];
  techniqueImage: string;
  techniqueAlt: string;
  workTitle: string;
  workImages: { src: string; alt: string; caption: string }[];
  faq: FaqItem[];
}

const PROMISES = [
  "Certified artist, with consultation protocols and hygiene standards suited to cosmetic tattoo",
  "Shape, proportion and pigment tone mapped to your features and reviewed before treatment",
  "Professional pigments and devices, with product details explained at your consultation",
];

export function ServicePage(data: ServicePageData) {
  return (
    <>
      <PageHero
        title={data.heroTitle}
        lead={data.heroLead}
        image={data.heroImage}
        imageAlt={data.heroAlt}
        texture={HERO_TEXTURE[data.treatment]}
      />

      {/* Mapping & design */}
      <section className="section on-white has-flora" aria-labelledby="mapping-title">
        <Flora at="br" />
        <div className="wrap grid12 split">
          <Tile className="split__pic" texture="speckle">
            <Image src={data.designImage} alt={data.designAlt} width={1000} height={1400} sizes="(min-width: 900px) 40vw, 90vw" />
          </Tile>
          <div className="split__text">
            <h2 id="mapping-title" className="t-head">
              {data.mappingTitle}
            </h2>
            {data.mappingParas.map((p) => (
              <p key={p} className="measure-wide">
                {p}
              </p>
            ))}
            <TechniquePicker treatment={data.treatment} />
          </div>
        </div>
      </section>

      {/* Technique */}
      <section className="section has-flora" aria-labelledby="technique-title">
        <Flora at="tl" />
        <div className="wrap grid12 split split--flip">
          <Tile className="split__pic" texture="stripe" tilt="left">
            <Image src={data.techniqueImage} alt={data.techniqueAlt} width={1000} height={1400} sizes="(min-width: 900px) 40vw, 90vw" />
          </Tile>
          <div className="split__text">
            <h2 id="technique-title" className="t-head">
              {data.techniqueTitle}
            </h2>
            {data.techniqueParas.map((p) => (
              <p key={p} className="measure-wide">
                {p}
              </p>
            ))}
            <ul className="ticks">
              {PROMISES.map((t) => (
                <li key={t}>{t}</li>
              ))}
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

      <WorkStrip title={data.workTitle} images={data.workImages} />

      <Faq title="Your questions" items={data.faq} />
      <GetInTouch />
    </>
  );
}
