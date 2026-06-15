# 06 — Design & UX Notes

Observations from the structure and repeated content patterns of the rendered pages. Since we did not capture images or CSS, visual details (colors, fonts, exact spacing) are not in scope here — they belong in a screenshot-based capture if the user provides one.

## Information architecture

A small, tightly-scoped site — typical for an upscale restaurant:

```
Home  →  Chi Siamo  →  Menu  →  Contatti
                                   │
                                   └── Persistent booking CTA on every page
```

- **Header nav**: Home / Chi Siamo / Menu / Contatti (+ language switch IT/EN)
- **Footer**: address card, contact, hours, social icons, menu link, legal links

## Recurring layout patterns

1. **Marquee / ticker bands**
   Long horizontal strings ("CiPASSO si trova nel cuore pulsante…") repeated 3+ times — clearly a CSS-animated **marquee** between sections. Used as visual rhythm and to reinforce one message at a time.

2. **Award/recognition marquee**
   A second marquee for credentials: *"Travellers' Choice on TripAdvisor – Selected from among the restaurants in Rome in the Michelin Guide"*.

3. **Sectioned editorial blocks**
   Each section follows a tight pattern: short H2 heading + 2–3 short paragraphs. Reads like a printed editorial menu.

4. **Five-word brand chant**
   *"Magico — Raffinato — Elegante — Gustoso — Love"* presented as a stylized H2 block — probably animated word swap. Same exists in EN.

5. **Founders / team cards**
   Photo + name + role + one-line bio. Two principals featured (Chef + Direttore di sala) plus prose about the wider team.

6. **Value-prop quartet**
   Four equal blocks: *Cucina e Vino / Atmosfera / Garanzia / Riconoscimenti*. Tight, scannable, sells the brand without numbers.

7. **Sticky booking CTA**
   *"PRENOTA QUI / BOOK HERE"* — bilingual on a single button, present on every page. Always visible.

8. **Contact card repeated in footer + dedicated page**
   Address, phone, email, hours appear in three places (footer, contact page, and home info card). Redundancy is intentional — it removes friction.

## Tone & content patterns

- Most paragraphs **3–4 lines**. Easy on the eyes.
- Frequent use of **first-person plural** ("noi", "il nostro", "vogliamo").
- Concrete and specific details ("via Metastasio 21", "anni '30", "Pantheon", "Italian Chef Academy") build trust.
- Quantified claims ("oltre 4.000 recensioni", "4.8/5", "4° locale in Italia") reinforce credibility.

## What is conspicuously absent (and probably deliberate)

- **No prices** anywhere. Aligned with fine-dining convention.
- **No live booking form on-page** — it's a CTA that opens an external/embedded widget.
- **No blog / news section** — focus stays on the restaurant.
- **No dish list on the Menu page** — the rendered text only sets context; the actual menu is likely embedded as a PDF or external viewer.
- **No team photos enumerated in rendered text** — only the two principals are named.

## UX patterns worth replicating

- Bilingual single-CTA button.
- A repeating marquee with one key sentence (address / Pantheon proximity).
- Sticky address & phone in the footer of every page.
- Short, scannable About story with named founders.
- Awards & ratings shown as plain text + marquee, not noisy badges.

## UX patterns to avoid / improve

- **Duplicate content within a single page** (the captured HTML shows each section twice). Likely a CMS or theme quirk in the reference site — we should not replicate this.
- **EN translation glitches** (e.g. *"I always"*, *"At Google, we boast"*). Our EN copy should be authored, not literally translated.
- **Menu page without a menu** — frustrating for users. We should render the actual menu inline (or at minimum a clean HTML version) with a PDF download as a fallback.
- **Heavy bot-block / 500 on sitemap** — bad for SEO. Ours should keep sitemap.xml live and lightweight.
