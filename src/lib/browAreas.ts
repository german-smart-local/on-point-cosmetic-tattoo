// Suburb landing pages for eyebrow tattoos, at /eyebrow-tattoos-in-[suburb] (served by src/app/[landing]).
// Each page is written for its own suburb (local angle, questions and photos), so the pages don't
// repeat each other or the main /eyebrow-tattoos page. Facts stay within what the studio already
// publishes: the Buderim studio, the techniques, consultation first, the 6–8 week follow-up and the
// aftercare guidance (no swimming, spas, exercise or sun during early healing).

import type { FaqItem } from "@/components/Faq";
import type { FaceMapData } from "@/components/FaceMap";
import type { WorkImage } from "@/components/WorkStrip";

export interface BrowArea {
  slug: string;
  name: string;
  /** <title> and meta description. */
  metaTitle: string;
  metaDescription: string;
  heroTitle: [string, string];
  heroLead: string;
  heroImage: string;
  heroAlt: string;
  heroMap?: FaceMapData;
  introTitle: string;
  introParas: string[];
  introImage: string;
  introAlt: string;
  localTitle: string;
  localParas: string[];
  localTicks: string[];
  workImages: WorkImage[];
  faq: FaqItem[];
}

const PHOTOS = {
  feathered: {
    src: "/images/sub/eb-work-1.jpg",
    alt: "Feathered hair-stroke brows on a client with brown eyes",
    caption: "Feathered hair strokes",
  },
  tail: { src: "/images/sub/eb-work-2.jpg", alt: "Hair-stroke brow with a defined tail", caption: "Hair strokes, fresh" },
  arch: {
    src: "/images/sub/eb-work-3.jpg",
    alt: "Hair-stroke eyebrow tattoo with a soft, natural arch",
    caption: "Hair strokes with eyeliner, fresh",
  },
  healed: {
    src: "/images/sub/ac-work-3.jpg",
    alt: "Healed brows after one session, before the touch-up",
    caption: "Healed after one session, before the touch-up",
  },
} satisfies Record<string, WorkImage>;

// The same brow-mapping lines as the main eyebrow page, drawn over the same photo.
const FEATHERED_MAP: FaceMapData = {
  view: [0, 0, 1440, 1440],
  paths: ["M470,1040 L688,628", "M470,1040 L960,676", "M470,1040 L1122,894"],
  markers: [
    { label: "Start", x: 688, y: 628 },
    { label: "Arch", x: 960, y: 676 },
    { label: "Tail", x: 1122, y: 894 },
  ],
};

const DESIGN = { introImage: "/images/sub/eb-design.jpg", introAlt: "Freshly tattooed hair-stroke brows, seen from above" };
const CHAIR = {
  introImage: "/images/sub/eb-technique.jpg",
  introAlt: "A client in the studio chair with finished, natural-looking brows",
};

export const BROW_AREAS: BrowArea[] = [
  {
    slug: "buderim",
    name: "Buderim",
    metaTitle: "Eyebrow Tattoos in Buderim | On Point Cosmetic Tattoo Studio",
    metaDescription:
      "Eyebrow tattoos in Buderim from a certified artist: nano realism hair strokes, feather touch microblading, powder and combination brows. Call 0414 502 807.",
    heroTitle: ["Eyebrow tattoos", "in Buderim"],
    heroLead:
      "Mapped brows from my studio right here in Buderim: hair strokes, powder or a blend of both, planned around your own features.",
    heroImage: PHOTOS.feathered.src,
    heroAlt: PHOTOS.feathered.alt,
    heroMap: FEATHERED_MAP,
    introTitle: "Brows designed in Buderim",
    introParas: [
      "On Point Cosmetic Tattoo Studio is based in Buderim, so local clients can have their eyebrow tattoo done close to home. Every brow starts with a consultation, where I look at your natural brow growth, skin type, symmetry and the pigment tone that will suit you.",
      "From there I map the shape before any pigment goes in, so you can see and agree on the start, arch and tail first. Pick a technique below to see how each one looks.",
    ],
    ...DESIGN,
    localTitle: "Close to home, start to finish",
    localParas: [
      "A brow tattoo is more than one appointment: there's the consultation, the treatment itself and a follow-up visit six to eight weeks later, when I refine the healed result. Being in Buderim makes each of those visits an easy trip for locals.",
      "I'm in the studio Monday to Friday, 9am to 5pm, and weekends are by appointment, so there's room to fit your visits around work, school runs and everything else.",
    ],
    localTicks: [
      "Consultation and mapped design before treatment",
      "Follow-up visit six to eight weeks later",
      "Written aftercare to take home",
    ],
    workImages: [PHOTOS.arch, PHOTOS.tail, PHOTOS.healed],
    faq: [
      {
        q: "Where in Buderim is the studio?",
        a: "On Point Cosmetic Tattoo Studio is in Buderim, QLD 4556. Call 0414 502 807 to book your consultation and I'll confirm your appointment details, or use the map link on this page for directions.",
      },
      {
        q: "Can I book an eyebrow tattoo on a weekend?",
        a: "The studio is open Monday to Friday, 9am to 5pm. Saturday and Sunday appointments are available by arrangement, so ask when you call if a weekday doesn't suit.",
      },
      {
        q: "How many visits does an eyebrow tattoo take?",
        a: "Usually three: a consultation to plan the shape and technique, the treatment, and a follow-up appointment about six to eight weeks later once the skin has healed. Over time, many people also book a refresh as the pigment gradually fades.",
      },
    ],
  },
  {
    slug: "maroochydore",
    name: "Maroochydore",
    metaTitle: "Eyebrow Tattoos Near Maroochydore | On Point Cosmetic Tattoo Studio",
    metaDescription:
      "Eyebrow tattoos near Maroochydore at my Buderim studio, a short drive away. Hair strokes, microblading, powder and combination brows. Call 0414 502 807.",
    heroTitle: ["Eyebrow tattoos", "near Maroochydore"],
    heroLead:
      "Maroochydore clients come up the hill to my Buderim studio for brows that are mapped to their face, around a 15 minute drive away.",
    heroImage: PHOTOS.tail.src,
    heroAlt: PHOTOS.tail.alt,
    introTitle: "Brows that suit a busy week",
    introParas: [
      "Plenty of my Maroochydore clients want brows they don't have to fill in every morning before work. An eyebrow tattoo gives you a set shape to start the day with, designed so it looks like your own brows rather than a stencil.",
      "I offer nano realism hair strokes, feather touch microblading, powder brows and combination brows. At your consultation I'll review your natural brow growth, skin type and symmetry, then recommend the technique that suits you. Pick one below to compare.",
    ],
    ...CHAIR,
    localTitle: "Planning around work",
    localParas: [
      "Fresh brows look stronger than the healed result and soften as the skin settles, so some Maroochydore clients like to book their treatment before a quieter few days. I'll walk you through what each stage of healing looks like at your consultation.",
      "Your follow-up is usually six to eight weeks after treatment. The studio is open weekdays from 9am to 5pm, with weekends by appointment, so both visits can be planned around your working week.",
    ],
    localTicks: [
      "Around a 15 minute drive from Maroochydore",
      "Weekday appointments, weekends by arrangement",
      "Healing stages explained before you book",
    ],
    workImages: [PHOTOS.feathered, PHOTOS.arch, PHOTOS.healed],
    faq: [
      {
        q: "Do you offer microblading near Maroochydore?",
        a: "Yes. Feather touch microblading is one of the brow techniques I offer at my Buderim studio, alongside nano realism hair strokes, powder brows and combination brows. Microblading creates fine hair-like strokes by hand, while nano realism places them by machine. We'll choose between them at your consultation.",
      },
      {
        q: "I already have an old brow tattoo. Can you work with it?",
        a: "Previous cosmetic tattoo work is reviewed during your consultation. I'll look at the existing pigment and your skin, then explain what's possible before anything is booked. The method chosen depends on skin condition, previous tattoo work and your personal preference.",
      },
      {
        q: "How do I book from Maroochydore?",
        a: "Call me on 0414 502 807 or send an enquiry with the form on this page. Every eyebrow tattoo starts with a consultation, and the drive up to Buderim is usually around 15 minutes.",
      },
    ],
  },
  {
    slug: "mooloolaba",
    name: "Mooloolaba",
    metaTitle: "Eyebrow Tattoos Near Mooloolaba | On Point Cosmetic Tattoo Studio",
    metaDescription:
      "Eyebrow tattoos near Mooloolaba from my Buderim studio, with healing planned around the beach. Hair strokes, powder and combination brows. Call 0414 502 807.",
    heroTitle: ["Eyebrow tattoos", "near Mooloolaba"],
    heroLead:
      "Brows that hold up to beach days, from my Buderim studio just up the hill from Mooloolaba. Mapped first, then tattooed to suit you.",
    heroImage: PHOTOS.arch.src,
    heroAlt: PHOTOS.arch.alt,
    introTitle: "Brows for salt water and sunshine",
    introParas: [
      "When you live near the beach, brow pencil and powder don't last long. A cosmetic eyebrow tattoo gives Mooloolaba clients a shape that stays put after a swim, with no smudging and no reapplying.",
      "I offer nano realism hair strokes, feather touch microblading, powder brows and combination brows, each planned with brow mapping at a consultation first. Pick a technique below to see how it looks.",
    ],
    ...DESIGN,
    localTitle: "Timing it around the beach",
    localParas: [
      "Healing brows need a break from the water. During early healing, the aftercare is to avoid swimming, spas, exercise and sun exposure, so it's worth booking for a stretch when you can skip the beach for a little while.",
      "In the week before treatment, avoid tanning and long sun exposure too. Once your brows have healed, sun exposure is one of the things that affects how long the pigment lasts, so a hat on beach days helps keep them looking fresh.",
    ],
    localTicks: [
      "No swimming, spas or sun during early healing",
      "No tanning in the week before treatment",
      "Full written aftercare to take home",
    ],
    workImages: [PHOTOS.feathered, PHOTOS.tail, PHOTOS.healed],
    faq: [
      {
        q: "Can I swim after an eyebrow tattoo?",
        a: "Not straight away. Swimming, spas, exercise and sun exposure should be avoided during the early healing period. You'll leave with written aftercare that sets out exactly what to do and for how long, and the full guide is on the aftercare page.",
      },
      {
        q: "When is the best time to book if I'm at the beach a lot?",
        a: "Choose a stretch of time when you can stay out of the water and the sun for the early part of healing, and avoid tanning in the week before your appointment. Your follow-up is usually six to eight weeks after treatment, so plan around that visit too.",
      },
      {
        q: "Will the sun fade my eyebrow tattoo?",
        a: "Eyebrow tattoos are semi-permanent and fade gradually. How long they last depends on skin type, lifestyle, sun exposure and the pigment chosen, so protecting healed brows from strong sun can help. Many people book a refresh over time.",
      },
    ],
  },
  {
    slug: "alexandra-headland",
    name: "Alexandra Headland",
    metaTitle: "Eyebrow Tattoos Near Alexandra Headland | On Point Cosmetic Tattoo Studio",
    metaDescription:
      "Eyebrow tattoos near Alexandra Headland at my Buderim studio: natural hair-stroke, powder and combination brows, mapped to you. Call 0414 502 807.",
    heroTitle: ["Eyebrow tattoos", "near Alexandra Headland"],
    heroLead:
      "Natural-looking brows for Alex locals, from my Buderim studio a short drive up from the headland. Every brow is mapped before treatment.",
    heroImage: PHOTOS.healed.src,
    heroAlt: PHOTOS.healed.alt,
    introTitle: "Natural brows for an active life",
    introParas: [
      "Between surfing, walking the esplanade and training, Alexandra Headland clients often want brows that look natural with or without makeup. Hair-stroke techniques are popular for that, because they create fine lines that sit like brow hairs.",
      "Nano realism places those strokes by machine and feather touch microblading by hand. Powder brows give a soft, filled finish instead, and combination brows blend both. Pick a technique below to compare, and we'll settle on yours at your consultation.",
    ],
    ...CHAIR,
    localTitle: "Pausing training while you heal",
    localParas: [
      "If you train or surf most days, plan a short break. During early healing, exercise, swimming, spas and sun exposure should be avoided, because sweat, water and sun all work against freshly tattooed skin.",
      "You'll take home written aftercare for the healing stage, and a follow-up visit about six to eight weeks later lets me refine the healed brows. The studio is a short drive from Alexandra Headland, so that second visit is easy to fit in.",
    ],
    localTicks: [
      "Hair-stroke, powder and combination brows",
      "Exercise and swimming paused during early healing",
      "Follow-up six to eight weeks later",
    ],
    workImages: [PHOTOS.feathered, PHOTOS.tail, PHOTOS.arch],
    faq: [
      {
        q: "When can I exercise after an eyebrow tattoo?",
        a: "Exercise, swimming, spas and sun exposure should be avoided during early healing. Your written aftercare sets out the timing, and you can read the full guide on the aftercare page before you book.",
      },
      {
        q: "Which brow technique looks the most natural?",
        a: "Hair-stroke techniques, such as nano realism and feather touch microblading, create fine hair-like lines that mimic natural brow hair. Powder brows give a softer, filled look, and combination brows blend the two. The best choice depends on your skin, any previous tattoo work and the look you want.",
      },
      {
        q: "Do I need a consultation before my eyebrow tattoo?",
        a: "Yes. Every treatment starts with a consultation, where I assess your natural brow growth, skin type, symmetry and pigment tone and map the shape. Call 0414 502 807 to arrange yours.",
      },
    ],
  },
];

/** Landing page URLs follow "/{service}-in-{suburb}", e.g. /eyebrow-tattoos-in-mooloolaba. */
export const BROW_AREA_PREFIX = "eyebrow-tattoos-in-";
export const browAreaHref = (slug: string) => `/${BROW_AREA_PREFIX}${slug}`;

/** "in Buderim", "near Mooloolaba": the studio is in Buderim, every other suburb is nearby. */
export const browAreaPhrase = (a: Pick<BrowArea, "name" | "slug">) =>
  `${a.slug === "buderim" ? "in" : "near"} ${a.name}`;
