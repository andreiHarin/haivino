# media/

All images (and later, other media like video / audio if needed) used by the Haivino site.

## Structure

```
media/
├── placeholders/   # AI-generated cartoon placeholders — used until real photos arrive
└── photos/         # Real HAiViNO photos — UPLOAD HERE
```

## Current placeholders (cartoon, AI-generated)

These are temporary. Replace each with a real photo as it becomes available.

| File | Intended use | Format |
|------|--------------|--------|
| `placeholders/placeholder-logo.png` | Brand mark / favicon source | Square, ~1024×1024 |
| `placeholders/placeholder-hero.png` | Homepage hero / cover | Landscape 16:9 |
| `placeholders/placeholder-wine.png` | Wine section illustration | Square |
| `placeholders/placeholder-food.png` | Food / charcuterie section | Square |
| `placeholders/placeholder-interior.png` | Atmosphere / interior section | Landscape 16:9 |

Palette used across all placeholders: burgundy `#6E1F2A`, gold `#C9A24B`, cream `#F5EDDC`, warm wood brown. Flat cartoon style, no text.

## Naming convention (for real photos)

When real photos arrive, drop them in `photos/` using these conventions:

- **lowercase, hyphen-separated** filenames
- **purpose-first** name: `hero-evening.jpg`, `interior-bar.jpg`, `dish-burrata.jpg`, `wine-shelf.jpg`, `team-founder.jpg`
- Prefer **WebP** or **AVIF** for the web build; keep originals (JPG/PNG) here as masters
- Add a sibling `*.alt.txt` (or note in commit) with the alt text in Romanian + English if non-obvious

## Replacement workflow

1. Drop the real photo into `media/photos/` with a clear name.
2. Update wherever the placeholder is referenced in code to point at the new path.
3. Once a placeholder is no longer referenced anywhere, **delete it** (and log the deletion in `CHANGES.log` per the change-log rule).
4. When all placeholders are replaced, this folder can be removed.

## Rules

- **Real photos > placeholders, always.** Don't ship placeholders to production.
- **No stock photos** unless explicitly approved by the owner — the bistrot has its own visual identity to build.
- **Compress before commit.** Keep individual web assets under ~300 KB where possible; use tools like Squoosh, sharp, or imagemin.
- **No personally identifiable photos** of guests without consent.
