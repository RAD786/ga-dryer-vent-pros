import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FadeIn, MotionItem, Stagger } from "@/components/Motion";
import { siteConfig } from "@/data/site";
import { getCitiesByCluster, territoryClusters } from "@/data/territories";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = pageSeo({
  title: "Dryer Vent Cleaning Service Areas",
  description:
    "View active Georgia communities where homeowner dryer vent cleaning requests may be routed to local providers. Service availability may vary by city.",
  path: "/service-areas"
});

export default function ServiceAreasPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Service Areas", href: "/service-areas" }]} />
      <section className="airflow-bg premium-grid bg-slate-950 py-14 text-white">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.55fr)] lg:items-center">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-300">Service areas</p>
            <h1 className="mt-4 text-4xl font-black tracking-normal md:text-5xl">
              Dryer vent cleaning provider connections in select Georgia communities
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              We connect homeowners with local dryer vent cleaning providers serving select Georgia communities. We do not claim to serve every city in Georgia, and service availability may vary by area.
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
          <div className="space-y-10">
            {Object.values(territoryClusters).filter((cluster) => cluster.active).map((cluster) => {
              const clusterCities = getCitiesByCluster(cluster.key).filter((city) => city.active);

              return (
                <FadeIn key={cluster.key}>
                <section aria-labelledby={`${cluster.key}-heading`} className="rounded-xl border border-orange-200 bg-orange-50/70 p-6 shadow-sm">
                  <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-700">
                        Active launch territory
                      </p>
                      <h2 id={`${cluster.key}-heading`} className="mt-2 text-3xl font-black text-slate-950">
                        {cluster.label}
                      </h2>
                    </div>
                    <p className="rounded-full bg-orange-500 px-4 py-2 text-sm font-black text-[#102033]">
                      Active
                    </p>
                  </div>
                  <Stagger className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {clusterCities.map((city) => (
                      <MotionItem key={city.slug}>
                      <article className="lift-card h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="text-2xl font-black text-slate-950">{city.city}</h3>
                        <p className="mt-2 text-sm font-semibold text-slate-600">{city.countyOrRegion}</p>
                        <p className="mt-4 text-sm leading-6 text-slate-700">
                          Request dryer vent cleaning, clogged vent cleaning, inspections, and vent safety cleaning for homeowners in and around {city.city} where provider coverage is available.
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
                </section>
                </FadeIn>
              );
            })}
          </div>
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
