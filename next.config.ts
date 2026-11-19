import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  // Older addresses the previous site still redirects and Google still lists; keep sending them on.
  async redirects() {
    return [
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/eyebrows", destination: "/eyebrow-tattoos", permanent: true },
      { source: "/eye-liners", destination: "/eyeliner-tattoos", permanent: true },
      { source: "/lips", destination: "/lip-tattoos", permanent: true },
      { source: "/testimonials", destination: "/#testimonials", permanent: true },
      {
        source: "/locations/eyebrow-cosmetic-tattoo-buderim",
        destination: "/locations/cosmetic-tattooing-buderim",
        permanent: true,
      },
      // The eyebrow suburb pages first went live under /eyebrow-tattoos/{suburb}.
      {
        source: "/eyebrow-tattoos/:suburb(buderim|maroochydore|mooloolaba|alexandra-headland)",
        destination: "/eyebrow-tattoos-in-:suburb",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
