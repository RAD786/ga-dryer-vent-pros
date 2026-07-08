import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { HeroReveal, MotionItem, Stagger } from "@/components/Motion";
import { PhoneLink } from "@/components/PhoneLink";
import { activeCityTerritories, territoryClusters } from "@/data/territories";
import { dryerVentServiceSchema, pageSeo } from "@/data/seo";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = pageSeo({
  title: "Dryer Vent Services Across Georgia",
  description:
    "Connect with local dryer vent service providers across select Georgia communities for cleaning, repair, installation, inspection, bird nest removal, rerouting, and commercial dryer vent service.",
  path: "/",
  image: "/images/home-hero.png"
});

const popularServices = [
  {
    title: "Dryer Vent Cleaning",
    href: "/dryer-vent-cleaning",
    image: "/images/cleaning-popular.png",
    imageAlt: "Dryer vent cleaning service removing lint buildup from a dryer vent",
    description:
      "Request help clearing lint buildup, airflow restrictions, and clogged dryer vent lines so laundry routines can run more safely and efficiently."
  },
  {
    title: "Dryer Vent Repair",
    href: "/dryer-vent-repair",
    image: "/images/repair-popular.png",
    imageAlt: "Dryer vent repair for damaged or disconnected vent components",
    description:
      "Connect with providers who can review damaged, disconnected, crushed, or poorly exhausting dryer vent components where coverage is available."
  },
  {
    title: "Dryer Vent Installation",
    href: "/dryer-vent-installation",
    image: "/images/installation-popular.png",
    imageAlt: "Dryer vent installation for a proper laundry exhaust path",
    description:
      "Get connected for new dryer vent installation requests involving laundry rooms, remodels, replacement vent runs, or new equipment setups."
  },
  {
    title: "Dryer Vent Inspection",
    href: "/dryer-vent-inspection",
    image: "/images/inspection-popular.png",
    imageAlt: "Dryer vent inspection checking airflow and visible vent concerns",
    description:
      "Request a visible dryer vent inspection when you need airflow concerns, exterior termination points, or common blockage symptoms reviewed."
  },
  {
    title: "Bird Nest Removal from Dryer Vents",
    href: "/bird-nest-removal",
    image: "/images/nest-removal-popular.png",
    imageAlt: "Bird nest removal from an exterior dryer vent opening",
    description:
      "Route requests for nesting material, blocked vent caps, or exterior dryer vent obstructions that may prevent proper exhaust."
  },
  {
    title: "Dryer Vent Rerouting",
    href: "/dryer-vent-rerouting",
    image: "/images/rerouting-popular.png",
    imageAlt: "Dryer vent rerouting for a long or inefficient vent path",
    description:
      "Ask about rerouting options when a dryer vent path is too long, inefficient, damaged, or no longer fits the home layout."
  },
  {
    title: "Commercial Dryer Vent Cleaning",
    href: "/commercial-dryer-vent-cleaning",
    image: "/images/commercial-popular.png",
    imageAlt: "Commercial dryer vent cleaning for high-use laundry systems",
    description:
      "Submit commercial dryer vent cleaning requests for properties with heavier laundry use, shared laundry rooms, or business service needs."
  }
];

const warningSigns = [
  "Clothes need more than one cycle to dry",
  "Laundry room feels hot or humid during drying",
  "Burning, musty, or overheated smell near the dryer",
  "Lint appears around the outside vent opening",
  "Exterior vent flap does not open while the dryer runs",
  "Dryer shuts off, overheats, or feels unusually hot"
];

const homeFaqs = [
  {
    question: "What dryer vent services can I request?",
    answer:
      "You can request dryer vent cleaning, repair, installation, inspection, bird nest removal, rerouting, and commercial dryer vent service. Available providers and exact scope vary by city and service area."
  },
  {
    question: "Do you serve every city in Georgia?",
    answer:
      "Georgia Dryer Vent Pros is expanding service coverage across Georgia, but current live city pages represent the first launch cluster. Service availability may vary by community."
  },
  {
    question: "Are calls routed to local providers?",
    answer:
      "Yes. Calls and form submissions may be routed to independent local service providers based on city, territory coverage, requested service, and provider availability."
  },
  {
    question: "Can I request service for a rental or commercial property?",
    answer:
      "Yes. Homeowners, property owners, managers, and commercial property contacts can submit a request. The provider that follows up confirms availability, pricing, and service details."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="airflow-bg premium-grid bg-slate-950 py-14 text-white md:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.86fr] lg:items-center">
          <HeroReveal>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-300">
              Serving Georgia select communities
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-normal md:text-6xl">
              Dryer Vent Services Across Georgia
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
              Georgia Dryer Vent Pros connects homeowners and property owners with local dryer vent service providers for cleaning, repair, installation, inspections, bird nest removal, rerouting, and commercial dryer vent service.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PhoneLink labelPrefix="Call Now" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-sm font-bold !text-[#102033] shadow-lg shadow-orange-950/20 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl" />
              <ButtonLink href="/contact" variant="light" eventName="request_service_click">Request Service</ButtonLink>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              {siteConfig.callDisclosure} {siteConfig.routingDisclosure}
            </p>
          </HeroReveal>
          <HeroReveal delay={0.14} className="rounded-xl bg-white p-3 shadow-2xl shadow-orange-950/20">
            <Image
              src="/images/home-hero.png"
              alt="Dryer vent technician clearing lint from a dryer vent"
              width={1680}
              height={945}
              priority
              className="h-auto w-full rounded-md"
            />
          </HeroReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-700">Popular dryer vent services</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
              Service requests we can help route
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Start with the service type that best matches the dryer vent issue. Some pages are planned for future buildout, but the links are in place for the statewide service hub structure.
            </p>
          </div>
          <Stagger className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {popularServices.map((service) => (
              <MotionItem key={service.href}>
                <article className="lift-card h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      width={1672}
                      height={941}
                      className="aspect-video w-full object-cover"
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{service.description}</p>
                  <Link className="focus-ring mt-4 inline-flex rounded-sm text-sm font-black text-orange-700 hover:text-orange-900" href={service.href}>
                    Learn More
                  </Link>
                </article>
              </MotionItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
              Warning signs your dryer vent may need service
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Dryer vent problems often show up before a full blockage. If you notice these symptoms, request service before the dryer has to work harder.
            </p>
            <ul className="mt-7 grid gap-3 md:grid-cols-2">
              {warningSigns.map((sign) => (
                <li key={sign} className="lift-card flex gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-800 shadow-sm">
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-orange-500" aria-hidden="true" />
                  {sign}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PhoneLink labelPrefix="Call Now" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-sm font-bold !text-[#102033] shadow-lg shadow-orange-950/10 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl" />
              <ButtonLink href="/contact" variant="secondary">Request Service</ButtonLink>
            </div>
          </div>
          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src="/images/home-inspection.png"
              alt="Dryer vent technician inspecting a laundry room vent with a homeowner"
              width={1680}
              height={945}
              className="aspect-[16/9] h-auto w-full object-cover"
              sizes="(min-width: 1280px) 1180px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="airflow-bg premium-grid bg-slate-950 py-16 text-white">
        <div className="container">
          <h2 className="text-3xl font-black tracking-normal md:text-4xl">How it works</h2>
          <Stagger className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["1", "Call or request service", "Send your city, contact details, and the dryer vent issue you need help with."],
              ["2", "We route the request", "Requests are matched by city, service type, service area, and available local coverage."],
              ["3", "A provider follows up", "An independent local provider may contact you to confirm availability, pricing, and scheduling."]
            ].map(([step, title, text]) => (
              <MotionItem key={step}>
                <article className="glass-panel h-full rounded-xl p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-orange-500 text-lg font-black">{step}</div>
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
                </article>
              </MotionItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-700">Current service areas</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
              North Georgia launch communities
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              The current live city pages are the first launch cluster in {territoryClusters["north-ga"].region}. Georgia Dryer Vent Pros is expanding service coverage across Georgia, but service availability may vary by city and provider coverage.
            </p>
            <div className="mt-7">
              <ButtonLink href="/service-areas" variant="secondary">View Service Areas</ButtonLink>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {activeCityTerritories.map((city) => (
              <Link key={city.slug} href={`/service-areas/${city.slug}`} className="focus-ring lift-card rounded-xl border border-slate-200 bg-white p-4 font-black text-slate-950 shadow-sm hover:border-orange-300 hover:bg-orange-50">
                {city.city}
                <span className="block pt-1 text-sm font-semibold text-slate-600">{city.countyOrRegion}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-700">Why maintenance matters</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 md:text-4xl">
              Dryer vent maintenance can help reduce airflow problems and safety concerns.
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Lint buildup, crushed venting, blocked exterior caps, nesting material, and long vent runs can make dryers work harder. Cleaning, inspection, repair, installation, and rerouting requests all start with the same goal: help the dryer exhaust more effectively where service is available.
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src="/images/home-matters-section.png"
              alt="Examples of dryer vent blockages including lint buildup, nesting material, and clogged ducting"
              width={2048}
              height={683}
              className="aspect-[3/1] h-auto w-full object-cover"
              sizes="(min-width: 1280px) 1180px, 100vw"
            />
          </div>
          <Stagger className="mt-8 grid gap-4 text-slate-700 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Longer dry times", "Restricted airflow can keep moisture trapped in clothes and force repeated cycles."],
              ["Blocked vents", "Lint, crushed ducting, pests, or nesting material can stop exhaust from leaving the home."],
              ["Overheating", "A dryer working against a clogged vent may run hotter than intended."],
              ["Property needs", "Homes, rentals, and commercial laundry areas may need different dryer vent service scopes."]
            ].map(([title, text]) => (
              <MotionItem key={title}>
                <article className="lift-card h-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-black text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6">{text}</p>
                </article>
              </MotionItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-black tracking-normal text-slate-950 md:text-4xl">Dryer vent services FAQ</h2>
          <div className="mt-8">
            <FAQ items={homeFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Request dryer vent service in your area"
        text="Tell us your city and the dryer vent service you need. We will route the request based on available local provider coverage."
      />
      <JsonLd
        data={dryerVentServiceSchema("/", {
          name: "Georgia Dryer Vent Service Provider Connection",
          serviceType: "Dryer vent cleaning, repair, installation, inspection, bird nest removal, rerouting, and commercial dryer vent service",
          description:
            "Georgia Dryer Vent Pros connects homeowners and property owners with local dryer vent service providers for cleaning, repair, installation, inspection, bird nest removal, rerouting, and commercial dryer vent service in select Georgia communities."
        })}
      />
    </>
  );
}
