# Development & Deployment

## Architecture

| | Local | Production |
|---|---|---|
| Env vars | `.dev.vars` | `wrangler pages secret put` |
| Database | `.wrangler/state/` | Remote D1 |
| Deploy | `npm run dev` | Push to `main` (auto) |

## First-Time Setup

```bash
# Cloudflare
npx wrangler login

# Stripe CLI (for local webhook testing)
brew install stripe/stripe-cli/stripe
stripe login
```

## Local Development

```bash
# 1. Install
npm install

# 2. Set up environment
cp .dev.vars.example .dev.vars

# 3. Edit .dev.vars:
#    STRIPE_SECRET_KEY     → Get test key from Stripe Dashboard > Developers > API Keys
#    STRIPE_WEBHOOK_SECRET → Get from step 4 below
#    PUBLIC_SITE_URL       → http://localhost:5173

# 4. Start webhook forwarding (separate terminal)
stripe listen --forward-to localhost:5173/api/webhooks/stripe
# Copy the whsec_... output to .dev.vars STRIPE_WEBHOOK_SECRET

# 5. Apply database migrations
npx wrangler d1 migrations apply claudecodetips-db --local

# 6. Run dev server
npm run dev
```

**Test card:** `4242 4242 4242 4242` (any future date, any CVC)

## Production Setup

### Environment Variables
```bash
# Each command prompts for value interactively (never store in files)
npx wrangler pages secret put STRIPE_SECRET_KEY --project-name=claudecodetips
npx wrangler pages secret put STRIPE_WEBHOOK_SECRET --project-name=claudecodetips
npx wrangler pages secret put PUBLIC_SITE_URL --project-name=claudecodetips

# Or bulk upload (.env format file, delete immediately after!)
npx wrangler pages secret bulk .prod-secrets --project-name=claudecodetips

# List all
npx wrangler pages secret list --project-name=claudecodetips
```

### Stripe Webhook
In [Stripe Dashboard > Webhooks](https://dashboard.stripe.com/webhooks):
- Endpoint: `https://claudecodetips.com/api/webhooks/stripe`
- Events: `checkout.session.completed`, `charge.refunded`, `charge.dispute.created`
- Copy signing secret → use for `STRIPE_WEBHOOK_SECRET` above

### Database
```bash
npx wrangler d1 migrations apply claudecodetips-db --remote
```

## Deploy

Push to `main` → GitHub Actions auto deploys.

**GitHub Secrets required** (repo > Settings > Secrets and variables > Actions):
- `CLOUDFLARE_API_TOKEN` → [Create here](https://dash.cloudflare.com/profile/api-tokens) (use "Edit Cloudflare Workers" template)
- `CLOUDFLARE_ACCOUNT_ID` → Workers & Pages dashboard right sidebar

Manual:
```bash
npm run build && npx wrangler pages deploy .svelte-kit/cloudflare --project-name=claudecodetips
```

## Database Commands

```bash
# Query
npx wrangler d1 execute claudecodetips-db --local --command "SELECT * FROM purchases"
npx wrangler d1 execute claudecodetips-db --remote --command "SELECT * FROM purchases"

# Export
npx wrangler d1 export claudecodetips-db --remote --output backup.sql
```
