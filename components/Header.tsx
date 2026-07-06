"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "@/components/ButtonLink";
import { PhoneLink } from "@/components/PhoneLink";
import { mainNavLinks, serviceNavLinks } from "@/data/navigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white/92 backdrop-blur transition-shadow ${
        scrolled ? "border-slate-200 shadow-lg shadow-slate-950/5" : "border-slate-100"
      }`}
    >
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
          <Link
            href="/"
            className="focus-ring rounded-sm text-sm font-bold text-slate-700 hover:text-orange-700"
          >
            Home
          </Link>
          <div className="group relative">
            <button
              type="button"
              className="focus-ring rounded-sm text-sm font-bold text-slate-700 hover:text-orange-700"
              aria-haspopup="true"
            >
              Services
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-md border border-slate-200 bg-white p-2 text-sm shadow-xl shadow-slate-950/10">
                {serviceNavLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="focus-ring block rounded-md px-3 py-2 font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {mainNavLinks.slice(1).map((item) => (
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
          <PhoneLink className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-4 text-sm font-black !text-[#102033] shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md" />
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
      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            className="border-t border-slate-100 lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1, height: "auto" }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <nav
              aria-label="Mobile navigation"
              className="container grid gap-1 py-3 text-sm font-bold text-slate-700"
            >
              <Link
                href="/"
                className="focus-ring rounded-md px-3 py-3 hover:bg-slate-50 hover:text-orange-700"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <div className="px-3 pb-1 pt-3 text-xs font-black uppercase tracking-[0.18em] text-orange-700">
                Services
              </div>
              {serviceNavLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-md px-6 py-2.5 hover:bg-slate-50 hover:text-orange-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {mainNavLinks.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="focus-ring rounded-md px-3 py-3 hover:bg-slate-50 hover:text-orange-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 grid gap-2 border-t border-slate-100 px-3 pt-3">
                <PhoneLink className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-4 font-black !text-[#102033] shadow-sm ring-1 ring-slate-200" />
                <Link
                  href="/contact"
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-orange-500 px-5 py-3 text-sm font-bold !text-[#102033] shadow-lg shadow-orange-950/10 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl"
                  data-conversion-event="request_service_click"
                  onClick={() => setMenuOpen(false)}
                >
                  Request Service
                </Link>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
