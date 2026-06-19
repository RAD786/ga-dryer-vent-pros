import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Georgia Dryer Vent Pros, including lead form information, call handling, and provider routing disclosures.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy",
    description: "Privacy practices for Georgia Dryer Vent Pros.",
    url: "/privacy-policy"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />
      <section className="py-14">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-black tracking-normal text-slate-950">Privacy Policy</h1>
          <p className="mt-4 text-sm font-semibold text-slate-600">Last updated: June 19, 2026</p>
          <div className="mt-8 space-y-8 leading-7 text-slate-700">
            <section>
              <h2 className="text-2xl font-black text-slate-950">Information we collect</h2>
              <p className="mt-3">
                When you call, email, or submit a request form, we may collect your name, phone number, email address, city, requested service, message details, call data, and other information you choose to provide.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-950">How information is used</h2>
              <p className="mt-3">
                We use submitted information to respond to requests, verify leads, store form submissions, route requests by city or service area, communicate with homeowners, improve site performance, and help connect homeowners with local dryer vent cleaning providers where available.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-950">Provider sharing</h2>
              <p className="mt-3">
                Calls may be routed to an independent local service provider. Form and call information may be shared with local service providers to fulfill the request, including scheduling, pricing, and service follow-up. Service availability may vary by city and provider.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-950">Call recording</h2>
              <p className="mt-3">
                {siteConfig.callDisclosure} Recordings may be used for quality control, dispute resolution, and lead verification.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-950">Cookies and analytics</h2>
              <p className="mt-3">
                This site may use cookies, analytics, tracking pixels, or similar technologies to understand traffic sources, measure conversions, and improve the website. You can adjust cookie settings in your browser.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-950">Removal requests</h2>
              <p className="mt-3">
                You may request removal of your information by emailing <a className="font-bold text-orange-700" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. We may retain limited records when needed for legal, security, lead verification, or dispute-resolution purposes.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-slate-950">Contact</h2>
              <p className="mt-3">
                Privacy questions can be sent to <a className="font-bold text-orange-700" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
