import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Eyeliner Tattooing on the Sunshine Coast | On Point Cosmetic Tattoo Studio",
  description:
    "Eyeliner tattoos in Buderim for clients across the Sunshine Coast — eyeliner enhancement and designer eyeliner using structured mapping and controlled application.",
};

export default function EyelinerTattoosPage() {
  return (
    <ServicePage
      heroTitle="Eyeliner Tattooing on the Sunshine Coast"
      heroImage="/images/sub/hero-eyeliner.jpg"
      mappingTitle="Mapping The Lash Line"
      mappingParas={[
        "The lash line is one of the most precise areas of the face, which makes planning essential before any pigment is placed. At On Point Cosmetic Tattoo Studio in Buderim, I provide eyeliner tattoos for clients across the Sunshine Coast using structured mapping and controlled application methods.",
        "Options include eyeliner enhancement and designer eyeliner, ranging from a fine line through the lashes to a more defined shape. During consultation, I review eye shape, lid space, skin condition and lifestyle considerations before outlining the proposed design.",
      ]}
      designImage="/images/sub/el-design.jpg"
      techniqueTitle="Understanding Eyeliner Techniques"
      techniqueParas={[
        "Eyeliner tattoos require careful placement due to the sensitivity of the eye area. I begin by mapping the lash line and discussing thickness, tapering and wing positioning where applicable. With eyeliner enhancement, I place subtle pigment within the lash line. For designer eyeliner, I create a more visible shape along the lid.",
        "The selected method depends on anatomy, previous cosmetic tattoo work and personal preference. I outline preparation guidelines before the appointment and provide written aftercare instructions following treatment.",
      ]}
      techniqueImage="/images/sub/el-technique.jpg"
      workTitle="My Eyeliner Work"
      workImages={[
        { src: "/images/sub/el-work-1.jpg", alt: "Eyeliner tattoo result" },
        { src: "/images/sub/el-work-2.jpg", alt: "Eyeliner tattoo result" },
        { src: "/images/sub/el-work-3.jpg", alt: "Eyeliner tattoo result" },
      ]}
      faq={[
        {
          q: "How long do eyeliner tattoos last?",
          a: "Eyeliner tattoos are considered semi-permanent. Longevity varies depending on skin type, pigment choice, sun exposure and lifestyle factors. Fading occurs gradually over time, and many people schedule maintenance appointments to refresh colour. Individual results differ, and healing response can influence how the pigment settles in the skin.",
        },
        {
          q: "Do eyeliner tattoos hurt?",
          a: "Sensation levels vary from person to person. A topical numbing product is usually applied before and during the procedure to reduce discomfort. Some individuals describe the feeling as vibration, light scratching or pressure near the lash line. Sensitivity may differ depending on skin type and personal tolerance.",
        },
        {
          q: "What is the difference between eyeliner enhancement and designer eyeliner?",
          a: "Eyeliner enhancement places pigment within the lash line to define the base of the lashes. Designer eyeliner extends pigment above the lash line to create a visible shape. The choice depends on eye anatomy, desired thickness and personal preference discussed during consultation.",
        },
      ]}
    />
  );
}
