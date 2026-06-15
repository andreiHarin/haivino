# 02 — Sitemap & Discovered Pages

`sitemap_index.xml` returned a server error (500) at capture time, so the list below was assembled by visiting common WordPress / restaurant page slugs and observing the site's own internal links (header & footer).

## Pages confirmed (HTTP 200)

| URL | Lang | Section | Notes |
|------|------|---------|-------|
| `https://cipassoitalia.it/` | IT | Home | Hero, story, awards, reviews, info card |
| `https://cipassoitalia.it/chi-siamo/` | IT | About | Founders story, team, values |
| `https://cipassoitalia.it/menu/` | IT | Menu | Editorial intro only — no dish listing in rendered text |
| `https://cipassoitalia.it/contatti/` | IT | Contact | Address, phone, email, contact form |
| `https://cipassoitalia.it/en/` | EN | Home (English) | Translated home content |

## Pages tried but not found

| URL | Status | Note |
|------|--------|------|
| `https://cipassoitalia.it/prenota/` | 404 | Booking is likely an external widget/anchor, not a page |
| `https://cipassoitalia.it/sitemap_index.xml` | 500 | Listed in robots.txt but errored |
| `https://cipassoitalia.it/sitemap.xml` | 500 | Same |

## Inferred / probable additional pages

These were not directly fetched but are strongly implied by header/footer links and EN-version structure:

- `/en/menu/` — English menu page
- `/en/about-us/` or `/en/chi-siamo/` — English about page
- `/en/contact/` or `/en/contatti/` — English contact page
- `/cookie-policy/` and `/privacy-policy/` — linked in footer

## Booking flow

- A persistent CTA labelled **"PRENOTA QUI / BOOK HERE"** appears on every page.
- It is not a dedicated route; it likely opens an external reservation widget (TheFork, OpenTable, or similar embedded modal). Worth confirming with the user.

## `robots.txt`

```
User-agent: *
Disallow:

Sitemap: https://www.cipassoitalia.it/sitemap_index.xml
```

Standard Yoast block. No special crawl restrictions.
