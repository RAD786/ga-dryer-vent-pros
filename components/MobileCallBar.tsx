import { siteConfig } from "@/data/site";
import { PhoneLink } from "@/components/PhoneLink";
import { ButtonLink } from "@/components/ButtonLink";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-orange-300 bg-white/96 p-3 shadow-2xl backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        <PhoneLink
          eventName="sticky_mobile_call_click"
          ctaLocation="sticky_mobile_call_bar"
          className="focus-ring pulse-call flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-500 px-3 text-center text-sm font-black !text-[#102033] transition hover:bg-orange-600"
        />
        <ButtonLink
          href="/contact"
          variant="secondary"
          className="w-full !text-[#102033]"
          eventName="request_service_click"
          ctaLocation="sticky_mobile_call_bar"
        >
          Request Service
        </ButtonLink>
      </div>
      <p className="mt-1 text-center text-[11px] leading-4 text-slate-600">
        {siteConfig.callDisclosure}
      </p>
    </div>
  );
}
