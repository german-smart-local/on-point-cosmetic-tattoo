import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Lip Tattooing on the Sunshine Coast | On Point Cosmetic Tattoo Studio",
  description:
    "Lip tattoos in Buderim for clients across the Sunshine Coast — lip liner tattoo, lip blend tattoo and full lip tattoo using structured planning and controlled application.",
};

export default function LipTattoosPage() {
  return (
    <ServicePage
      heroTitle={["Lip tattoos,", "in your own tone"]}
      heroLead="Lip liner, lip blend and full lip tattoo, with the outline mapped and the colour matched to your natural base, in Buderim on the Sunshine Coast."
      heroImage="/images/sub/lip-technique.jpg"
      heroAlt="Full lip tattoo in a warm coral tone"
      heroMap={{
        // The square frame shows the middle 1080px of this 1440px-wide photo.
        view: [180, 0, 1080, 1080],
        paths: [
          "M180,306 C220,290 260,284 288,290 C360,306 450,352 540,376 C640,398 760,388 860,410 C1000,440 1120,490 1260,559",
          "M180,753 C250,820 330,866 450,900 C560,930 640,945 700,940 C820,930 950,900 1080,850 C1150,820 1210,800 1260,779",
        ],
        markers: [
          { label: "Cupid's bow", x: 288, y: 290, side: "right" },
          { label: "Upper border", x: 860, y: 410 },
          { label: "Lower border", x: 700, y: 940, side: "below" },
        ],
      }}
      mappingTitle="Lip line and colour"
      mappingParas={[
        "Lip borders and natural pigment can change over time, which is why careful mapping is essential before placing any colour. At On Point Cosmetic Tattoo Studio in Buderim, I provide lip tattoos for clients across the Sunshine Coast using structured planning and controlled application methods.",
        "Options include lip liner tattoo, lip blend tattoo and full lip tattoo. During consultation, I assess natural lip tone, symmetry, skin condition and outline preferences before confirming pigment selection.",
      ]}
      designImage="/images/sub/lip-design.jpg"
      designAlt="Freshly tattooed lips in a soft rose, seen from below"
      treatment="lips"
      techniqueTitle="The lip tattoo process"
      techniqueParas={[
        "Lip tattoos require thoughtful pigment selection and measured application due to the sensitivity of the area. I begin by mapping the lip border and reviewing colour tones suited to your natural base. Lip liner tattoo defines the edge, lip blend softens colour toward the centre and full lip tattoo distributes pigment across the entire lip area.",
        "The chosen technique depends on previous tattoo work, skin response and personal preference discussed during consultation. I outline preparation guidelines before the appointment and provide written aftercare instructions following treatment.",
      ]}
      techniqueImage="/images/sub/lip-work-2.png"
      techniqueAlt="Lip tattoo in a muted rose, close up"
      workTitle="Lisa's lip work"
      workImages={[
        { src: "/images/sub/lip-work-1-h.jpg", alt: "Full lip tattoo in a soft rose tone", caption: "Full lip, fresh" },
        { src: "/images/sub/lip-work-3.png", alt: "Bright, glossy lips straight after a lip tattoo", caption: "Straight after the appointment" },
        { src: "/images/sub/lip-design.jpg", alt: "Lip tattoo in a soft rose, seen from below", caption: "Lip colour, fresh" },
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
