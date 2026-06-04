import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { PHONE, PHONE_HREF, ANCHORS } from "@/lib/links";

export const metadata: Metadata = {
  title: "After-Care Guide | On Point Cosmetic Tattoo Studio",
  description:
    "Pre and post-procedure care guidance for cosmetic tattoo treatments at On Point Cosmetic Tattoo Studio in Buderim, Sunshine Coast.",
};

const cards = [
  {
    title: "Pre-Procedure",
    items: [
      "Avoid alcohol, coffee and non-prescribed blood thinners 48 hours before.",
      "No tanning or excessive sun exposure one week prior.",
      "Do not use retinol on the area.",
      "Remove lash extensions before eyeliner procedures.",
      "Seek medical advice if prone to cold sores before lip procedures.",
    ],
  },
  {
    title: "Post-Procedure",
    items: [
      "Mild redness, swelling, tenderness or flaking may occur.",
      "Colour appears darker immediately after treatment.",
      "A follow-up visit is usually scheduled 6–8 weeks later.",
    ],
  },
  {
    title: "After Care",
    items: [
      "Apply recommended cream as directed.",
      "Avoid exercise, swimming, spas and sun exposure during early healing.",
      "Do not pick or scratch the area.",
      "Avoid picking, tweezing, tinting or waxing the area within 48 hours.",
    ],
  },
];

const gallery = [
  "/images/sub/ac-work-1.jpg",
  "/images/sub/ac-work-2.jpg",
  "/images/sub/ac-work-3.jpg",
];

export default function AfterCarePage() {
  return (
    <>
      <PageHero title="Your After-Care Guide" image="/images/sub/hero-aftercare.jpg" />

      {/* Intro 2-col */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:flex-row">
          <div className="w-full lg:w-[45%]">
            <Image
              src="/images/sub/ac-section.png"
              alt="Cosmetic tattoo after-care"
              width={560}
              height={620}
              className="h-auto w-full rounded-sm object-cover"
            />
          </div>
          <div className="w-full lg:w-[55%]">
            <h2 className="mb-5 font-heading text-[32px] font-light leading-tight text-gold lg:text-[40px]">
              Pre &amp; Post-Procedure Care
            </h2>
            <p className="mb-6 text-[16px] leading-[1.7] text-ink">
              On Point Cosmetic Tattoo Studio provides aftercare guidance to help
              support the healing process and protect your cosmetic tattoo
              results. Please review the steps below before and after your
              appointment.
            </p>
            <p className="mb-6 text-[14px] italic text-[#777]">
              If you&apos;ve got any questions, call me on {PHONE}.
            </p>
            <a
              href={ANCHORS.contact}
              className="inline-block rounded-[15px] border border-ink bg-cream px-9 py-3.5 font-josefin text-[18px] text-ink transition-colors hover:border-gold hover:bg-gold hover:text-white"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Three care cards */}
      <section className="bg-cream px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-t-[140px] bg-white px-7 pb-9 pt-12 shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
            >
              <h3 className="mb-5 text-center font-heading text-[22px] font-light text-gold">
                {card.title}
              </h3>
              <ul className="space-y-3">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-[14px] leading-[1.6] text-[#555]"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-3">
          {gallery.map((src) => (
            <div key={src} className="relative aspect-square overflow-hidden rounded-sm">
              <Image
                src={src}
                alt="Cosmetic tattoo result"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="bg-white pb-6 text-center">
        <a href={PHONE_HREF} className="font-josefin text-[18px] text-gold hover:underline">
          Call {PHONE}
        </a>
      </div>
    </>
  );
}
