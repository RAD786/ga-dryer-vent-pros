import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { FadeIn, HeroReveal, MotionItem, Stagger } from "@/components/Motion";
import { PhoneLink } from "@/components/PhoneLink";
import { absoluteUrl, services, siteConfig } from "@/data/site";
import { pageSeo } from "@/data/seo";
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

  return pageSeo({
    title,
    description: `Request dryer vent cleaning in ${city.city}, GA. Serving homeowners in and around ${city.city} for clogged vents, lint buildup, inspections, and dryer vent safety cleaning where available.`,
    path: `/service-areas/${city.slug}`,
    noIndex: !city.active
  });
}

export default async function CityPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);

  if (!city || !city.active) {
    notFound();
  }

  const cluster = territoryClusters[city.cluster];
  const profile = city.localProfile;
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
      answer: `${profile.serviceContext} Common requests can include clogged dryer vent cleaning, dryer vent inspection, lint buildup removal, bird nest removal at exterior vents, dryer vent line cleaning, and dryer vent safety cleaning.`
    },
    {
      question: `Will every provider serve nearby ${city.countyOrRegion} areas?`,
      answer: "No. Not every provider serves every territory. Requests are routed based on the city, cluster, and available local coverage."
    }
  ];
  const cityHeroImage =
    city.slug === "cumming-ga"
      ? {
          src: "/images/cumming-hero.png",
          alt: "Dryer vent service van in a Cumming residential neighborhood",
          width: 2244,
          height: 701
        }
      : city.slug === "canton-ga"
        ? {
            src: "/images/canton-hero.png",
            alt: "Dryer vent cleaning service in a Canton residential neighborhood",
            width: 1672,
            height: 941
          }
        : city.slug === "woodstock-ga"
          ? {
              src: "/images/woodstock-hero.png",
              alt: "Dryer vent service van in a Woodstock residential neighborhood",
              width: 2244,
              height: 701
            }
          : city.slug === "buford-ga"
            ? {
                src: "/images/buford-hero.png",
                alt: "Dryer vent service van in a Buford residential neighborhood",
                width: 2244,
                height: 701
              }
            : city.slug === "braselton-ga"
              ? {
                  src: "/images/braselton-hero.png",
                  alt: "Dryer vent service van in a Braselton residential neighborhood",
                  width: 2244,
                  height: 701
                }
              : city.slug === "hoschton-ga"
                ? {
                    src: "/images/hoschton-hero.png",
                    alt: "Dryer vent service van in a Hoschton residential neighborhood",
                    width: 2244,
                    height: 701
                  }
                : city.slug === "gainesville-ga"
                  ? {
                      src: "/images/gainesville-hero.png",
                      alt: "Dryer vent service van in a Gainesville residential neighborhood",
                      width: 2244,
                      height: 701
                    }
                  : null;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Service Areas", href: "/service-areas" },
          { name: city.city, href: `/service-areas/${city.slug}` }
        ]}
      />
      <section className="airflow-bg premium-grid bg-slate-950 py-14 text-white">
        <div className="container grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
          <HeroReveal>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-300">
              {cluster.label} territory | {city.countyOrRegion}
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-normal md:text-5xl">
              Dryer vent cleaning in {city.city}, GA
            </h1>
            {cityHeroImage ? (
              <div className="mt-7 overflow-hidden rounded-lg border border-white/10 bg-slate-900/60 shadow-2xl shadow-slate-950/30">
                <Image
                  src={cityHeroImage.src}
                  alt={cityHeroImage.alt}
                  width={cityHeroImage.width}
                  height={cityHeroImage.height}
                  className="h-44 w-full object-cover sm:h-56 lg:h-60"
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  priority
                />
              </div>
            ) : null}
            <p className="mt-5 text-lg leading-8 text-slate-200">
              {profile.intro}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              We connect homeowners with local dryer vent cleaning providers serving select Georgia communities, including active coverage areas in the {cluster.label} territory.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PhoneLink className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-sm font-bold !text-[#102033] shadow-lg shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl" />
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
          </HeroReveal>
          <HeroReveal delay={0.12}>
            <LeadForm compact cityPage={city.city} cluster={city.cluster} serviceType={city.primaryKeyword} />
          </HeroReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
              Dryer vent cleaning service for {city.city} homes
            </h2>
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/images/before-after.png"
                alt={`Before and after dryer vent cleaning example for homeowners in ${city.city}, Georgia`}
                width={1672}
                height={941}
                className="aspect-video w-full object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
            <p className="mt-4 leading-7 text-slate-700">
              {profile.serviceContext}
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              This page is built for homeowners in and around {city.city}, not as a claim of a physical office in the city. Georgia Dryer Vent Pros routes requests to local dryer vent cleaning providers by city and territory cluster. Provider availability, scope, pricing, and appointment windows are confirmed by the provider that follows up.
            </p>
          </FadeIn>
          <FadeIn delay={0.08} className="lift-card rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">Common signs in {city.city}</h2>
            <div className="mt-5">
              <ul className="grid gap-3 text-sm leading-6 text-slate-700">
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
              <div className="mt-6 max-w-sm overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/images/common-signs.png"
                  alt={`Common signs of dryer vent blockage in a ${city.city} home`}
                  width={1254}
                  height={1254}
                  className="aspect-square w-full object-cover"
                  sizes="(min-width: 1024px) 384px, 100vw"
                />
              </div>
            </div>
          </FadeIn>
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
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
              {profile.commonReasons.map((reason) => (
                <li key={reason} className="lift-card rounded-md border border-slate-200 bg-white p-3 shadow-sm">
                  {reason}
                </li>
              ))}
            </ul>
            <p className="mt-4 leading-7 text-slate-700">
              These requests are common for {profile.homeContext}. The exact service scope depends on the independent provider that follows up.
            </p>
          </div>
          <FadeIn delay={0.08} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">Nearby city links</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Use nearby pages when comparing territory coverage around {cluster.region}.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {nearbyLinkedCities.map((nearby) => (
                <li key={nearby.slug}>
                  <Link
                    className="focus-ring lift-card block rounded-md border border-slate-200 bg-slate-50 p-3 text-sm font-black text-slate-950 hover:border-orange-300 hover:bg-orange-50"
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
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
            Dryer vent services routed for {city.city}
          </h2>
          <Stagger className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <MotionItem key={service.slug}>
              <article className="lift-card h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{service.description}</p>
              </article>
              </MotionItem>
            ))}
          </Stagger>
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
            email: siteConfig.email,
            url: absoluteUrl()
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
