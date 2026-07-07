import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { FadeIn, HeroReveal, MotionItem, Stagger } from "@/components/Motion";
import { PhoneLink } from "@/components/PhoneLink";
import { serviceNavLinks } from "@/data/navigation";
import { absoluteUrl, siteConfig } from "@/data/site";
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

const serviceDescriptions: Record<string, string> = {
  "/dryer-vent-cleaning": "Start with dryer vent cleaning for lint buildup, long dry times, blocked exterior vents, and weak airflow.",
  "/dryer-vent-repair": "Learn about dryer vent repair in Georgia for crushed ducting, damaged wall caps, loose connections, or visible vent damage.",
  "/dryer-vent-installation": "Review dryer vent installation options for new dryer locations, replacement venting, remodels, or changed laundry rooms.",
  "/dryer-vent-inspection": "Use a dryer vent inspection service when symptoms are unclear or exterior termination issues need review.",
  "/bird-nest-removal": "Request bird nest removal from dryer vents when nesting material, twigs, or debris blocks an outside vent.",
  "/dryer-vent-rerouting": "Explore dryer vent rerouting for long, inefficient, damaged, or difficult dryer vent paths.",
  "/commercial-dryer-vent-cleaning": "Submit commercial dryer vent cleaning requests for rental, multifamily, managed, or high-use laundry spaces."
};

const localIssueSections: Record<string, { intro: string; details: string[] }> = {
  "cumming-ga": {
    intro:
      "Cumming homes can range from newer Forsyth County subdivisions to lake-area properties with laundry rooms set deeper inside the floor plan. Those layouts can create longer dryer vent runs that collect lint before the air reaches the outside wall cap.",
    details: [
      "Second-floor laundry rooms and interior laundry closets can make airflow problems show up as hot rooms or repeated dry cycles.",
      "Wooded lots and lake-area homes may see more exterior debris around vent covers, especially when the vent exits near landscaping.",
      "High-laundry households in family neighborhoods often notice clogged dryer vent symptoms sooner because the dryer runs more frequently."
    ]
  },
  "canton-ga": {
    intro:
      "Canton has a mix of hillside neighborhoods, multi-level homes, townhomes, and established Cherokee County properties. Dryer vents in these homes may run through garages, upper walls, or longer hidden paths before reaching the exterior.",
    details: [
      "Multi-level layouts can add turns and distance to the vent run, giving lint more places to settle.",
      "Garage laundry setups may hide crushed or loose ducting behind the dryer until drying performance drops.",
      "Exterior wall caps near wooded yards can collect lint, leaves, or seasonal debris that limits airflow."
    ]
  },
  "woodstock-ga": {
    intro:
      "Woodstock dryer vent issues often appear in townhomes, compact laundry closets, and busy homes near the I-575 corridor. Tight laundry spaces can make it harder to see crushed flex duct or lint collecting behind the dryer.",
    details: [
      "Townhome and condo-style layouts may use longer or less visible vent paths than a simple exterior-wall setup.",
      "Laundry closets can trap heat when the dryer vent is restricted, especially during repeated loads.",
      "Older connections behind the dryer may need attention when airflow drops or lint appears near the outside opening."
    ]
  },
  "buford-ga": {
    intro:
      "Buford households often run frequent laundry loads, especially in family homes around Gwinnett and Hall County neighborhoods. Higher use can make lint buildup, exterior blockage, and long dry times more noticeable.",
    details: [
      "Interior laundry rooms can create longer dryer vent routes through walls, ceilings, or utility spaces.",
      "Homes near Lake Lanier or wooded lots may have exterior vent caps exposed to leaves, nesting material, or debris.",
      "Rental and townhome properties can benefit from routine dryer vent cleaning when many residents use the dryer heavily."
    ]
  },
  "braselton-ga": {
    intro:
      "Braselton homes often include larger floor plans, planned communities, and laundry rooms that may not sit directly on an exterior wall. Longer utility runs can make dryer vent cleaning more important when dry times start increasing.",
    details: [
      "Large homes may have vent paths with more distance or turns before reaching the outside termination.",
      "HOA communities and newer construction can include exterior vent caps that are easy to overlook during routine maintenance.",
      "Laundry rooms placed deeper inside the home may show vent restrictions through heat, humidity, or repeated cycles."
    ]
  },
  "hoschton-ga": {
    intro:
      "Hoschton includes newer communities, rural-edge properties, and family homes where dryer vent routes vary by layout. Vent caps near side yards, garages, or upper walls can collect lint before homeowners notice a full blockage.",
    details: [
      "Growing residential areas may have second-floor laundry rooms or longer duct paths that need periodic cleaning.",
      "Family laundry volume can reveal airflow problems quickly when clothes stay damp after a normal cycle.",
      "Exterior vents near open lots or landscaping may collect debris, lint, or nesting material around the cap."
    ]
  },
  "gainesville-ga": {
    intro:
      "Gainesville homes around Hall County include lake-area houses, established neighborhoods, townhomes, and multi-level properties. Dryer vents in these settings may exit through upper walls, garages, or longer hidden runs.",
    details: [
      "Lake-area and wooded properties can see exterior vent openings affected by leaves, debris, or nesting activity.",
      "Multi-level homes may have longer vent routes that collect lint before the air reaches the outside wall cap.",
      "Rental homes and high-laundry households may notice clogged vent symptoms through longer dry times and excess heat."
    ]
  }
};

export function generateStaticParams() {
  return cityTerritories.filter((city) => city.active).map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return {};
  }

  const title = `Dryer Vent Cleaning in ${city.city}, GA`;

  return pageSeo({
    title,
    description: `Request dryer vent cleaning in ${city.city}, GA for clogged vents, lint buildup, fire risk concerns, and long dry times. Contact Georgia Dryer Vent Pros to request service.`,
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
  const localIssues = localIssueSections[city.slug] ?? {
    intro: `${city.city} homes can develop dryer vent airflow problems when lint collects in long vent runs, exterior wall caps, garage laundry setups, or upper-level laundry rooms.`,
    details: [
      "Clogged vents can make clothes take longer to dry and can add heat around the dryer.",
      "Exterior vent openings may become restricted by lint, debris, or nesting material.",
      "A dryer vent inspection can help identify whether cleaning, repair, or rerouting should be discussed."
    ]
  };
  const nearbyLinkedCities = city.nearbyCities.map((nearby) => getCityByName(nearby)).filter(isCityTerritory);
  const cityFaq = [
    {
      question: `Do you offer dryer vent cleaning in ${city.city}, GA?`,
      answer: `Yes. Homeowners in and around ${city.city} can request dryer vent cleaning for clogged vents, lint buildup, long dry times, and exterior vent blockage concerns.`
    },
    {
      question: "How do I know if my dryer vent is clogged?",
      answer:
        "Common warning signs include clothes needing more than one cycle to dry, the dryer or laundry room feeling hot, a musty or burning smell, lint around the outside vent, or an exterior vent flap that does not open while the dryer runs."
    },
    {
      question: "Do you clean dryer vents in townhomes, condos, or multi-level homes?",
      answer: `Yes. Dryer vent cleaning requests in ${city.city} may involve townhomes, condos, second-floor laundry rooms, garage laundry setups, and multi-level homes. Access and service scope are confirmed during provider follow-up.`
    },
    {
      question: "Can bird nests be removed from dryer vents?",
      answer:
        "Yes. If nesting material, twigs, or debris are visible at the outside dryer vent, the request can include bird nest removal from dryer vents and related cleaning."
    },
    {
      question: "How soon can someone contact me after I request service?",
      answer:
        "After you submit the form, your request can be reviewed for local provider follow-up. Response timing depends on provider availability, schedule, and the service details you submit."
    },
    {
      question: `Do you have a physical office in ${city.city}, GA?`,
      answer: `Georgia Dryer Vent Pros helps homeowners connect with dryer vent service providers in the ${city.city} area. We do not claim a physical office in ${city.city} unless verified provider details are added.`
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
              Serving {city.city} & {city.countyOrRegion}
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-normal md:text-5xl">
              Dryer Vent Cleaning in {city.city}, GA
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
            ) : (
              // Recommended image ratio: 16:5 or 16:9. Suggested image: dryer vent cleaning in a local residential laundry area.
              <div className="mt-7 rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-slate-950/30">
                <div className="grid aspect-[16/9] place-items-center rounded-md border border-white/10 bg-slate-900/70">
                  <div className="max-w-sm text-center">
                    <div className="mx-auto h-12 w-12 rounded-md bg-orange-500" aria-hidden="true" />
                    <p className="mt-4 text-sm font-bold leading-6 text-slate-200">
                      Residential dryer vent cleaning request support for {city.city} homeowners.
                    </p>
                  </div>
                </div>
              </div>
            )}
            <p className="mt-5 text-lg leading-8 text-slate-200">
              {profile.intro}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              Submit a service request for dryer vent cleaning, clogged dryer vent symptoms, lint buildup, exterior vent blockage, and related airflow concerns in {city.city}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PhoneLink className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-sm font-bold !text-[#102033] shadow-lg shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl" />
              <ButtonLink href="/contact" variant="light" eventName="city_page_cta_click" city={city.city} cluster={city.cluster}>
                Request Service
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              {siteConfig.callDisclosure} Service availability may vary by area.
            </p>
            {!city.active ? (
              <p className="mt-4 rounded-md bg-white/10 p-3 text-sm font-semibold text-orange-100">
                This territory is configured for future routing and may have limited or inactive launch coverage.
              </p>
            ) : null}
          </HeroReveal>
          <HeroReveal delay={0.12}>
            <LeadForm compact cityPage={city.city} cluster={city.cluster} serviceType={city.primaryKeyword} formLocation="city_page_hero" />
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
              Dryer vent cleaning is often the first step when a dryer takes longer than normal, the laundry room feels warm, or lint appears near the outside vent opening. Provider availability, scope, pricing, and appointment windows are confirmed during follow-up.
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
        <div className="container grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-start">
          <FadeIn>
            <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
              Common Dryer Vent Issues in {city.city}, GA Homes
            </h2>
            <p className="mt-4 leading-7 text-slate-700">{localIssues.intro}</p>
            <div className="mt-6 grid gap-3">
              {localIssues.details.map((detail) => (
                <div key={detail} className="lift-card rounded-md border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm">
                  {detail}
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.08} className="rounded-xl border border-orange-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black text-slate-950">Need help with a clogged dryer vent?</h3>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              If clothes stay damp, the dryer feels hot, or lint is visible outside, request dryer vent cleaning and include the symptoms you are seeing.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <ButtonLink href="/contact" eventName="city_page_cta_click" ctaLocation="city_local_issues" city={city.city} cluster={city.cluster}>
                Request Dryer Vent Cleaning in {city.city}
              </ButtonLink>
              <PhoneLink ctaLocation="city_local_issues" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold !text-[#102033] shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
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
            Related dryer vent services for {city.city} homeowners
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            Dryer vent cleaning remains the main focus on this page. These related statewide service pages can help when a clogged vent points to repair, inspection, bird nest removal, rerouting, commercial cleaning, or installation needs.
          </p>
          <Stagger className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceNavLinks.map((service) => (
              <MotionItem key={service.href}>
              <Link
                href={service.href}
                className="focus-ring lift-card block h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-orange-300 hover:bg-orange-50/40"
              >
                <h3 className="text-xl font-black text-slate-950">{service.label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{serviceDescriptions[service.href]}</p>
                <span className="mt-4 inline-flex text-sm font-black text-orange-700">Learn More</span>
              </Link>
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
          <div className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            {cityFaq.map((item) => (
              <article key={item.question} className="p-5">
                <h3 className="text-lg font-black text-slate-950">{item.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Request dryer vent cleaning in ${city.city}`}
        text={`Tell us what is happening with the dryer vent at your ${city.city} home. Share the symptoms, city, and best contact information so the request can be reviewed for provider follow-up.`}
        city={city.city}
        cluster={city.cluster}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: cityFaq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        }}
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
