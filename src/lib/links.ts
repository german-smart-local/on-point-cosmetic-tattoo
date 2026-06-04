// Centralised link targets scraped from onpointcosmetictattoo.com.au

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
  locations: "/locations",
} as const;

// Homepage section anchors (work from any page via "/#...")
export const ANCHORS = {
  top: "/#top",
  about: "/#about",
  services: "/#services",
  testimonials: "/#testimonials",
  contact: "/#contact",
} as const;
