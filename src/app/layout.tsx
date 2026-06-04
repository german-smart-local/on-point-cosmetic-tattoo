import type { Metadata } from "next";
import { Montserrat, Source_Sans_3, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
    <html
      lang="en"
      className={`${montserrat.variable} ${sourceSans.variable} ${josefin.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main id="top" className="flex-1 pt-[136px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
