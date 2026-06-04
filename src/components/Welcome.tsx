import Image from "next/image";
import Link from "next/link";
import { CertifiedIcon, CustomisedIcon, PremiumIcon } from "@/components/icons";

export function Welcome() {
  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-14 items-center">
        <div className="lg:w-[45%] w-full">
          <Image
            src="/images/welcome-face.png"
            alt="Welcome"
            width={520}
            height={680}
            className="w-full max-w-[520px] mx-auto h-auto object-cover rounded-sm"
          />
        </div>

        <div className="lg:w-[55%] w-full">
          <h2 className="font-heading font-light text-[#c09569] text-[32px] lg:text-[40px] leading-tight mb-5">
            Welcome to My Cosmetic Tattoo Studio
          </h2>

          <p className="text-[#303030] text-[16px] leading-[1.7] mb-4">
            On Point Cosmetic Tattoo Studio provides cosmetic tattooing from my
            Buderim studio, welcoming clients from across the Sunshine Coast. I
            focus exclusively on cosmetic tattoo procedures for eyebrows,
            eyeliner and lips.
          </p>

          <p className="text-[#303030] text-[16px] leading-[1.7] mb-6">
            Cosmetic tattooing requires planning, pigment selection and
            structured application. During your consultation, I will discuss skin
            type, medical considerations, preparation requirements and healing
            stages.
          </p>

          <div className="flex gap-4 items-start mb-5">
            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#f7f3ea] flex items-center justify-center text-[#c09569] text-[22px]">
              <CertifiedIcon />
            </div>
            <div>
              <h3 className="font-heading text-[15px] font-medium text-[#303030] uppercase tracking-wide mb-1">
                Certified Artist
              </h3>
              <p className="text-[14px] text-[#555] leading-[1.6]">
                As a cosmetic tattoo studio with a certified artist, I follow
                consultation protocols and hygiene standards suited to cosmetic
                tattoo procedures.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start mb-5">
            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#f7f3ea] flex items-center justify-center text-[#c09569] text-[22px]">
              <CustomisedIcon />
            </div>
            <div>
              <h3 className="font-heading text-[15px] font-medium text-[#303030] uppercase tracking-wide mb-1">
                Customised Designs
              </h3>
              <p className="text-[14px] text-[#555] leading-[1.6]">
                Lisa maps each cosmetic tattoo design to your natural features
                and selected technique. I assess shape, proportion and pigment
                choice.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start mb-5">
            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#f7f3ea] flex items-center justify-center text-[#c09569] text-[22px]">
              <PremiumIcon />
            </div>
            <div>
              <h3 className="font-heading text-[15px] font-medium text-[#303030] uppercase tracking-wide mb-1">
                Premium Equipment
              </h3>
              <p className="text-[14px] text-[#555] leading-[1.6]">
                I use premium cosmetic tattoo pigments and devices selected for
                cosmetic procedures and explain product choice during your
                consultation.
              </p>
            </div>
          </div>

          <p className="text-[14px] italic text-[#777] mt-4 mb-5">
            Call 0414 502 807 to arrange your consultation.
          </p>

          <Link
            href="/#contact"
            className="inline-block bg-[#f7f3ea] border border-[#303030] rounded-[15px] px-10 py-3.5 font-josefin text-[18px] text-[#303030] hover:bg-[#c09569] hover:text-white hover:border-[#c09569] transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
