import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HealingCalendar } from "@/components/HealingCalendar";
import { Artist } from "@/components/Artist";
import { Testimonials } from "@/components/Testimonials";
import { Faq, type FaqItem } from "@/components/Faq";
import { GetInTouch } from "@/components/GetInTouch";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const FAQ: FaqItem[] = [
  {
    q: "How long does a cosmetic tattoo last?",
    a: "Cosmetic tattoo is semi-permanent. How long it lasts depends on your skin type, lifestyle, sun exposure and the pigment chosen. Colour fades gradually, most treatments include a follow-up visit, and many people book a refresh over time.",
  },
  {
    q: "Does it hurt?",
    a: "It varies from person to person. A topical numbing product is applied before and during the procedure. Most people describe it as light scratching, vibration or pressure.",
  },
  {
    q: "What should I avoid before my appointment?",
    a: "No alcohol, coffee or non-prescribed blood thinners for 48 hours before, no tanning or long sun exposure the week before, and no retinol on the area. You'll get the full preparation guide at your consultation.",
  },
  {
    q: "What is the difference between eyeliner enhancement and designer eyeliner?",
    a: "Eyeliner enhancement places pigment within the lash line to define the base of the lashes. Designer eyeliner extends above the lash line to create a visible shape. The choice depends on your eye shape, the thickness you want and how you like to wear it.",
  },
  {
    q: "I get cold sores. Can I still have a lip tattoo?",
    a: "Lip procedures can trigger an outbreak in some people, so if you are prone to cold sores, seek medical advice before your appointment. Lisa will talk this through with you at your consultation.",
  },
  {
    q: "Why does the colour look so dark at first?",
    a: "Colour always looks darker straight after treatment, and mild redness, swelling or flaking can follow. It settles as the skin heals, and a follow-up visit six to eight weeks later lets Lisa refine the result.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <section id="your-visit" className="section has-flora">
        <div className="wrap">
          <HealingCalendar />
        </div>
      </section>
      <Artist />
      <Testimonials />
      <Faq items={FAQ} />
      <GetInTouch />
    </>
  );
}
