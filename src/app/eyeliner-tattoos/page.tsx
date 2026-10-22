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
      heroTitle={["Eyeliner tattoos,", "line by line"]}
      heroLead="Eyeliner enhancement and designer eyeliner, from a fine line through the lashes to a defined wing, in Buderim on the Sunshine Coast."
      heroImage="/images/sub/el-work-2.jpg"
      heroAlt="Designer eyeliner tattoo with a crisp wing on a brown eye"
      heroMap={{
        // Along the top edge of the liner, from the inner corner out to the wing tip.
        view: [0, 0, 1080, 1080],
        paths: ["M1020,366 C900,290 760,274 640,290 C500,306 410,370 330,470 C260,560 180,700 100,802"],
        markers: [
          { label: "Inner corner", x: 1020, y: 366, side: "left" },
          { label: "Lash line", x: 640, y: 290 },
          { label: "Wing", x: 100, y: 802, side: "right" },
        ],
      }}
      mappingTitle="Mapping the lash line"
      mappingParas={[
        "The lash line is one of the most precise areas of the face, which makes planning essential before any pigment is placed. At On Point Cosmetic Tattoo Studio in Buderim, I provide eyeliner tattoos for clients across the Sunshine Coast using structured mapping and controlled application methods.",
        "Options include eyeliner enhancement and designer eyeliner, ranging from a fine line through the lashes to a more defined shape. During consultation, I review eye shape, lid space, skin condition and lifestyle considerations before outlining the proposed design.",
      ]}
      designImage="/images/sub/el-design.jpg"
      designAlt="Fine designer eyeliner with a short wing, seen from above"
      treatment="eyeliner"
      techniqueTitle="How the line is placed"
      techniqueParas={[
        "Eyeliner tattoos require careful placement due to the sensitivity of the eye area. I begin by mapping the lash line and discussing thickness, tapering and wing positioning where applicable. With eyeliner enhancement, I place subtle pigment within the lash line. For designer eyeliner, I create a more visible shape along the lid.",
        "The selected method depends on anatomy, previous cosmetic tattoo work and personal preference. I outline preparation guidelines before the appointment and provide written aftercare instructions following treatment.",
      ]}
      techniqueImage="/images/sub/el-technique.jpg"
      techniqueAlt="A client with tattooed eyeliner and brows, looking at the camera"
      workTitle="Lisa's eyeliner work"
      workImages={[
        { src: "/images/sub/el-work-1-h.jpg", alt: "Designer eyeliner with a tapered wing on a green eye", caption: "Designer eyeliner, fresh" },
        { src: "/images/sub/el-work-3.jpg", alt: "Fine eyeliner set close to the lash line", caption: "Fine line with a short wing" },
        { src: "/images/sub/el-design.jpg", alt: "Eyeliner and brows tattooed together", caption: "Eyeliner with brows" },
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
