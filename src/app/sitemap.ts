import type { MetadataRoute } from "next";
import { GALLERY_ENABLED, ROUTES, SITE_URL } from "@/lib/links";
import { AREAS, areaHref } from "@/lib/areas";
import { BROW_AREAS, browAreaHref } from "@/lib/browAreas";

// Every page route; /contact#book is the same page as /contact, so it is left out.
const PAGES = [
  ROUTES.home,
  ROUTES.eyebrows,
  ...BROW_AREAS.map((a) => browAreaHref(a.slug)),
  ROUTES.eyeliners,
  ROUTES.lips,
  ROUTES.afterCare,
  ...(GALLERY_ENABLED ? [ROUTES.gallery] : []),
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
