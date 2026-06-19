import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="container max-w-2xl">
        <p className="text-sm font-black uppercase tracking-[0.14em] text-orange-700">404</p>
        <h1 className="mt-3 text-4xl font-black tracking-normal text-slate-950">Page not found</h1>
        <p className="mt-4 leading-7 text-slate-700">
          The page you requested is not available. You can return to the service area list or request dryer vent cleaning from the contact page.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/service-areas">View Service Areas</ButtonLink>
          <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-slate-200 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-slate-50" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
