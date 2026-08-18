import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SpectrumCursor } from "@/components/SpectrumCursor";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HERR Design Collective · Creative Business Design, Zurich",
  description:
    "Zurich-based design consultancy working at the intersection of strategy, relationships and design. We make business transformation tangible.",
  metadataBase: new URL("https://herrdesigncollective.com"),
  openGraph: {
    title: "HERR Design Collective · Creative Business Design, Zurich",
    description:
      "Zurich-based design consultancy working at the intersection of strategy, relationships and design. We make business transformation tangible.",
    url: "https://herrdesigncollective.com",
    siteName: "HERR Design Collective",
    locale: "en_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HERR Design Collective · Creative Business Design, Zurich",
    description:
      "Zurich-based design consultancy working at the intersection of strategy, relationships and design. We make business transformation tangible.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HERR Design Collective GmbH",
  url: "https://herrdesigncollective.com",
  logo: "https://herrdesigncollective.com/icon.png",
  email: "contact@herrdesigncollective.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hadlaubstrasse 142",
    postalCode: "8006",
    addressLocality: "Zürich",
    addressCountry: "CH",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-ink text-warm-white font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-warm-white selection:text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <SpectrumCursor />
        <Nav />
        <div className="flex-1 w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
