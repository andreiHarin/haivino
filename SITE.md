# SITE.md — Dev / Build / Deploy Guide

Stack: **Astro 5 + Tailwind CSS v4 + TypeScript**. Deploys to **GitHub Pages** (phase 1).

## Prerequisites

- **Node.js ≥ 20** (LTS 22 recommended — see `.nvmrc`).
- npm (bundled with Node).
- Git.

> ⚠ The Cursor IDE bundles a helper Node binary that does **not** include npm. Install Node from [nodejs.org](https://nodejs.org/) or via `nvm` and ensure `node -v` and `npm -v` both work in your terminal before continuing.

## First-time install

```powershell
npm install
```

This pulls Astro, Tailwind v4, and types into `node_modules/` (which is gitignored).

## Run the dev server

```powershell
npm run dev
```

Opens at <http://localhost:4321/>. Hot reload on file changes.

Routes available:
| Locale | URL |
|--------|-----|
| RO (default) | `/`, `/despre/`, `/meniu/`, `/contact/` |
| EN | `/en/`, `/en/about/`, `/en/menu/`, `/en/contact/` |

## Build for production

```powershell
npm run build
```

Outputs to `dist/`. Static HTML + optimized assets, ready for any static host.

Preview the production build locally:

```powershell
npm run preview
```

## Environment variables

Drive host portability via two env vars (set them in CI, leave unset locally):

| Var | Purpose | Example (GH Pages subpath) | Example (custom domain) |
|-----|---------|---------------------------|-------------------------|
| `SITE` | Full origin used by Astro for canonical URLs | `https://username.github.io` | `https://haivino.ro` |
| `BASE_PATH` | URL prefix; trailing slash required | `/haivino-site/` | `/` |

The GitHub Actions workflow sets both automatically via `actions/configure-pages`.

## Deploying to GitHub Pages

1. Push the repo to GitHub (any name; default URL becomes `<user>.github.io/<repo-name>/`).
2. In the repo's **Settings → Pages**, set **Source = GitHub Actions**.
3. Push to `main`. The workflow at `.github/workflows/deploy.yml` builds and deploys automatically.

The deploy URL appears in the Actions run output and in **Settings → Pages**.

## Migrating to phase-2 hosting later

When you move off GitHub Pages onto a real host with `haivino.ro`:

1. Configure the new host's deploy step (Cloudflare Pages / Netlify / Vercel all support Astro out of the box).
2. Set `SITE=https://haivino.ro` and `BASE_PATH=/` in the new host's env config.
3. Point `haivino.ro` DNS at the new host.
4. (Optional) Swap the contact-form endpoint from Formspree/Web3Forms to a host-native function.

No source code changes are required for the migration itself.

## Project layout

```
src/
├── components/
│   ├── pages/            # page-body content components (Home, About, Menu, Contact)
│   ├── BookingCTA.astro  # sticky bilingual phone CTA
│   ├── Footer.astro
│   ├── Header.astro      # nav + language switcher
│   ├── Layout.astro      # html shell + meta + Header/Footer/CTA wrap
│   ├── Marquee.astro     # CSS-only horizontal ticker band
│   └── ValueQuartet.astro
├── data/
│   └── contacts.ts       # typed re-export of utils/contacts.json
├── i18n/
│   ├── ro.json           # all RO strings
│   ├── en.json           # all EN strings
│   └── utils.ts          # t(), localeUrl(), routes
├── pages/                # file-based routing (RO at root, EN under /en/)
│   ├── despre.astro
│   ├── meniu.astro
│   ├── contact.astro
│   ├── index.astro
│   └── en/
│       ├── about.astro
│       ├── contact.astro
│       ├── menu.astro
│       └── index.astro
└── styles/
    └── global.css        # Tailwind v4 entry + brand tokens (@theme block)
```

External sources (outside `src/`):
- `utils/contacts.json` — canonical business contacts
- `media/placeholders/` — cartoon images, imported via `astro:assets`
- `media/photos/` — drop real photos here, then swap imports

## Common edits

- **Change a route name** (e.g. `/despre/` → `/despre-noi/`): rename the file in `src/pages/` AND update `routes` in `src/i18n/utils.ts`.
- **Change a translation**: edit `src/i18n/ro.json` or `en.json` — types update automatically.
- **Change brand colors / fonts**: edit `@theme` block in `src/styles/global.css`.
- **Update contacts**: edit `utils/contacts.json` (single source of truth).
- **Add a new language**: add JSON file in `src/i18n/`, add to `locales` + `routes`, create the page files.

## Notes / known limits (phase 1)

- The contact form is **rendered but disabled** (no backend). Wire it up via Formspree or Web3Forms before launch — see `PREREQUISITES.md`.
- Cookie/privacy banner is **not yet** included. Add when the legal text is ready (see `PREREQUISITES.md`).
- Analytics is **not yet** wired. Plausible / Cloudflare Web Analytics recommendation pending.
- All page imagery is still **placeholder cartoons** (see `media/README.md`).
