import type { Metadata } from "next";
import { Cormorant_Garamond, Lora, Caveat, Cinzel } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Royal Treasure — Uncovering Stories, Preserved Through Time",
  description:
    "Royal Treasure is an Indian luxury heritage brand preserving extraordinary objects, spaces, and stories. Explore antiques, heritage furniture, Rajasthani architecture, and bespoke interior design.",
  keywords:
    "Royal Treasure, heritage antiques, Rajasthani heritage, Indian antiques, luxury furniture, interior design, heritage preservation, Jaipur antiques",
  openGraph: {
    title: "Royal Treasure — Uncovering Stories, Preserved Through Time",
    description:
      "A journey through objects, spaces, stories and memories collected across time.",
    type: "website",
    locale: "en_IN",
  },
};

import Preloader from "@/components/common/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lora.variable} ${caveat.variable} ${cinzel.variable}`}>
      <body style={{ fontFamily: "var(--font-lora, 'Lora', serif)" }}>
        <Preloader />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
