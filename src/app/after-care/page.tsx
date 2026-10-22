import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { HealingCalendar } from "@/components/HealingCalendar";
import { GetInTouch } from "@/components/GetInTouch";
import { WorkStrip } from "@/components/WorkStrip";

export const metadata: Metadata = {
  title: "After-Care Guide | On Point Cosmetic Tattoo Studio",
  description:
    "Pre and post-procedure care guidance for cosmetic tattoo treatments at On Point Cosmetic Tattoo Studio in Buderim, Sunshine Coast.",
};

export default function AfterCarePage() {
  return (
    // Photos on this page stay still on hover (see .still-photos in globals.css).
    <div className="still-photos">
      <PageHero
        title={["Your aftercare", "guide"]}
        lead="What to do before and after your cosmetic tattoo, so it heals well and the colour settles the way it was planned."
        image="/images/sub/ac-work-3.jpg"
        imageAlt="Healed brows after one session, before the touch-up"
        texture="grid-dark"
      />

      {/* The calendar carries the whole guide: every preparation and aftercare step, stage by stage. */}
      <section className="section on-white" aria-label="Preparation and aftercare calendar">
        <div className="wrap">
          <HealingCalendar />
        </div>
      </section>

      <WorkStrip
        title="Settled and healed"
        images={[
          { src: "/images/sub/ac-work-1.jpg", alt: "Soft, settled brows on a client of the studio", caption: "Brows, settled" },
          { src: "/images/sub/ac-work-2.jpg", alt: "Natural-looking brows after healing", caption: "Brows, healed" },
          { src: "/images/sub/el-technique.jpg", alt: "A client with tattooed brows and eyeliner", caption: "Brows and eyeliner together" },
        ]}
      />

      <GetInTouch />
    </div>
  );
}
