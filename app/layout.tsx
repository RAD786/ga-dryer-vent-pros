import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCallBar } from "@/components/MobileCallBar";
import { JsonLd } from "@/components/JsonLd";
import { ThirdPartyScripts } from "@/components/ThirdPartyScripts";
import { absoluteUrl, siteConfig } from "@/data/site";
import { organizationSchema } from "@/data/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Georgia Dryer Vent Pros | Dryer Vent Cleaning in Georgia",
    template: "%s | Georgia Dryer Vent Pros"
  },
  description:
    "Connect with local dryer vent cleaning providers serving select Georgia communities. Request service for clogged vents, inspections, lint buildup, and safety cleaning.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: "Georgia Dryer Vent Pros",
    description: siteConfig.tagline,
    url: siteConfig.url,
    images: [
      {
        url: "/dryer-vent-service-visual.svg",
        width: 960,
        height: 640,
        alt: "Dryer vent cleaning service visual"
      }
    ]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-bold"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileCallBar />
        <ThirdPartyScripts />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteConfig.name,
            url: absoluteUrl(),
            potentialAction: {
              "@type": "SearchAction",
              target: `${absoluteUrl("/service-areas")}?q={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          }}
        />
        <JsonLd data={organizationSchema()} />
      </body>
    </html>
  );
}
