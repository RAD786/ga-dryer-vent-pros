import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { pageSeo } from "@/data/seo";
import { getServicePage } from "@/data/servicePages";

const service = getServicePage("commercial-dryer-vent-cleaning")!;

export const metadata: Metadata = pageSeo({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`
});

export default function CommercialDryerVentCleaningPage() {
  return <ServicePageTemplate service={service} />;
}
