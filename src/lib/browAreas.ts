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
  {
    slug: "mountain-creek",
    name: "Mountain Creek",
    metaTitle: "Eyebrow Tattoos Near Mountain Creek | On Point Cosmetic Tattoo Studio",
    metaDescription:
      "Eyebrow tattoos near Mountain Creek from my Buderim studio, just up the road. Hair strokes, microblading, powder and combination brows. Call 0414 502 807.",
    heroTitle: ["Eyebrow tattoos", "near Mountain Creek"],
    heroLead:
      "Brows that are done before you're out the door, from my Buderim studio just up the road from Mountain Creek. Mapped to your face, then tattooed.",
    heroImage: PHOTOS.tail.src,
    heroAlt: PHOTOS.tail.alt,
    introTitle: "One less thing on busy mornings",
    introParas: [
      "Between school drop-offs, work and sport, a lot of my Mountain Creek clients simply want their brows sorted. An eyebrow tattoo means you wake up with a shape already in place, with no pencil, gel or powder to apply.",
      "I offer nano realism hair strokes, feather touch microblading, powder brows and combination brows. At your consultation I'll look at your natural brow growth, skin type and symmetry, then map a shape that suits your face. Pick a technique below to compare.",
    ],
    ...DESIGN,
    localTitle: "Easy to fit into your week",
    localParas: [
      "The studio is a short drive from Mountain Creek, so the consultation, the treatment and the follow-up six to eight weeks later can each slot in around school hours.",
      "I'm in the studio Monday to Friday, 9am to 5pm, with weekends by appointment. Fresh brows look stronger at first and soften as the skin heals, so I'll explain what to expect over the following weeks before you book.",
    ],
    localTicks: [
      "A short drive from Mountain Creek",
      "Weekday appointments, weekends by arrangement",
      "Follow-up six to eight weeks later",
    ],
    workImages: [PHOTOS.feathered, PHOTOS.arch, PHOTOS.healed],
    faq: [
      {
        q: "How long does an eyebrow tattoo last?",
        a: "Eyebrow tattoos are semi-permanent and fade gradually. How long yours lasts depends on your skin type, lifestyle, sun exposure and the pigment chosen. Most treatments include a follow-up visit, and many people book a refresh over time.",
      },
      {
        q: "Will I still need to fill in my brows?",
        a: "The aim is a mapped shape that suits your face without daily pencil or powder. Once healed, many clients find they can skip brow products altogether, though you can still add makeup on top for an evening look if you like.",
      },
      {
        q: "What happens at the consultation?",
        a: "I assess your natural brow growth, skin type, symmetry and the pigment tone that will suit you, talk through the techniques and explain how to prepare. The shape is mapped before any pigment goes in, so you can see and agree on it first.",
      },
    ],
  },
  {
    slug: "sippy-downs",
    name: "Sippy Downs",
    metaTitle: "Eyebrow Tattoos Near Sippy Downs | On Point Cosmetic Tattoo Studio",
    metaDescription:
      "Eyebrow tattoos near Sippy Downs at my Buderim studio. First brow tattoo? Every treatment starts with a consultation and a mapped design. Call 0414 502 807.",
    heroTitle: ["Eyebrow tattoos", "near Sippy Downs"],
    heroLead:
      "First brow tattoo? Sippy Downs clients start with a consultation at my Buderim studio, a short drive away, and see their brows mapped before anything is tattooed.",
    heroImage: PHOTOS.feathered.src,
    heroAlt: PHOTOS.feathered.alt,
    heroMap: FEATHERED_MAP,
    introTitle: "Your first eyebrow tattoo",
    introParas: [
      "Many of the Sippy Downs clients who visit me have never had cosmetic tattooing before. That's why every brow starts with a consultation, where I explain each technique, look at your natural brow growth and skin type, and answer your questions before anything is booked.",
      "Hair-stroke techniques like nano realism and feather touch microblading create fine lines that look like brow hairs. Powder brows give a soft, filled finish, and combination brows blend both. Pick one below to see the difference.",
    ],
    ...CHAIR,
    localTitle: "Getting ready for your appointment",
    localParas: [
      "For the 48 hours before your treatment, skip alcohol, coffee and any blood thinners that aren't prescribed. In the week before, avoid tanning and long sun exposure, and keep retinol away from the brow area.",
      "Afterwards, you'll take home written aftercare for the healing period, and a follow-up visit six to eight weeks later lets me refine the result. The studio is a short drive from Sippy Downs, so both visits are easy to plan around classes or work.",
    ],
    localTicks: [
      "No alcohol, coffee or non-prescribed blood thinners for 48 hours before",
      "No tanning or long sun exposure the week before",
      "No retinol on the brow area",
    ],
    workImages: [PHOTOS.arch, PHOTOS.tail, PHOTOS.healed],
    faq: [
      {
        q: "I've never had a brow tattoo. Where do I start?",
        a: "Start with a consultation. I'll explain the techniques, assess your brows and skin, and talk you through preparation, healing and aftercare, so you know exactly what's involved before you book. Call 0414 502 807 to arrange it.",
      },
      {
        q: "What's the difference between microblading and nano brows?",
        a: "Both create fine hair-like strokes. Feather touch microblading places them by hand for a soft, feathered brow, while nano realism places them by machine. Which suits you depends on your skin, any previous tattoo work and the look you want.",
      },
      {
        q: "Can I choose a natural-looking shape?",
        a: "Yes. The shape is mapped to your own features first, from where the brow starts to the arch and tail, and you see and agree on it before treatment. Pigment tone is chosen to suit your colouring too.",
      },
    ],
  },
  {
    slug: "warana",
    name: "Warana",
    metaTitle: "Eyebrow Tattoos Near Warana | On Point Cosmetic Tattoo Studio",
    metaDescription:
      "Eyebrow tattoos near Warana, including refreshes of faded brows, at my Buderim studio. Hair strokes, powder and combination brows. Call 0414 502 807.",
    heroTitle: ["Eyebrow tattoos", "near Warana"],
    heroLead:
      "New brows or a refresh of faded ones, for Warana clients at my Buderim studio. Every brow is reviewed and mapped before treatment.",
    heroImage: PHOTOS.healed.src,
    heroAlt: PHOTOS.healed.alt,
    introTitle: "New brows, or a refresh",
    introParas: [
      "Some of my Warana clients are booking their first eyebrow tattoo. Others had brows done years ago and have watched them soften and fade. Either way, we start with a consultation, where I look at your natural brow growth, skin type and any existing pigment.",
      "From there I map the shape and recommend a technique: nano realism hair strokes, feather touch microblading, powder brows or combination brows. Pick one below to compare the finishes.",
    ],
    ...DESIGN,
    localTitle: "Why brows fade, and what helps",
    localParas: [
      "Eyebrow tattoos are semi-permanent, so fading is expected. How quickly it happens depends on your skin type, lifestyle, sun exposure and the pigment used. Living near the beach, sun is often the biggest factor.",
      "After your first treatment, a follow-up visit six to eight weeks later lets me refine the healed result. Over time, many people book a refresh to keep their brows looking defined. The studio is a short drive from Warana, so it's simple to keep up with.",
    ],
    localTicks: [
      "Existing brow tattoos reviewed at consultation",
      "Follow-up six to eight weeks after treatment",
      "Refreshes as pigment fades over time",
    ],
    workImages: [PHOTOS.feathered, PHOTOS.tail, PHOTOS.arch],
    faq: [
      {
        q: "My old brow tattoo has faded. Can you refresh it?",
        a: "Bring it to a consultation. I'll look at the existing pigment, its shape and your skin, then explain what's possible, whether that's refreshing the current brow or mapping a new one. The approach depends on skin condition, the previous work and your preference.",
      },
      {
        q: "How often will I need a refresh?",
        a: "It varies from person to person. Skin type, lifestyle, sun exposure and the pigment chosen all affect how quickly brows fade, so there's no set timetable. When your brows start to look soft or patchy, that's a good time to call.",
      },
      {
        q: "Can I change the shape of my brows?",
        a: "The shape is mapped fresh at your consultation, based on your features as they are now, and you approve it before treatment. If you have existing pigment, I'll explain how it affects the options for a new shape.",
      },
    ],
  },
  {
    slug: "bokarina",
    name: "Bokarina",
    metaTitle: "Eyebrow Tattoos Near Bokarina | On Point Cosmetic Tattoo Studio",
    metaDescription:
      "Eyebrow tattoos near Bokarina at my Buderim studio, with weekday and by-appointment weekend times. Hair strokes, powder and combination brows. Call 0414 502 807.",
    heroTitle: ["Eyebrow tattoos", "near Bokarina"],
    heroLead:
      "Brows that stay put through long days and shift work, for Bokarina clients at my Buderim studio. Mapped first, then tattooed to suit you.",
    heroImage: PHOTOS.arch.src,
    heroAlt: PHOTOS.arch.alt,
    introTitle: "Brows that last the whole shift",
    introParas: [
      "If you work long days or rotating shifts, brow makeup rarely makes it to the end. An eyebrow tattoo gives Bokarina clients a set shape that stays in place, whether you're starting at dawn or finishing late.",
      "I offer nano realism hair strokes, feather touch microblading, powder brows and combination brows, each planned with brow mapping at a consultation first. Pick a technique below to see how it looks.",
    ],
    ...CHAIR,
    localTitle: "Booking around your roster",
    localParas: [
      "The studio is open Monday to Friday, 9am to 5pm, and Saturday and Sunday appointments are available by arrangement, so there's usually a time that fits around your shifts.",
      "During early healing, exercise, swimming, spas and sun exposure should be avoided, so a run of quieter days helps. You'll take home written aftercare, and a follow-up visit six to eight weeks later lets me refine the healed brows.",
    ],
    localTicks: [
      "Weekdays 9am to 5pm, weekends by appointment",
      "Written aftercare for the healing period",
      "Follow-up six to eight weeks later",
    ],
    workImages: [PHOTOS.feathered, PHOTOS.tail, PHOTOS.healed],
    faq: [
      {
        q: "Does an eyebrow tattoo hurt?",
        a: "Most people feel light scratching or pressure rather than pain. A topical numbing product is applied before and during the procedure to reduce sensation. How it feels varies with your skin, pain tolerance and the technique used.",
      },
      {
        q: "Can I book outside business hours?",
        a: "Weekday appointments run from 9am to 5pm, and weekend appointments are available by arrangement. Call 0414 502 807 and we'll find a time that works around your roster.",
      },
      {
        q: "Can I go to work the day after?",
        a: "Most people carry on as normal, but fresh brows look stronger than the healed result while the skin settles. During early healing, avoid exercise, swimming, spas and sun exposure, and follow the written aftercare you take home.",
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
