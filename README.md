# Haivino — Wine Bistrot Website

Website for a wine bistrot. The project is being built using an existing site from Roma as a structural and stylistic reference model.

## Status

**Scaffolded.** The Astro project is in place — 4 pages × 2 languages (RO + EN), brand-token styling, sticky bilingual booking CTA, GitHub Actions → GitHub Pages deploy pipeline.

See [`SITE.md`](./SITE.md) for dev / build / deploy commands. Outstanding decisions and pre-launch assets are tracked in [`PREREQUISITES.md`](./PREREQUISITES.md).

## Location

**HAiViNO Wine Bistrot** — Strada Inocențiu Micu Klein 23, 400087 Cluj-Napoca, Romania. Phone: 0787 710 900. Full canonical contact data in `utils/contacts.json`.

## Reference Model

A wine bistrot website from Roma — **CiPASSO** ([cipassoitalia.it](https://cipassoitalia.it)) — is used as the design and structure reference. Pages, sections, and UX patterns will mirror it, then be adapted to our identity, menu, and content.

Captured reference material lives in [`cipassoroma/`](./cipassoroma/) — start with `cipassoroma/README.md`.

## Tech Stack

- **Framework**: [Astro 5](https://astro.build/) — static-site generator, near-zero JS by default
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` (CSS-first config, brand tokens in `@theme`)
- **Language**: TypeScript (strict)
- **i18n**: built-in Astro i18n routing — RO at `/`, EN at `/en/`
- **Hosting (phase 1)**: GitHub Pages via GitHub Actions
- **Hosting (phase 2)**: TBD — `haivino.ro` domain ready

## Quick Start

```powershell
npm install
npm run dev
```

Opens at <http://localhost:4321/>. Full guide in [`SITE.md`](./SITE.md).

## Project Structure

```
.
├── .cursor/rules/              # Cursor agent rules (change-log, update-docs, tech-and-ux-bias)
├── .github/workflows/          # GitHub Actions — build & deploy to GH Pages
├── src/                        # Astro source (see SITE.md for full layout)
│   ├── components/             # Layout, Header, Footer, BookingCTA, Marquee, pages/*
│   ├── data/contacts.ts        # typed wrapper around utils/contacts.json
│   ├── i18n/{ro,en}.json + utils.ts   # all translatable strings + helpers
│   ├── pages/                  # file-based routes — RO at root, EN under /en/
│   └── styles/global.css       # Tailwind v4 entry + brand tokens
├── public/                     # static assets served as-is (favicon, robots, ...)
├── cipassoroma/                # captured reference dossier from cipassoitalia.it
├── utils/contacts.json         # CANONICAL business contact info
├── media/
│   ├── placeholders/           # AI cartoon placeholders (temporary)
│   └── photos/                 # REAL HAiViNO photos go here
├── AGENTS.md                   # guidance for AI coding agents
├── CHANGES.log                 # append-only audit trail of every file change
├── PREREQUISITES.md            # decisions & assets tracker (blocking / important / nice-to-have)
├── SITE.md                     # dev / build / deploy guide
├── astro.config.mjs            # Astro config (i18n, env-driven base path)
├── package.json                # scripts and dependencies
├── tsconfig.json
├── .gitignore  .nvmrc
└── README.md                   # this file
```

## Getting Started

Nothing to run yet. Once the tech stack is chosen, this section will list install and dev commands.

## Conventions

- **Change log**: every file create/update/rename/delete is recorded as one line in `CHANGES.log` with timestamp. See `.cursor/rules/change-log.mdc`.
- **Docs upkeep**: significant changes (structure, tooling, scripts, features, conventions) update `README.md` and `AGENTS.md` in the same step. See `.cursor/rules/update-docs.mdc`.
- **Tech & UX bias**: CiPASSO is a structural reference only — prefer newer/better tech and UX whenever the cost (license, effort, learning curve, performance) is the same or lower. See `.cursor/rules/tech-and-ux-bias.mdc`.

## Roadmap (high level)

1. ~~Choose tech stack and scaffold the project.~~ ✓ Astro + Tailwind v4
2. ~~Import the Roma reference site as a working baseline.~~ ✓ structure ported (4-page IA + marquee + value quartet + sticky CTA)
3. Replace branding, content, menu, and imagery with the bistrot's own. *(in progress: cartoon placeholders live in `media/placeholders/`; real photos go in `media/photos/`)*
4. ~~Localize.~~ ✓ Romanian + English routing in place
5. Add reservations / contact flow. *(form is rendered but disabled — wire to Formspree/Web3Forms)*
6. Deploy to GitHub Pages (phase 1) → custom host with `haivino.ro` (phase 2)
