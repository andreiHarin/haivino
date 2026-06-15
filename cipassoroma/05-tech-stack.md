# 05 — Tech Stack (Observed)

Observations from `robots.txt`, page behaviour, and footer attribution. We could not download the raw HTML/headers from this environment (CDN/bot protection), so this is **inferred**, not confirmed via DevTools.

## Strong signals

| Signal | Inference |
|--------|-----------|
| `# START YOAST BLOCK` in `robots.txt` | **WordPress** + **Yoast SEO** plugin |
| `sitemap_index.xml` path (typical Yoast pattern) | Confirms Yoast SEO |
| URL slugs in Italian (`/chi-siamo/`, `/contatti/`, `/menu/`) | WordPress with Italian-language permalink scheme |
| EN version under `/en/` prefix (not subdomain, not `?lang=`) | Likely **WPML** or **Polylang** with subdirectory mode |
| Cookie banner with "Personalizza / Rifiuta tutto / Accetta tutto" + Italian legal copy | Almost certainly **Iubenda** consent solution |
| Footer credit: *"Sito realizzato da: MC STUDIO"* | Built by **MC Studio** (Italian web agency) |
| Aggressive bot/CDN blocking | Likely behind **Cloudflare** or similar WAF |
| Persistent "PRENOTA QUI / BOOK HERE" CTA, no dedicated `/prenota/` page | External booking widget (TheFork, OpenTable, Zomato, or in-house modal) — needs confirmation |

## Likely additional WordPress components (typical for restaurant sites of this style)

- Page builder: **Elementor** or **WPBakery** (Elementor more likely given modern design language)
- Forms: **Contact Form 7** or **WPForms** (the `/contatti/` form behaves like CF7 with AJAX)
- Caching: **WP Rocket** or built-in via host
- Hosting: Italian or EU host (Aruba / SiteGround / Kinsta are common for this profile)

## What we did **not** confirm

- Theme name / parent theme
- Specific page-builder
- Exact booking provider
- CDN identity
- Image/CDN domain for media
- Font choices and font host

## Recommendation for our project

We are **not obliged** to copy WordPress. Knowing that the reference site is WordPress + Elementor (likely) tells us:

- Their content model is **simple page-based** (no complex content types beyond pages, possibly a single "team-member" CPT).
- A static-site approach (Astro, Next.js static, or even hand-written HTML/CSS/JS) can fully reproduce the experience with less ongoing maintenance.
- If non-technical staff need to update copy frequently, then a headless CMS (Sanity, Decap/Netlify CMS) or going WordPress is a sensible alternative — flag this trade-off to the user when picking the stack.
