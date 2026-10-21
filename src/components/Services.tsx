import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/lib/links";
import { TechniquePicker } from "@/components/TechniquePicker";
import { Flora } from "@/components/Flora";
import { Tile } from "@/components/Tile";

const TREATMENTS = [
  {
    id: "brows" as const,
    name: "Eyebrows",
    kind: "Hair strokes, powder or a mix of both",
    image: "/images/sub/eb-work-2.jpg",
    alt: "Hair-stroke eyebrow tattoo, close up",
    text: "Small changes in brow structure alter the balance of the whole face. Lisa looks at your natural growth, skin type, symmetry and tone, maps a shape, then recommends the technique that suits it.",
    href: ROUTES.eyebrows,
    cta: "About eyebrow tattoos",
  },
  {
    id: "eyeliner" as const,
    name: "Eyeliner",
    kind: "From a fine lash line to a defined wing",
    image: "/images/sub/el-work-3.jpg",
    alt: "Eyeliner tattoo set close to the lash line",
    text: "The lash line is one of the most precise areas of the face. Lisa reviews eye shape, lid space, skin and how you wear make-up before designing the line.",
    href: ROUTES.eyeliners,
    cta: "About eyeliner tattoos",
  },
  {
    id: "lips" as const,
    name: "Lips",
    kind: "Defined edge, soft blend or full colour",
    image: "/images/sub/lip-work-1-h.jpg",
    alt: "Full lip tattoo in a soft rose tone",
    text: "Lip borders and natural colour change over time, so the outline is mapped and the shade is matched to your own tone before any colour goes in.",
    href: ROUTES.lips,
    cta: "About lip tattoos",
  },
];

export function Services() {
  return (
    <section id="treatments" aria-labelledby="treatments-title" className="section on-white has-flora">
      <Flora at="bl" />
      <div className="wrap">
        <div className="grid12 index__head">
          <h2 id="treatments-title" className="t-head">
            Three treatments, one artist
          </h2>
          <p className="t-lead">
            Lisa works only on brows, eyeliner and lips, and every appointment starts with a
            consultation and a mapped design.
          </p>
          <Image src="/images/arch-monogram.png" alt="" width={324} height={364} className="index__mark" aria-hidden />
        </div>

        {TREATMENTS.map((t) => (
          <article key={t.name} className="grid12 row" aria-labelledby={`t-${t.name}`}>
            <div className="row__name">
              <h3 id={`t-${t.name}`}>{t.name}</h3>
              <p>{t.kind}</p>
            </div>
            <div className="row__text">
              <p>{t.text}</p>
              <TechniquePicker treatment={t.id} />
              <Link href={t.href} className="btn">
                {t.cta}
              </Link>
            </div>
            <Tile className="row__pic" texture="none">
              <Image src={t.image} alt={t.alt} width={900} height={900} sizes="(min-width: 900px) 22vw, 90vw" />
            </Tile>
          </article>
        ))}
      </div>
    </section>
  );
}
