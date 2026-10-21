export const PHONE = "0414 502 807";
export const PHONE_HREF = "tel:0414502807";
export const EMAIL = "onpointcosmetictattoo@gmail.com";
export const EMAIL_HREF = "mailto:onpointcosmetictattoo@gmail.com";

// External profiles / maps (open in new tab)
export const EXTERNAL = {
  facebook: "https://www.facebook.com/onpointcosmetictattoo/",
  instagram: "https://www.instagram.com/onpointcosmetictattoostudio/",
  localsearch:
    "https://www.localsearch.com.au/profile/on-point-cosmetic-tattoo-studio/buderim-qld/MaKp",
  google: "https://maps.app.goo.gl/8NpoKzz7PLJGnELG6",
  maps: "https://maps.app.goo.gl/UoricJLVFQzHepTm7",
} as const;

// Internal routes (built locally)
export const ROUTES = {
  home: "/",
  eyebrows: "/eyebrow-tattoos",
  eyeliners: "/eyeliner-tattoos",
  lips: "/lip-tattoos",
  afterCare: "/after-care",
  contact: "/contact",
  // Booking buttons land on the message form, even when clicked on the Contact page itself.
  book: "/contact#book",
  locations: "/locations",
} as const;

// Homepage section anchors (work from any page via "/#...")
export const ANCHORS = {
  top: "/#top",
  treatments: "/#treatments",
  calendar: "/#your-visit",
  about: "/#about",
  testimonials: "/#testimonials",
  faq: "/#questions",
  contact: "/#book",
} as const;

// Desktop navbar: the three treatments sit under one "Services" menu.
export const SERVICE_LINKS = [
  { label: "Brows", href: ROUTES.eyebrows, note: "Hair strokes, powder, combination" },
  { label: "Eyeliner", href: ROUTES.eyeliners, note: "Lash line enhancement or designer" },
  { label: "Lips", href: ROUTES.lips, note: "Liner, blend or full colour" },
];

export const BAR_LINKS = [
  { label: "Aftercare", href: ROUTES.afterCare },
  { label: "About Lisa", href: ANCHORS.about },
];

// Phone menu: every page, flat.
export const NAV_LINKS = [
  { label: "Brows", href: ROUTES.eyebrows },
  { label: "Eyeliner", href: ROUTES.eyeliners },
  { label: "Lips", href: ROUTES.lips },
  { label: "Aftercare", href: ROUTES.afterCare },
  { label: "About Lisa", href: ANCHORS.about },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: EXTERNAL.facebook },
  { label: "Instagram", href: EXTERNAL.instagram },
  { label: "Google reviews", href: EXTERNAL.google },
  { label: "Localsearch", href: EXTERNAL.localsearch },
];

export const HOURS = [
  { days: "Mon – Fri", time: "9am – 5pm" },
  { days: "Sat – Sun", time: "By appointment" },
];
