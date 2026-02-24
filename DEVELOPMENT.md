# Development & Deployment

## Architecture

| | Local | Production |
|---|---|---|
| Database | `.wrangler/state/` | Remote D1 |
| Deploy | `npm run dev` | Push to `main` (auto) |

## First-Time Setup

```bash
npx wrangler login
```

## Local Development

```bash
# 1. Install
npm install

# 2. Apply database migrations
npx wrangler d1 migrations apply claudecodetips-db --local

# 3. Run dev server
npm run dev
```

## Production Setup

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
npx wrangler d1 execute claudecodetips-db --local --command "SELECT * FROM contacts"
npx wrangler d1 execute claudecodetips-db --remote --command "SELECT * FROM contacts"

# Export
npx wrangler d1 export claudecodetips-db --remote --output backup.sql
```
