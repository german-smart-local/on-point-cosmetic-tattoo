import Image from "next/image";
import Link from "next/link";
import {
  ANCHORS,
  EMAIL,
  EMAIL_HREF,
  EXTERNAL,
  PHONE,
  PHONE_HREF,
  ROUTES,
} from "@/lib/links";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  AbnIcon,
  FacebookIcon,
  InstagramIcon,
  LocalSearchIcon,
  GoogleBusinessIcon,
  VerifiedIcon,
} from "@/components/icons";

const siteLinks = [
  { label: "Home", href: ROUTES.home },
  { label: "About Us", href: ANCHORS.about },
  { label: "Testimonials", href: ANCHORS.testimonials },
  { label: "Eyebrows", href: ROUTES.eyebrows },
  { label: "Eye Liners", href: ROUTES.eyeliners },
  { label: "Lips", href: ROUTES.lips },
  { label: "After Care", href: ROUTES.afterCare },
  { label: "Areas Near Us", href: ROUTES.locations },
  { label: "Contact Us", href: ROUTES.contact },
];

const socials = [
  { Icon: FacebookIcon, label: "Facebook", href: EXTERNAL.facebook },
  { Icon: LocalSearchIcon, label: "Localsearch", href: EXTERNAL.localsearch },
  { Icon: GoogleBusinessIcon, label: "Google Business Profile", href: EXTERNAL.google },
  { Icon: InstagramIcon, label: "Instagram", href: EXTERNAL.instagram },
];

export function Footer() {
  return (
    <footer id="footer">
      {/* Image band */}
      <div className="relative w-full h-[200px] lg:h-[340px]">
        <Image
          src="/images/facial-treatment.jpg"
          alt="Cosmetic tattoo facial treatment"
          fill
          className="object-cover object-[center_30%]"
        />
      </div>

      {/* Footer body */}
      <div className="relative bg-[#f7f3ea] px-6 pt-14 pb-8 overflow-hidden">
        {/* Decorative line-art background */}
        <Image
          src="/images/footer-bg.png"
          alt=""
          aria-hidden
          width={1000}
          height={500}
          className="absolute right-0 top-0 h-full w-auto opacity-50 pointer-events-none select-none"
        />

        <div className="relative z-10">
          {/* Centered logo */}
          <Image
            src="/images/logo.png"
            alt="On Point Cosmetic Tattoo Studio"
            width={300}
            height={50}
            className="h-[50px] w-auto mx-auto mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1100px] mx-auto">
            {/* Site Links */}
            <div>
              <h4 className="font-josefin uppercase text-[14px] tracking-[1px] text-[#303030] mb-4">
                Site Links
              </h4>
              {siteLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="block text-[14px] text-[#444] leading-[2.2] hover:text-[#c09569] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-josefin uppercase text-[14px] tracking-[1px] text-[#303030] mb-4">
                Contact
              </h4>
              <div className="flex items-center gap-2.5 text-[14px] text-[#444] leading-[2]">
                <PhoneIcon className="text-[#c09569] text-[16px] shrink-0" />
                <a href={PHONE_HREF} className="hover:text-[#c09569] transition-colors">
                  {PHONE}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[14px] text-[#444] leading-[2]">
                <MailIcon className="text-[#c09569] text-[16px] shrink-0" />
                <a
                  href={EMAIL_HREF}
                  className="hover:text-[#c09569] transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[14px] text-[#444] leading-[2]">
                <MapPinIcon className="text-[#c09569] text-[16px] shrink-0" />
                <a
                  href={EXTERNAL.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#c09569] transition-colors"
                >
                  Buderim, QLD 4556
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-[14px] text-[#444] leading-[2]">
                <AbnIcon className="text-[#c09569] text-[16px] shrink-0" />
                <span>ABN 79 955 974 433</span>
              </div>
              <p className="italic text-[#666] text-[14px] mt-2">
                Certified Cosmetic Tattoo Artist
              </p>
              <div className="flex gap-2.5 mt-3.5">
                {socials.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-7 h-7 rounded-full bg-[#303030] text-white flex items-center justify-center text-[14px] hover:bg-[#c09569] transition-colors"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Trading Hours */}
            <div>
              <h4 className="font-josefin uppercase text-[14px] tracking-[1px] text-[#303030] mb-4">
                Trading Hours
              </h4>
              <div className="flex justify-between max-w-[260px] text-[14px] text-[#444] leading-[2]">
                <span>Mon - Fri</span>
                <span>9:00 am - 5:00 pm</span>
              </div>
              <div className="flex justify-between max-w-[260px] text-[14px] text-[#444] leading-[2]">
                <span>Sat - Sun</span>
                <span>Appointment Only</span>
              </div>

              {/* Trust card */}
              <div className="mt-4 bg-white rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.08)] p-3.5 w-[160px] text-center">
                <VerifiedIcon className="text-[#c09569] text-[20px] mx-auto" />
                <p className="font-bold text-[14px] text-[#303030]">2026</p>
                <p className="text-[11px] text-[#888] mb-1.5">Certificate of trust</p>
                <div className="flex items-center justify-center gap-1 text-[#2d6cdf]">
                  <LocalSearchIcon className="text-[14px]" />
                  <span className="text-[13px] font-semibold">localsearch</span>
                </div>
              </div>

              <p className="text-[11px] text-[#999] mt-3">Powered by</p>
              <p className="text-[#2d6cdf] font-bold text-[14px]">localsearch</p>
            </div>
          </div>

          {/* Bottom bar */}
          <p className="text-center mt-10 text-[13px] text-[#777]">
            © 2026 All Rights Reserved |<br />
            On Point Cosmetic Tattoo Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
