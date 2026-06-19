"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { PhoneIcon } from "@/components/PhoneIcon";
import { PhoneLink } from "@/components/PhoneLink";

const navItems = [
  { href: "/dryer-vent-cleaning", label: "Dryer Vent Cleaning" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between gap-4 py-3">
        <Link href="/" className="focus-ring inline-flex rounded-sm" aria-label="Georgia Dryer Vent Pros home">
          <Image
            src="/images/logo-transparent.png"
            alt="Georgia Dryer Vent Pros"
            width={1254}
            height={1254}
            priority
            className="h-14 w-14 object-contain md:h-16 md:w-16"
          />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-sm text-sm font-bold text-slate-700 hover:text-orange-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <PhoneLink className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-black !text-[#102033] ring-1 ring-slate-200 hover:bg-slate-50">
            <PhoneIcon />
            <span>Call Now</span>
          </PhoneLink>
          <ButtonLink href="/contact" eventName="request_service_click">Request Service</ButtonLink>
        </div>
        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-[#102033] lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className="grid gap-1.5" aria-hidden="true">
            <span className={`h-0.5 w-5 bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      <div id="mobile-menu" className={`${menuOpen ? "block" : "hidden"} border-t border-slate-100 lg:hidden`}>
        <nav
          aria-label="Mobile navigation"
          className="container grid gap-1 py-3 text-sm font-bold text-slate-700"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md px-3 py-3 hover:bg-slate-50 hover:text-orange-700"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
