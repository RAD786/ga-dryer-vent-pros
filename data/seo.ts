import type { Metadata } from "next";
import { activeCityTerritories } from "@/data/territories";
import { absoluteUrl, siteConfig } from "@/data/site";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
};

export function pageSeo({ title, description, path, image = "/dryer-vent-service-visual.svg", noIndex = false }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path)
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      images: [
        {
          url: absoluteUrl(image),
          width: 960,
          height: 640,
          alt: "Dryer vent cleaning provider connection service"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)]
    }
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: absoluteUrl(),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    logo: absoluteUrl("/images/logo-transparent.png"),
    description:
      "Georgia Dryer Vent Pros connects homeowners and property owners with local dryer vent service providers for cleaning, repair, installation, inspection, bird nest removal, rerouting, and commercial dryer vent service in select Georgia communities.",
    areaServed: activeCityTerritories.map((city) => ({
      "@type": "City",
      name: `${city.city}, Georgia`
    }))
  };
}

export function dryerVentServiceSchema(
  path = "/dryer-vent-cleaning",
  options: {
    name?: string;
    serviceType?: string;
    description?: string;
  } = {}
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name ?? "Dryer Vent Cleaning Provider Connection Service",
    serviceType: options.serviceType ?? "Dryer vent cleaning",
    url: absoluteUrl(path),
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: absoluteUrl()
    },
    areaServed: {
      "@type": "State",
      name: "Georgia"
    },
    description:
      options.description ??
      "A lead connection service for homeowners requesting dryer vent cleaning, clogged dryer vent cleaning, inspections, bird nest removal, line cleaning, and dryer vent safety cleaning in select Georgia communities."
  };
}
