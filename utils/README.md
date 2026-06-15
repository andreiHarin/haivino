# utils/

Shared, reusable, non-page assets that the Haivino site (and any tooling around it) depends on. Keep this folder small and well-curated — only things that genuinely deserve to be shared across the project.

## Current contents

| File | Purpose |
|------|---------|
| `contacts.json` | **Single source of truth** for HAiViNO contact info (name, address, phone, etc.). All pages, footers, schema.org JSON-LD, contact page, and sitemap entries must read from this file. |

## Conventions

- **One source per fact.** If a piece of business data lives here, it must not be hard-coded elsewhere. Import / read from this folder instead.
- **Don't invent values.** Fields under `tbd` in any file are intentionally null — ask the project owner before filling them in.
- **Keep formats stable.** JSON files in this folder are part of the project contract; if you rename a key, search for usages and update them in the same change.
- **No secrets.** This folder is committed and intended to be public. Do not put API keys, tokens, or private contact data here.

## Quick view — HAiViNO contacts

> **HAiViNO Wine Bistrot**
> Strada Inocențiu Micu Klein 23, 400087 Cluj-Napoca, Romania
> Phone: 0787 710 900 (international: +40 787 710 900)
> Google Maps: search *"HAiViNO Wine Bistrot"*

If you need to update any of these, edit `utils/contacts.json` (not this README — this is a courtesy mirror).
