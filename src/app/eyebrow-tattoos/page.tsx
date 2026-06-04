import type { Metadata } from "next";
import { ServicePage, SHARED_FEATURES } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Eyebrow Tattooing on the Sunshine Coast | On Point Cosmetic Tattoo Studio",
  description:
    "Eyebrow tattoos in Buderim for clients across the Sunshine Coast — feather touch brows, microblading, nano realism hair strokes, powder and combination brows.",
};

export default function EyebrowTattoosPage() {
  return (
    <ServicePage
      heroTitle="Eyebrow Tattooing on the Sunshine Coast"
      heroImage="/images/sub/hero-eyebrow.jpg"
      mappingTitle="Brow Mapping & Design"
      mappingParas={[
        "Small changes in brow structure can alter overall facial balance, which is why planning matters. At On Point Cosmetic Tattoo Studio in Buderim, I provide eyebrow tattoos for clients across the Sunshine Coast using structured mapping and technique selection.",
        "Options include feather touch brows, microblading, nano realism hair strokes, powder brows and combination brows. During consultation, I assess natural brow growth, skin type, symmetry and pigment tone before recommending a suitable approach.",
      ]}
      designImage="/images/sub/eb-design.jpg"
      features={SHARED_FEATURES}
      techniqueTitle="The Technique Behind Eyebrow Tattooing"
      techniqueParas={[
        "Different eyebrow tattoo techniques create different visual effects, so I explain each method clearly before proceeding. Hair stroke techniques, such as nano realism and microblading, create fine lines through manual or machine application. Powder brows use a soft shading method, while combination brows blend hair strokes with shading for added structure.",
        "The chosen method depends on skin condition, previous tattoo work and personal preference. I'll outline preparation requirements, discuss healing stages and provide written aftercare guidance following treatment.",
      ]}
      techniqueImage="/images/sub/eb-technique.jpg"
      workTitle="My Eyebrow Work"
      workImages={[
        { src: "/images/sub/eb-work-1.jpg", alt: "Eyebrow tattoo result" },
        { src: "/images/sub/eb-work-2.jpg", alt: "Eyebrow tattoo result" },
        { src: "/images/sub/eb-work-3.jpg", alt: "Eyebrow tattoo result" },
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
