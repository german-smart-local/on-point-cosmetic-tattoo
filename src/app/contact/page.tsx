import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { GetInTouch } from "@/components/GetInTouch";
import {
  EMAIL,
  EMAIL_HREF,
  EXTERNAL,
  PHONE,
  PHONE_HREF,
} from "@/lib/links";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Me Today | On Point Cosmetic Tattoo Studio",
  description:
    "Contact On Point Cosmetic Tattoo Studio in Buderim to arrange your cosmetic tattoo consultation. Call 0414 502 807 or send a message.",
};

const info = [
  { Icon: PhoneIcon, label: PHONE, href: PHONE_HREF, external: false },
  { Icon: MailIcon, label: EMAIL, href: EMAIL_HREF, external: false },
  { Icon: MapPinIcon, label: "Buderim, QLD 4556", href: EXTERNAL.maps, external: true },
];

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Me Today" image="/images/sub/hero-contact.jpg" />

      {/* Contact info strip */}
      <section className="border-b border-black/5 bg-white px-6 py-10">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-8 sm:grid-cols-3">
          {info.map(({ Icon, label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex flex-col items-center gap-2 text-center transition-colors hover:text-[#c09569]"
            >
              <Icon className="text-[24px] text-[#c09569]" />
              <span className="break-all text-[15px] text-[#444]">{label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Form */}
      <GetInTouch />

      {/* Map */}
      <section className="bg-white px-6 pb-20">
        <div className="mx-auto max-w-[1120px] overflow-hidden rounded-sm">
          <iframe
            title="On Point Cosmetic Tattoo Studio location"
            src="https://www.google.com/maps?q=Buderim%20QLD%204556&output=embed"
            className="h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Here To Help */}
      <section className="bg-white px-6 pb-20">
        <div className="mx-auto flex max-w-[1200px] flex-col items-stretch gap-10 lg:flex-row">
          <div className="w-full lg:w-[45%]">
            <Image
              src="/images/sub/contact-portrait.jpg"
              alt="Lisa Eagles"
              width={560}
              height={520}
              className="h-full w-full rounded-sm object-cover"
            />
          </div>
          <div className="flex w-full items-center lg:w-[55%]">
            <div className="rounded-md bg-[#f7f3ea] p-8 lg:p-10">
              <h2 className="mb-5 font-heading text-[32px] font-light text-[#c09569] lg:text-[40px]">
                Here To Help
              </h2>
              <p className="mb-4 text-[15px] leading-[1.7] text-[#444]">
                On Point Cosmetic Tattoo Studio welcomes enquiries from clients
                considering a consultation or seeking further information about
                cosmetic tattoo procedures. You can contact the studio directly by
                phone to discuss availability, preparation requirements or general
                questions before booking. If you reach voicemail, please leave your
                name and contact number, and I&apos;ll get back to you promptly.
              </p>
              <p className="text-[15px] leading-[1.7] text-[#444]">
                To speak with me and arrange your consultation, call{" "}
                <a href={PHONE_HREF} className="font-semibold text-[#c09569] hover:underline">
                  {PHONE}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
