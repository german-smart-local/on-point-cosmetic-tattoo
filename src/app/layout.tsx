import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ActionBar } from "@/components/ActionBar";
import { Reveals } from "@/components/Reveals";

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
  metadataBase: new URL("https://www.onpointcosmetictattoo.com.au"),
  title: "Cosmetic Tattooing in Sunshine Coast | On Point Cosmetic Tattoo Studio",
  description:
    "On Point Cosmetic Tattoo Studio offers cosmetic tattooing on the Sunshine Coast by a certified artist. Call 0414 502 807 to book your consultation today.",
  icons: {
    icon: "/seo/favicon.ico",
    apple: "/seo/apple-touch-icon.png",
  },
  openGraph: {
    title: "Cosmetic Tattooing in Sunshine Coast | On Point Cosmetic Tattoo Studio",
    description:
      "On Point Cosmetic Tattoo Studio offers cosmetic tattooing on the Sunshine Coast by a certified artist.",
    images: ["/seo/og-image.png"],
    type: "website",
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
        {/* The hero's brow map only hides its lines (to draw them) once this class is set. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <Header />
        <main id="top">{children}</main>
        <Footer />
        <ActionBar />
        <Reveals />
      </body>
    </html>
  );
}
