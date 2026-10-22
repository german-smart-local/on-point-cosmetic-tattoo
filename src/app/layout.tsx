import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ActionBar } from "@/components/ActionBar";
import { Reveals } from "@/components/Reveals";
import { CITATIONS, EMAIL, EXTERNAL, PHONE, SITE_NAME, SITE_URL } from "@/lib/links";

const TELEPHONE = `+61 ${PHONE.slice(1)}`;

// Structured data for Google: the website, the organisation behind it and the studio as a local business,
// tied together by @id. Kept in step with the footer (phone, email, hours, profiles).
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en-AU",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo-full.png`,
        width: 1720,
        height: 667,
      },
      email: EMAIL,
      telephone: TELEPHONE,
      foundingDate: "2016",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: TELEPHONE,
        email: EMAIL,
        areaServed: "AU",
        availableLanguage: "English",
      },
      sameAs: CITATIONS,
    },
    {
      // BeautySalon is a LocalBusiness subtype; both are listed so either reads clearly in validators.
      "@type": ["LocalBusiness", "BeautySalon"],
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      description:
        "Certified cosmetic tattoo studio in Buderim on the Sunshine Coast: eyebrow, eyeliner and lip tattoos, each starting with a consultation and mapped design.",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo-full.png`,
      image: `${SITE_URL}/seo/og-image.jpg`,
      telephone: TELEPHONE,
      email: EMAIL,
      foundingDate: "2016",
      parentOrganization: { "@id": `${SITE_URL}/#organization` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buderim",
        addressRegion: "QLD",
        postalCode: "4556",
        addressCountry: "AU",
      },
      areaServed: [
        { "@type": "City", name: "Buderim" },
        { "@type": "City", name: "Noosa" },
        { "@type": "City", name: "Caloundra" },
        { "@type": "AdministrativeArea", name: "Sunshine Coast" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
      ],
      hasMap: EXTERNAL.googleProfile,
      sameAs: CITATIONS,
    },
  ],
};

// Bodoni echoes the hairline capitals of the On Point logo; Jost matches its spaced sans subtitle.
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Cosmetic Tattooing in Sunshine Coast | On Point Cosmetic Tattoo Studio",
  description:
    "On Point Cosmetic Tattoo Studio offers cosmetic tattooing on the Sunshine Coast by a certified artist. Call 0414 502 807 to book your consultation today.",
  // /favicon.ico comes from src/app/favicon.ico (16, 32 and 48px); these add the larger sizes.
  icons: {
    icon: [
      { url: "/seo/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/seo/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: { url: "/seo/apple-touch-icon.png", sizes: "180x180" },
  },
  openGraph: {
    title: "Cosmetic Tattooing in Sunshine Coast | On Point Cosmetic Tattoo Studio",
    description:
      "On Point Cosmetic Tattoo Studio offers cosmetic tattooing on the Sunshine Coast by a certified artist.",
    images: [{ url: "/seo/og-image.jpg", width: 1200, height: 630, alt: SITE_NAME }],
    type: "website",
    siteName: SITE_NAME,
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${bodoni.variable} ${jost.variable}`} suppressHydrationWarning>
      <head>
        {/* The hero's brow map only hides its lines (to draw them) once this class is set.
            Opening or reloading a page always starts at the top (no remembered scroll position);
            links to a section such as /contact#book still land on that section. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');if('scrollRestoration' in history)history.scrollRestoration='manual';",
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c") }}
        />
        <Header />
        <main id="top">{children}</main>
        <Footer />
        <ActionBar />
        <Reveals />
      </body>
    </html>
  );
}
