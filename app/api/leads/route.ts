import { NextResponse } from "next/server";
import { Resend } from "resend";
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

type LeadValidationError = {
  field: string;
  message: string;
};

function value(formData: FormData, key: string) {
  const field = formData.get(key);
  return typeof field === "string" ? field.trim() : "";
}

function deriveCityFromPage(pageUrl: string) {
  const match = pageUrl.match(/\/service-areas\/([^/?#]+)/);
  return match ? getCityBySlug(match[1]) : undefined;
}

function validateLead(lead: LeadSubmission) {
  const errors: LeadValidationError[] = [];

  if (!lead.name) {
    errors.push({ field: "name", message: "Name is required." });
  }

  if (!lead.phone) {
    errors.push({ field: "phone", message: "Phone is required." });
  }

  if (!lead.city) {
    errors.push({ field: "city", message: "City is required." });
  }

  if (!lead.service_requested) {
    errors.push({ field: "service_requested", message: "Service needed is required." });
  }

  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    errors.push({ field: "email", message: "Email must be valid if provided." });
  }

  return errors;
}

function envError() {
  const missing = ["RESEND_API_KEY", "LEAD_NOTIFICATION_TO", "RESEND_FROM_EMAIL"].filter(
    (key) => !process.env[key]
  );

  if (!missing.length) {
    return null;
  }

  return {
    missing,
    message: `Missing required email environment variable${missing.length > 1 ? "s" : ""}: ${missing.join(", ")}.`
  };
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatValue(input: string) {
  return escapeHtml(input || "Not provided");
}

function leadEmailHtml(lead: LeadSubmission) {
  const rows = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email],
    ["City", lead.city],
    ["Cluster", lead.cluster],
    ["Service Needed", lead.service_requested],
    ["Message", lead.message],
    ["Page URL", lead.page_url],
    ["Submitted At", lead.submitted_at],
    ["Tracking Phone Displayed", lead.tracking_phone_displayed]
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#102033;line-height:1.5;">
      <h1 style="font-size:22px;margin:0 0 16px;">New dryer vent cleaning lead</h1>
      <table style="width:100%;border-collapse:collapse;border:1px solid #d8e0ea;">
        <tbody>
          ${rows
            .map(
              ([label, fieldValue]) => `
                <tr>
                  <th style="width:190px;text-align:left;vertical-align:top;background:#f8fafc;border-bottom:1px solid #d8e0ea;padding:10px 12px;">${label}</th>
                  <td style="border-bottom:1px solid #d8e0ea;padding:10px 12px;">${formatValue(fieldValue)}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
      <p style="font-size:12px;color:#526274;margin-top:16px;">
        This notification was sent from the Georgia Dryer Vent Pros lead form.
      </p>
    </div>
  `;
}

function leadEmailText(lead: LeadSubmission) {
  return [
    "New dryer vent cleaning lead",
    "",
    `Name: ${lead.name || "Not provided"}`,
    `Phone: ${lead.phone || "Not provided"}`,
    `Email: ${lead.email || "Not provided"}`,
    `City: ${lead.city || "Not provided"}`,
    `Cluster: ${lead.cluster || "Not provided"}`,
    `Service Needed: ${lead.service_requested || "Not provided"}`,
    `Message: ${lead.message || "Not provided"}`,
    `Page URL: ${lead.page_url || "Not provided"}`,
    `Submitted At: ${lead.submitted_at || "Not provided"}`,
    `Tracking Phone Displayed: ${lead.tracking_phone_displayed || "Not provided"}`
  ].join("\n");
}

function resendErrorDetails(error: unknown) {
  if (process.env.NODE_ENV === "production") {
    return undefined;
  }

  if (error && typeof error === "object") {
    const maybeError = error as { name?: string; message?: string; statusCode?: number };
    return {
      name: maybeError.name,
      message: maybeError.message,
      statusCode: maybeError.statusCode
    };
  }

  return { message: String(error) };
}

export async function POST(request: Request) {
  try {
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

    const validationErrors = validateLead(lead);

    if (validationErrors.length) {
      return NextResponse.json(
        { ok: false, error: "Validation failed.", fields: validationErrors },
        { status: 400 }
      );
    }

    const missingEnv = envError();

    if (missingEnv) {
      console.error("Lead email configuration error", missingEnv);
      return NextResponse.json(
        { ok: false, error: "Lead notification email is not configured.", missing: missingEnv.missing },
        { status: 500 }
      );
    }

    // Development visibility. Keep this useful while email/CRM routing is being tested.
    console.info("Lead submission received", lead);

    /*
      Future integrations:
      - Airtable: insert lead rows with qualification and invoice fields.
      - Google Sheets: append lead rows for lightweight territory reporting.
      - GoHighLevel: create/update contact and opportunity by cluster.

      Future routing:
      - North GA leads can route to Provider A.
      - South Metro leads can route to Provider B.
      - Coastal GA leads can route to Provider C.
      - Middle GA leads can route to Provider D.
      - Add duplicate/spam/wrong-service checks before billing a provider.
    */

    const resend = new Resend(process.env.RESEND_API_KEY);
    const leadId = crypto.randomUUID();
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL as string,
      to: process.env.LEAD_NOTIFICATION_TO as string,
      subject: `New dryer vent lead: ${lead.city} - ${lead.service_requested}`,
      html: leadEmailHtml(lead),
      text: leadEmailText(lead),
      replyTo: lead.email || undefined,
      headers: {
        "X-Lead-Id": leadId,
        "X-Lead-Cluster": lead.cluster
      }
    });

    if (error) {
      console.error("Resend email error", error);
      return NextResponse.json(
        {
          ok: false,
          error: "Lead was received, but the notification email could not be sent.",
          details: resendErrorDetails(error)
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      leadId,
      route: lead.cluster,
      emailId: data?.id ?? null
    });
  } catch (error) {
    console.error("Lead submission error", error);
    return NextResponse.json(
      { ok: false, error: "Unexpected lead submission error." },
      { status: 500 }
    );
  }
}
