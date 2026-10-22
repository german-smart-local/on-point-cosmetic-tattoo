import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/links";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "On Point",
    start_url: "/",
    display: "browser",
    background_color: "#f7f3ea",
    theme_color: "#f7f3ea",
    icons: [
      { src: "/seo/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/seo/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
