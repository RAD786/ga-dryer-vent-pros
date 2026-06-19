import Link from "next/link";
import { activeCities, services, siteConfig } from "@/data/site";
import { PhoneLink } from "@/components/PhoneLink";

export function Footer() {
  return (
    <footer className="bg-slate-950 pb-24 pt-12 text-white lg:pb-12">
      <div className="container grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <p className="text-xl font-black">Georgia Dryer Vent Pros</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            {siteConfig.disclosure} {siteConfig.routingDisclosure}
          </p>
          <p className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <PhoneLink className="focus-ring inline-flex min-h-10 items-center gap-2 rounded-md bg-white px-4 font-bold !text-[#102033] hover:bg-orange-50" />
            <a className="focus-ring rounded-sm hover:text-orange-300" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </p>
        </div>
        <div>
          <p className="font-black">Services</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link className="focus-ring rounded-sm hover:text-orange-300" href="/dryer-vent-cleaning">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-black">Service Areas</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {activeCities.slice(0, 7).map((city) => (
              <li key={city.slug}>
                <Link className="focus-ring rounded-sm hover:text-orange-300" href={`/service-areas/${city.slug}`}>
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-black">Company</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li><Link className="focus-ring rounded-sm hover:text-orange-300" href="/about">About</Link></li>
            <li><Link className="focus-ring rounded-sm hover:text-orange-300" href="/contact">Contact</Link></li>
            <li><Link className="focus-ring rounded-sm hover:text-orange-300" href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link className="focus-ring rounded-sm hover:text-orange-300" href="/terms">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mt-10 border-t border-slate-800 pt-6 text-xs leading-5 text-slate-400">
        <p>
          Copyright {new Date().getFullYear()} Georgia Dryer Vent Pros. This website is a lead generation and connection service, not a claim of a physical office in each listed city.
        </p>
      </div>
    </footer>
  );
}
