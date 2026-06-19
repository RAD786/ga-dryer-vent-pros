import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  eventName?: string;
  city?: string;
  cluster?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  eventName,
  city,
  cluster
}: ButtonLinkProps) {
  const styles = {
    primary:
      "bg-orange-500 !text-[#102033] hover:bg-orange-600 focus-visible:outline-orange-300",
    secondary:
      "bg-white !text-[#102033] ring-1 ring-slate-200 hover:bg-slate-50 focus-visible:outline-orange-500",
    light:
      "bg-white !text-[#102033] hover:bg-orange-50 focus-visible:outline-orange-300"
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-sm font-bold transition ${styles[variant]} ${className}`}
      data-conversion-event={eventName}
      data-city={city}
      data-cluster={cluster}
    >
      {children}
    </Link>
  );
}
