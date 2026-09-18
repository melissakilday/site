# 2026-09-18 — Conversion fixes (schema trust, phone/hours truth, titles, CTAs)

Branch: `growth/conversion-fixes-2026-09-18` · Plan: [`plan.md`](../plan.md) §6–§8b
Commits: `8542764`, `ce4a195`, `c27fceb`, `<this entry>` · Not pushed to GitHub.
Team: Fable planner → Opus orchestrator → 6 Sonnet builders → Haiku mechanical pass → 2 Sonnet verifiers.

**Re-check date: 2026-10-16** (28-day GSC window, per plan §9).

---

## Why

Search Console baseline, 28 days to 2026-09-18: 19 clicks / 1,613 impressions / 1.18% CTR / avg
position 29.2. Three problems outranked everything else:

1. **Rich Results failed on every page** because of an `Event` ("Kaukapakapa Country Fair") in
   `knowsAbout` with no `startDate` or `location`.
2. **Self-serving review markup.** JSON-LD claimed `aggregateRating` 5.0 from 47 reviews, backed by
   two hand-written schema reviews, on a business with exactly one real Google review. That is
   manual-action territory, not a CTR tweak.
3. **The site could not tell the truth about itself.** Five different phone numbers, the wrong
   postcode, opening hours that said closed Sunday while the site ranks #1 for
   "hair salons open sunday near me", and eleven service pages reading "Contact for pricing" in
   SERPs where every competitor shows a price.

---

## What changed

### Trust and structured data
- Deleted the `Event`/`knowsAbout` Organization block (Country Fair) — the cause of the sitewide
  Rich Results failure.
- Deleted `aggregateRating` and both schema `Review` items. Deleted the "Verified Client Review"
  badge and the star rows from `TestimonialCard`; testimonials are now plain quote cards.
- Deleted the second "GEO context" `WebPage` block and the duplicate per-page `HairSalon` blocks on
  all four location pages. QA then caught a *third* duplicate — a `Place/LocalBusiness/HairSalon`
  at `#place` in the layout — which was also removed. One business entity per page now.
- `sameAs` lists only the real Instagram URL; the Facebook and Google Maps guesses are gone.
- `image`, `logo` and the default OG image now point at files that exist. Five previously
  referenced images did not, and the default OG image was missing entirely.
- Added `Offer` markup with real prices; the sitewide catalog now covers all 11 services.

### Facts, from one source (`src/data/business.ts`)
| Fact | Before | Now |
|---|---|---|
| Phone | 027 520 1613, 021 044 2277, 021 752 611, +1 917 555 1234, +64-21-XXX-XXXX | 0274 799 320 / `tel:+64274799320` |
| Address | "Magnolia Lane", postcode 0810 | 12 Magnolia Lane, Kaukapakapa 0875 |
| Hours | Tue–Fri 9–5, Sat 9–3, Sunday closed | Mon–Fri 9am–1:30pm · Sat 2–5pm · Sun 9am–5pm (open 7 days) |
| Mobile service | claimed on /locations | removed — clients travel to the salon |

### Titles and meta
- Layout suffix cut from `| Hair By Melissa - Premium Hairdresser Kaukapakapa` (52 chars) to
  `| Hair By Melissa` (18), and the brand stripped from all 21 page titles that repeated it.
  `/locations/helensville/` went from a 142-character double-brand title to 68.
- New titles, H1s and metas for `/`, `/locations/helensville/`, `/blog/keratin-aftercare/`,
  `/services/balayage/`, `/services/half-head-highlights/`, `/services/keratin-treatments/` and
  `/booking/`, verbatim from plan §3 and §7.
- Every meta description now ≤155 characters (one exception: the approved balayage copy at 156).
  `/gallery/`, `/faq/` and `/locations/` had been inheriting the generic site default.

### Prices and conversion
- `src/data/services.ts` drives all 11 service pages, the services hub, the homepage cards and the
  location pages. Removed "Contact for pricing" everywhere, and corrected the stale $150 keratin /
  $70 cut / $60 blow wave / $50 toner figures that disagreed with the schema.
- `ServiceLayout` gained an `h1` prop, so service H1s no longer render the raw SEO title with a pipe
  in it. It also now forwards `description`/`keywords`, which it had been silently dropping — every
  service page had been serving the homepage meta description.
- Home and Helensville heroes: "Book online" plus a tap-to-call button (73% of clicks are mobile).
- Booking page: both hero buttons, a visible hours line, the confirm-by-text reassurance line
  replacing "1–2 business days", and the cancellation card demoted below the widget.
- Homepage service links use the service name instead of "Learn more".
- Chat widget loads 8s after `load` and sits below the hero CTA on mobile, where its bubble had been
  covering "Book Now".
- Removed the expired Winter Special (ended 31 Aug 2024) from the Navbar and two blog CTAs; deleted
  `src/pages/keratin.astro`. `/keratin` → `/services/keratin-treatments/` 301s already existed in
  both `netlify.toml` and `public/_redirects`.

### Keratin aftercare post (647 impressions, 1 click, position 37.7 and slipping)
- Quick-answer box carrying the 72-hour figure directly under the H1, inside the first 100 words;
  a soft CTA immediately after it and a mid-article CTA after question 4. The first CTA had been
  roughly 1,000 words in.
- Body reorganised under the eight question-form H2s from plan §7, each answered in its first
  sentence.
- One FAQ array now drives both the visible FAQ and the FAQPage JSON-LD — they had disagreed,
  3 questions vs 5.
- `BlogArticleSchema` gained a `modifiedDate` prop; `dateModified` is 2026-09-18.

### Technical
- Added `@astrojs/sitemap` with `site` and a `/404` filter; deleted the four hand-written sitemaps
  that had drifted (kept `sitemap-images.xml`) and pointed `robots.txt` at `/sitemap-index.xml`.
- Generated `public/images/og-image.jpg` (1200×630), `logo.png` and `apple-touch-icon.png`.
- Repointed four image references that resolved to missing files or 225-byte error placeholders.

---

## Files touched

New: `src/data/business.ts`, `src/data/services.ts`, `public/images/og-image.jpg`,
`public/images/logo.png`, `public/apple-touch-icon.png`.

Deleted: `src/pages/keratin.astro`, `public/sitemap.xml`, `public/sitemap-index.xml`,
`public/sitemap-local.xml`, `public/sitemap-services.xml`.

Modified: `astro.config.mjs`, `package.json`, `public/robots.txt`, `public/sitemap-images.xml`,
`src/layouts/Layout.astro`, `src/layouts/ServiceLayout.astro`, `src/components/Footer.astro`,
`src/components/Navbar.astro`, `src/components/TestimonialCard.astro`,
`src/components/BlogArticleSchema.astro`, `src/pages/{index,booking,contact,faq,terms,locations,
about,blog,gallery,hair-dressing,services,404}.astro`, all 11 `src/pages/services/*.astro`, all 4
`src/pages/locations/*.astro`, all 7 `src/pages/blog/*.astro`, all 4 `src/pages/blog/category/*.astro`.

---

## QA

Two read-only Sonnet verifiers ran against `dist/`: one on SEO spec compliance vs plan §3/§5/§7, one
on build integrity. Nine findings; the six confirmed ones were fixed in `c27fceb` (duplicate
business entity, four broken links to invented services at invented prices, the wrong highlights
tier on Helensville, the surviving Winter Special CTAs, the missing UV Protection offer, the missing
apple-touch-icon). Three were rejected: a byte-offset heuristic that misreads CTA position because
the CSS is inlined, the 156-character balayage description (approved verbatim copy), and
natural-language "Magnolia Lane" mentions in driving directions.

Post-fix state: 39 pages build clean; every JSON-LD block parses; exactly one business entity and
one `<h1>` per page; zero broken internal links; zero missing or placeholder assets; no title over
70 characters or carrying the brand twice; hours identical across schema, footer, booking, contact
and FAQ; the keratin post's 8 FAQ questions character-identical across H2s, visible FAQ and JSON-LD.

---

## Metrics targeted (re-check 2026-10-16)

| Metric | Baseline 2026-09-18 | Target |
|---|---|---|
| Rich Results verdict, all pages | FAIL | PASS |
| `/locations/helensville/` CTR | 1.0% @ pos 5.8 | ≥3% at similar position |
| `/blog/keratin-aftercare/` position, "when can i wash my hair after keratin treatment" | 42 | ≤20 |
| `/blog/keratin-aftercare/` clicks | 1 | ≥8 |
| Site clicks | 19 | ≥30 |
| "balayage auckland" position | 47 | ≤30 |
| Brand query served by | split / and /locations/helensville/ | home only |

---

## Known issues left open

- **55 image files under `public/images/` are 225-byte Google Cloud Storage `NoSuchKey` error pages,
  not images** — every `hero-background_*`, `about-hero-bg_*` and `kaukapakapa-village_*` variant.
  Live references were repointed at real files, but the broken files themselves remain and the
  source images need re-fetching. Pre-existing, out of scope here.
- Testimonials still reuse first names across pages with differing surnames (plan §2 Q4 pattern).
  The badge and stars are gone; the text itself was kept per the owner's instruction.
- Structural items deferred by plan §6 to the next build: balayage gallery + visible FAQ +
  before/after, Fresha and Yelp listings, the Google Business Profile push for the Helensville pack
  (client task), analytics install, content-collections refactor for services.

## Lead verification (Fable, after orchestrator hand-off)
- Rebuilt: 39 pages, green. Dist sweeps all zero (Country Fair, reviewCount, placeholder/stale phones, Winter Special, Contact for pricing, Verified Client). One `tel:` value site-wide. Titles 37–68 chars. Sunday hours present in schema. Sitemap index has 38 URLs, no /404, includes /locations/ and UV page.
- Mobile preview check (375px) of /, /blog/keratin-aftercare/, /locations/helensville/, /booking/: hero CTAs visible, quick-answer box and soft CTA render, chat bubble not covering Book button on load.
- Fixed one visual regression the verifiers missed: Helensville hero "Call" button was white-on-white (light gradient hero); now dark outline (`src/pages/locations/helensville.astro:85`).
- Added `.claude/launch.json` (astro preview on :4322) for future visual QA.
