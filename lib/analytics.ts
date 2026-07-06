"use client";

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: AnalyticsParams) => void;
  }
}

function pageContext() {
  if (typeof window === "undefined") {
    return {
      current_page: "",
      page_title: ""
    };
  }

  return {
    current_page: window.location.href,
    page_title: document.title
  };
}

export function trackGaEvent(eventName: string, params: AnalyticsParams = {}) {
  if (process.env.NODE_ENV !== "production" || typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", eventName, {
    ...pageContext(),
    ...params
  });
}

export function trackGenerateLead(params: {
  selected_service?: string;
  city?: string;
  form_location?: string;
}) {
  trackGaEvent("generate_lead", params);
}
