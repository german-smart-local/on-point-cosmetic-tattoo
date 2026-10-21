import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { GetInTouch } from "@/components/GetInTouch";
import { ROUTES } from "@/lib/links";
import { Flora } from "@/components/Flora";

export const metadata: Metadata = {
  title: "Areas Near Us | On Point Cosmetic Tattoo Studio",
  description:
    "On Point Cosmetic Tattoo Studio operates from Buderim and welcomes clients from Buderim, Noosa, Caloundra and surrounding Sunshine Coast areas.",
};

const AREAS = [
  {
    name: "Buderim",
    image: "/images/sub/loc-noosa.jpg",
    alt: "Rainforest waterfall in the Buderim hinterland",
    text: "The studio is here. Buderim clients come in for eyebrow, eyeliner and lip tattoos, from first consultation to follow-up.",
  },
  {
    name: "Noosa",
    image: "/images/sub/loc-buderim.jpg",
    alt: "Clear water and rocks along the coast near Noosa",
    text: "Noosa clients make the drive down the coast for eyebrow, eyeliner and lip tattoos, with the consultation and design done first.",
  },
  {
    name: "Caloundra",
    image: "/images/sub/loc-caloundra.jpg",
    alt: "Aerial view of Caloundra and the Pumicestone Passage",
    text: "Caloundra locals travel up to Buderim for eyebrow, eyeliner and lip tattoos, and for the follow-up six to eight weeks later.",
  },
];

export default function LocationsPage() {
  return (
    <>
      <PageHero
        title={["Across the", "Sunshine Coast"]}
        lead="On Point works from Buderim and welcomes clients from Noosa, Caloundra and everywhere in between. Every appointment begins with a consultation and a mapped design."
        image="/images/sub/hero-locations.jpg"
        imageAlt="A smiling woman with her hands to her face"
      />

      <section className="section on-white has-flora" aria-labelledby="areas-title">
        <Flora at="tr" />
        <div className="wrap grid12">
          <h2 id="areas-title" className="t-head col-span-12 min-[900px]:col-span-6">
            Where clients come from
          </h2>
          <p className="t-lead measure col-span-12 mt-5 min-[900px]:col-start-8 min-[900px]:col-span-5 min-[900px]:mt-0">
            Clients often travel for their brows, liner and lips. The studio is a short drive from
            most of the coast.
          </p>
        </div>
        <div className="mt-12">
          {AREAS.map((a) => (
            <article key={a.name} className="wrap" aria-labelledby={`area-${a.name}`}>
              <div className="grid12 area">
                <div className="area__pic">
                  <Image src={a.image} alt={a.alt} width={1600} height={1000} sizes="(min-width: 900px) 42vw, 100vw" />
                </div>
                <div className="area__text">
                  <h3 id={`area-${a.name}`} className="t-head">
                    {a.name}
                  </h3>
                  <p className="measure">
                    {a.text}
                  </p>
                  <ul className="ticks mt-6">
                    <li>
                      <Link href={ROUTES.eyebrows} className="link">
                        Eyebrow tattoos
                      </Link>
                    </li>
                    <li>
                      <Link href={ROUTES.eyeliners} className="link">
                        Eyeliner tattoos
                      </Link>
                    </li>
                    <li>
                      <Link href={ROUTES.lips} className="link">
                        Lip tattoos
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <GetInTouch />
    </>
  );
}
