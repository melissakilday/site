# SEO Schema Validation — 2026-09-18

Validated with the vendored `seo-schema` skill (`fetch_page.py` + `parse_html.py --json`)
against the live site https://hairbymelissa.co.nz. Raw HTML/JSON saved under
`tools/claude-seo/data/schema-run/` (`home`, `blog-keratin`, `services-balayage`).

Context carried into this review: `aggregateRating`/`review` were deliberately removed today
(only 1 real review exists) — their absence is **not** flagged as a gap and re-adding them is
**not** recommended.

## Summary by page

### https://hairbymelissa.co.nz/ (home)

3 JSON-LD blocks: `["HairSalon","BeautySalon"]` (@id `#business`), `WebSite` (@id `#website`),
`FAQPage`.

### https://hairbymelissa.co.nz/blog/keratin-aftercare/

4 JSON-LD blocks: `["HairSalon","BeautySalon"]` (same sitewide `#business` object), `WebSite`,
`FAQPage` (8 questions), `Article`.

### https://hairbymelissa.co.nz/services/balayage/

3 JSON-LD blocks: `["HairSalon","BeautySalon"]` (same sitewide `#business` object), `WebSite`,
`FAQPage` (5 questions).

All three pages embed the identical sitewide `HairSalon`/`BeautySalon` and `WebSite` objects
(same `@id`s), which is the correct pattern for entity consolidation — not a duplicate.

## Findings table

| Page | @type present | Required-property gaps | Deprecated properties | Duplicates | FAQ matches visible text | Fix worth doing? |
|---|---|---|---|---|---|---|
| All 3 | `HairSalon`, `BeautySalon` | None — `name` + `address` (required) present; `telephone`, `url`, `priceRange`, `image`, `openingHoursSpecification`, `geo` (recommended) all present. `aggregateRating`/`review` intentionally absent — not a gap. | None | `#business`/`#website` correctly reused, not duplicated | n/a | No |
| All 3 | `WebSite` | None required by Google (no Sitelinks-searchbox `potentialAction` present, but that feature has no dedicated required-property set and isn't in use) | None | — | n/a | No |
| All 3 | `FAQPage` | n/a (Google retired FAQ rich results for **all** sites on 2026-05-07 per `deprecated-types-2024-2026.md`) — flag at INFO only, per skill guidance do **not** recommend removal | FAQPage itself is Google-rich-result-dead but schema.org valid; not "deprecated" in the vocabulary sense, just non-rewarding | None | **Yes** — every question on all 3 pages (home: 2/2, balayage: 5/5, blog: 8/8) appears verbatim in the visible page text | No — keep for AI/LLM-citation value per skill guidance, no SERP action needed |
| home | `HairSalon.geo` | Coordinates `-36.6173, 174.4829` — only 4 decimal places; Google's recommendation is a minimum of 5 (≈1.1 m accuracy vs. current ≈11 m) | — | — | — | Optional / low priority |
| all 3 | `HairSalon.hasOfferCatalog[].itemOffered.@type` | Each offered item is typed `["Service","HealthAndBeautyBusiness"]`. `HealthAndBeautyBusiness` is a `LocalBusiness`/place subtype, not appropriate as a type for an offered service item — semantically inconsistent, though it doesn't break required-property validation or Rich Results Test | — | — | — | Optional / low priority — cosmetic type-mismatch, safe to leave |
| all 3 (sitewide) | `WebSite.alternateName` | Value is literally `"Hair By Melissa A"` — reads as a truncated/corrupted string (source: `src/layouts/Layout.astro:405`) | — | — | — | **Yes** — looks like a genuine content bug, one-line fix, low risk |
| blog-keratin | `Article` | None — `headline`, `image`, `datePublished` (required) and `author`, `dateModified` (recommended) all present; `publisher.logo` present too | None | `author.worksFor` and `publisher` both duplicate the full postal address inline rather than referencing `#business` by `@id` — works fine, just verbose/redundant | n/a | No — redundant but harmless |
| services-balayage | Missing schema opportunity | No page-specific `Service`/`Offer` JSON-LD block on the page itself — the $230/duration/description data for balayage only exists inside the homepage's sitewide `hasOfferCatalog`, not repeated (or referenced via matching `@id`) on the balayage page | — | — | — | Optional — would strengthen entity/Merchant-style association for that URL specifically, not required for any current rich result |

## Notable non-issues (confirmed clean)

- No `aggregateRating` or `review` markup found on any of the 3 pages — consistent with today's
  deliberate removal.
- No deprecated types found (`HowTo`, `SpecialAnnouncement`, `ClaimReview`, `VehicleListing`,
  `EstimatedSalary`, `LearningVideo`, `CourseInfo` carousel, `Attorney`, `Practice Problem`) —
  none of these appear anywhere in the 3 pages' JSON-LD.
- All URLs (`image`, `logo`, `url`, offer `url`, `mainEntityOfPage`) are absolute, not relative.
- All dates (`datePublished`, `dateModified`, `foundingDate`, `validFrom`) are valid ISO 8601 /
  YYYY-MM-DD.
- `duration` values use valid ISO 8601 duration format (e.g. `PT2H30M`).
- JSON-LD is the only structured-data format in use (no Microdata/RDFa) — matches the skill's
  stated preference.

## Commands used

```bash
CLAUDE_SEO_DATA_DIR=$PWD/tools/claude-seo tools/claude-seo/.venv/bin/python \
  .claude/skills/seo/scripts/fetch_page.py "https://hairbymelissa.co.nz/" \
  --output tools/claude-seo/data/schema-run/home.html

CLAUDE_SEO_DATA_DIR=$PWD/tools/claude-seo tools/claude-seo/.venv/bin/python \
  .claude/skills/seo/scripts/fetch_page.py "https://hairbymelissa.co.nz/blog/keratin-aftercare/" \
  --output tools/claude-seo/data/schema-run/blog-keratin.html

CLAUDE_SEO_DATA_DIR=$PWD/tools/claude-seo tools/claude-seo/.venv/bin/python \
  .claude/skills/seo/scripts/fetch_page.py "https://hairbymelissa.co.nz/services/balayage/" \
  --output tools/claude-seo/data/schema-run/services-balayage.html

# then, for each saved file:
CLAUDE_SEO_DATA_DIR=$PWD/tools/claude-seo tools/claude-seo/.venv/bin/python \
  .claude/skills/seo/scripts/parse_html.py tools/claude-seo/data/schema-run/<file>.html \
  --url "<page url>" --json
```

FAQPage-vs-visible-text matching was verified by stripping `<script>` tags with BeautifulSoup
and confirming each `Question.name` string appears verbatim in the remaining visible text.
