// The suburb pages under /locations. The copy is the studio's own, carried over word for word from
// the previous site so these pages keep what Google already ranks them for.

export interface AreaTreatment {
  title: string;
  text: string;
  href: string;
  linkLabel: string;
  image: string;
  imageAlt: string;
}

export interface Area {
  slug: string;
  name: string;
  /** <title> and meta description, as on the previous site. */
  metaTitle: string;
  metaDescription: string;
  heroTitle: [string, string];
  heroLead: string;
  heroImage: string;
  heroAlt: string;
  introTitle: string;
  introParas: string[];
  treatments: [AreaTreatment, AreaTreatment, AreaTreatment];
}

const BROWS = { href: "/eyebrow-tattoos", linkLabel: "About eyebrow tattoos" };
const LINER = { href: "/eyeliner-tattoos", linkLabel: "About eyeliner tattoos" };
const LIPS = { href: "/lip-tattoos", linkLabel: "About lip tattoos" };

export const AREAS: Area[] = [
  {
    slug: "cosmetic-tattooing-buderim",
    name: "Buderim",
    metaTitle: "Cosmetic Tattooing in Buderim | On Point Cosmetic Tattoo Studio",
    metaDescription:
      "On Point Cosmetic Tattoo Studio provides cosmetic tattooing in Buderim by a certified artist. Call 0414 502 807 today to book a consultation.",
    heroTitle: ["Cosmetic tattoo", "in Buderim"],
    heroLead:
      "Eyebrow, eyeliner and lip tattoos from Lisa's studio in Buderim, welcoming clients from across the Sunshine Coast.",
    heroImage: "/images/sub/loc-noosa.jpg",
    heroAlt: "Rainforest waterfall in the Buderim hinterland",
    introTitle: "Visit my Buderim studio",
    introParas: [
      "On Point Cosmetic Tattoo Studio provides cosmetic tattooing in Buderim from my studio, welcoming clients from Buderim and nearby Sunshine Coast suburbs including Noosa and Caloundra.",
      "I offer eyebrow tattoos, eyeliner tattoos and lip tattoos, each treatment beginning with a consultation and mapped design. During this stage, I'll review skin type, natural features, pigment tone and preparation requirements.",
    ],
    treatments: [
      {
        ...BROWS,
        title: "Eyebrow tattooing in Buderim",
        text: "I provide eyebrow tattoos in Buderim using mapped design and technique selection. Options include feather touch brows, nano realism hair strokes, powder brows and combination brows. During your consultation, I assess natural brow growth, symmetry and pigment tone before confirming the agreed approach.",
        image: "/images/gallery/brows-2.jpg",
        imageAlt: "Freshly tattooed hair-stroke brows on a client with green eyes",
      },
      {
        ...LINER,
        title: "Eyeliner tattooing in Buderim",
        text: "My eyeliner tattoos in Buderim involve lash line mapping and pigment placement. I provide eyeliner enhancement and designer eyeliner options depending on lid space and personal preference. Each tattoo begins with a consultation to review thickness, taper and pigment tone before treatment.",
        image: "/images/gallery/liner-2.jpg",
        imageAlt: "Fine eyeliner along the upper and lower lash lines",
      },
      {
        ...LIPS,
        title: "Lip tattooing in Buderim",
        text: "My cosmetic tattoo artist provides lip tattoos in Buderim, with options such as lip liner tattoos, lip blend tattoos and full lip tattoos. During your consultation, I review natural lip tone, symmetry and preparation guidelines prior to scheduling treatment.",
        image: "/images/gallery/lips-3.jpg",
        imageAlt: "Full lip colour in coral, close up",
      },
    ],
  },
  {
    slug: "cosmetic-tattooing-noosa",
    name: "Noosa",
    metaTitle: "Cosmetic Tattooing Near Noosa | On Point Cosmetic Tattoo Studio",
    metaDescription:
      "On Point Cosmetic Tattoo Studio offers cosmetic tattooing near Noosa from our Buderim studio. Call 0414 502 807 to arrange your consultation.",
    heroTitle: ["Cosmetic tattoo", "near Noosa"],
    heroLead: "Cosmetic tattoo studio based in Buderim. Just a 30 minute drive.",
    heroImage: "/images/sub/loc-buderim.jpg",
    heroAlt: "Clear water and rocks along the coast near Noosa",
    introTitle: "Visit my studio",
    introParas: [
      "On Point Cosmetic Tattoo Studio provides cosmetic tattooing near Noosa from my Buderim studio. I offer eyebrow tattoos, eyeliner tattoos and lip tattoos. Each appointment begins with a discussion of skin type, facial features, pigment tone and preparation requirements before booking.",
      "Cosmetic tattoo artist Lisa follows defined planning processes and hygiene protocols suited to cosmetic tattoo procedures.",
    ],
    treatments: [
      {
        ...BROWS,
        title: "Eyebrow tattooing near Noosa",
        text: "Clients seeking eyebrow tattoos in Noosa visit my Buderim studio for brow mapping and technique selection. I provide feather touch brows, nano realism hair strokes, powder brows and combination brows. During your consultation, I assess natural brow growth, symmetry and pigment tone before confirming the agreed method.",
        image: "/images/gallery/brows-6.jpg",
        imageAlt: "Shaded powder brow framing a blue-green eye",
      },
      {
        ...LINER,
        title: "Eyeliner tattooing near Noosa",
        text: "I offer eyeliner tattoos near Noosa at my Buderim studio, where I map the lash line and review thickness and placement before treatment. I provide eyeliner enhancement and designer eyeliner options based on lid structure and personal preference. Each eyeliner tattoo begins with a consultation and pigment discussion before I get started.",
        image: "/images/gallery/liner-4.jpg",
        imageAlt: "Designer eyeliner with a soft smoked wing",
      },
      {
        ...LIPS,
        title: "Lip tattooing near Noosa",
        text: "When it comes to lip tattoos near Noosa, you can travel to my Buderim studio for mapped lip border planning and pigment selection. I offer lip liner tattoo, lip blend tattoo and full lip tattoo techniques. During your consultation, I review natural lip tone, symmetry and preparation requirements prior to booking.",
        image: "/images/gallery/lips-9.jpg",
        imageAlt: "Before and after: pale lips, then full lip colour in red",
      },
    ],
  },
  {
    slug: "cosmetic-tattooing-caloundra",
    name: "Caloundra",
    metaTitle: "Cosmetic Tattooing Near Caloundra | On Point Cosmetic Tattoo Studio",
    metaDescription:
      "On Point Cosmetic Tattoo Studio provides cosmetic tattooing near Caloundra from our Buderim studio. Call 0414 502 807 to book your consultation.",
    heroTitle: ["Cosmetic tattoo", "near Caloundra"],
    heroLead: "Cosmetic tattoo studio based in Buderim. Just a 30 minute drive.",
    heroImage: "/images/sub/loc-caloundra.jpg",
    heroAlt: "Aerial view of Caloundra and the Pumicestone Passage",
    introTitle: "Your Sunshine Coast cosmetic tattoo studio",
    introParas: [
      "On Point Cosmetic Tattoo Studio provides cosmetic tattooing near Caloundra from my Buderim studio. My services include eyebrow tattoos, eyeliner tattoos and lip tattoos.",
      "Cosmetic tattoo procedures require planning, pigment selection and discussion of preparation guidelines before booking. During consultation, I'll review skin type, natural features and previous cosmetic tattoo work where relevant.",
      "Certified cosmetic tattoo artist Lisa follows defined planning processes and hygiene protocols.",
    ],
    treatments: [
      {
        ...BROWS,
        title: "Eyebrow tattooing near Caloundra",
        text: "If you're seeking eyebrow tattoos in Caloundra, visit my Buderim studio for mapped brow design and technique selection. I provide feather touch brows, nano realism hair strokes, powder brows and combination brows. During your consultation, I assess natural brow growth, symmetry and pigment tone before confirming the selected approach. I complete eyebrow tattoos using premium cosmetic tattoo equipment.",
        image: "/images/gallery/brows-8.jpg",
        imageAlt: "Dense hair-stroke brow, close up",
      },
      {
        ...LINER,
        title: "Eyeliner tattooing near Caloundra",
        text: "For eyeliner tattoos near Caloundra, you can book at my Buderim studio where I map the lash line and review thickness, taper and placement before treatment. I offer eyeliner enhancement and designer eyeliner options depending on lid structure and preference. Each eyeliner tattoo begins with consultation and pigment discussion.",
        image: "/images/gallery/liner-8.jpg",
        imageAlt: "Lash line enhancement on both eyes, close up",
      },
      {
        ...LIPS,
        title: "Lip tattooing near Caloundra",
        text: "Considering a lip tattoo in Caloundra? Travel to my Buderim studio for structured lip border mapping and pigment selection. I provide lip liner tattoo, lip blend tattoo and full lip tattoo techniques. During your consultation, I review natural lip tone, symmetry and preparation requirements prior to booking. I complete lip tattoos following hygiene protocols appropriate for cosmetic tattoo procedures.",
        image: "/images/gallery/lips-6.jpg",
        imageAlt: "Healed lip blush in a natural nude pink",
      },
    ],
  },
];

export const areaHref = (slug: string) => `/locations/${slug}`;
