# Georgia Dryer Vent Pros

Next.js App Router rank-and-rent lead generation site for dryer vent cleaning requests in select Georgia communities.

The site is intentionally written as a provider connection site, not as a fake single business with offices in every city.

## Local Setup

Install dependencies:

```bash
npm install
```

Run the local dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Set the required environment variables in Vercel Project Settings.
4. Deploy the project.
5. After deployment, test `/`, `/dryer-vent-cleaning`, `/service-areas`, `/contact`, `/sitemap.xml`, and `/robots.txt`.
6. Submit a test form and confirm the Resend notification is delivered.

## Environment Variables

Create `.env.local` for local development. Do not commit real secrets.

```bash
RESEND_API_KEY=re_your_api_key_here
LEAD_NOTIFICATION_TO=you@example.com
RESEND_FROM_EMAIL="Georgia Dryer Vent Pros <leads@yourverifieddomain.com>"
NEXT_PUBLIC_CALLRAIL_SCRIPT=
```

`.env.example` is the safe template. `.env.local` contains real private values.

## Resend Lead Email Notifications

Lead forms submit to:

```bash
app/api/leads/route.ts
```

On a valid submission, the API validates required fields and sends an email through Resend.

### Create a Resend API Key

1. Sign in to Resend.
2. Go to API Keys.
3. Create a new API key for this project.
4. Store it in `.env.local` as `RESEND_API_KEY`.
5. Add the same key to Vercel Environment Variables before production testing.

Do not expose the API key with a `NEXT_PUBLIC_` prefix.

### Verify Sender Email or Domain

For production, verify your sending domain in Resend and use an email address on that domain:

```bash
RESEND_FROM_EMAIL="Georgia Dryer Vent Pros <leads@georgiadryerventpros.com>"
```

For early local testing, Resend may allow:

```bash
RESEND_FROM_EMAIL="Georgia Dryer Vent Pros <onboarding@resend.dev>"
```

Testing senders may only send to the verified Resend account email until a domain is verified.

### Test Form Submissions Locally

1. Add `RESEND_API_KEY`, `LEAD_NOTIFICATION_TO`, and `RESEND_FROM_EMAIL` to `.env.local`.
2. Restart the dev server.
3. Open `http://localhost:3000/contact`.
4. Submit the form with name, phone, city, and service needed.
5. Confirm the email arrives at `LEAD_NOTIFICATION_TO`.

### Test After Vercel Deployment

1. Add the same env variables in Vercel.
2. Redeploy after saving env variables.
3. Submit a live form test.
4. Check Vercel function logs if the email is not received.

## Phone Numbers and Call Tracking

Global fallback phone number:

```bash
data/territories.ts
```

Update:

```ts
export const fallbackPhone = {
  display: "(678) 555-0198",
  href: "tel:+16785550198"
};
```

Cluster tracking numbers are also in `data/territories.ts` under `territoryClusters`.

Each displayed phone link uses:

- `callrail-phone`
- `data-callrail-phone`
- `data-conversion-event`
- `data-cluster`
- `data-phone-displayed`

## CallRail Script

The reusable script component is:

```bash
components/ThirdPartyScripts.tsx
```

Paste the CallRail swap script into this env variable:

```bash
NEXT_PUBLIC_CALLRAIL_SCRIPT=
```

The site works if this variable is empty.

## Add a New City

Edit:

```bash
data/territories.ts
```

Add a city entry to `citySeeds`:

```ts
["City Name", "County or Region", "north-ga", ["Nearby City 1", "Nearby City 2"]]
```

For better city-page quality, also add a matching entry to `cityProfiles` with:

- `intro`
- `serviceContext`
- `commonReasons`
- `homeContext`

## Activate or Deactivate a City

Cities inherit active status from their cluster.

To activate or deactivate a territory, change the cluster:

```ts
active: true
```

or:

```ts
active: false
```

Inactive city pages are not included in the sitemap and return `404`.

## Add a New Territory Cluster

1. Add the cluster key to `ClusterKey`.
2. Add a new entry to `territoryClusters`.
3. Add cities to `citySeeds` using the new cluster key.
4. Add city profiles for active cities.
5. Update provider routing comments in `app/api/leads/route.ts` if needed.

## Connect Future CRM or Provider Routing

The form currently sends Resend email notifications. Future integrations should be added in:

```bash
app/api/leads/route.ts
```

Good next integrations:

- Airtable: store lead records and billing status.
- Google Sheets: lightweight reporting by territory.
- GoHighLevel: create contacts and opportunities.
- CRM webhook: send lead details to a provider CRM.
- Provider routing: send North GA to Provider A, South Metro to Provider B, and so on.

The route already includes lead qualification fields for:

- qualified
- qualification reason
- service requested
- city
- cluster
- phone
- duplicate
- spam
- wrong service
- outside service area
- existing customer
- billable amount
- invoice status

## Add a Real Provider Later

Do not add provider claims until they are verified.

Allowed when verified:

- Real provider name
- Real service territory
- Real license or insurance information, if applicable and confirmed
- Real reviews, only if sourced from the provider's actual profiles
- Real business address, only if the provider wants it published and it is accurate

Avoid:

- Fake addresses
- Fake reviews
- Fake ratings
- Fake business hours
- Fake credentials
- Fake Google Business Profiles
- Claims that one provider serves every listed city

## SEO and Launch Checklist

Before launch:

- Verify `siteConfig.url` in `data/site.ts`.
- Confirm only active cities are included in `sitemap.xml`.
- Submit `https://yourdomain.com/sitemap.xml` in Google Search Console.
- Submit the sitemap in Bing Webmaster Tools.
- Test all active city pages.
- Test form submissions.
- Test mobile sticky call and request-service buttons.
- Confirm compliance language appears near CTAs and forms.

Recommended next SEO steps:

- Set up Google Search Console.
- Set up Bing Webmaster Tools.
- Submit the sitemap.
- Add internal links from relevant service copy to active city pages.
- Build citations carefully only when tied to a real business or provider.
- Avoid fake Google Business Profiles.
- Start outreach to lead-taking partners by territory.

## Important Compliance Positioning

The site should continue to say:

> We connect homeowners with local dryer vent cleaning providers serving select Georgia communities.

Also keep these disclosures visible:

- Service availability may vary by area.
- Calls may be routed to an independent local service provider.
- Calls may be recorded for quality and lead verification purposes.
- Georgia Dryer Vent Pros does not claim a physical office in every listed city.

Do not use copy like:

- Georgia's #1 dryer vent cleaning company
- Top-rated specialists statewide
- Our technicians are standing by across all of Georgia
- Licensed and insured technicians, unless provider-specific proof is added later
