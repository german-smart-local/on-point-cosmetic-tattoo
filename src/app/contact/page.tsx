import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { GetInTouch } from "@/components/GetInTouch";
import { WorkStrip } from "@/components/WorkStrip";
import { EMAIL, EMAIL_HREF, EXTERNAL, PHONE, PHONE_HREF } from "@/lib/links";
import { Flora } from "@/components/Flora";
import { Tile } from "@/components/Tile";

export const metadata: Metadata = {
  title: "Contact Me Today | On Point Cosmetic Tattoo Studio",
  description:
    "Contact On Point Cosmetic Tattoo Studio in Buderim to arrange your cosmetic tattoo consultation. Call 0414 502 807 or send a message.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={["Talk to Lisa", "before you book"]}
        lead="Ask about availability, preparation or which technique suits you. Every treatment starts with a consultation in the Buderim studio."
        image="/images/sub/eb-work-1.jpg"
        imageAlt="Feathered hair-stroke brows by Lisa"
      />

      <GetInTouch title="Send Lisa a message" />

      <WorkStrip
        title="What you're booking"
        images={[
          { src: "/images/sub/eb-work-2.jpg", alt: "Hair-stroke eyebrow tattoo, close up", caption: "Brows, hair strokes" },
          { src: "/images/sub/el-work-1-h.jpg", alt: "Designer eyeliner with a tapered wing", caption: "Designer eyeliner" },
          { src: "/images/sub/lip-work-1-h.jpg", alt: "Full lip tattoo in a soft rose tone", caption: "Full lip colour" },
        ]}
      />

      <section className="section has-flora" aria-labelledby="help-title">
        <Flora at="br" />
        <div className="wrap grid12 split">
          <Tile className="split__pic" texture="speckle">
            <Image src="/images/sub/contact-portrait.jpg" alt="Lisa Eagles in her studio" width={937} height={960} sizes="(min-width: 900px) 40vw, 90vw" />
          </Tile>
          <div className="split__text">
            <h2 id="help-title" className="t-head">
              Here to help
            </h2>
            <p className="measure-wide">
              On Point welcomes enquiries from anyone considering a consultation or wanting to know
              more about cosmetic tattoo. Call the studio to talk about availability, preparation or
              general questions before booking. If you reach voicemail, leave your name and number and
              Lisa will get back to you promptly.
            </p>
            <ul className="ticks t-lead">
              <li>
                <a href={PHONE_HREF} className="link">
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={EMAIL_HREF} className="link break-all">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={EXTERNAL.maps} target="_blank" rel="noopener noreferrer" className="link">
                  Buderim, QLD 4556
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section on-white" aria-labelledby="map-title">
        <div className="wrap grid12 split">
          <div className="split__text min-[900px]:col-start-1 min-[900px]:col-span-4">
            <h2 id="map-title" className="t-head">
              Finding the studio
            </h2>
            <p className="measure">
              Lisa works from her studio in Buderim, QLD 4556, and sees clients from across the
              Sunshine Coast, including Noosa and Caloundra.
            </p>
          </div>
          <div className="col-span-12 min-[900px]:col-start-6 min-[900px]:col-span-7">
            <iframe
              title="Map of Buderim, Queensland"
              src="https://www.google.com/maps?q=Buderim%20QLD%204556&output=embed"
              className="map-embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
