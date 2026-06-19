"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { PhoneIcon } from "@/components/PhoneIcon";
import { fallbackPhone, getClusterForPath } from "@/data/territories";

type PhoneLinkProps = {
  className?: string;
  labelPrefix?: string;
  eventName?: "phone_click" | "sticky_mobile_call_click";
  children?: ReactNode;
};

export function getPhoneForPath(pathname: string) {
  const cluster = getClusterForPath(pathname);

  return {
    display: cluster?.trackingPhone ?? fallbackPhone.display,
    href: cluster?.trackingPhoneHref ?? fallbackPhone.href,
    cluster: cluster?.key ?? "global"
  };
}

export function PhoneLink({
  className = "",
  labelPrefix = "",
  eventName = "phone_click",
  children
}: PhoneLinkProps) {
  const pathname = usePathname();
  const phone = getPhoneForPath(pathname);

  return (
    <a
      href={phone.href}
      className={`callrail-phone !text-[#102033] ${className}`}
      data-callrail-phone
      data-conversion-event={eventName}
      data-cluster={phone.cluster}
      data-phone-displayed={phone.display}
    >
      {children ?? (
        <>
          <PhoneIcon />
          <span>{labelPrefix || "Call Now"}</span>
        </>
      )}
    </a>
  );
}
