import type { Metadata } from "next";
import { ServicePage, SHARED_FEATURES } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Lip Tattooing on the Sunshine Coast | On Point Cosmetic Tattoo Studio",
  description:
    "Lip tattoos in Buderim for clients across the Sunshine Coast — lip liner tattoo, lip blend tattoo and full lip tattoo using structured planning and controlled application.",
};

export default function LipTattoosPage() {
  return (
    <ServicePage
      heroTitle="Lip Tattooing on the Sunshine Coast"
      heroImage="/images/sub/hero-lip.jpg"
      mappingTitle="Lip Line & Colour"
      mappingParas={[
        "Lip borders and natural pigment can change over time, which is why careful mapping is essential before placing any colour. At On Point Cosmetic Tattoo Studio in Buderim, I provide lip tattoos for clients across the Sunshine Coast using structured planning and controlled application methods.",
        "Options include lip liner tattoo, lip blend tattoo and full lip tattoo. During consultation, I assess natural lip tone, symmetry, skin condition and outline preferences before confirming pigment selection.",
      ]}
      designImage="/images/sub/lip-design.jpg"
      features={SHARED_FEATURES}
      techniqueTitle="The Lip Tattoo Process"
      techniqueParas={[
        "Lip tattoos require thoughtful pigment selection and measured application due to the sensitivity of the area. I begin by mapping the lip border and reviewing colour tones suited to your natural base. Lip liner tattoo defines the edge, lip blend softens colour toward the centre and full lip tattoo distributes pigment across the entire lip area.",
        "The chosen technique depends on previous tattoo work, skin response and personal preference discussed during consultation. I outline preparation guidelines before the appointment and provide written aftercare instructions following treatment.",
      ]}
      techniqueImage="/images/sub/lip-technique.jpg"
      workTitle="My Lip Work"
      workImages={[
        { src: "/images/sub/lip-work-1.jpg", alt: "Lip tattoo result" },
        { src: "/images/sub/lip-work-2.png", alt: "Lip tattoo result" },
        { src: "/images/sub/lip-work-3.png", alt: "Lip tattoo result" },
      ]}
      faq={[
        {
          q: "How long do lip tattoos last?",
          a: "Lip tattoos are considered semi-permanent cosmetic procedures. Longevity varies depending on skin type, lifestyle, sun exposure and pigment choice. Fading happens gradually over time, and many people schedule maintenance appointments to refresh colour. Individual healing response and aftercare practices can influence how pigment settles in the lips.",
        },
        {
          q: "Do lip tattoos hurt?",
          a: "Discomfort levels vary between individuals due to the sensitivity of the lip area. A topical numbing product is commonly applied before and during the procedure to reduce sensation. Some people describe the feeling as vibration, pressure or light scratching. Pain tolerance and skin condition may affect overall comfort.",
        },
        {
          q: "What should be avoided before a lip tattoo appointment?",
          a: "Before a lip tattoo appointment, it is generally advised to avoid alcohol, blood-thinning medication unless medically required and excessive sun exposure. Clients with a history of cold sores may be advised to seek medical guidance prior to treatment, as lip procedures can trigger outbreaks in some cases.",
        },
      ]}
    />
  );
}
