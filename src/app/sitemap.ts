import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/links";
import { AREAS, areaHref } from "@/lib/areas";

// Every page route; /contact#book is the same page as /contact, so it is left out.
const PAGES = [
  ROUTES.home,
  ROUTES.eyebrows,
  ROUTES.eyeliners,
  ROUTES.lips,
  ROUTES.afterCare,
  ROUTES.gallery,
  ROUTES.contact,
  ROUTES.locations,
  ...AREAS.map((a) => areaHref(a.slug)),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
