"use client";

import { useEffect } from "react";
import { trackGaEvent } from "@/lib/analytics";

function cleanText(text: string | null | undefined) {
  return text?.replace(/\s+/g, " ").trim() ?? "";
}

function closestAnchor(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return null;
  }

  return target.closest("a");
}

export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = closestAnchor(event.target);

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href") ?? "";
      const linkText = cleanText(anchor.textContent);
      const ctaLocation = anchor.dataset.ctaLocation || anchor.dataset.conversionEvent;

      if (href.startsWith("tel:")) {
        trackGaEvent("phone_click", {
          phone_number: anchor.dataset.phoneNumber || href.replace("tel:", ""),
          link_text: linkText,
          cta_location: ctaLocation
        });
        return;
      }

      if (href.startsWith("mailto:")) {
        trackGaEvent("email_click", {
          email_address: href.replace("mailto:", "").split("?")[0],
          link_text: linkText,
          cta_location: ctaLocation
        });
        return;
      }

      if (anchor.dataset.analyticsCta === "true") {
        trackGaEvent("cta_click", {
          cta_text: anchor.dataset.ctaText || linkText,
          destination: anchor.href,
          cta_location: ctaLocation
        });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
