import Image from "next/image";
import Link from "next/link";
import { ANCHORS, PHONE, PHONE_HREF, ROUTES } from "@/lib/links";

const cards = [
  {
    title: "Eyebrows",
    image: "/images/service-eyebrows.png",
    href: ROUTES.eyebrows,
    desc: "My eyebrow tattoo services include feather touch brows, microblading, powder brows, combination brows and hair strokes.",
  },
  {
    title: "Eye Liners",
    image: "/images/service-eyeliners.png",
    href: ROUTES.eyeliners,
    desc: "At my studio, I offer cosmetic eyeliner tattoos, including eyeliner enhancement and designer eyeliner.",
  },
  {
    title: "Lips",
    image: "/images/service-lips.png",
    href: ROUTES.lips,
    desc: "My lip tattoo options include lip liner tattoo, lip blend tattoo and full lip tattoo. During consultation, I review lip tone, border definition and colour selection.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-20 px-6 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative">
        <div className="absolute right-[-60px] top-[120px] w-[340px] h-[340px] rounded-full border border-gold/40 pointer-events-none hidden lg:block" />

        <div className="flex justify-between items-center mb-10 flex-col gap-4 items-start sm:flex-row sm:gap-0 sm:items-center">
          <h2 className="font-heading font-light text-gold text-[40px]">
            Services
          </h2>
          <div className="flex gap-3">
            <Link
              href={ANCHORS.contact}
              className="bg-cream border border-ink rounded-[15px] px-7 py-3 font-josefin text-[18px] text-ink hover:bg-gold hover:text-white hover:border-gold transition-colors"
            >
              Book Now
            </Link>
            <a
              href={PHONE_HREF}
              className="bg-cream border border-ink rounded-[10px] px-7 py-3 font-josefin text-[18px] text-ink hover:bg-gold hover:text-white hover:border-gold transition-colors"
            >
              {PHONE}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative aspect-square rounded-md overflow-hidden cursor-pointer block"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 transition-colors duration-400"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(176,161,141,0.55), rgba(48,48,48,0.65))",
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-400" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 text-white z-10">
                <h3 className="font-heading font-thin text-[25px] mb-2.5 text-white">
                  {card.title}
                </h3>
                <p className="text-[14px] leading-[1.5] text-white/95">
                  {card.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
