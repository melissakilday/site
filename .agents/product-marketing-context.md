# Product Marketing Context — Hair By Melissa

Client: Hair By Melissa (single client; no other client context may be used here).
Created 2026-09-18 from repo facts + Search Console. Items marked **UNVERIFIED** must be confirmed by the owner before they ship in copy or schema.

## Business
- Trading name: Hair By Melissa. Stylist/owner: Melissa (surname not in repo).
- One-stylist boutique salon at 12 Magnolia Lane, Kaukapakapa 0875, NZ (matches Google; site corrected 2026-09-18). Google lists the business as "Hair By Melissa A". Geo -36.6173, 174.4829.
- Trading since 2020 per schema; copy says "5+ years experience" (static, drifting). **UNVERIFIED: actual start year.**
- Booking: LeadConnector/GoHighLevel embedded widget on /booking. Separate form on /keratin promo page.
- Email: melissa@hairbymelissa.co.nz (public). Schema uses book@hairbymelissa.co.nz. **UNVERIFIED which is monitored.**
- Phone: **CONFIRMED 2026-09-18: 0274 799 320 (tel:+64274799320).** Site corrected 2026-09-18; historically the repo showed five different numbers: 027 520 1613 (footer/contact/faq/locations), +64-21-XXX-XXXX (placeholder in JSON-LD on every page), tel:+19175551234 (US number on booking page Call Now), 021 044 2277 (/keratin), 021 752 611 (terms). Working assumption until confirmed: 027 520 1613 (most widely shown).
- Hours: **CONFIRMED from Google Business Profile 2026-09-18: Mon–Fri 9am–1:30pm, Sat 2–5pm, Sun 9am–5pm (open 7 days).** Site corrected 2026-09-18 (schema, footer, booking, contact all match). Search Console shows a #1 ranking for "hair salons open sunday near me", so hours accuracy matters.

## Services and prices (from /services, homepage, JSON-LD; individual service pages wrongly say "Contact for pricing")
| Service | Price | Duration |
|---|---|---|
| Keratin treatment | $180 | 2–3 h |
| Women's cut & finish | $50 | 45–60 min |
| Partial foils | $90 | 1–1.5 h |
| Half head highlights | $140 | 2–2.5 h |
| Full head highlights | $180 | 2.5–3 h |
| Permanent tint touch-up | $90 | 1–1.5 h |
| Permanent tint all-over | $140 | 1.5–2 h |
| Balayage | $230 | 3–4 h |
| Toner | $40 | 30–45 min |
| Blow wave | $50 | 45–60 min |
| UV protection treatment | $40 (meta only) | — |
Prices used as shown on /services (owner did not object 2026-09-18). /keratin promo page removed with a 301.

## Service area
Kaukapakapa (salon), Helensville (15 min via SH16), Wainui (20 min), Waitoki (10 min). Rodney / North Auckland. Clients travel to the salon. The /locations hub claims "mobile services" — contradicted everywhere else; treat as false unless confirmed.

## Ideal customer
Women in rural North Auckland / Kaipara who want a personal, unhurried salon experience close to home instead of driving to the city. Colour (balayage, highlights, tints) and keratin smoothing are the money services; coastal humidity/frizz is a recurring local pain point. 73% of search clicks are mobile.

## Offer / positioning
Premium boutique service in a peaceful rural setting; one stylist, full attention, consultation-led. Voice words: "premium", "transformation", "peaceful", "personalised", "unhurried". Mixed we/I voice; Melissa speaks in first person on contact page.

## Proof — current state
- **No verified proof in the repo.** JSON-LD claims AggregateRating 5.0 from 47 reviews with no source; only two reviews in schema. Ten testimonials across pages reuse first names (Sarah ×4, Emma ×3, Jessica ×2) with differing surnames/locations — pattern of placeholder copy. TestimonialCard shows a decorative "Verified Client Review" badge with no verification.
- Trust badges: "5+ years", "7-day satisfaction guarantee" (also in Terms), "premium products" (no brand named), "certified professional" (no body named).
- Footer links Instagram (hair_by_melissa_nz) since 2026-09-18; Facebook page URL still unconfirmed, so no Facebook link or sameAs.
- **Google Business Profile (confirmed 2026-09-18):** 5.0 rating from 1 review. Link: https://share.google/8GVUyoirDJwTIXnxO. Instagram: https://www.instagram.com/hair_by_melissa_nz/. Facebook page: "Hair By Melissa A - Kaukapakapa". Do not claim any review count above 1. Still unsupplied: product brands, qualifications.

## Primary conversion action
"Book Now" → /booking (LeadConnector widget). Secondary: tap-to-call. Blog readers of the keratin post are mostly non-local; for them the goal is a soft path to /services/keratin-treatments/ and brand recall, not a hard sell.

## Tech stack
Astro 5.13 static, Tailwind 4, Netlify (netlify.toml + _redirects in public/). Shared Layout.astro owns title/meta/canonical/OG and two site-wide JSON-LD blocks (HairSalon with offers+reviews; a "GEO context" WebPage block). FAQSchema component (visible accordion + FAQPage JSON-LD) on locations and service pages. Layout appends " | Hair By Melissa - Premium Hairdresser Kaukapakapa" to every title, which duplicates the brand on ~15 pages. No analytics installed. 38 pages, sitemap has 38 URLs, 0 errors.

## Search Console baseline (sc-domain:hairbymelissa.co.nz, 28 days to 2026-09-18)
19 clicks / 1,613 impressions / CTR 1.18% / avg pos 29.2. Brand "hair by melissa" pos 2.1. "hairdresser helensville" pos 6.0 (70 imp/90d). Keratin aftercare post 647 imp, 1 click, pos 37.7 (was 21). "balayage auckland" 43 imp pos 47. Every page fails Rich Results on an Event "Kaukapakapa Country Fair" missing startDate/location.

## Local search reality (claude-seo local/maps runs, 2026-09-18)
The Helensville 3-pack is held by three salons physically in Helensville with 23–66 reviews; a Kaukapakapa salon 15 min away with 1 review will not enter it via optimisation. Winnable: the Kaukapakapa pack, "near me" from Helensville-area phones, and the organic #6 for "hairdresser helensville". The business is absent from OpenStreetMap (feeds Apple Maps and others). Reports: tools/claude-seo/reports/2026-09-18-*.md (gitignored? no: reports/ is not ignored for claude-seo; keep them).
