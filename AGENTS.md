# AGENTS.md — Guidance for AI Coding Agents

Read this before making changes. It complements the rules in `.cursor/rules/`.

## Project

**Haivino** — a website for **HAiViNO Wine Bistrot**, located at Strada Inocențiu Micu Klein 23, 400087 Cluj-Napoca, Romania. We are building it using a wine bistrot website from **Roma** as a reference model (design, structure, UX patterns). Our version will keep the spirit but adapt branding, menu, content, and language to our bistrot.

Canonical business contact info: **`utils/contacts.json`** — never hard-code address/phone elsewhere; read from this file.

## Current Phase

**Scaffolded.** Astro 5 + Tailwind v4 + TypeScript project is in place. 4 pages × 2 languages (RO + EN), brand tokens, sticky booking CTA, GitHub Actions → GitHub Pages workflow. See `SITE.md` for dev/build/deploy commands and `PREREQUISITES.md` for open items.

**Confirmed so far**:
- Site languages: **Romanian + English** (primary RO).
- Content model: **devs-only, content in code/markdown** — no CMS. Static-site generator is the path (Astro / Next.js static / SvelteKit, TBD).
- Monthly running-cost ceiling: **€10–€20/month** total (hosting + analytics + form + email). Hosting itself stays on a free tier.
- Reservation flow (phase 1): **prominent tap-to-call CTA + simple request form** (serverless handler → email). SaaS widget (TheFork/Quandoo) is a phase-2 upgrade.
- Domain: **`haivino.ro`** (already owned).
- Hosting — **phased**:
  - **Phase 1 (test)**: **GitHub Pages** at the default `<user>.github.io/<repo>/` URL. Form handler: **Formspree** or **Web3Forms** (free tier). Scaffolding is **unblocked** for this phase.
  - **Phase 2 (production)**: production host with `haivino.ro` is TBD — shortlist Cloudflare Pages / Netlify / Vercel. To make phase-2 migration trivial: drive Astro `base`, form endpoint URL, and analytics provider from env / a single config file; keep asset paths relative; deploy via GitHub Actions so the deploy step is the only host-specific piece.

## Reference Material

- **Roma reference site**: **CiPASSO** — [cipassoitalia.it](https://cipassoitalia.it).
- **Captured dossier**: [`cipassoroma/`](./cipassoroma/) — start with `cipassoroma/README.md`. Contains brand/positioning notes, verbatim IT and EN copy, sitemap, tech-stack inference, UX patterns, and adaptation ideas for Haivino. Captured 2026-06-15 from rendered public pages (no images/CSS).
- If the user provides screenshots, saved pages, or a real download bundle later, add a new file in `cipassoroma/` (e.g. `08-screenshots.md`, `09-assets.md`). Do not rewrite existing files — append.

## Always-On Rules

Three rules in `.cursor/rules/` apply to every session:

1. **`change-log.mdc`** — append a one-line entry to `CHANGES.log` for every file you create, update, rename, or delete. Use format:
   `YYYY-MM-DD HH:MM | ACTION | path | short reason`
2. **`update-docs.mdc`** — when a change is **significant** (structure, tooling, scripts, features, conventions, env, deploy), update `README.md` and/or `AGENTS.md` in the same turn.
3. **`tech-and-ux-bias.mdc`** — CiPASSO is only a **structural reference**. Prefer newer/better tech and UX when the cost (license, effort, learning curve, performance) is the same or lower. See the rule for concrete defaults.

## Stack Conventions

- **All copy lives in `src/i18n/{ro,en}.json`** — never hard-code visible strings in components or pages.
- **All business contact data comes from `utils/contacts.json`** via `src/data/contacts.ts` — never hard-code address/phone/email.
- **All routes are declared in `src/i18n/utils.ts`** (`routes` object). Renaming a route means renaming the file AND updating that object.
- **Brand colors/fonts live in `src/styles/global.css` `@theme` block** — never inline arbitrary hex values; use Tailwind utilities backed by tokens (e.g. `bg-burgundy`).
- **Use `astro:assets` for images** (import + `<Image>`) so Astro can optimize and emit `srcset`. Don't drop raw `<img src="/...">`.
- **Two env vars drive host portability** — `SITE` and `BASE_PATH`. Set in CI; local dev defaults are fine.
- **No tracking by default**. Don't add analytics, GTM, fonts.google.com, or other 3rd-party requests without an explicit decision recorded in `PREREQUISITES.md` (cookie banner implications).

## Working Agreements

- **Audit trail first**: never skip the `CHANGES.log` entry. It is the project memory.
- **One line per file**: if a single task touches 5 files, write 5 log lines.
- **Don't log noise**: skip `CHANGES.log` itself, `node_modules/`, `dist/`, `build/`, `.cache/`.
- **Docs stay truthful**: if you add a new folder, command, dependency, or convention, reflect it in `README.md`.
- **Ask before stack decisions**: if no stack has been chosen and the task implies one, surface the choice to the user instead of assuming.
- **Respect the reference, but don't be limited by it**: the Roma model is the structural guide, not a tech blueprint or a literal copy target. Replicate **patterns**; **upgrade** the implementation whenever a newer/better option is available at the same cost (see `tech-and-ux-bias.mdc`).

## Quick Pointers

- Audit trail: `CHANGES.log`
- Human docs: `README.md`
- Agent docs: `AGENTS.md` (this file)
- Prerequisites tracker: `PREREQUISITES.md`
- Dev/build/deploy guide: `SITE.md`
- Rules: `.cursor/rules/`
- Reference site dossier: `cipassoroma/`
- Shared business data (contacts, etc.): `utils/`
- Images & media: `media/` (placeholders in `media/placeholders/`, real photos in `media/photos/`)
- Site source: `src/` (components, i18n, pages, styles)
- Deploy workflow: `.github/workflows/deploy.yml`

## When You Are Unsure

Prefer asking the user a focused multiple-choice question over guessing — especially for stack choice, hosting, language(s), and CMS-vs-static decisions.
