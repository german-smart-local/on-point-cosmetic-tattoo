import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { GetInTouch } from "@/components/GetInTouch";
import { Flora } from "@/components/Flora";
import { GalleryGrid, type GalleryPhoto } from "@/components/GalleryGrid";
import { ROUTES } from "@/lib/links";

export const metadata: Metadata = {
  title: "Gallery | On Point Cosmetic Tattoo Studio",
  description:
    "View cosmetic tattoo results from On Point Cosmetic Tattoo Studio on the Sunshine Coast. Give us a ring on 0414 502 807 to arrange a consultation.",
  alternates: { canonical: "/gallery" },
};

const photo = (name: string, width: number, height: number, alt: string): GalleryPhoto => ({
  src: `/images/gallery/${name}.jpg`,
  width,
  height,
  alt,
});

// Real client work from the studio, as published on the previous site's gallery.
const SECTIONS: { id: string; title: string; href: string; linkLabel: string; photos: GalleryPhoto[] }[] = [
  {
    id: "brows",
    title: "Eyebrows",
    href: ROUTES.eyebrows,
    linkLabel: "About eyebrow tattoos",
    photos: [
      photo("brows-1", 1030, 1080, "Before and after: a sparse natural brow, then a fuller hair-stroke brow"),
      photo("brows-2", 1080, 1080, "Freshly tattooed hair-stroke brows on a client with green eyes"),
      photo("brows-3", 1044, 980, "Before and after: a faint natural brow beside the finished hair-stroke brow"),
      photo("brows-4", 1080, 1080, "Client facing the camera with soft, natural-looking tattooed brows"),
      photo("brows-5", 1045, 1033, "Before and after: a thin natural brow above, the defined shaded brow below"),
      photo("brows-6", 1080, 646, "Shaded powder brow framing a blue-green eye"),
      photo("brows-7", 1080, 1080, "Before and after: both brows bare, then with fine hair strokes"),
      photo("brows-8", 885, 885, "Dense hair-stroke brow, close up"),
      photo("brows-9", 1048, 987, "Hair strokes close up, beside the finished brow on the client's face"),
    ],
  },
  {
    id: "eyeliner",
    title: "Eyeliner",
    href: ROUTES.eyeliners,
    linkLabel: "About eyeliner tattoos",
    photos: [
      photo("liner-1", 1079, 1440, "Winged designer eyeliner on a hazel eye"),
      photo("liner-2", 1019, 611, "Fine eyeliner along the upper and lower lash lines"),
      photo("liner-3", 1255, 1440, "Designer eyeliner with a long, sharp wing on a brown eye"),
      photo("liner-4", 1440, 1440, "Designer eyeliner with a soft smoked wing"),
      photo("liner-5", 1186, 1440, "Tapered eyeliner wing on a blue eye"),
      photo("liner-6", 1080, 1080, "Bold winged eyeliner, shown from two angles"),
      photo("liner-7", 1080, 1080, "Before and after: lash line enhancement on a mature eye"),
      photo("liner-8", 1080, 1080, "Lash line enhancement on both eyes, close up"),
      photo("liner-9", 871, 1050, "Thick designer eyeliner wing, seen from above"),
    ],
  },
  {
    id: "lips",
    title: "Lips",
    href: ROUTES.lips,
    linkLabel: "About lip tattoos",
    photos: [
      photo("lips-1", 986, 1173, "Before and after: pale lips, then full lip colour in a soft rose"),
      photo("lips-2", 406, 513, "Client with a warm, fresh lip blush"),
      photo("lips-3", 666, 379, "Full lip colour in coral, close up"),
      photo("lips-4", 403, 843, "Lip blush in terracotta, seen from the side"),
      photo("lips-5", 691, 898, "Lip colour in a muted rose, seen from the side"),
      photo("lips-6", 843, 843, "Healed lip blush in a natural nude pink"),
      photo("lips-7", 577, 649, "Glossy coral lip colour, fresh from treatment"),
      photo("lips-8", 731, 1440, "Defined lip border with a soft blended pink"),
      photo("lips-9", 1440, 1440, "Before and after: pale lips, then full lip colour in red"),
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title={["See my", "work"]}
        lead="Cosmetic tattoo work completed in my Buderim studio: real client results, including fresh and healed procedures. I update these images regularly to reflect current work and technique."
        image="/images/gallery/intro.jpg"
        imageAlt="Client with softly shaded, healed brows"
        texture="grid"
      />

      {SECTIONS.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`section has-flora${i % 2 === 0 ? " on-white" : ""}`}
          aria-labelledby={`${s.id}-title`}
        >
          {i % 2 === 0 && <Flora at={i === 0 ? "br" : "bl"} />}
          <div className="wrap">
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
              <h2 id={`${s.id}-title`} className="t-head">
                {s.title}
              </h2>
              <Link href={s.href} className="link">
                {s.linkLabel}
              </Link>
            </div>
            <GalleryGrid label={`${s.title} gallery`} photos={s.photos} />
          </div>
        </section>
      ))}

      <GetInTouch />
    </>
  );
}
