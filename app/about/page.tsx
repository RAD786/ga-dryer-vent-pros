import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Georgia Dryer Vent Pros connects homeowners with local dryer vent cleaning providers serving select Georgia communities.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Georgia Dryer Vent Pros",
    description:
      "A dryer vent cleaning lead connection site for homeowners in select Georgia communities.",
    url: "/about"
  }
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
      <section className="bg-slate-950 py-14 text-white">
        <div className="container max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-300">About the network</p>
          <h1 className="mt-4 text-4xl font-black tracking-normal md:text-5xl">
            A clear way to request dryer vent cleaning in select Georgia communities
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            Georgia Dryer Vent Pros is built to help homeowners request dryer vent cleaning and related services, then route those leads by territory to local service providers where coverage is available.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">What we do</h2>
            <p className="mt-4 leading-7 text-slate-700">
              We connect homeowners with local dryer vent cleaning providers serving select Georgia communities. Requests may involve clogged vents, long dry times, lint buildup, dryer vent inspections, bird nest removal, vent line cleaning, and safety-focused cleaning.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              The goal is straightforward: help a homeowner submit a clear request, identify the relevant city or territory, and pass that request to an available local provider.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-black text-slate-950">What we do not claim</h2>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700">
              <li>We do not claim to have a physical office in every listed city.</li>
              <li>We do not claim to serve every city in Georgia.</li>
              <li>We do not claim ratings, reviews, certifications, licensing, insurance, or accreditation unless verified provider details are added later.</li>
              <li>We do not publish fake reviews or fake business history.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            ["Homeowner request", "You call or submit a form with the city and dryer vent issue."],
            ["Territory routing", "Your request is reviewed for service area coverage and provider availability."],
            ["Provider follow-up", "A local provider may contact you to discuss service details and scheduling."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-black text-slate-950">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container rounded-lg border border-orange-200 bg-orange-50 p-6">
          <h2 className="text-2xl font-black text-orange-950">Disclosure</h2>
          <p className="mt-3 leading-7 text-orange-950">
            {siteConfig.disclosure} {siteConfig.routingDisclosure} {siteConfig.callDisclosure}
          </p>
          <div className="mt-6">
            <ButtonLink href="/contact">Request Service</ButtonLink>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
