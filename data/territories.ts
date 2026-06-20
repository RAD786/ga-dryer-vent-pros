export type ClusterKey = "north-ga" | "south-metro" | "coastal-ga" | "middle-ga";

export type ProviderPlaceholder = {
  providerId: string;
  displayName: string;
  contactName?: string;
  routingNotes: string;
};

export type TerritoryCluster = {
  key: ClusterKey;
  label: string;
  region: string;
  active: boolean;
  trackingPhone: string;
  trackingPhoneHref: string;
  formRoutingEmail: string;
  providerPlaceholder: ProviderPlaceholder;
};

export type CityTerritory = {
  city: string;
  state: "GA";
  slug: string;
  countyOrRegion: string;
  cluster: ClusterKey;
  primaryKeyword: string;
  trackingPhone: string;
  trackingPhoneHref: string;
  formRoutingEmail: string;
  nearbyCities: string[];
  localProfile: {
    intro: string;
    serviceContext: string;
    commonReasons: string[];
    homeContext: string;
  };
  active: boolean;
  providerPlaceholder: ProviderPlaceholder;
};

export const fallbackPhone = {
  display: "(678) 555-0198",
  href: "tel:+16785550198"
};

export const territoryClusters: Record<ClusterKey, TerritoryCluster> = {
  "north-ga": {
    key: "north-ga",
    label: "North GA",
    region: "North Georgia",
    active: true,
    trackingPhone: "(678) 555-0198",
    trackingPhoneHref: "tel:+16785550198",
    formRoutingEmail: "north-ga-leads@example.com",
    providerPlaceholder: {
      providerId: "provider-a-north-ga",
      displayName: "North GA Provider Placeholder",
      routingNotes: "Future Provider A territory for Cumming, Canton, Woodstock, Buford, Braselton, Hoschton, and Gainesville."
    }
  },
  "south-metro": {
    key: "south-metro",
    label: "South Metro",
    region: "South Metro Atlanta",
    active: false,
    trackingPhone: "(678) 555-0198",
    trackingPhoneHref: "tel:+16785550198",
    formRoutingEmail: "south-metro-leads@example.com",
    providerPlaceholder: {
      providerId: "provider-b-south-metro",
      displayName: "South Metro Provider Placeholder",
      routingNotes: "Future Provider B territory for Newnan, Peachtree City, Fayetteville, McDonough, and Stockbridge."
    }
  },
  "coastal-ga": {
    key: "coastal-ga",
    label: "Coastal GA",
    region: "Coastal Georgia",
    active: false,
    trackingPhone: "(678) 555-0198",
    trackingPhoneHref: "tel:+16785550198",
    formRoutingEmail: "coastal-ga-leads@example.com",
    providerPlaceholder: {
      providerId: "provider-c-coastal-ga",
      displayName: "Coastal GA Provider Placeholder",
      routingNotes: "Future Provider C territory for Pooler, Richmond Hill, and Savannah."
    }
  },
  "middle-ga": {
    key: "middle-ga",
    label: "Middle GA",
    region: "Middle Georgia",
    active: false,
    trackingPhone: "(678) 555-0198",
    trackingPhoneHref: "tel:+16785550198",
    formRoutingEmail: "middle-ga-leads@example.com",
    providerPlaceholder: {
      providerId: "provider-d-middle-ga",
      displayName: "Middle GA Provider Placeholder",
      routingNotes: "Future Provider D territory for Warner Robins and Macon."
    }
  }
};

const citySeeds = [
  ["Cumming", "Forsyth County", "north-ga", ["Canton", "Buford", "Gainesville"]],
  ["Canton", "Cherokee County", "north-ga", ["Woodstock", "Cumming", "Gainesville"]],
  ["Woodstock", "Cherokee County", "north-ga", ["Canton", "Cumming", "Buford"]],
  ["Buford", "Gwinnett and Hall Counties", "north-ga", ["Cumming", "Braselton", "Gainesville"]],
  ["Braselton", "Jackson, Barrow, Hall, and Gwinnett Counties", "north-ga", ["Hoschton", "Buford", "Gainesville"]],
  ["Hoschton", "Jackson County", "north-ga", ["Braselton", "Buford", "Gainesville"]],
  ["Gainesville", "Hall County", "north-ga", ["Cumming", "Buford", "Braselton"]],
  ["Newnan", "Coweta County", "south-metro", ["Peachtree City", "Fayetteville", "McDonough"]],
  ["Peachtree City", "Fayette County", "south-metro", ["Newnan", "Fayetteville", "Stockbridge"]],
  ["Fayetteville", "Fayette County", "south-metro", ["Peachtree City", "Newnan", "Stockbridge"]],
  ["McDonough", "Henry County", "south-metro", ["Stockbridge", "Fayetteville", "Newnan"]],
  ["Stockbridge", "Henry County", "south-metro", ["McDonough", "Fayetteville", "Peachtree City"]],
  ["Pooler", "Chatham County", "coastal-ga", ["Savannah", "Richmond Hill"]],
  ["Richmond Hill", "Bryan County", "coastal-ga", ["Pooler", "Savannah"]],
  ["Savannah", "Chatham County", "coastal-ga", ["Pooler", "Richmond Hill"]],
  ["Warner Robins", "Houston County", "middle-ga", ["Macon"]],
  ["Macon", "Bibb County", "middle-ga", ["Warner Robins"]]
] as const;

const cityProfiles: Record<string, CityTerritory["localProfile"]> = {
  Cumming: {
    intro:
      "Cumming homeowners often deal with vent runs that exit through exterior walls, upper levels, garages, or attic-adjacent spaces. When lint builds up in those runs, drying times can stretch and the laundry area can feel hotter than normal.",
    serviceContext:
      "Requests in Cumming commonly involve airflow checks, lint removal, clogged dryer vent cleaning, and exterior vent cap concerns near single-family homes and townhomes.",
    commonReasons: [
      "Longer vent paths in newer subdivisions can collect lint before the outside termination.",
      "Homes near wooded areas may see exterior vent covers blocked by debris or nesting material.",
      "Heavy family laundry use can make airflow problems show up quickly."
    ],
    homeContext: "single-family neighborhoods, lake-area homes, townhomes, and newer construction around Forsyth County"
  },
  Canton: {
    intro:
      "Canton dryer vent requests often come from homeowners noticing longer dry times in hillside neighborhoods, multi-level homes, or laundry rooms set away from an exterior wall.",
    serviceContext:
      "Dryer vent cleaning requests in Canton may include lint buildup removal, vent line cleaning, airflow checks, and exterior termination cleaning where local provider coverage is available.",
    commonReasons: [
      "Multi-level layouts can create longer vent runs with more places for lint to settle.",
      "Exterior vent covers can collect lint, leaves, or seasonal debris.",
      "Laundry rooms placed near interior hallways may make airflow issues less obvious until dry times increase."
    ],
    homeContext: "Cherokee County subdivisions, townhomes, ranch homes, and multi-level properties"
  },
  Woodstock: {
    intro:
      "Woodstock homeowners may request dryer vent cleaning after seeing lint near the outside vent, damp clothes after a full cycle, or extra heat around a laundry closet.",
    serviceContext:
      "Common Woodstock requests include clogged dryer vent cleaning, dryer vent inspection, vent line cleaning, and safety-focused lint removal for homes with busy laundry routines.",
    commonReasons: [
      "Townhome and compact laundry layouts may hide vent restrictions until drying performance changes.",
      "Exterior vents near landscaping can collect debris around the termination point.",
      "Older vent connections behind the dryer may need inspection when airflow drops."
    ],
    homeContext: "townhomes, established neighborhoods, newer subdivisions, and homes near the I-575 corridor"
  },
  Buford: {
    intro:
      "Buford dryer vent cleaning requests often come from homeowners around busy family homes where frequent laundry cycles make restricted airflow more noticeable.",
    serviceContext:
      "Requests in Buford can involve clogged dryer vents, line cleaning, lint buildup, inspection requests, and bird nest or exterior vent blockage concerns.",
    commonReasons: [
      "High laundry volume can make small airflow restrictions become daily drying problems.",
      "Homes with laundry rooms on interior walls may have longer duct runs.",
      "Exterior vent caps can become blocked by lint or seasonal nesting material."
    ],
    homeContext: "Gwinnett and Hall County homes, townhomes, and family properties near Lake Lanier and Mall of Georgia corridors"
  },
  Braselton: {
    intro:
      "Braselton homes can have larger floor plans and longer utility runs, which makes dryer vent airflow worth checking when clothes start taking longer to dry.",
    serviceContext:
      "Braselton requests often include dryer vent safety cleaning, clogged vent cleaning, exterior termination checks, and lint removal for long or less accessible vent paths.",
    commonReasons: [
      "Larger homes may have vent lines that travel farther before reaching the exterior.",
      "Laundry rooms set deeper inside the home can make vent restrictions harder to spot.",
      "Exterior vents near rooflines, side yards, or landscaping can become harder to monitor."
    ],
    homeContext: "larger homes, planned communities, townhomes, and properties spanning the Braselton area"
  },
  Hoschton: {
    intro:
      "Hoschton homeowners may request dryer vent cleaning when a dryer starts running hotter, the laundry room feels humid, or lint collects around the outside vent.",
    serviceContext:
      "Requests in Hoschton can be routed for dryer vent line cleaning, clogged vent cleaning, inspection, and safety-focused cleaning where local provider coverage is active.",
    commonReasons: [
      "Growing residential areas can include a mix of newer homes with varied vent routes.",
      "Family laundry loads can quickly reveal airflow restrictions.",
      "Exterior vent openings may collect lint, debris, or nesting material."
    ],
    homeContext: "Jackson County homes, newer communities, rural-edge properties, and family neighborhoods"
  },
  Gainesville: {
    intro:
      "Gainesville homeowners often request dryer vent cleaning when longer dry times, lint buildup, or exterior vent restrictions start affecting laundry routines.",
    serviceContext:
      "Gainesville service requests may include lint removal, clogged dryer vent cleaning, dryer vent inspection, bird nest removal, and vent safety cleaning for homes around Hall County.",
    commonReasons: [
      "Homes near trees or lake-area settings may see more exterior debris around vent terminations.",
      "Longer duct paths can collect lint before it reaches the outside vent.",
      "Dryers used frequently for family laundry can show airflow issues sooner."
    ],
    homeContext: "Hall County neighborhoods, lake-area homes, townhomes, and established residential areas"
  }
};

function defaultCityProfile(city: string, countyOrRegion: string): CityTerritory["localProfile"] {
  return {
    intro: `${city} homeowners may request dryer vent cleaning when clothes take longer to dry, the laundry area feels hot, or lint collects near the outside vent.`,
    serviceContext: `Requests in ${city} can include clogged dryer vent cleaning, lint removal, dryer vent inspection, bird nest removal, line cleaning, and safety-focused cleaning where provider coverage is available.`,
    commonReasons: [
      "Dryer vent paths can collect lint over time even when the lint screen is cleaned regularly.",
      "Exterior vent openings may become restricted by lint, debris, pests, or nesting material.",
      "Service availability and exact scope depend on local provider coverage."
    ],
    homeContext: `${countyOrRegion} homes and nearby residential areas`
  };
}

function slugifyCity(city: string) {
  return `${city.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-ga`;
}

export const cityTerritories: CityTerritory[] = citySeeds.map(
  ([city, countyOrRegion, clusterKey, nearbyCities]) => {
    const cluster = territoryClusters[clusterKey];

    return {
      city,
      state: "GA",
      slug: slugifyCity(city),
      countyOrRegion,
      cluster: cluster.key,
      primaryKeyword: `dryer vent cleaning ${city.toLowerCase()} ga`,
      trackingPhone: cluster.trackingPhone,
      trackingPhoneHref: cluster.trackingPhoneHref,
      formRoutingEmail: cluster.formRoutingEmail,
      nearbyCities: [...nearbyCities],
      localProfile: cityProfiles[city] ?? defaultCityProfile(city, countyOrRegion),
      active: cluster.active,
      providerPlaceholder: cluster.providerPlaceholder
    };
  }
);

export const activeCityTerritories = cityTerritories.filter((city) => city.active);

export function getCityBySlug(slug: string) {
  return cityTerritories.find((city) => city.slug === slug);
}

export function getCityByName(cityName: string) {
  const normalized = cityName.trim().toLowerCase();
  return cityTerritories.find((city) => city.city.toLowerCase() === normalized);
}

export function getCitiesByCluster(clusterKey: ClusterKey) {
  return cityTerritories.filter((city) => city.cluster === clusterKey);
}

export function getClusterForPath(pathname: string) {
  const match = pathname.match(/\/service-areas\/([^/?#]+)/);
  if (!match) {
    return null;
  }

  const city = getCityBySlug(match[1]);
  return city ? territoryClusters[city.cluster] : null;
}
