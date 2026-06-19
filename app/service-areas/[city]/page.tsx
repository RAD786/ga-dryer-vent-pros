import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { PhoneLink } from "@/components/PhoneLink";
import { absoluteUrl, services, siteConfig } from "@/data/site";
import {
  type CityTerritory,
  cityTerritories,
  getCityByName,
  getCityBySlug,
  territoryClusters
} from "@/data/territories";

type PageProps = {
  params: Promise<{ city: string }>;
};

function isCityTerritory(city: CityTerritory | undefined): city is CityTerritory {
  return Boolean(city);
}

export function generateStaticParams() {
  return cityTerritories.filter((city) => city.active).map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return {};
  }

  const title = `Dryer Vent Cleaning ${city.city} GA`;

  return {
    title,
    description: `Request dryer vent cleaning in ${city.city}, GA. Serving homeowners in and around ${city.city} for clogged vents, lint buildup, inspections, and dryer vent safety cleaning where available.`,
    alternates: { canonical: `/service-areas/${city.slug}` },
    robots: city.active ? undefined : { index: false, follow: true },
    openGraph: {
      title,
      description: `Connect with local dryer vent cleaning providers serving homeowners in and around ${city.city}, Georgia where available.`,
      url: `/service-areas/${city.slug}`
    }
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);

  if (!city || !city.active) {
    notFound();
  }

  const cluster = territoryClusters[city.cluster];
  const nearbyLinkedCities = city.nearbyCities.map((nearby) => getCityByName(nearby)).filter(isCityTerritory);
  const cityFaq = [
    {
      question: `Can I request dryer vent cleaning in ${city.city}, GA?`,
      answer: `Yes. Homeowners in and around ${city.city} can submit a request. Service availability may vary by area, provider coverage, and schedule.`
    },
    {
      question: `Do you have a physical office in ${city.city}?`,
      answer: `Georgia Dryer Vent Pros is a connection service and does not claim a physical office in ${city.city}. Calls may be routed to an independent local service provider.`
    },
    {
      question: `What dryer vent services are common in ${city.city}?`,
      answer: `Common ${city.city} requests include clogged dryer vent cleaning, dryer vent inspection, lint buildup removal, bird nest removal at exterior vents, dryer vent line cleaning, and dryer vent safety cleaning.`
    },
    {
      question: `Will every provider serve nearby ${city.countyOrRegion} areas?`,
      answer: "No. Not every provider serves every territory. Requests are routed based on the city, cluster, and available local coverage."
    }
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Service Areas", href: "/service-areas" },
          { name: city.city, href: `/service-areas/${city.slug}` }
        ]}
      />
      <section className="bg-slate-950 py-14 text-white">
        <div className="container grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-300">
              {cluster.label} territory | {city.countyOrRegion}
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-normal md:text-5xl">
              Dryer vent cleaning in {city.city}, GA
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Serving homeowners in and around {city.city}, Georgia with routed dryer vent cleaning requests for lint buildup, longer dry times, blocked exterior vents, and clogged dryer vent symptoms.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PhoneLink className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-sm font-bold !text-[#102033] transition hover:bg-orange-600" />
              <ButtonLink href="/contact" variant="light" eventName="city_page_cta_click" city={city.city} cluster={city.cluster}>
                Request Service
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              {siteConfig.callDisclosure} {siteConfig.routingDisclosure} Service availability may vary by area.
            </p>
            {!city.active ? (
              <p className="mt-4 rounded-md bg-white/10 p-3 text-sm font-semibold text-orange-100">
                This territory is configured for future routing and may have limited or inactive launch coverage.
              </p>
            ) : null}
          </div>
          <LeadForm compact cityPage={city.city} cluster={city.cluster} serviceType={city.primaryKeyword} />
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
              Dryer vent cleaning service for {city.city} homes
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Dryer vents in {city.city} homes can collect lint behind the dryer, inside wall or attic runs, and near the exterior vent cap. When airflow is restricted, clothes may stay damp, the laundry area may feel hot, and the dryer may run longer than intended.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Georgia Dryer Vent Pros routes requests to local dryer vent cleaning providers by city and territory cluster. Provider availability, scope, pricing, and appointment windows are confirmed by the provider that follows up.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-black text-slate-950">Common signs in {city.city}</h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
              {[
                "Clothes need a second cycle or stay damp after normal drying.",
                "The dryer or laundry room feels unusually hot.",
                "A burning, musty, or overheated smell appears during use.",
                "Lint collects around the exterior vent opening.",
                "The outside vent flap does not open while the dryer runs.",
                "Nesting material or a blocked vent cap is visible outside."
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
              Why {city.city} homeowners request service
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Homeowners near {city.city} often request dryer vent cleaning after noticing longer dry times, lint at the exterior termination, airflow concerns after moving into a home, or seasonal nesting issues near vent covers.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              The request can include dryer vent cleaning, clogged vent cleaning, dryer vent inspection, bird nest removal, vent line cleaning, or safety-focused cleaning depending on what the provider finds.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-black text-slate-950">Nearby city links</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Use nearby pages when comparing territory coverage around {cluster.region}.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {nearbyLinkedCities.map((nearby) => (
                <li key={nearby.slug}>
                  <Link
                    className="focus-ring block rounded-md bg-slate-50 p-3 text-sm font-black text-slate-950 hover:bg-orange-50"
                    href={`/service-areas/${nearby.slug}`}
                    data-conversion-event="city_page_cta_click"
                    data-city={nearby.city}
                    data-cluster={nearby.cluster}
                  >
                    {nearby.city}, GA
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
            Dryer vent services routed for {city.city}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
            {city.city} dryer vent cleaning FAQ
          </h2>
          <div className="mt-8">
            <FAQ items={cityFaq} />
          </div>
        </div>
      </section>

      <CTASection
        title={`Request dryer vent cleaning in ${city.city}`}
        text={`Tell us what is happening with the dryer vent at your ${city.city} home. The request can be routed by territory if provider coverage is available.`}
        city={city.city}
        cluster={city.cluster}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `Dryer Vent Cleaning in ${city.city}, GA`,
          serviceType: "Dryer vent cleaning",
          url: absoluteUrl(`/service-areas/${city.slug}`),
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
            telephone: city.trackingPhone,
            email: siteConfig.email
          },
          areaServed: {
            "@type": "City",
            name: `${city.city}, Georgia`
          },
          description: `Connection service for homeowners in and around ${city.city}, GA requesting dryer vent cleaning from local providers where available.`
        }}
      />
    </>
  );
}
