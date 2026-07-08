import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { FadeIn, HeroReveal, MotionItem, Stagger } from "@/components/Motion";
import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/data/site";
import { activeCityTerritories } from "@/data/territories";
import { dryerVentServiceSchema } from "@/data/seo";
import type { ServicePageConfig } from "@/data/servicePages";

export function ServicePageTemplate({ service }: { service: ServicePageConfig }) {
  const cityLinks = activeCityTerritories.slice(0, 7);

  return (
    <>
      <Breadcrumbs items={[{ name: service.shortTitle, href: `/${service.slug}` }]} />

      <section className="airflow-bg premium-grid bg-slate-950 py-14 text-white">
        <div className="container grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
          <HeroReveal>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-300">
              {service.keyword}
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-normal md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-200">{service.heroText}</p>
            {service.heroImage ? (
              <div className="mt-7 overflow-hidden rounded-lg border border-white/10 bg-slate-900/60 shadow-2xl shadow-slate-950/30">
                <Image
                  src={service.heroImage.src}
                  alt={service.heroImage.alt}
                  width={service.heroImage.width}
                  height={service.heroImage.height}
                  className="aspect-video w-full object-cover"
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  priority
                />
              </div>
            ) : (
              <div className="mt-7 flex aspect-video items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/[0.04] px-4 text-center text-xs font-bold uppercase tracking-[0.12em] text-slate-300">
                {service.placeholder}
              </div>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PhoneLink labelPrefix="Call Now" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-sm font-bold !text-[#102033] shadow-lg shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl" />
              <ButtonLink href="/service-areas" variant="light">Check Service Areas</ButtonLink>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              {siteConfig.callDisclosure} {siteConfig.routingDisclosure}
            </p>
          </HeroReveal>
          <HeroReveal delay={0.12}>
            <LeadForm compact serviceType={service.shortTitle} formLocation={`${service.slug}_hero`} />
          </HeroReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">{service.problemTitle}</h2>
            <p className="mt-4 leading-7 text-slate-700">{service.problemText}</p>
            <div className="mt-7 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              {service.problemImage ? (
                <Image
                  src={service.problemImage.src}
                  alt={service.problemImage.alt}
                  width={service.problemImage.width}
                  height={service.problemImage.height}
                  className="aspect-video w-full border-b border-slate-200 object-cover"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              ) : (
                <div className="flex aspect-video items-center justify-center border-b border-slate-200 bg-slate-50 px-4 text-center text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                  Image placeholder - 16:9 problem photo
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-black text-slate-950">Common symptoms</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700">
                  {service.symptoms.map((symptom) => (
                    <li key={symptom} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" aria-hidden="true" />
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.08} className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">{service.needTitle}</h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
              {service.needItems.map((item) => (
                <li key={item} className="lift-card rounded-md border border-slate-200 bg-white p-3 shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">How the service request works</h2>
          <Stagger className="mt-8 grid gap-5 md:grid-cols-3">
            {service.howItWorks.map(([title, text], index) => (
              <MotionItem key={title}>
                <article className="lift-card h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-orange-500 text-lg font-black text-slate-950">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-black text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
                </article>
              </MotionItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-start">
          <FadeIn>
            <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
              Why it matters for safety and performance
            </h2>
            <p className="mt-4 leading-7 text-slate-700">{service.whyItMatters}</p>
            <p className="mt-4 leading-7 text-slate-700">
              Service availability may vary by city. Georgia Dryer Vent Pros is a connection service, and provider scope, scheduling, and pricing are confirmed by the local provider that follows up.
            </p>
          </FadeIn>
          <FadeIn delay={0.08} className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">Current Georgia service-area CTA</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Current live pages focus on select North Georgia communities while coverage expands over time.
            </p>
            <div className="mt-5">
              <ButtonLink href="/service-areas" variant="secondary">View Service Areas</ButtonLink>
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {cityLinks.map((city) => (
                <Link key={city.slug} href={`/service-areas/${city.slug}`} className="focus-ring rounded-md border border-slate-200 bg-white p-3 text-sm font-black text-slate-950 hover:border-orange-300 hover:bg-orange-50">
                  {city.city}, GA
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">Related dryer vent services</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.relatedServices.map((related) => (
              <Link key={related.href} href={related.href} className="focus-ring lift-card rounded-xl border border-slate-200 bg-white p-5 font-black text-slate-950 shadow-sm hover:border-orange-300 hover:bg-orange-50">
                {related.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">{service.shortTitle} FAQ</h2>
          <div className="mt-8">
            <FAQ items={service.faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title={`Request ${service.shortTitle.toLowerCase()} in your area`}
        text="Tell us your city and the dryer vent issue you need help with. We will route the request based on available local provider coverage."
      />
      <JsonLd
        data={dryerVentServiceSchema(`/${service.slug}`, {
          name: `${service.shortTitle} Provider Connection Service`,
          serviceType: service.shortTitle,
          description: `${service.title}. Georgia Dryer Vent Pros connects homeowners and property owners with local dryer vent service providers in select Georgia communities where coverage is available.`
        })}
      />
    </>
  );
}
