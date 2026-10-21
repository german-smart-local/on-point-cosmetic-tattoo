import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Eyebrow Tattooing on the Sunshine Coast | On Point Cosmetic Tattoo Studio",
  description:
    "Eyebrow tattoos in Buderim for clients across the Sunshine Coast — feather touch brows, microblading, nano realism hair strokes, powder and combination brows.",
};

export default function EyebrowTattoosPage() {
  return (
    <ServicePage
      heroTitle={["Eyebrow tattoos,", "mapped to you"]}
      heroLead="Feather touch, microblading, nano realism hair strokes, powder and combination brows, from Lisa's studio in Buderim on the Sunshine Coast."
      heroImage="/images/sub/eb-work-1.jpg"
      heroAlt="Feathered hair-stroke brows on a client with brown eyes"
      mappingTitle="Brow mapping and design"
      mappingParas={[
        "Small changes in brow structure can alter overall facial balance, which is why planning matters. At On Point Cosmetic Tattoo Studio in Buderim, I provide eyebrow tattoos for clients across the Sunshine Coast using structured mapping and technique selection.",
        "Options include feather touch brows, microblading, nano realism hair strokes, powder brows and combination brows. During consultation, I assess natural brow growth, skin type, symmetry and pigment tone before recommending a suitable approach.",
      ]}
      designImage="/images/sub/eb-design.jpg"
      designAlt="Freshly tattooed hair-stroke brows, seen from above"
      treatment="brows"
      techniqueTitle="Choosing the technique"
      techniqueParas={[
        "Different eyebrow tattoo techniques create different visual effects, so I explain each method clearly before proceeding. Hair stroke techniques, such as nano realism and microblading, create fine lines through manual or machine application. Powder brows use a soft shading method, while combination brows blend hair strokes with shading for added structure.",
        "The chosen method depends on skin condition, previous tattoo work and personal preference. I'll outline preparation requirements, discuss healing stages and provide written aftercare guidance following treatment.",
      ]}
      techniqueImage="/images/sub/eb-technique.jpg"
      techniqueAlt="A client in the studio chair with finished, natural-looking brows"
      workTitle="Lisa's brow work"
      workImages={[
        { src: "/images/sub/eb-work-3.jpg", alt: "Hair-stroke eyebrow tattoo with a soft, natural arch", caption: "Hair strokes with eyeliner, fresh" },
        { src: "/images/sub/eb-work-2.jpg", alt: "Hair-stroke brow with a defined tail", caption: "Hair strokes, fresh" },
        { src: "/images/sub/ac-work-3.jpg", alt: "Healed brows after one session, before the touch-up", caption: "Healed after one session, before the touch-up" },
      ]}
      faq={[
        {
          q: "How long do eyebrow tattoos last?",
          a: "Eyebrow tattoos are a semi-permanent cosmetic procedure. Longevity varies depending on skin type, lifestyle, sun exposure and pigment choice. Most treatments require a follow-up appointment and periodic maintenance over time. Fading occurs gradually, and individual results differ based on skin response and aftercare practices.",
        },
        {
          q: "What should be avoided before an eyebrow tattoo appointment?",
          a: "Before an eyebrow tattoo appointment, it is generally advised to avoid alcohol, blood-thinning medication (unless medically required), excessive sun exposure and certain active skincare products. Clients are typically provided with preparation guidelines during consultation to reduce potential complications and support the healing process.",
        },
        {
          q: "Does an eyebrow tattoo hurt?",
          a: "Discomfort levels vary between individuals. A topical numbing product is typically applied before and during the procedure to reduce sensation. Some people describe the feeling as light scratching or pressure. Sensitivity may depend on skin type, pain tolerance and the specific technique being used.",
        },
      ]}
    />
  );
}
