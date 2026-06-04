import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Faq, type FaqItem } from "@/components/Faq";
import { PHONE, PHONE_HREF, ANCHORS } from "@/lib/links";
import { CertifiedIcon, CustomisedIcon, PremiumIcon } from "@/components/icons";

export interface ServicePageData {
  heroTitle: string;
  heroImage: string;
  mappingTitle: string;
  mappingParas: string[];
  designImage: string;
  techniqueTitle: string;
  techniqueParas: string[];
  techniqueImage: string;
  workTitle: string;
  workImages: { src: string; alt: string }[];
  faq: FaqItem[];
}

const FEATURES = [
  {
    Icon: CertifiedIcon,
    title: "Certified Artist",
    desc: "As a cosmetic tattoo studio and certified artist, I follow structured consultation protocols and hygiene standards appropriate for cosmetic tattoo procedures.",
  },
  {
    Icon: CustomisedIcon,
    title: "Customised Designs",
    desc: "I map each cosmetic tattoo design to your natural features and chosen technique. Shape, proportion and pigment tone are reviewed before treatment.",
  },
  {
    Icon: PremiumIcon,
    title: "Premium Equipment",
    desc: "I use professional cosmetic tattoo pigments and devices selected for procedural application and outline product details during consultation.",
  },
];

const ctaBtn =
  "inline-block bg-cream border border-ink rounded-[15px] px-9 py-3.5 font-josefin text-[18px] text-ink hover:bg-gold hover:text-white hover:border-gold transition-colors";

export function ServicePage(data: ServicePageData) {
  return (
    <>
      <PageHero title={data.heroTitle} image={data.heroImage} />

      {/* Mapping & Design */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 lg:flex-row">
          <div className="w-full lg:w-[45%]">
            <Image
              src={data.designImage}
              alt={data.mappingTitle}
              width={560}
              height={620}
              className="h-auto w-full rounded-sm object-cover"
            />
          </div>
          <div className="w-full lg:w-[55%]">
            <h2 className="mb-5 font-heading text-[32px] font-light leading-tight text-gold lg:text-[40px]">
              {data.mappingTitle}
            </h2>
            {data.mappingParas.map((p, i) => (
              <p key={i} className="mb-4 text-[16px] leading-[1.7] text-ink">
                {p}
              </p>
            ))}
            <div className="mt-6 space-y-5">
              {FEATURES.map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-cream text-[22px] text-gold">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="mb-1 font-heading text-[15px] font-medium uppercase tracking-wide text-ink">
                      {title}
                    </h3>
                    <p className="text-[14px] leading-[1.6] text-[#555]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 mb-5 text-[14px] italic text-[#777]">
              To arrange a consultation, call me today on {PHONE}.
            </p>
            <a href={ANCHORS.contact} className={ctaBtn}>
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Technique */}
      <section className="bg-cream px-6 py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col-reverse items-center gap-12 lg:flex-row">
          <div className="w-full lg:w-[55%]">
            <h2 className="mb-5 font-heading text-[30px] font-light leading-tight text-gold lg:text-[36px]">
              {data.techniqueTitle}
            </h2>
            {data.techniqueParas.map((p, i) => (
              <p key={i} className="mb-4 text-[16px] leading-[1.7] text-ink">
                {p}
              </p>
            ))}
            <a href={PHONE_HREF} className={`${ctaBtn} mt-2`}>
              Call {PHONE}
            </a>
          </div>
          <div className="w-full lg:w-[45%]">
            <Image
              src={data.techniqueImage}
              alt={data.techniqueTitle}
              width={560}
              height={520}
              className="h-auto w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </section>

      {/* My Work gallery */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-12 text-center font-heading text-[36px] font-light text-gold">
            {data.workTitle}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {data.workImages.map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden rounded-sm">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-[900px]">
          <h2 className="mb-10 text-center font-heading text-[36px] font-light text-gold">
            Frequently Asked Questions
          </h2>
          <Faq items={data.faq} />
        </div>
      </section>
    </>
  );
}
