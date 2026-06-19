import { siteConfig } from "@/data/site";
import { PhoneLink } from "@/components/PhoneLink";
import { ButtonLink } from "@/components/ButtonLink";
import { PhoneIcon } from "@/components/PhoneIcon";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-orange-300 bg-white p-3 shadow-2xl lg:hidden">
      <div className="grid grid-cols-2 gap-2">
        <PhoneLink
          eventName="sticky_mobile_call_click"
          className="focus-ring flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-500 px-3 text-center text-sm font-black !text-[#102033]"
        >
          <PhoneIcon className="h-[17px] w-[17px]" />
          <span>Call Now</span>
        </PhoneLink>
        <ButtonLink
          href="/contact"
          variant="secondary"
          className="w-full !text-[#102033]"
          eventName="request_service_click"
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
