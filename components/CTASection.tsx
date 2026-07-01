import { ButtonLink } from "@/components/ButtonLink";
import { FadeIn } from "@/components/Motion";
import { siteConfig } from "@/data/site";
import { PhoneLink } from "@/components/PhoneLink";

export function CTASection({
  title = "Request dryer vent cleaning in your area",
  text = "Tell us your city and the dryer vent issue you are seeing. We will route the request based on available local coverage.",
  city,
  cluster
}: {
  title?: string;
  text?: string;
  city?: string;
  cluster?: string;
}) {
  return (
    <section className="airflow-bg premium-grid bg-slate-950 py-14 text-white">
      <div className="container">
        <FadeIn className="rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-slate-950/20 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-normal md:text-4xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-slate-300">{text}</p>
              <p className="mt-3 text-sm text-slate-400">
                {siteConfig.callDisclosure} {siteConfig.routingDisclosure}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <PhoneLink className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-sm font-bold !text-[#102033] transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl" />
              <ButtonLink href="/contact" variant="light" eventName="request_service_click" city={city} cluster={cluster}>
                Request Service
              </ButtonLink>
              {/*
                Phone links use PhoneLink so city pages can show cluster tracking
                numbers while global pages use the fallback number.
              */}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
