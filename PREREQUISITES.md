# Prerequisites Checklist

A single tracker for everything we still need before / during the Haivino website build. Update as decisions land. Mark items with `[x]` when done; record the answer inline.

> **Status legend**: `[ ]` open · `[x]` done · `[~]` in progress · `[?]` not sure yet · `[-]` skipped / not applicable

Last reviewed: **2026-06-15**

## Open questions to revisit next session

- **Phase-2 hosting** — once the GitHub Pages test phase has validated the site, pick the production host (Cloudflare Pages / Netlify / Vercel / dedicated). Owner wants more time. Not a scaffolding blocker — see "Hosting strategy" below.

---

## 1. Blocking — needed before stack decision

These five drive the framework / CMS / hosting choice. Until they're all answered, scaffolding the project is premature.

- [x] **Languages** — **Romanian + English** *(decided 2026-06-15)*
- [x] **Content editors after launch** — **devs only, content in code/markdown** *(decided 2026-06-15 → unlocks static-site generators: Astro, Next.js static, SvelteKit)*
- [x] **Reservation flow** — **phone + simple request form (phase 1); upgrade to a SaaS widget later** *(decided 2026-06-15 → needs tap-to-call CTA and a serverless form handler; both within €0 of the budget)*
- [x] **Domain** — **`haivino.ro` already owned** *(decided 2026-06-15)*
- [x] **Hosting strategy — phased** *(decided 2026-06-15)*
  - **Phase 1 (test)**: **GitHub Pages**, default `<user>.github.io/<repo>/` URL. Free, git-native, scaffolding unblocked.
  - **Phase 2 (production)**: real host with `haivino.ro` — provider TBD. Working shortlist: Cloudflare Pages, Netlify, Vercel.
  - **Form handler (phase 1)**: **Formspree free** (50 submissions/mo) or **Web3Forms free** (250/mo). Swappable later.
  - **Migration design**: Astro `base` config from env var · form endpoint in one config file · relative asset paths · GH Actions deploy step is the only thing that changes per host. Migration = one evening.
- [x] **Budget envelope** — **up to ~€10–€20 / month** *(decided 2026-06-15 → hosting stays free; allows paid privacy analytics, form handler, and business email)*

---

## 2. Important — before launch

### Brand identity
- [ ] Real **logo** files (SVG ideally) — placeholder lives at `media/placeholders/placeholder-logo.png`
- [ ] **Brand colors** confirmed *(working assumption: burgundy `#6E1F2A` · gold `#C9A24B` · cream `#F5EDDC` · warm wood)*
- [ ] **Typography** — display font + body font choices
- [ ] **Tagline** (RO + EN) and brand voice direction

### Content
- [ ] **Real menu** — food + wine list, structured (categories), with prices and **allergens** (RO law)
- [ ] **About / story** copy — founder story? chef? wine philosophy?
- [ ] **Opening hours** — fill `utils/contacts.json` → `tbd.openingHours`
- [ ] **Business email** — fill `utils/contacts.json` → `tbd.email`

### Photography
- [ ] Hero / exterior shot
- [ ] Interior (1–2 shots)
- [ ] Food (4–6 dishes)
- [ ] Wine wall / shelf
- [ ] Team / chef portrait
- [ ] All with **confirmed rights** (no random web stock)

### Legal & GDPR (RO/EU)
- [ ] **Company footer details**: legal name, CUI, J registration number, registered address
- [ ] **Privacy policy** text (RO + EN)
- [ ] **Cookie policy** text (RO + EN)
- [ ] **Cookie banner strategy** — ideally avoid third-party tracking so consent isn't required

### Discoverability
- [ ] **Google Business Profile** claimed and populated (hours, photos, posts)
- [ ] **Social handles** — Instagram (essential), Facebook, possibly TripAdvisor → fill `utils/contacts.json` → `tbd.social`
- [ ] **Analytics** decision — default recommendation: privacy-friendly (Plausible / Umami / Cloudflare Web Analytics)

---

## 3. Nice-to-have — phase 2

- [ ] Newsletter signup
- [ ] Events / wine-tasting page
- [ ] Online wine shop or gift vouchers
- [ ] Custom professional photo session
- [ ] Reviews carousel (Google / TripAdvisor)
- [ ] Schema.org `Restaurant` JSON-LD with menu items

---

## 4. Already in place ✓

- [x] Reference dossier — `cipassoroma/`
- [x] Project conventions — change-log, update-docs, tech-and-ux-bias rules
- [x] Canonical contacts — `utils/contacts.json` (address + phone confirmed)
- [x] Placeholder imagery — `media/placeholders/` (5 cartoon images)
- [x] Real-photo slot reserved — `media/photos/`
- [x] Primary language decision — Romanian + English
- [x] Content-editor model — devs only (static site path)
- [x] Monthly budget envelope — €10–€20/month
- [x] Reservation flow — phone + form (phase 1); SaaS widget later
- [x] Domain — haivino.ro owned
- [x] Phase-1 hosting — GitHub Pages (default github.io URL); phase-2 production host still TBD
- [x] **Project scaffolded** — Astro 5 + Tailwind v4 + TypeScript, RO+EN routing, sticky bilingual booking CTA, GitHub Actions → GH Pages workflow (see `SITE.md`)

---

## How to use this file

- Update inline as decisions land; do **not** delete items, mark them done.
- For each `[x]`, add a short note: the decision, the date, and a pointer to where it lives (e.g. *"see `utils/contacts.json`"*).
- Significant changes to this file count as significant project changes — also reflect them in `README.md` / `AGENTS.md` per the `update-docs` rule.
