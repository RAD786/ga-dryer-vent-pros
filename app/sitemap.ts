import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/data/site";
import { activeCityTerritories } from "@/data/territories";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/dryer-vent-cleaning",
    "/service-areas",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms"
  ];

  const cityRoutes = activeCityTerritories.map((city) => `/service-areas/${city.slug}`);
  const lastModified = new Date("2026-06-19");

  return [...staticRoutes, ...cityRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/service-areas/") ? 0.7 : 0.8
  }));
}
