# 07 — Adaptation Ideas for Haivino

How to translate the CiPASSO model into our own wine-bistrot site. Borrow the **structure and rhythm**, not the content.

## Borrow as-is

1. **4-page core IA**: Home / About / Menu / Contact + persistent booking CTA.
2. **Bilingual single-CTA button** (e.g. *"REZERVĂ / BOOK"*).
3. **Marquee band** with one anchor sentence about location.
4. **Value-prop quartet** (e.g. *Vinul / Bucătăria / Atmosfera / Recunoaşterea*) with a four-icon row.
5. **About story with named founders** + photos + one-line bios.
6. **Footer block** that repeats address / phone / email / hours on every page.
7. **Sectioned editorial layout** — short H2 + 2–3 paragraphs, lots of breathing room.

## Adapt, don't copy

| CiPASSO | Haivino direction |
|---------|-------------------|
| Cucina contemporanea + tartufo nero as signature | Our own wine-bistrot identity — pick the 1–2 "signatures" (wine region focus? cheese & charcuterie? a specific cuisine style?) |
| "Magico — Raffinato — Elegante — Gustoso — Love" chant | Craft our own 5-word emotional anthem in our brand voice |
| Italian-first, then English | Decide primary language (likely RO?) + EN. Confirm with user. |
| Pantheon-anchored marketing | Anchor to **our** location's strongest landmark / neighbourhood |
| Founders' personal narrative | If we have a real founder story, use it. If not, lead with the bistrot's *concept* and *wine philosophy* instead. |

## Fix what they got wrong

1. **Render the actual menu on the Menu page** (HTML, with structured categories, allergens, optional prices). Provide a PDF download as a secondary affordance.
2. **Keep sitemap.xml working** — don't 500. Helps SEO from day one.
3. **Author EN copy natively** — don't machine-translate from RO/IT.
4. **No duplicate content blocks** in the rendered DOM.
5. **Accessible booking CTA**: real `<button>` / `<a>` with proper ARIA, not a sticky overlay that traps focus.

## Open decisions for the user (before we write code)

These will likely shape the stack pick:

1. **Primary language** — Romanian only? RO + EN? RO + EN + IT?
2. **Where is the bistrot located** — so we can anchor copy and SEO around it.
3. **Booking flow** — third-party widget (TheFork, OpenTable, SeatHero, local equivalent) or simple email/phone + contact form?
4. **Who edits content over time** — non-technical staff? If yes, lean toward a CMS (headless: Sanity/Decap; or WordPress). If only us/devs, a static site is better.
5. **Brand assets ready?** — logo, photography, colors, fonts. Without these, we can mock with placeholders.
6. **Hosting / domain** — already owned? Preferred provider?

## Suggested next concrete step

Once the user answers the bilingual + booking + CMS questions, scaffold the project with the chosen stack and create a `01-home`, `02-about`, `03-menu`, `04-contact` page set as empty shells, then port the structural patterns documented in `06-design-and-ux-notes.md` into our own components.
