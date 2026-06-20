import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { PhoneLink } from "@/components/PhoneLink";
import { faqs, services, siteConfig } from "@/data/site";
import { activeCityTerritories, territoryClusters } from "@/data/territories";
import { dryerVentServiceSchema, pageSeo } from "@/data/seo";

export const metadata: Metadata = pageSeo({
  title: "Dryer Vent Cleaning in Georgia",
  description:
    "Connect with local dryer vent cleaning providers serving select Georgia communities. Get help with clogged dryer vents, lint buildup, inspections, and safety cleaning.",
  path: "/"
});

const signs = [
  "Clothes need more than one cycle to dry",
  "Laundry room feels hot or humid during drying",
  "Burning, musty, or overheated smell near the dryer",
  "Lint appears around the outside vent opening",
  "Exterior vent flap does not open while the dryer runs",
  "Dryer shuts off, overheats, or feels unusually hot"
];

export default function HomePage() {
  return (
    <>
      <section className="bg-slate-950 py-14 text-white md:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-300">
              Safety-focused dryer vent service connections
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-normal md:text-6xl">
              Dryer Vent Cleaning in Georgia
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
              Connect with local dryer vent cleaning providers serving select Georgia communities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PhoneLink className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-sm font-bold !text-[#102033] transition hover:bg-orange-600" />
              <ButtonLink href="/contact" variant="light" eventName="request_service_click">Request Service</ButtonLink>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              {siteConfig.callDisclosure} {siteConfig.routingDisclosure}
            </p>
          </div>
          <div className="rounded-lg bg-white p-3 shadow-2xl">
            <Image
              src="/dryer-vent-service-visual.svg"
              alt="Dryer vent cleaning service visual showing a dryer vent line and inspection checklist"
              width={960}
              height={640}
              priority
              className="h-auto w-full rounded-md"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-orange-50 py-4">
        <div className="container text-sm font-semibold leading-6 text-orange-950">
          {siteConfig.disclosure} Service availability may vary by area.
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-700">Why airflow matters</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
              Lint buildup can create real dryer safety concerns.
            </h2>
          </div>
          <div className="grid gap-4 text-slate-700 sm:grid-cols-2">
            {[
              ["Longer dry times", "Restricted airflow can keep moisture trapped in clothes and force repeated cycles."],
              ["Blocked vents", "Lint, crushed ducting, pests, or nesting material can stop exhaust from leaving the home."],
              ["Overheating", "A dryer working against a clogged vent may run hotter than intended."],
              ["Fire risk", "Lint is combustible, so reducing buildup is an important home maintenance step."]
            ].map(([title, text]) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-black text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-700">Services</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
              Dryer vent cleaning requests we can help route
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.slug} className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{service.description}</p>
                <Link className="focus-ring mt-4 inline-flex rounded-sm text-sm font-black text-orange-700 hover:text-orange-900" href="/dryer-vent-cleaning">
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
              Signs you need dryer vent cleaning
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Dryer vent problems often show up before a full blockage. If you notice any of these warning signs, request service before the dryer has to work harder.
            </p>
            <div className="mt-7">
              <ButtonLink href="/contact">Request Service</ButtonLink>
            </div>
          </div>
          <ul className="grid gap-3">
            {signs.map((sign) => (
              <li key={sign} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800">
                <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-orange-500" aria-hidden="true" />
                {sign}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="container">
          <h2 className="text-3xl font-black tracking-normal md:text-4xl">How it works</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["1", "Request dryer vent service", "Call or send the request form with your city, contact details, and the dryer vent issue."],
              ["2", "We route your request", "The lead is matched based on city, service area, and available local coverage."],
              ["3", "A local provider follows up", "An independent local service provider may contact you to confirm availability, pricing, and scheduling."]
            ].map(([step, title, text]) => (
              <article key={step} className="rounded-lg border border-slate-800 bg-slate-900 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-orange-500 text-lg font-black">{step}</div>
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-700">Territory preview</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
              North GA launch service areas
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              The first active launch territory is {territoryClusters["north-ga"].region}. Other clusters are configured for future activation, but current service availability may vary by area.
            </p>
            <div className="mt-7">
              <ButtonLink href="/service-areas" variant="secondary">View Service Areas</ButtonLink>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {activeCityTerritories.map((city) => (
              <Link key={city.slug} href={`/service-areas/${city.slug}`} className="focus-ring rounded-lg border border-slate-200 bg-white p-4 font-black text-slate-950 hover:border-orange-300 hover:bg-orange-50">
                {city.city}
                <span className="block pt-1 text-sm font-semibold text-slate-600">{city.countyOrRegion}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">Dryer vent cleaning FAQ</h2>
          <div className="mt-8">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection />
      <JsonLd
        data={dryerVentServiceSchema("/")}
      />
    </>
  );
}
