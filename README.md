# Georgia Dryer Vent Pros

Next.js App Router rank-and-rent lead generation site for dryer vent cleaning requests in select Georgia communities.

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

## Resend Lead Email Notifications

Lead forms submit to `app/api/leads/route.ts`. On a valid submission, the API sends an email notification through Resend.

### Create a Resend API Key

1. Sign in to Resend.
2. Go to the API Keys area.
3. Create a new API key for this project.
4. Copy the key once and store it in `.env.local` as `RESEND_API_KEY`.

Do not add `RESEND_API_KEY` to any client-side `NEXT_PUBLIC_` variable.

### Required `.env.local` Variables

Create `.env.local` in the project root:

```bash
RESEND_API_KEY=re_your_api_key_here
LEAD_NOTIFICATION_TO=you@example.com
RESEND_FROM_EMAIL="Georgia Dryer Vent Pros <leads@yourverifieddomain.com>"
```

`LEAD_NOTIFICATION_TO` is where lead notifications are sent.

`RESEND_FROM_EMAIL` must use a sender address/domain that Resend allows for your account.

### Verify Sender Email or Domain

For production, verify your sending domain in Resend and use an email address on that verified domain, such as:

```bash
RESEND_FROM_EMAIL="Georgia Dryer Vent Pros <leads@georgiadryerventpros.com>"
```

If you are only testing, Resend may provide a sandbox/testing sender option, but production lead notifications should use a verified domain.

### Test Form Submissions Locally

1. Add the required variables to `.env.local`.
2. Restart the dev server after editing `.env.local`.
3. Open `http://localhost:3000/contact`.
4. Submit the form with name, phone, city, and service needed.
5. Check the inbox configured in `LEAD_NOTIFICATION_TO`.
6. Watch the terminal for API logs or Resend errors.

You can also test with a direct POST:

```bash
curl -X POST http://localhost:3000/api/leads \
  -F "name=Test Lead" \
  -F "phone=6785550100" \
  -F "email=test@example.com" \
  -F "city=Cumming" \
  -F "service_requested=Dryer Vent Cleaning" \
  -F "message=Long dry times" \
  -F "page_url=http://localhost:3000/service-areas/cumming-ga" \
  -F "submitted_at=2026-06-19T12:00:00.000Z" \
  -F "tracking_phone_displayed=(678) 555-0198"
```

### Test After Vercel Deployment

1. Add the same environment variables in the Vercel project settings.
2. Redeploy the site after saving environment variables.
3. Submit a test lead from the deployed domain.
4. Confirm the notification arrives at `LEAD_NOTIFICATION_TO`.
5. If email does not arrive, check Vercel function logs for missing env variables, validation errors, or Resend API errors.

## Lead Email Contents

Notification emails include:

- name
- phone
- email
- city
- cluster
- service needed
- message
- page URL
- submitted timestamp
- tracking phone displayed

## Lead Routing

Territories, clusters, tracking phone numbers, and future provider placeholders live in:

```bash
data/territories.ts
```

Future CRM or provider-specific routing should be connected inside:

```bash
app/api/leads/route.ts
```
