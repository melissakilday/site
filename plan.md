# Growth plan — Hair By Melissa conversion fixes

Date: 2026-09-18 · Planner: Fable 5.1 · Orchestrator: Opus 5 · Builders: Sonnet 5 · Mechanical: Haiku 4.5
Job type: A (optimise existing site). Branch: `growth/conversion-fixes-2026-09-18`. No GitHub push.
Sources: Search Console (`gsc` MCP), 4 Sonnet research reports (context, technical, CRO, SERP), live-site fetches, diff of this repo vs the deploy repo.

---

## 0. Blocking decision: which codebase

Production (hairbymelissa.co.nz) is built from **github.com/melissakilday/site** (HEAD e393dd4, 30 Nov 2025, 40 pages). This KINGSTON folder tracks **AltusSnyman/hairbymelissa-astro** at one commit from Aug 2025 and differs in nearly every source file (live has `BlogArticleSchema.astro`, root `netlify.toml`, a chat widget, phone fixes; this repo still has a US placeholder number on the booking page).

**Recommendation:** before building, replace this folder's `src/`, `public/`, `astro.config.mjs`, `netlify.toml`, `package.json` with the melissakilday/site versions (keep `tools/`, `changelog/`, `.agents/`, `.claude/`, `.mcp.json`, `CLAUDE.md`), commit that sync on the growth branch, then apply the changes below. Otherwise the work lands on a codebase that never deploys.

Every finding below was re-verified against the melissakilday/site source, so the plan is valid either way.

---

## 1. What the data says

| Signal | Value (28d to 2026-09-18) | Read |
|---|---|---|
| Site | 19 clicks / 1,613 imp / 1.18% CTR / pos 29 | Small, mobile-led (73% of clicks; mobile pos 9.4 vs desktop 37) |
| Homepage | 11 clicks, brand "hair by melissa" pos 2.1, 29% CTR | Works. Don't break it |
| /locations/helensville/ | 198 imp, 2 clicks, pos 5.8; 1% CTR | Title tag is 142 chars with the brand twice; page also shows for the brand query and steals it from home |
| /blog/keratin-aftercare/ | 647 imp, 1 click, pos 37.7 (was 21) | Ranks for "when can I wash my hair after keratin" (82 imp) but the numeric answer is buried; first CTA ~1,000 words in. Slipping |
| /services/balayage/ | "balayage auckland" 43 imp pos 47 | Page shows "Contact for pricing"; every winner shows a price. Pack dominates this SERP |
| /services/half-head-highlights/ | pos 14, top 5 on the NZ term | Rising on its own; same "Contact for pricing" bug |
| Rich results | FAIL on every page | `Event` "Kaukapakapa Country Fair" in `knowsAbout` lacks startDate/location |

Trust problems that outrank any CTR tweak:
- JSON-LD `aggregateRating` 5.0 from 47 reviews with no source, backed by 2 schema reviews. Self-serving review markup risks a manual action.
- Ten testimonials across four pages reusing first names with different surnames; a decorative "Verified Client Review" badge on all of them.
- Phone numbers: 0274799320 (footer, live), +64 27 520 1613 (schema, tel links), 021 044 2277 (/keratin), 021 752 611 (/terms). Booking page in this repo dials a US 917 number.
- Eleven service pages hard-code `price="Contact for pricing"` while /services and the homepage list dollar prices.
- Title suffix in Layout is " | Hair By Melissa - Premium Hairdresser Kaukapakapa" (52 chars), and 21 pages already end their own title with the brand.
- Hours in schema (Tue–Fri 9–5, Sat 9–3) are wrong: Google says Mon–Fri 9–1:30, Sat 2–5, Sun 9–5. Site ranks #1 for "hair salons open sunday near me" and never says it IS open Sunday.
- Chat widget bubble covers "Book Now" on mobile load.

---

## 2. Confirmed facts (owner, 2026-09-18) — these override every default below

- **Phone:** 0274 799 320 → display `0274 799 320`, href `tel:+64274799320`. Replace every other number (027 520 1613, 021 044 2277, 021 752 611, +19175551234, +64-21-XXX-XXXX).
- **Hours (Google Business Profile):** Mon–Fri 9:00am–1:30pm · Sat 2:00pm–5:00pm · Sun 9:00am–5:00pm. **Open Sunday.** Schema `openingHoursSpecification` and every visible hours block must match exactly. Copy line: `Mon–Fri 9am–1:30pm · Sat 2–5pm · Sun 9am–5pm`.
- **Google listing:** business name on Google is "Hair By Melissa A"; rating 5.0 from **1 review**. Address on Google: 12 Magnolia Lane, Kaukapakapa **0875**. Site currently says "Magnolia Lane … 0810" → change to `12 Magnolia Lane, Kaukapakapa 0875` in schema, footer, contact. Profile link: https://share.google/8GVUyoirDJwTIXnxO
- **Reviews:** remove `aggregateRating` and schema `Review` items entirely (1 real review cannot support "47"). Remove the "Verified Client Review" badge and star rows from TestimonialCard. Keep testimonial text as plain quotes. Add a small "Leave a Google review" link (to the profile link above) in the footer and on the booking thank-you area.
- **Social:** Instagram https://www.instagram.com/hair_by_melissa_nz/ ; Facebook page "Hair By Melissa A - Kaukapakapa" (use the URL from the site's existing `sameAs` only if it resolves; otherwise omit Facebook). Footer icons link to these; `sameAs` lists only URLs that resolve.
- Unanswered → defaults apply: prices as on /services; no brand names; Winter Special removed with 301; mobile-services claim removed.

### Original question list (kept for the record)

| # | Question | Default if no answer |
|---|---|---|
| Q1 | Phone | CONFIRMED 0274 799 320 |
| Q2 | Hours | CONFIRMED Mon–Fri 9–1:30, Sat 2–5, Sun 9–5 |
| Q3 | Google profile | CONFIRMED 5.0 from 1 review; remove aggregateRating |
| Q4 | Are the ten on-site testimonials from real clients with permission? | Keep text, remove "Verified Client Review" badge and star icons |
| Q5 | Are the /services prices current (Balayage $230, Keratin $180, Half head $140…)? | Use them as shown on /services |
| Q6 | Product brands used (for "premium products" claims)? | Leave the claim generic, no brand named |
| Q7 | Is the "Winter Special" ($144 keratin, expired Aug 2024) still on? | Remove the Navbar "Winter Special" link and 301 /keratin → /services/keratin-treatments/ |
| Q8 | Real Facebook / Instagram URLs? | Leave footer icons unlinked and remove `sameAs` guesses from schema |
| Q9 | Does Melissa offer mobile/in-home services? (/locations says yes, every other page says no) | Remove the mobile-services claim |

---

## 3. Page map and keyword → URL

One primary keyword per URL. Titles assume the Layout suffix becomes " | Hair By Melissa" (see task A1) and every page title drops its own brand suffix.

| URL | Type | Primary keyword | Secondary | Intent | New `<title>` (≤60 before suffix) | New H1 |
|---|---|---|---|---|---|---|
| / | Home | hairdresser kaukapakapa | hair salon north auckland, hair by melissa | Brand/local | `Hairdresser Kaukapakapa, North Auckland` | `Expert colour, keratin smoothing and cuts in Kaukapakapa` |
| /locations/helensville/ | Location | hairdresser helensville | hair salon near me (Helensville), hairdresser near helensville | Local transactional | `Helensville Hairdresser, 15 Min Away, Free Parking` | `Your hairdresser 15 minutes from Helensville` |
| /blog/keratin-aftercare/ | Article | when can i wash my hair after keratin treatment | keratin aftercare, can i brush/comb/dry shampoo after keratin | Informational | `Keratin Aftercare: When Can You Wash Your Hair?` | `Keratin treatment aftercare: when to wash, brush and style your hair` |
| /services/balayage/ | Service | balayage auckland | balayage north auckland, balayage cost nz | Commercial | `Balayage North Auckland, $230, 3–4 Hours` | `Balayage in Kaukapakapa, North Auckland` |
| /services/half-head-highlights/ | Service | half head highlights | 1/2 head foils, half head highlights cost nz | Commercial | `Half Head Highlights, $140, Kaukapakapa` | keep |
| /services/keratin-treatments/ | Service | keratin treatment north auckland | keratin smoothing auckland | Commercial | `Keratin Treatment North Auckland, $180` | keep |
| /booking/ | Conversion | book hairdresser kaukapakapa | — | Transactional | `Book an Appointment` | `Book your appointment` |
| Other 8 service pages | Service | existing | — | Commercial | strip brand suffix only; add price | keep |

Cannibalisation fix: Helensville page must stop competing for "hair by melissa". Removing the brand from its H1/title and adding "near/from Helensville" phrasing resolves it. Homepage keeps the brand.

## 4. Internal linking

| From | To | Anchor |
|---|---|---|
| /blog/keratin-aftercare/ (after quick answer) | /services/keratin-treatments/ | "keratin treatment at our Kaukapakapa salon ($180)" |
| /blog/keratin-aftercare/ (mid, after washing section) | /services/keratin-treatments/ | "book a keratin treatment in North Auckland" |
| /services/keratin-treatments/ | /blog/keratin-aftercare/ | "keratin aftercare guide" (already exists via RelatedLinks; verify) |
| /locations/helensville/ | /services/balayage/, /services/half-head-highlights/, /booking/ | service names; "book online" |
| / (hero) | tel: | "Call 027 479 9320" (mobile-visible) |
| Footer (site-wide) | tel:, /booking/ | tappable phone, hours block |
| /services/balayage/ | /gallery/ | "see balayage results" |

## 5. Schema plan

| Page | Keep | Change |
|---|---|---|
| All (Layout) | HairSalon: name, address, geo, telephone, openingHours, priceRange, url, image, areaServed, hasOfferCatalog | Remove `knowsAbout` Event (or the whole knowsAbout list). Remove `aggregateRating` + `Review` unless Q3 supplies real data. Fix telephone to Q1 value. Remove `sameAs` unless Q8. Remove the second "GEO context" WebPage block (adds nothing, duplicates address) |
| Location pages | FAQPage (visible + schema) | Drop the per-page duplicate HairSalon block; delete the duplicate visible FAQ accordion on Helensville |
| Service pages | Service + FAQPage | Add `Offer` with real price to match visible price |
| Keratin post | BlogPosting (BlogArticleSchema) + FAQPage | `dateModified` = ship date; FAQ questions must equal the visible question H2s |

## 6. Priority order

**Quick wins (this build):**
1. A1 Title suffix + strip brand from 21 page titles (Haiku audit, Sonnet edit).
2. A2 Remove the Event from `knowsAbout`; remove aggregateRating/Reviews; single phone constant; fix booking tel.
3. A3 Real prices on all 11 service pages from one data file; Offer schema.
4. B1 Keratin post: quick-answer box in first 100 words, question-form H2s, early soft CTA, mid CTA, refreshed FAQ + schema, dateModified.
5. B2 Helensville: new title/meta/H1, remove duplicate FAQ block, add price + "book" CTA above fold, tel link.
6. B3 Home + Footer + Booking: tappable phone, visible hours (open 7 days, Sunday 9–5), chat widget delayed 8s / z-index below CTA, booking hero gets Call + Book buttons.
7. B4 Remove "Verified Client Review" badge; Navbar "Winter Special" handled per Q7 with a 301.

**Structural (next build, not this one):** balayage page gallery + visible FAQ + before/after; Fresha and Yelp listings; Google Business Profile push for the Helensville pack (client task); analytics install; content-collections refactor for services.

## 7. Final copy (Lead-written, paste verbatim)

**Layout suffix:** ` | Hair By Melissa`

**Home meta:** `Colour, balayage, keratin smoothing and cuts at a one-stylist salon in Kaukapakapa, North Auckland. 15 minutes from Helensville, free parking. Book online.` (154)

**Helensville meta:** `Helensville locals: colour, balayage and keratin at Hair By Melissa, 15 minutes up SH16 in Kaukapakapa. Free parking, online booking, open 7 days.` (149)

**Keratin post meta:** `Wait 72 hours before washing. What to avoid, when you can brush, tie or dry-shampoo, and how to make a keratin treatment last 5 months. By an NZ stylist.` (152)

**Balayage meta:** `Balayage in North Auckland from $230. Hand-painted, low-maintenance colour by Melissa in Kaukapakapa, 45 minutes from the city. See results and book online.` (155)

**Keratin post quick-answer box (directly under the H1, before any other section):**
> **Quick answer:** Wait **72 hours** before your first wash (48 hours is the absolute minimum for most formulas). Until then keep hair dry, straight and loose: no hair ties, clips, tucking behind ears, or sweat. After that, use a sulfate-free shampoo and wash no more than 2–3 times a week.

**Keratin post early soft CTA (after quick answer, small muted card):**
> Based in North Auckland? Melissa does keratin treatments at her Kaukapakapa salon for $180, about 2–3 hours. [See the keratin treatment →](/services/keratin-treatments/)

**Keratin post question H2s (in this order, each answered in its first sentence):**
1. When can I wash my hair after a keratin treatment?
2. Can I brush or comb my hair after keratin?
3. Can I tie my hair up after keratin?
4. Can I use dry shampoo after a keratin treatment?
5. What happens if my hair gets wet in the first 72 hours?
6. What shampoo should I use after keratin?
7. How long does a keratin treatment last?
8. When can I colour my hair after keratin?

**Mid-article CTA (after Q4):**
> Ready for smooth hair that lasts? [Book a keratin treatment in North Auckland](/services/keratin-treatments/) or call 0274 799 320.

**Home hero sub-line:** `One stylist, unhurried appointments, and colour that suits you. 45 minutes from central Auckland, free parking at the door.`
**Home hero buttons:** `Book online` → /booking · `Call 0274 799 320` → tel:+64274799320

**Helensville hero sub-line:** `Skip the drive to the city. Colour, keratin and cuts 15 minutes up SH16, with free parking and online booking.`

**Hours block (footer + booking):** `Mon–Fri 9am–1:30pm · Sat 2–5pm · Sun 9am–5pm`

**Booking hero buttons:** `Book online below` (scrolls to widget) · `Call or text 0274 799 320`

**Booking reassurance line (replaces "confirm within 1–2 business days"):** `Pick a time below and Melissa will confirm by text. Need today or tomorrow? Call or text and she'll fit you in if she can.`

## 8. Effort and sequence

| Step | Owner | Model | Files | Parallel? |
|---|---|---|---|---|
| 0 Sync source from deploy repo | DONE by Lead, commit ae557be | — | — | — |
| A1 Title suffix + strip brand suffix on 21 pages, length check | Builder 1 → Haiku audit | sonnet, haiku | Layout.astro, 21 pages (title line only) | with A2, A3 |
| A2 Business data constant + schema cleanup + phone/tel fixes | Builder 2 | sonnet | src/data/business.ts (new), Layout.astro, Footer.astro, booking.astro, keratin.astro, terms.astro, location pages (schema block) | yes |
| A3 Prices on service pages + Offer schema | Builder 3 | sonnet | src/data/services.ts (new or reuse services.astro data), 11 service pages, ServiceLayout.astro | yes |
| B1 Keratin post rewrite | Builder 4 | sonnet | blog/keratin-aftercare.astro | yes |
| B2 Helensville page | Builder 5 | sonnet | locations/helensville.astro | yes |
| B3 Home/Footer/Booking CTAs, hours, chat delay | Builder 6 | sonnet | index.astro, Footer.astro (hours only; coordinate with A2 via orchestrator sequencing), booking.astro, Layout.astro (widget script) | after A2 |
| B4 Badge removal, Winter Special, 301 | Builder 6 | sonnet | TestimonialCard.astro, Navbar.astro, netlify.toml, public/_redirects | with B3 |
| Build | Orchestrator | opus | `npm run build` | after all |
| QA-1 SEO spec vs this plan | Verifier | sonnet | dist/ | yes |
| QA-2 Build/links/redirects/schema validity | Verifier | sonnet | dist/ | yes |
| Changelog entry | Orchestrator | opus | changelog/ | last |

Cost shape: 1 Opus orchestrator, up to 6 Sonnet builders + 2 Sonnet verifiers, 1 Haiku pass. Builders get disjoint file sets; Footer.astro is touched by A2 then B3 sequentially.

## 8b. Technical additions (from the technical audit, verified in the deploy repo)

Fold into the builder tasks above; all are small.

| Item | Where | Fix | Task |
|---|---|---|---|
| Schema references five images that don't exist: `/images/salon-exterior.jpg`, `/images/salon-interior.jpg`, `/images/hair-services-gallery.jpg`, `/images/logo.png`, `/images/og-image.jpg` (the default OG image is also missing) | Layout.astro, BlogArticleSchema publisher logo | Point `image` at real files in `/images/optimized/` (hero + a gallery WebP) and add a real `og-image.jpg` (1200×630) generated from the hero. Haiku verifies every schema/OG URL returns 200 in `dist/` | A2 |
| Meta descriptions run 180–200 chars site-wide | all pages | Haiku pass: trim to ≤155 keeping the first clause; Lead-written ones in §7 take precedence | Haiku |
| Service page H1 is the raw title with a pipe in it | ServiceLayout.astro:28 | Add an `h1` prop; pages pass a clean H1 (service name + "in Kaukapakapa") | A3 |
| Keratin post FAQ schema has 3 questions, visible FAQ has 5 | keratin-aftercare.astro | Rebuild both from one array (the 8 questions in §7) | B1 |
| Sitemap lists `/404` and omits `/locations/` and `/services/uv-protection-treatments/` | public/sitemap.xml | Add `@astrojs/sitemap` to astro.config with a filter that excludes 404, delete the hand-written sitemap.xml so it can't drift again; keep sitemap-images.xml | QA-2 verifies |
| Helensville page has a dead `helensvilleFAQ` const plus two visible FAQ sections | helensville.astro | Keep only the `FAQSchema` component instance | B2 |
| Homepage uses the anchor "Learn more" six times for /services | index.astro | Use the service name as anchor text | B3 |

## 9. Success metrics (re-check 2026-10-16, 28 days)

| Metric | Now | Target |
|---|---|---|
| Rich Results verdict, all pages | FAIL | PASS |
| /locations/helensville/ CTR | 1.0% | ≥3% at similar position |
| /blog/keratin-aftercare/ position on "when can i wash my hair after keratin treatment" | 42 | ≤20 |
| /blog/keratin-aftercare/ clicks | 1 | ≥8 |
| Site clicks | 19 | ≥30 |
| "balayage auckland" position | 47 | ≤30 |
| Brand query served by / not /locations/helensville/ | split | home only |
