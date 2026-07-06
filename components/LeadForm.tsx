"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { getPhoneForPath } from "@/components/PhoneLink";
import { services, siteConfig } from "@/data/site";

type LeadFormProps = {
  compact?: boolean;
  cityPage?: string;
  cluster?: string;
  serviceType?: string;
};

export function LeadForm({
  compact = false,
  cityPage = "",
  cluster = "",
  serviceType = "dryer vent cleaning"
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState(serviceType);
  const pathname = usePathname();
  const phone = getPhoneForPath(pathname);
  const pageUrl = useMemo(() => {
    if (typeof window === "undefined") {
      return pathname;
    }

    return window.location.href;
  }, [pathname]);

  return (
    <form
      className="w-full min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-950/10 md:p-6"
      data-conversion-event="form_submit"
      onSubmit={async (event) => {
        event.preventDefault();
        setError("");
        setSubmitted(false);
        setSubmitting(true);

        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.set("page_url", pageUrl);
        formData.set("city_page", cityPage);
        formData.set("cluster", cluster || phone.cluster);
        formData.set("service_type", selectedService);
        formData.set("lead_source", "website");
        formData.set("submitted_at", new Date().toISOString());
        formData.set("tracking_phone_displayed", phone.display);

        try {
          const response = await fetch("/api/leads", {
            method: "POST",
            body: formData
          });

          if (!response.ok) {
            setError("We could not submit the request. Please call the phone number on this page.");
            return;
          }

          setSubmitted(true);
          form.reset();
        } catch {
          setError("We could not submit the request. Please call the phone number on this page.");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <input type="hidden" name="page_url" value={pageUrl} readOnly />
      <input type="hidden" name="city_page" value={cityPage} readOnly />
      <input type="hidden" name="cluster" value={cluster || phone.cluster} readOnly />
      <input type="hidden" name="service_type" value={selectedService} readOnly />
      <input type="hidden" name="lead_source" value="website" readOnly />
      <input type="hidden" name="submitted_at" value="" readOnly />
      <input type="hidden" name="tracking_phone_displayed" value={phone.display} readOnly />
      <div className="grid min-w-0 gap-4 sm:grid-cols-2">
        <label className="grid min-w-0 gap-2 text-sm font-bold text-slate-800">
          Name
          <input required name="name" autoComplete="name" className="block min-h-12 w-full min-w-0 rounded-md border border-slate-300 bg-white px-3 font-normal shadow-inner shadow-slate-950/[0.02] focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100" />
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-bold text-slate-800">
          Phone
          <input required name="phone" type="tel" autoComplete="tel" className="block min-h-12 w-full min-w-0 rounded-md border border-slate-300 bg-white px-3 font-normal shadow-inner shadow-slate-950/[0.02] focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100" />
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-bold text-slate-800">
          Email
          <input name="email" type="email" autoComplete="email" className="block min-h-12 w-full min-w-0 rounded-md border border-slate-300 bg-white px-3 font-normal shadow-inner shadow-slate-950/[0.02] focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100" />
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-bold text-slate-800">
          City
          <input required name="city" autoComplete="address-level2" className="block min-h-12 w-full min-w-0 rounded-md border border-slate-300 bg-white px-3 font-normal shadow-inner shadow-slate-950/[0.02] focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100" />
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-bold text-slate-800 sm:col-span-2">
          Service Needed
          <select
            required
            name="service_requested"
            className="block min-h-12 w-full min-w-0 rounded-md border border-slate-300 bg-white px-3 font-normal shadow-inner shadow-slate-950/[0.02] focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
            onChange={(event) => setSelectedService(event.target.value)}
            defaultValue=""
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </label>
        {!compact ? (
          <label className="grid min-w-0 gap-2 text-sm font-bold text-slate-800 sm:col-span-2">
            Message
            <textarea name="message" rows={5} className="block w-full min-w-0 rounded-md border border-slate-300 bg-white px-3 py-3 font-normal shadow-inner shadow-slate-950/[0.02] focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100" />
          </label>
        ) : null}
      </div>
      <button
        type="submit"
        className="focus-ring mt-5 min-h-12 w-full rounded-md bg-orange-500 px-5 py-3 text-sm font-black !text-[#102033] shadow-lg shadow-orange-950/10 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
        data-conversion-event="form_submit"
        data-city={cityPage}
        data-cluster={cluster || phone.cluster}
        disabled={submitting}
      >
        {submitting ? "Sending Request..." : "Request Service"}
      </button>
      {submitted ? (
        <p className="mt-3 rounded-md bg-orange-50 p-3 text-sm font-semibold text-orange-900" role="status">
          Thanks. Your request is ready for routing.
        </p>
      ) : null}
      {error ? (
        <p className="mt-3 rounded-md bg-red-50 p-3 text-sm font-semibold text-red-900" role="alert">
          {error}
        </p>
      ) : null}
      <p className="mt-3 text-xs leading-5 text-slate-600">
        {siteConfig.callDisclosure} {siteConfig.routingDisclosure} {siteConfig.disclosure}
      </p>
    </form>
  );
}
