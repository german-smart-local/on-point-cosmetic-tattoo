export type TreatmentId = "brows" | "eyeliner" | "lips";

export interface Technique {
  name: string;
  /** What it is, in one sentence, from the studio's own treatment pages. */
  what: string;
}

export const TECHNIQUES: Record<TreatmentId, Technique[]> = {
  brows: [
    {
      name: "Nano realism hair strokes",
      what: "Fine hair-like strokes placed by machine, for brows that look like natural hair.",
    },
    {
      name: "Feather touch microblading",
      what: "Fine hair-like strokes made by hand, for a soft, feathered brow.",
    },
    {
      name: "Powder brows",
      what: "A soft shading method that gives the brow a filled, powdered finish.",
    },
    {
      name: "Combination brows",
      what: "Hair strokes blended with shading, for added structure and fullness.",
    },
  ],
  eyeliner: [
    {
      name: "Eyeliner enhancement",
      what: "Pigment placed within the lash line to define the base of the lashes.",
    },
    {
      name: "Designer eyeliner",
      what: "Pigment extended above the lash line to create a visible shape, from fine to a defined wing.",
    },
  ],
  lips: [
    {
      name: "Lip liner tattoo",
      what: "Defines the edge of the lips with a mapped, even border.",
    },
    {
      name: "Lip blend tattoo",
      what: "A defined edge with colour that softens toward the centre of the lips.",
    },
    {
      name: "Full lip tattoo",
      what: "Colour placed across the entire lip, matched to your natural tone.",
    },
  ],
};
