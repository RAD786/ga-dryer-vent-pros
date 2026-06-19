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
