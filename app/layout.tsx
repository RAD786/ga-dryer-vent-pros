import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCallBar } from "@/components/MobileCallBar";
import { JsonLd } from "@/components/JsonLd";
import { MicrosoftClarity } from "@/components/MicrosoftClarity";
import { ThirdPartyScripts } from "@/components/ThirdPartyScripts";
import { absoluteUrl, siteConfig } from "@/data/site";
import { organizationSchema } from "@/data/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Georgia Dryer Vent Pros | Dryer Vent Services Across Georgia",
    template: "%s | Georgia Dryer Vent Pros"
  },
  description:
    "Connect with local dryer vent service providers serving select Georgia communities. Request cleaning, repair, installation, inspection, bird nest removal, rerouting, and commercial dryer vent service.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: "Georgia Dryer Vent Pros | Dryer Vent Services Across Georgia",
    description: siteConfig.tagline,
    url: absoluteUrl(),
    images: [
      {
        url: absoluteUrl("/images/home-hero.png"),
        width: 1680,
        height: 945,
        alt: "Georgia dryer vent service provider connection"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Georgia Dryer Vent Pros | Dryer Vent Services Across Georgia",
    description: siteConfig.tagline,
    images: [absoluteUrl("/images/home-hero.png")]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const shouldLoadGoogleAnalytics = process.env.NODE_ENV === "production" && gaMeasurementId;

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
        <MicrosoftClarity />
        <AnalyticsEvents />
        {shouldLoadGoogleAnalytics ? <GoogleAnalytics gaId={gaMeasurementId} /> : null}
      </body>
    </html>
  );
}
