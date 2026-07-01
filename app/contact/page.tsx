import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";
import { HeroReveal, MotionItem, Stagger } from "@/components/Motion";
import { PhoneLink } from "@/components/PhoneLink";
import { siteConfig } from "@/data/site";
import { pageSeo } from "@/data/seo";

export const metadata: Metadata = pageSeo({
  title: "Contact Georgia Dryer Vent Pros",
  description:
    "Contact Georgia Dryer Vent Pros to request dryer vent cleaning in select Georgia communities. Calls may be routed to an independent local service provider.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <section className="airflow-bg premium-grid bg-slate-950 py-14 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <HeroReveal>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-300">Request service</p>
            <h1 className="mt-4 text-4xl font-black tracking-normal md:text-5xl">
              Contact Georgia Dryer Vent Pros
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Tell us where the home is located and what dryer vent issue you are seeing. Requests are routed by city and service area coverage.
            </p>
            <div className="glass-panel mt-8 rounded-xl p-5">
              <p className="text-sm font-semibold text-slate-300">Phone</p>
              <PhoneLink className="focus-ring mt-3 inline-flex min-h-12 items-center gap-2 rounded-md bg-white px-4 text-base font-black !text-[#102033] shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-50" />
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {siteConfig.callDisclosure} {siteConfig.routingDisclosure}
              </p>
            </div>
          </HeroReveal>
          <HeroReveal delay={0.12}>
            <LeadForm />
          </HeroReveal>
        </div>
      </section>

      <section className="py-16">
        <Stagger className="container grid gap-6 md:grid-cols-3">
          {[
            ["Fast request intake", "Provide your contact details, city, and the dryer vent symptoms."],
            ["Coverage review", "Service availability may vary by city and provider schedule."],
            ["Local follow-up", "A local provider may contact you to confirm pricing and appointment options."]
          ].map(([title, text]) => (
            <MotionItem key={title}>
            <article className="lift-card h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-slate-950">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
            </article>
            </MotionItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
