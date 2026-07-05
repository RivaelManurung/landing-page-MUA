import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import rawData from "@/data/data.json";
import type { LandingData } from "@/lib/types";

const data = rawData as LandingData;

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const siteTitle = `${data.site.name} — Professional Makeup Artist ${data.site.location.split(",")[0]}`;

export const metadata: Metadata = {
  metadataBase: new URL(data.site.url),
  title: siteTitle,
  description: data.site.description,
  keywords: [
    "makeup artist",
    "MUA",
    "makeup pengantin",
    "makeup wisuda",
    "makeup photoshoot",
    data.site.location,
  ],
  openGraph: {
    title: siteTitle,
    description: data.site.description,
    url: data.site.url,
    siteName: data.site.name,
    locale: "id_ID",
    type: "website",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: data.site.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: `${data.site.name} Makeup Artist`,
  description: data.site.description,
  url: data.site.url,
  telephone: `+${data.site.whatsapp}`,
  email: data.site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: data.site.location.split(",")[0],
    addressCountry: "ID",
  },
  priceRange: "Rp 650.000 - Rp 2.500.000",
  makesOffer: data.packages.items.map((pkg) => ({
    "@type": "Offer",
    name: `${pkg.name} — ${pkg.subtitle}`,
    price: pkg.price,
    priceCurrency: "IDR",
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${fraunces.variable} ${outfit.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // Safe: serialized from static local data.json, no user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
