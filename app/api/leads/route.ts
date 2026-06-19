import { NextResponse } from "next/server";
import { getCityByName, getCityBySlug, territoryClusters } from "@/data/territories";

export type LeadQualification = {
  qualified: boolean;
  qualification_reason: string;
  service_requested: string;
  city: string;
  cluster: string;
  phone: string;
  duplicate: boolean;
  spam: boolean;
  wrong_service: boolean;
  outside_service_area: boolean;
  existing_customer: boolean;
  billable_amount: number;
  invoice_status: "not_invoiced" | "pending" | "paid" | "void";
};

type LeadSubmission = {
  name: string;
  phone: string;
  email: string;
  city: string;
  message: string;
  page_url: string;
  city_page: string;
  cluster: string;
  service_type: string;
  service_requested: string;
  lead_source: string;
  submitted_at: string;
  tracking_phone_displayed: string;
  routing_email: string;
  provider_placeholder_id: string;
  qualification: LeadQualification;
};

function value(formData: FormData, key: string) {
  const field = formData.get(key);
  return typeof field === "string" ? field.trim() : "";
}

function deriveCityFromPage(pageUrl: string) {
  const match = pageUrl.match(/\/service-areas\/([^/?#]+)/);
  return match ? getCityBySlug(match[1]) : undefined;
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const submittedCity = value(formData, "city");
  const pageUrl = value(formData, "page_url");
  const cityFromPage = deriveCityFromPage(pageUrl);
  const cityFromInput = submittedCity ? getCityByName(submittedCity) : undefined;
  const routedCity = cityFromInput ?? cityFromPage;
  const clusterKey = routedCity?.cluster ?? value(formData, "cluster");
  const cluster = clusterKey in territoryClusters ? territoryClusters[clusterKey as keyof typeof territoryClusters] : null;
  const serviceRequested = value(formData, "service_requested") || value(formData, "service_type");

  const lead: LeadSubmission = {
    name: value(formData, "name"),
    phone: value(formData, "phone"),
    email: value(formData, "email"),
    city: submittedCity || routedCity?.city || "",
    message: value(formData, "message"),
    page_url: pageUrl,
    city_page: value(formData, "city_page") || routedCity?.city || "",
    cluster: cluster?.key ?? clusterKey ?? "unassigned",
    service_type: value(formData, "service_type"),
    service_requested: serviceRequested,
    lead_source: value(formData, "lead_source") || "website",
    submitted_at: value(formData, "submitted_at") || new Date().toISOString(),
    tracking_phone_displayed: value(formData, "tracking_phone_displayed"),
    routing_email: routedCity?.formRoutingEmail ?? cluster?.formRoutingEmail ?? "leads@example.com",
    provider_placeholder_id: routedCity?.providerPlaceholder.providerId ?? cluster?.providerPlaceholder.providerId ?? "unassigned-provider",
    qualification: {
      qualified: Boolean(routedCity?.active && serviceRequested && value(formData, "phone")),
      qualification_reason: routedCity?.active
        ? "Active territory with service request and phone present."
        : "Inactive, unknown, or outside current launch territory.",
      service_requested: serviceRequested,
      city: submittedCity || routedCity?.city || "",
      cluster: cluster?.key ?? clusterKey ?? "unassigned",
      phone: value(formData, "phone"),
      duplicate: false,
      spam: false,
      wrong_service: false,
      outside_service_area: !routedCity?.active,
      existing_customer: false,
      billable_amount: 0,
      invoice_status: "not_invoiced"
    }
  };

  // Development visibility. Replace or augment this with durable storage before launch.
  console.info("Lead submission received", lead);

  /*
    Future integrations:
    - Resend: send homeowner/provider notification emails using lead.routing_email.
    - Airtable: insert lead rows with qualification and invoice fields.
    - Google Sheets: append lead rows for lightweight territory reporting.
    - GoHighLevel: create/update contact and opportunity by cluster.
    - Email notification: notify the provider placeholder assigned to lead.cluster.

    Future routing:
    - North GA leads can route to Provider A.
    - South Metro leads can route to Provider B.
    - Coastal GA leads can route to Provider C.
    - Middle GA leads can route to Provider D.
    - Add duplicate/spam/wrong-service checks before billing a provider.
  */

  return NextResponse.json({ ok: true, leadId: crypto.randomUUID(), route: lead.cluster });
}
