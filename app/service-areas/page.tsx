import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FadeIn, MotionItem, Stagger } from "@/components/Motion";
import { siteConfig } from "@/data/site";
import { activeCityTerritories } from "@/data/territories";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = pageSeo({
  title: "Georgia Dryer Vent Service Areas",
  description:
    "View current Georgia dryer vent service-area pages and future regional coverage clusters. Georgia Dryer Vent Pros is expanding service coverage across Georgia select communities.",
  path: "/service-areas"
});

const regionalClusters = [
  {
    name: "North Georgia",
    status: "Current launch cluster",
    description:
      "Current active city pages are concentrated in North Georgia and nearby communities where provider coverage is being launched first.",
    active: true
  },
  {
    name: "Metro Atlanta",
    status: "Coming soon",
    description:
      "Future coverage planning for broader metro Atlanta communities as local provider relationships are added."
  },
  {
    name: "Northeast Georgia",
    status: "Coming soon",
    description:
      "Future expandable coverage for additional Northeast Georgia communities beyond the current launch pages."
  },
  {
    name: "Northwest Georgia",
    status: "Coming soon",
    description:
      "Future expandable coverage for Northwest Georgia communities as service availability grows."
  },
  {
    name: "Central Georgia",
    status: "Coming soon",
    description:
      "Future expandable coverage for Central Georgia communities. No city pages are live for this cluster yet."
  },
  {
    name: "East Georgia",
    status: "Coming soon",
    description:
      "Future expandable coverage for East Georgia communities as provider routing expands."
  },
  {
    name: "West Georgia",
    status: "Coming soon",
    description:
      "Future expandable coverage for West Georgia communities. City pages will be added only when ready."
  },
  {
    name: "South Georgia",
    status: "Coming soon",
    description:
      "Future expandable coverage for South Georgia communities. Service availability is not being claimed yet."
  },
  {
    name: "Coastal Georgia",
    status: "Coming soon",
    description:
      "Future expandable coverage for Coastal Georgia communities once provider coverage is confirmed."
  }
];

export default function ServiceAreasPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Service Areas", href: "/service-areas" }]} />
      <section className="airflow-bg premium-grid bg-slate-950 py-14 text-white">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.55fr)] lg:items-center">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-300">Service areas</p>
            <h1 className="mt-4 text-4xl font-black tracking-normal md:text-5xl">
              Dryer Vent Service Areas In Georgia
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Georgia Dryer Vent Pros is expanding service coverage across Georgia by connecting homeowners and property owners with local dryer vent service providers where coverage is available.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Current live city pages represent the first launch cluster. We do not claim to serve every city in Georgia yet, and future regional sections are listed for planning and expansion only.
            </p>
            <p className="mt-4 text-sm text-slate-400">{siteConfig.routingDisclosure}</p>
          </div>
          <Image
            src="/images/service-areas-hero-clean.png"
            alt="Georgia dryer vent cleaning service area map"
            width={1254}
            height={1254}
            priority
            className="mx-auto w-full max-w-[380px] object-contain drop-shadow-2xl lg:mr-0 lg:max-w-[440px]"
            sizes="(min-width: 1024px) 32vw, 90vw"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <FadeIn>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-700">
              Current active service areas
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
              Live Georgia city pages
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-700">
              These are the current indexed city pages. Each page is written for homeowners in that city and links to nearby active communities where pages already exist.
            </p>
          </FadeIn>

          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeCityTerritories.map((city) => (
              <MotionItem key={city.slug}>
                <article className="lift-card h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-2xl font-black text-slate-950">{city.city}</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-600">{city.countyOrRegion}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-700">
                    Request dryer vent cleaning, inspections, bird nest removal, and related dryer vent service connections for homeowners in and around {city.city} where provider coverage is available.
                  </p>
                  <Link
                    className="focus-ring mt-5 inline-flex rounded-sm text-sm font-black text-orange-700 hover:text-orange-900"
                    href={`/service-areas/${city.slug}`}
                    data-conversion-event="city_page_cta_click"
                    data-city={city.city}
                    data-cluster={city.cluster}
                  >
                    View {city.city} service page
                  </Link>
                </article>
              </MotionItem>
            ))}
          </Stagger>

          <section className="mt-14" aria-labelledby="regional-clusters-heading">
            <FadeIn>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-700">
                Regional clusters
              </p>
              <h2 id="regional-clusters-heading" className="mt-3 text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
                Expanding service coverage across Georgia
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-slate-700">
                These regional clusters are included so the site can scale cleanly over time. Coming soon sections are not coverage claims and do not link to city pages that have not been created.
              </p>
            </FadeIn>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {regionalClusters.map((cluster) => (
                <details
                  key={cluster.name}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm open:border-orange-200 open:bg-orange-50/50"
                  open={cluster.active}
                >
                  <summary className="cursor-pointer list-none text-lg font-black text-slate-950">
                    <span>{cluster.name}</span>
                    <span className={`ml-3 rounded-full px-3 py-1 text-xs font-black ${
                      cluster.active ? "bg-orange-500 text-[#102033]" : "bg-slate-100 text-slate-600"
                    }`}>
                      {cluster.status}
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-6 text-slate-700">{cluster.description}</p>
                  {cluster.active ? (
                    <ul className="mt-4 grid gap-2 text-sm font-bold">
                      {activeCityTerritories.map((city) => (
                        <li key={city.slug}>
                          <Link
                            href={`/service-areas/${city.slug}`}
                            className="focus-ring inline-flex rounded-sm text-orange-700 hover:text-orange-900"
                          >
                            {city.city}, GA
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-4 text-sm font-bold text-slate-500">Coming soon. No city pages are live for this cluster yet.</p>
                  )}
                </details>
              ))}
            </div>
          </section>

          <div className="mt-10 rounded-lg bg-orange-50 p-6 text-sm leading-6 text-orange-950">
            <strong>Coverage note:</strong> {siteConfig.disclosure} {siteConfig.routingDisclosure}
          </div>
          <div className="mt-8">
            <ButtonLink href="/contact">Request Service</ButtonLink>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
