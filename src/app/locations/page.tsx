import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { PHONE, PHONE_HREF, ANCHORS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Areas Near Us | On Point Cosmetic Tattoo Studio",
  description:
    "On Point Cosmetic Tattoo Studio operates from Buderim and welcomes clients from Buderim, Noosa, Caloundra and surrounding Sunshine Coast areas.",
};

const areas = [
  {
    name: "Buderim",
    image: "/images/sub/loc-buderim.jpg",
    text: "From my studio in Buderim, we provide eyebrow tattoos, eyeliner tattoos and lip tattoos.",
  },
  {
    name: "Noosa",
    image: "/images/sub/loc-noosa.jpg",
    text: "My Noosa clients visit me for eyebrow tattoos, eyeliner tattoos and lip tattoos.",
  },
  {
    name: "Caloundra",
    image: "/images/sub/loc-caloundra.jpg",
    text: "Caloundra locals travel to my studio for eyebrow tattoos, eyeliner tattoos and lip tattoos.",
  },
];

export default function LocationsPage() {
  return (
    <>
      <PageHero title="Areas Near Us" image="/images/sub/hero-locations.jpg" />

      {/* Area cards */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-3">
          {areas.map((area) => (
            <div key={area.name} className="overflow-hidden rounded-md bg-[#f7f3ea]">
              <div className="relative h-[200px] w-full">
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-heading text-[22px] font-light text-[#c09569]">
                  {area.name}
                </h3>
                <p className="text-[14px] leading-[1.6] text-[#555]">{area.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cosmetic Tattoo Services */}
      <section className="bg-[#f7f3ea] px-6 py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:flex-row">
          <div className="w-full lg:w-[45%]">
            <Image
              src="/images/sub/eb-technique.jpg"
              alt="Cosmetic tattoo services"
              width={560}
              height={560}
              className="h-auto w-full rounded-sm object-cover"
            />
          </div>
          <div className="w-full lg:w-[55%]">
            <h2 className="mb-5 font-heading text-[32px] font-light leading-tight text-[#c09569] lg:text-[40px]">
              Cosmetic Tattoo Services
            </h2>
            <p className="mb-6 text-[16px] leading-[1.7] text-[#303030]">
              Clients across the Sunshine Coast often travel for my cosmetic tattoo
              procedures. On Point Cosmetic Tattoo Studio operates from Buderim and
              welcomes clients from Buderim, Noosa, Caloundra and surrounding areas
              who are seeking eyebrow, eyeliner and lip tattoo services. Each
              appointment begins with consultation and mapped design before treatment.
            </p>
            <p className="mb-6 text-[14px] italic text-[#777]">
              To arrange your visit, call {PHONE}.
            </p>
            <a
              href={ANCHORS.contact}
              className="inline-block rounded-[15px] border border-[#303030] bg-white px-9 py-3.5 font-josefin text-[18px] text-[#303030] transition-colors hover:border-[#c09569] hover:bg-[#c09569] hover:text-white"
            >
              Book Now
            </a>
            <a href={PHONE_HREF} className="sr-only">
              {PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
