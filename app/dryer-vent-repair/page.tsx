import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { pageSeo } from "@/data/seo";
import { getServicePage } from "@/data/servicePages";

const service = getServicePage("dryer-vent-repair")!;

export const metadata: Metadata = pageSeo({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
  image: service.heroImage?.src
});

export default function DryerVentRepairPage() {
  return <ServicePageTemplate service={service} />;
}
