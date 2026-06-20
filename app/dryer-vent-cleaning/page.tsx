import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { FadeIn, HeroReveal, MotionItem, Stagger } from "@/components/Motion";
import { PhoneLink } from "@/components/PhoneLink";
import { services, siteConfig } from "@/data/site";
import { activeCityTerritories } from "@/data/territories";
import { dryerVentServiceSchema, pageSeo } from "@/data/seo";

export const metadata: Metadata = pageSeo({
  title: "Dryer Vent Cleaning Services",
  description:
    "Request dryer vent cleaning, clogged vent cleaning, inspections, bird nest removal, line cleaning, and safety cleaning from local providers in select Georgia communities.",
  path: "/dryer-vent-cleaning"
});

const faq = [
  {
    question: "What does dryer vent cleaning usually include?",
    answer:
      "A local provider may inspect accessible venting, clean lint from the vent path, check the exterior termination point, and look for obvious airflow restrictions. Exact scope depends on the provider and the home."
  },
  {
    question: "Can a clogged dryer vent damage a dryer?",
    answer:
      "Restricted airflow can make a dryer run hotter and longer than intended, which may increase wear on parts and raise utility costs."
  },
  {
    question: "Do you provide prices on this website?",
    answer:
      "Pricing is confirmed by the local provider after reviewing your city, vent setup, requested service, and availability."
  }
];

export default function DryerVentCleaningPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Dryer Vent Cleaning", href: "/dryer-vent-cleaning" }]} />
      <section className="airflow-bg premium-grid bg-slate-950 py-14 text-white">
        <div className="container grid gap-10 lg:grid-cols-[1fr_420px] lg:items-start">
          <HeroReveal>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-300">Dryer vent service</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-normal md:text-5xl">
              Dryer vent cleaning for Georgia homeowners
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Request help for lint buildup, clogged vents, longer dry times, blocked exterior vents, and dryer safety concerns. We connect homeowners with local dryer vent cleaning providers serving select Georgia communities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PhoneLink className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-sm font-bold !text-[#102033] shadow-lg shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl" />
              <ButtonLink href="/service-areas" variant="light">Check Service Areas</ButtonLink>
            </div>
            <p className="mt-4 text-sm text-slate-400">{siteConfig.callDisclosure}</p>
          </HeroReveal>
          <HeroReveal delay={0.12}>
            <LeadForm compact />
          </HeroReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">Service requests we route</h2>
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
        <div className="container grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
              Why homeowners request dryer vent cleaning
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              A dryer vent should move hot, moist air outside the home. When lint, crushed ducts, damaged vent caps, or nesting material restrict airflow, the dryer may take longer to dry clothes and operate at higher temperatures.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Cleaning is especially important when the vent run is long, exits through an upper wall or roofline, or has not been checked recently.
            </p>
          </FadeIn>
          <FadeIn delay={0.08} className="lift-card rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-2xl font-black text-slate-950">Common request notes</h3>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
              <li><strong>Clogged vent:</strong> dryer runs but clothes stay damp.</li>
              <li><strong>Exterior blockage:</strong> lint or nesting material is visible outside.</li>
              <li><strong>Inspection:</strong> homeowner wants airflow and visible connections checked.</li>
              <li><strong>Safety cleaning:</strong> lint buildup or overheating symptoms need attention.</li>
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-700">Internal service area links</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
                Select local dryer vent cleaning territories
              </h2>
            </div>
            <ButtonLink href="/service-areas" variant="secondary">All Service Areas</ButtonLink>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {activeCityTerritories.map((city) => (
              <Link key={city.slug} href={`/service-areas/${city.slug}`} className="focus-ring lift-card rounded-xl border border-slate-200 bg-white p-4 font-black text-slate-950 shadow-sm hover:border-orange-300 hover:bg-orange-50">
                {city.city}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">Service FAQ</h2>
          <div className="mt-8">
            <FAQ items={faq} />
          </div>
        </div>
      </section>

      <CTASection title="Need dryer vent cleaning?" />
      <JsonLd
        data={dryerVentServiceSchema("/dryer-vent-cleaning")}
      />
    </>
  );
}
