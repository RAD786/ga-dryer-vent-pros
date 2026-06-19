import { activeCityTerritories, cityTerritories, fallbackPhone } from "@/data/territories";

export const siteConfig = {
  name: "Georgia Dryer Vent Pros",
  phone: fallbackPhone.display,
  phoneHref: fallbackPhone.href,
  email: "leads@example.com",
  url: "https://www.georgiadryerventpros.com",
  tagline:
    "Connect with local dryer vent cleaning providers serving select Georgia communities.",
  disclosure:
    "Georgia Dryer Vent Pros connects homeowners with local service providers. Service availability may vary by city.",
  callDisclosure:
    "Calls may be recorded for quality and lead verification purposes.",
  routingDisclosure:
    "Calls may be routed to an independent local service provider."
};

export const services = [
  {
    title: "Dryer Vent Cleaning",
    slug: "dryer-vent-cleaning",
    description:
      "Clear lint and airflow restrictions from dryer vent lines to help dryers run more safely and efficiently."
  },
  {
    title: "Clogged Dryer Vent Cleaning",
    slug: "clogged-dryer-vent-cleaning",
    description:
      "Help resolve long dry times, hot laundry rooms, burning smells, and vents that are no longer exhausting properly."
  },
  {
    title: "Dryer Vent Inspection",
    slug: "dryer-vent-inspection",
    description:
      "Check visible vent connections, exterior termination points, airflow concerns, and common obstruction signs."
  },
  {
    title: "Dryer Vent Bird Nest Removal",
    slug: "dryer-vent-bird-nest-removal",
    description:
      "Connect with providers who can remove nesting material from exterior vent openings where service is available."
  },
  {
    title: "Dryer Vent Line Cleaning",
    slug: "dryer-vent-line-cleaning",
    description:
      "Clean accessible dryer vent runs that may collect lint behind walls, through attics, or toward exterior exits."
  },
  {
    title: "Dryer Vent Safety Cleaning",
    slug: "dryer-vent-safety-cleaning",
    description:
      "Reduce preventable dryer vent hazards by addressing lint buildup, restricted airflow, and blockage symptoms."
  }
];

export const cities = cityTerritories.map((city) => ({
  name: city.city,
  slug: city.slug,
  county: city.countyOrRegion,
  nearby: city.nearbyCities,
  active: city.active,
  cluster: city.cluster
}));

export const activeCities = activeCityTerritories.map((city) => ({
  name: city.city,
  slug: city.slug,
  county: city.countyOrRegion,
  nearby: city.nearbyCities,
  active: city.active,
  cluster: city.cluster
}));

export const faqs = [
  {
    question: "How often should a dryer vent be cleaned?",
    answer:
      "Many homes benefit from dryer vent cleaning about once a year, but homes with heavy laundry use, long vent runs, pets, or repeated airflow issues may need service sooner."
  },
  {
    question: "What are common signs of a clogged dryer vent?",
    answer:
      "Common signs include clothes taking more than one cycle to dry, the dryer feeling unusually hot, lint collecting around the outside vent, a musty or burning smell, or the vent flap not opening during a cycle."
  },
  {
    question: "Do you send the same company to every city?",
    answer:
      "No. Georgia Dryer Vent Pros connects homeowners with local dryer vent cleaning providers serving select Georgia communities. Service availability may vary by area."
  },
  {
    question: "Can you help with bird nests in a dryer vent?",
    answer:
      "In many service areas, requests involving nesting material at the exterior vent can be routed to a local provider that handles bird nest removal and related vent cleaning."
  }
];

export function absoluteUrl(path = "") {
  return `${siteConfig.url}${path}`;
}
