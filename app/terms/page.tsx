import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms for using Georgia Dryer Vent Pros, a lead generation and provider connection website for dryer vent cleaning requests in select Georgia communities.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms",
    description: "Terms of use for Georgia Dryer Vent Pros.",
    url: "/terms"
  }
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Terms", href: "/terms" }]} />
      <section className="py-14">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-black tracking-normal text-slate-950">Terms</h1>
          <p className="mt-4 text-sm font-semibold text-slate-600">Last updated: June 19, 2026</p>
          <div className="mt-8 space-y-8 leading-7 text-slate-700">
            <section>
              <h2 className="text-2xl font-black text-slate-950">Website purpose</h2>
              <p className="mt-3">
                Georgia Dryer Vent Pros is a lead generation and connection website. We connect homeowners with local dryer vent cleaning providers serving select Georgia communities. Service availability may vary by city.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-950">Independent providers</h2>
              <p className="mt-3">
                Calls may be routed to an independent local service provider. Providers are responsible for confirming service scope, pricing, scheduling, workmanship, and any applicable credentials or insurance information.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-950">No universal coverage claim</h2>
              <p className="mt-3">
                This site does not claim statewide coverage and does not claim to have a physical office in each listed city. Listed service areas are territories where requests may be routed if provider availability exists.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-950">No credential claims</h2>
              <p className="mt-3">
                Unless specific verified provider information is added later, this website does not make provider credential, accreditation, rating, or review claims.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-950">Call and form consent</h2>
              <p className="mt-3">
                By calling or submitting a form, you agree that your information may be used to respond to your request and routed to a local provider. {siteConfig.callDisclosure}
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-950">Contact</h2>
              <p className="mt-3">
                Questions about these terms can be sent to <a className="font-bold text-orange-700" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
