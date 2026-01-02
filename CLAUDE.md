# Claude Instructions

## Core Principles

- **Ultrathink always.** Every action requires deep, thorough thinking. No hasty, stupid actions. Slow down and think through all implications.
- **Validate before proposing.** Never give unchecked or unvalidated plans. Check and validate all hypotheses first.
- **Identify root causes.** Never propose band-aid solutions. Recommend architecture changes if needed.
- **One best solution only.** Evaluate all options internally and present only the best one.
- **Keep it simple.** No overkill, no bloat. Concise, simple, effective solutions only.
- **Think holistically.** Never give patchy solutions that fix one thing and break others. Never create anything in isolation—consider: navbar? footer? landing page? cross-links? user flows?
- **Never create what exists.** Always search the codebase first. Copy and adapt from existing files.
- **When in doubt, ask.** Never make stupid assumptions. If unclear, ask the user before proceeding.

## Research Requirements

### Codebase Understanding

- Read all relevant files end-to-end before making suggestions
- Read at least 25 relevant files across the full stack
- Don't read partially or superficially—read with intent
- **Read ALL similar implementations first.** E.g., for Stripe, read the checkout implementation.
- **Copy-paste, don't reinvent.** If it exists, use it verbatim. Don't try to write it yourself.
- Never create new utilities, components, or patterns if they already exist

### External Research

- Always search the web before giving solutions
- Read the latest docs and best practices (current date: January 2026)
- Never rely solely on internal knowledge
- Provide references from trusted, authoritative sources
- Never use outdated information

## Code Quality Standards

### Clean Code

- Never leave legacy code behind (unused code, dead code, orphaned comments)
- Never add unnecessary fallbacks
- Clean, effective, simple code only
- **No emojis anywhere in code or UI**

### Internationalization (13 Languages)

- **Languages:** en, ja, zh-CN, zh-TW, es, fr, pt, de, ko, ar, ru, id, tr
- All frontend changes must update all language files
- Never hard-code strings in pages or components
- Never update a single page without adding i18n strings
- Always use i18n for all user-facing text
- Clean up unused i18n strings

### Follow Existing Patterns

- Follow the codebase's coding standards, architecture, and design patterns
- Never create siloed or standalone solutions
- Match existing front-end design patterns, components, and styles exactly
- Copy-paste from similar files, then adapt—don't reinvent
- If a pattern exists elsewhere, use it verbatim
- **Visual consistency:** Match existing styling (colors, borders, buttons). Check similar pages first.

## Design System

### CORE RULES (NON-NEGOTIABLE)

**1. NO MARGIN CLASSES**
Never use: `m-*`, `mt-*`, `mr-*`, `mb-*`, `ml-*`, `mx-*`, `my-*`

Exception: `mx-auto` for centering is allowed.

Use instead:
| Instead of | Use |
|------------|-----|
| `mb-4` between items | Parent with `space-y-4` or `flex flex-col gap-4` |
| `mt-8` after section | Parent with `space-y-8` or section with `pt-8` |
| `mr-2` on icon | Parent with `flex gap-2` |

**2. ONE VALUE PER PROPERTY**
No variations. No "it depends." One value per design property.

### Token

```css
@theme {
  --color-primary: #b88f4a;
}
```

### Colors

| Element          | Class                           |
| ---------------- | ------------------------------- |
| Body text        | `text-slate-900`                |
| Muted text       | `text-slate-500`                |
| Light background | `bg-slate-50`                   |
| Borders          | `border-slate-200`              |
| Primary CTA      | `bg-primary text-white`         |
| Primary text     | `text-primary`                  |
| Primary light    | `bg-primary/10`                 |
| Success          | `text-green-600`, `bg-green-50` |
| Error            | `text-red-600`, `bg-red-50`     |

### Typography

| Element         | Class                   |
| --------------- | ----------------------- |
| H1 (page title) | `text-3xl font-bold`    |
| H2 (section)    | `text-2xl font-bold`    |
| H3 (card title) | `text-xl font-semibold` |
| Body            | `text-base`             |
| Small/meta      | `text-sm`               |
| Badge           | `text-xs font-medium`   |

### Spacing (8px Grid) - NO MARGIN

| Use                          | Class   | Pixels |
| ---------------------------- | ------- | ------ |
| Icon + text                  | `gap-2` | 8px    |
| Inline elements              | `gap-1` | 4px    |
| List items, form fields      | `gap-4` | 16px   |
| Card content, after headings | `gap-6` | 24px   |
| Content blocks, sections     | `gap-8` | 32px   |

### Padding

| Use                  | Class       |
| -------------------- | ----------- |
| Container horizontal | `px-4`      |
| Section vertical     | `py-12`     |
| Card/modal           | `p-6`       |
| Button default       | `px-4 py-2` |
| Button large         | `px-6 py-3` |
| Input                | `px-4 py-3` |
| Badge                | `px-2 py-1` |

### Space-Y (Vertical Stacking Without Flex)

| Use             | Class       |
| --------------- | ----------- |
| Tight list      | `space-y-2` |
| Standard list   | `space-y-4` |
| Section content | `space-y-6` |
| Page sections   | `space-y-8` |

Rule: Use `gap-*` with flex/grid. Use `space-y-*` for simple stacked content.

**Border spacing:** When using `border-t` with `pt-*`, the parent MUST have `space-y-*` for symmetric spacing around the border.

### Border Radius

| Use               | Class          |
| ----------------- | -------------- |
| ALL UI elements   | `rounded-xl`   |
| Pills/badges only | `rounded-full` |

### Shadows

| Use                      | Class       |
| ------------------------ | ----------- |
| Cards, elevated surfaces | `shadow-sm` |
| Sticky headers, modals   | `shadow-lg` |

### Layout Containers

| Use                     | Class                    |
| ----------------------- | ------------------------ |
| Default page            | `max-w-5xl mx-auto px-4` |
| Narrow (forms, pricing) | `max-w-md mx-auto px-4`  |
| Prose/article           | `max-w-3xl mx-auto px-4` |

### Icon Sizes

| Use               | Class     | Pair With           |
| ----------------- | --------- | ------------------- |
| Inline small text | `w-4 h-4` | text-sm, text-xs    |
| Inline body text  | `w-5 h-5` | text-base, buttons  |
| Standalone/nav    | `w-6 h-6` | Headers, navigation |
| Hero/feature      | `w-8 h-8` | Large icons only    |

### Interactive States

| State                  | Class                                                                        |
| ---------------------- | ---------------------------------------------------------------------------- |
| ALL clickables         | `cursor-pointer`                                                             |
| Hover (buttons, links) | `hover:opacity-80`                                                           |
| Hover (cards)          | `hover:border-primary hover:shadow-sm`                                       |
| Focus (inputs)         | `focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary` |
| Disabled               | `disabled:opacity-50 disabled:cursor-not-allowed`                            |

### Transitions

| Use             | Class                  |
| --------------- | ---------------------- |
| Color changes   | `transition-colors`    |
| Transform/scale | `transition-transform` |

Rule: Never use `transition-all`. Always use specific transition classes.

### Z-Index Scale

| Layer               | Value      |
| ------------------- | ---------- |
| Dropdowns           | `z-10`     |
| Sticky elements     | `z-20`     |
| Modals/overlays     | `z-50`     |
| Toast/notifications | `z-[9999]` |

### Responsive (Mobile-First)

| Prefix | Use                     |
| ------ | ----------------------- |
| (none) | Mobile base styles      |
| `md:`  | Tablets, layout changes |
| `lg:`  | Desktop                 |

Rule: Write mobile first, add `md:` for larger screens.

### Component Patterns

**Button (Default):**

```
cursor-pointer px-4 py-2 bg-primary text-white rounded-xl font-semibold hover:opacity-80 transition-colors
```

**Button (Large CTA):**

```
cursor-pointer px-6 py-3 bg-primary text-white rounded-xl font-bold hover:opacity-80 transition-colors
```

**Card:**

```
p-6 bg-white rounded-xl border border-slate-200 shadow-sm
```

**Input:**

```
w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
```

**Section:**

```html
<section class="py-12">
  <div class="max-w-5xl mx-auto px-4">
    <div class="space-y-8">
      <!-- content -->
    </div>
  </div>
</section>
```

### Rules

- Cards on `bg-slate-50` use `bg-white`
- Use Tailwind's shade scale (50, 200, 500, 900), not opacity hacks

## Build Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run preview  # Preview production build
```

## Architecture

SvelteKit application with Netlify adapter, selling access to "50 Tips to Master Claude Code" guide. Content is written in MDSvex (.svx files) with a paywall system.

### Key Patterns

**Routing**: Language-prefixed routes (`/en`, `/ja`) with `[lang]` dynamic parameter. Root `/` redirects to `/en`. Valid languages defined in `src/lib/i18n/loader.js`.

**Content System**: Tips are `.svx` files in `src/lib/content/tips/{lang}/` named `{NN}-{slug}.svx`. Each has frontmatter with id, title, section, summary, and isFree. Tips organized into 13 sections (12 + bonus) defined in `src/lib/content/tips.js`. Free tips hardcoded in `freeTipIds` array.

**i18n**: Translations in `src/lib/i18n/{lang}.js` files. Layout loads translations via `loadTranslations()` and passes `t` object down through `data`.

**Paywall**: Access controlled via `hasAccess` prop passed through layouts. Checks Firestore for valid purchase via `purchase_session` cookie in `src/routes/[lang]/+layout.server.js`.

**Backend**:

- Stripe checkout: `src/routes/api/checkout/+server.js`
- Stripe webhooks: `src/routes/api/webhooks/stripe/+server.js`
- Firebase Admin: `src/lib/server/firebase-admin.js` for storing purchases

## Full-Stack File Reference

Before proposing any solution, review all relevant areas:

### Deployment & Caching

- `netlify.toml`, `src/hooks.server.js`

### Build & Tooling

- `svelte.config.js`, `vite.config.js`, `postcss.config.js`, `package.json`
- **Tailwind v4**: No `tailwind.config.js`. Config via `postcss.config.js` + CSS `@plugin` directives in `src/app.css`

### API Layer

- `src/routes/api/checkout/+server.js`
- `src/routes/api/webhooks/stripe/+server.js`
- `src/routes/api/contact/+server.js`
- `src/routes/api/restore/+server.js`

### Server-Side (SvelteKit)

- `src/routes/[lang]/**/+page.server.js`, `+layout.server.js`
- `src/routes/+page.server.js`
- `src/lib/server/firebase-admin.js`

### Firebase/Firestore

- `src/lib/server/firebase-admin.js` - Admin SDK initialization
- `src/lib/server/rateLimit.js` - Rate limiting utility
- Firestore for storing purchases and user data

### Frontend

- `src/routes/[lang]/**/+page.svelte`, `+layout.svelte`
- `src/routes/+layout.svelte`, `+error.svelte`

### Components

- `src/lib/components/Navbar.svelte`
- `src/lib/components/Footer.svelte`
- `src/lib/components/PaywallBanner.svelte`
- `src/lib/components/TranslationDisclaimer.svelte`
- `src/lib/components/SeoHead.svelte`
- `src/lib/components/TipImage.svelte`
- `src/lib/components/JsonLd.svelte`

### Content

- `src/lib/content/tips.js`
- `src/lib/content/tips/{lang}/*.svx` (13 language folders)
- `src/lib/content/blog.js`

### Internationalization

- `src/lib/i18n/{lang}.js` (13 files: en, ja, zh-CN, zh-TW, es, fr, pt, de, ko, ar, ru, id, tr)
- `src/lib/i18n/loader.js`

### Styles & Static

- `src/app.css`, `src/app.html`
- `static/robots.txt`

## Environment Variables

Required in `.env`:

- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET` - Stripe API
- `PUBLIC_SITE_URL` - Site base URL
- `SERVICE_ACCOUNT_*` - Firebase service account credentials (multiple fields)

## Adding Content

**New tips**: Create `src/lib/content/tips/{lang}/{NN}-{slug}.svx` with frontmatter matching existing pattern. Tip must have ID 1-51 and be assigned to a section in `src/lib/content/tips.js`.

**New language**: Add language code to `supportedLangs` in `src/lib/i18n/loader.js`, create translation file, and add tip translations.

## Final Checklist

Before delivering a solution, confirm:

- [ ] Solution is tested and validated
- [ ] Based on actual code, not hypotheticals
- [ ] Read all relevant upstream and downstream files
- [ ] Read ALL similar implementations and copy-pasted from them
- [ ] Asked user if anything was unclear—no stupid assumptions made
- [ ] Clean, effective, modern approach
- [ ] No legacy code, dead code, hard-coded strings, or bloat
- [ ] No emojis
- [ ] Did not create anything that already exists
- [ ] No siloed code—feature integrated into ecosystem (nav, footer, links, landing page)
- [ ] Holistic—addresses all files that need changing
- [ ] Visual styling matches existing pages
- [ ] All 13 i18n files updated (en, ja, zh-CN, zh-TW, es, fr, pt, de, ko, ar, ru, id, tr)
- [ ] Sitemap updated (`src/routes/sitemap.xml/+server.js`) if new page added
- [ ] Plan file updated and 100% consistent with current task progress

**Only provide a plan when 10000000% confident. If not, continue working and validating.**
