import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { pageSeo } from "@/data/seo";
import { getServicePage } from "@/data/servicePages";

const service = getServicePage("dryer-vent-installation")!;

export const metadata: Metadata = pageSeo({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
  image: service.heroImage?.src
});

export default function DryerVentInstallationPage() {
  return <ServicePageTemplate service={service} />;
}
