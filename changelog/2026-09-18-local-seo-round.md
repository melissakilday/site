# 2026-09-18 — Local SEO round (claude-seo vendored; GBP to-do; trust fixes)

## Tooling
- Vendored claude-seo (AgriciDaniel, 2026-09-11) project-locally: skills `seo`, `seo-local`, `seo-maps`, `seo-drift`, `seo-schema` under `.claude/skills/`, their four agents under `.claude/agents/`, minimal runtime in `tools/claude-seo/.venv`. Invocation notes: `.claude/skills/seo/README-LOCAL.md`. No full `/seo audit` permitted.
- Runs (Sonnet, Tier 0, no paid data): local, maps, drift baseline (8 URLs, stored in `~/.cache/claude-seo/drift/baselines.db`), schema validation. Reports in `tools/claude-seo/reports/2026-09-18-*.md`.

## Findings
- Website NAP, hours and schema all match Google after today's deploy. Schema validation: nothing to fix.
- Helensville 3-pack held by three in-town salons (23–66 reviews); not winnable from Kaukapakapa. Winnable: Kaukapakapa pack, "near me" from Helensville phones, organic #6.
- Business absent from OpenStreetMap. Google lists it as "Hair By Melissa A" (owner to confirm the "A").
- Trust: homepage testimonial cards still showed five-star icon rows next to named clients while the business has one public review.

## Site changes (this commit)
- `src/pages/index.astro`: star rows and `rating` fields removed from the three hand-coded testimonials; Google Maps embed now targets the business listing.
- `src/pages/contact.astro`: same map embed change.
- `src/layouts/Layout.astro`: `hasMap` added to the HairSalon schema (Google profile link).
- `.agents/product-marketing-context.md`: stale notes refreshed.

## Owner actions (not code) — see tools/claude-seo/reports/2026-09-18-seo-local.md §2–3
Reviews campaign with the profile link; categories; service area incl. Helensville/Wainui/Waitoki; services + prices; photos; attributes; weekly posts and Q&A; claim Bing Places and Apple Business Connect; add the salon to OpenStreetMap; decide on "Hair By Melissa A" vs "Hair By Melissa" and apply consistently.

## Re-check
2026-10-16 with GSC (28-day) and `drift_compare.py` on the 8 baselined URLs.
