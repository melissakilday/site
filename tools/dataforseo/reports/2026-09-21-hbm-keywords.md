# Hair By Melissa — Keyword & SERP Research, 2026-09-21

Scope: Search Console (source of truth) + DataForSEO (NZ location, Auckland SERPs). Budget cap US$3.00.

## 0. Budget

**Total DataForSEO spend: US$0.294** (of the $3.00 cap). Breakdown:

| Call | Cost |
|---|---|
| `keywords_search_volume` — 130 curated terms, New Zealand | $0.090 |
| `labs_keyword_ideas` — 4 seeds, limit 300 | $0.048 |
| `serp_google_organic` × 2 (Helensville, Kumeu — competitor discovery) | $0.007 |
| `labs_ranked_keywords` × 4 (hairbymelissa.co.nz + 3 competitors) | $0.061 |
| `serp_google_organic` × 4 (balayage auckland, keratin treatment auckland, hairdresser near me, hairdresser kaukapakapa) | $0.014 |
| `serp_google_organic` re-fetch × 5 (PAA verbatim extraction) | $0.017 |
| `serp_google_maps` × 6 (hairdresser/hair salon × Helensville, Kaukapakapa, Kumeū) | $0.012 |
| `google_trends` × 2, then re-fetch × 2 for monthly aggregation | $0.044 |
| Account balance check (`get_user_data`) | $0 |

Account balance at task start: $3.844. All 6 requested DataForSEO steps (a–f) completed; no items skipped for budget reasons.

Raw CSVs: `tools/dataforseo/outputs/` (24 files — 4 GSC exports + 20 DataForSEO exports, see filenames for which call produced each).

---

## 1. GSC summary by bucket

**Page-level totals (90 days, complete — 40 pages, no truncation):**

| Page | Clicks | Impr. | CTR | Avg pos |
|---|---|---|---|---|
| `/` | 52 | 788 | 6.60% | 17.1 |
| `/locations/helensville/` | 13 | 693 | 1.88% | 9.5 |
| `/blog/keratin-aftercare/` | 12 | **2,822** | **0.43%** | 21.4 |
| `/locations/` | 6 | 149 | 4.03% | 14.5 |
| `/services/half-head-highlights/` | 5 | 660 | 0.76% | 15.7 |
| `/booking/` | 3 | 84 | 3.57% | 8.9 |
| `/services/partial-foils/` | 2 | 292 | 0.68% | 26.8 |
| `/about/`, `/locations/waitoki/`, `/services/permanent-tint-touch-up/`, `/services/toner/` | 1 each | 87 / 9 / 6 / 181 | — | 6.8 / 2.8 / 10.2 / 33.5 |
| `/hair-dressing/` | 0 | 326 | 0% | 34.5 |
| `/services/keratin-treatments/` | 0 | 265 | 0% | 61.6 |
| `/services/blow-wave/` | 0 | 337 | 0% | 15.4 |
| `/services/full-head-highlights/` | 0 | 231 | 0% | 27.4 |
| `/services/balayage/` | 0 | 204 | 0% | 53.5 |
| `/locations/kaukapakapa/` | 0 | 167 | 0% | 19.1 |
| `/blog/frizzy-hair-solutions/` | 0 | 116 | 0% | 63.0 |
| `/blog/hair-health-signs/` | 0 | 82 | 0% | 19.3 |
| `/contact/` | 0 | 79 | 0% | 11.8 |
| `/blog/hair-color-maintenance/` | 0 | 40 | 0% | 62.7 |
| `/blog/balayage-vs-highlights/` | 0 | 30 | 0% | 12.5 |
| Remainder (21 pages) | 0 | ≤18 each | — | — |

Site total, 90 days: **91 clicks / ~5,850 impressions** across 40 URLs.

**Query buckets — top 500 queries, 90 days** (caveat below):

| Bucket | # queries | Clicks | Impr. | CTR |
|---|---|---|---|---|
| Brand ("melissa", "hair by melissa") | 6 | 13 | 44 | 29.55% |
| Local/commercial (hairdresser, salon, service names + place names) | 314 | 16 | 1,117 | 1.43% |
| Informational (how/what/when/aftercare/frizzy/maintain…) | 103 | 3 | 409 | 0.73% |
| Noise (unrelated — "professional styling" stock-photo query, foreign-language, off-topic) | 77 | 0 | 207 | 0% |

**Query buckets — complete 28-day list** (246 rows, under the 500-row cap, so this set is exhaustive for that window):

| Bucket | # queries | Clicks | Impr. | CTR |
|---|---|---|---|---|
| Brand | 8 | 4 | 12 | 33.33% |
| Local/commercial | 114 | 3 | 313 | 0.96% |
| Informational | 99 | 0 | 249 | 0% |
| Noise | 23 | 0 | 101 | 0% |

**Important caveat:** the query-dimension sum (675 impressions, 28 days) is well below the page-dimension total for the same window (already confirmed in your brief: home alone is 155 impr/28d). This is GSC's normal behaviour — very-low-volume/rare queries get folded into an unreported "(other)" bucket when queried by `query` dimension, but still count in `page`-dimension totals. Treat the page table above as the reliable top-line number; treat query buckets as directional colour on intent mix, not a literal sum.

**Read:** the site earns real impressions on high-intent local/commercial and informational queries but converts almost none of them into clicks outside brand and Helensville/home. The keratin post is the starkest case — 2,822 impressions, 0.43% CTR — a title/snippet problem, not a demand problem.

---

## 2. Title/meta rewrite candidates (high impressions, low CTR or poor position)

Verified against the live title in each `.astro` file before recommending — two pages already have good, price-inclusive titles and are **not** rewrite candidates (see note).

| # | Page | 90d data | Current `<title>` | Verdict / new title (≤60 chars before suffix) |
|---|---|---|---|---|
| T1 | `/blog/keratin-aftercare/` | 2,822 impr, 0.43% CTR, pos 21.4 | (per plan.md, generic) | **Already specified in plan.md §3**: `Keratin Aftercare: When Can You Wash Your Hair?` — confirm this shipped; it is the single highest-leverage title fix on the site (2,822 impressions/90d waiting on it). |
| T2 | `/services/keratin-treatments/` | 265 impr, 0 clicks, pos 61.6 | (per plan.md, generic) | Per plan.md §3: `Keratin Treatment North Auckland, $180`. Confirm shipped — position 61.6 is a ranking problem more than a CTR problem; pair with the internal links from the keratin post (plan §4). |
| T3 | `/services/balayage/` | 204 impr, 0 clicks, pos 53.5 | (per plan.md, generic) | Per plan.md §3: `Balayage North Auckland, $230, 3–4 Hours`. Confirm shipped. GSC confirms exact-match "balayage" sits at position 75.2 and "balayage auckland" at 47.5 for this URL — a ranking, not just CTR, problem (see §6 competitor gap and §9 volume: 3,600/mo national, 140/mo "balayage auckland"). |
| T4 | `/hair-dressing/` | 326 impr, 0 clicks, pos 34.5 | `Professional Hair Dressing Guide & Techniques` | This is a generic, undated "pillar content" page (mentions "hairdressing trends 2025") with no location, price or CTA — not in plan.md's page map. It draws real impressions on the exact phrase "hair dressing" (ranks #1 for that exact query per query×page data) but converts nothing. **Flag for a strategic decision, not just a title tweak**: either fold its four topic sections into the blog/services structure and 301 it, or repurpose as a real local hub with title `Hairdressing Services in Kaukapakapa, NZ` (41 chars). Either way it needs a 301 note in `netlify.toml`/`_redirects` if the URL changes, per the git rule. |
| T5 | `/locations/kaukapakapa/` | 167 impr, 0 clicks, pos 19.1 | `Hair Salon in Kaukapakapa Village` | Doesn't contain "hairdresser" (the query people actually use — see §9, "hairdresser kaukapakapa" has real SERP presence at #1 organic + #2 local pack, driven by the **homepage**, not this page). Two live pages both target the Kaukapakapa theme; worth checking in GSC's URL Inspection whether Google is folding this location page's clicks into the homepage's ranking result. Candidate title if kept distinct: `Hairdresser in Kaukapakapa Village, NZ` (39 chars) — but the lead should decide whether this page should instead consolidate into the homepage to stop internal competition. |
| — | `/services/blow-wave/` | 337 impr, 0 clicks, pos 15.4 (but "blow wave" exact-match sits at pos 10.1 with 31 impr) | `Blow Wave Kaukapakapa, $50, North Auckland` | **Not a rewrite candidate** — title already has location + price. Zero clicks at ~30-90 impressions/90d over many query variants is statistically unsurprising at this volume; monitor, don't rewrite. |
| — | `/services/full-head-highlights/` | 231 impr, 0 clicks, pos 27.4 (exact-match "full head highlights" pos 15, 20 impr) | `Full Head Highlights, $180, Kaukapakapa` | **Not a rewrite candidate**, same reasoning — title is already good; low absolute volume explains 0 clicks. |
| — | `/services/toner/` | 181 impr, 1 click, pos 33.5 | `Hair Toner, $40, Kaukapakapa North Auckland` | **Not a rewrite candidate** — already converting at the volume available; "hair toner" (1,000/mo) and "hair toner nz" (260/mo) are both broad/national, low local-intent terms this page will never fully capture. |

---

## 3. Search volume (New Zealand), with GSC position where ranked

130 curated terms queried (service × location matrix + informational). Top 40 by volume:

| Keyword | Vol/mo (NZ) | CPC | Competition | HBM GSC/Labs position |
|---|---|---|---|---|
| hair salon near me | 14,800 | $0.85 | Medium | not ranked (top 100) |
| hair salon | 9,900 | $0.95 | Low | pos 24.5 (28d) |
| hairdresser near me | 9,900 | $0.72 | Medium | pos 2 (28d, low impressions) |
| hairdressers near me | 9,900 | $0.72 | Medium | pos 6 (28d) |
| hairdresser / hairdressers | 8,100 | $1.16 | Low | pos 25.7 (28d) |
| hair salon auckland / hairdresser auckland / hair stylist auckland | 4,400 each | ~$1.12 | Medium | not in top 100 (labs) |
| **balayage** | 3,600 | $1.78 | Low | **pos 79 (28d) / #84 (labs)** — biggest gap, see §10 |
| keratin treatment | 2,400 | $0.62 | High | pos 48.4 (28d) |
| hair colour | 1,900 | $0.39 | High | not ranked |
| highlights | 1,900 | $0.16 | Low | not ranked |
| hair toner | 1,000 | $0.16 | High | pos 49.8 (28d) |
| foils | 720 | $0.30 | Medium | not ranked |
| keratin hair treatment | 720 | $0.65 | High | not in top 100 |
| blow wave | 590 | $0.50 | Low | pos 16 (28d) |
| **keratin treatment auckland** | 480 | $0.80 | High | **#41 (labs)** — matches the brief's known weak point |
| hair stylist near me | 390 | $0.86 | Medium | not ranked |
| hair stylist | 320 | $1.10 | Low | not ranked |
| balayage vs highlights | 260 | $0.11 | Low | (blog post exists — pos 12.5 for "balayage vs full head highlights") |
| women's haircut | 170 | $0.99 | Low | not ranked |
| **balayage auckland** | 140 | $1.31 | High | **pos 47.5–56 (GSC/labs)** |
| hair salon west auckland | 140 | $0.79 | High | not ranked |
| keratin treatment near me | 140 | $0.62 | Medium | #62 (labs) |
| mobile hairdresser near me | 140 | $1.14 | Low | n/a (service not offered) |
| **hairdresser kumeu / hairdressers kumeu** | 110 each | $1.34 | Medium | **not ranked — Aneia Warner Salon ranks #5, see §6** |
| hairdresser west auckland | 110 | $0.74 | High | not ranked |
| blow wave auckland / near me | 90 each | $0.81–0.85 | Medium | not ranked |
| mobile hairdresser / auckland | 90 each | $0.65–2.30 | Low | n/a |
| balayage near me | 70 | $0.75 | High | not ranked |
| hair salon kumeu | 70 | $0.90 | Low | not ranked |
| hairdresser/s helensville | 50 each | $0.37 | Low | pos 6.2–6.3 (GSC, homepage + location page) |

**Notably zero/no reported search volume** (below Google Ads' reporting threshold — this does not mean no demand, see §11): every `<service> × {kaukapakapa, wainui, waitoki}` combination, e.g. **"hairdresser kaukapakapa" itself has no official search volume figure**, despite the site ranking #1 organic and #2 local pack for it (§9) and it appearing repeatedly with real impressions in GSC. This is the clearest case in this dataset of "the keyword tool undercounts a term the business is visibly winning."

Full table: `tools/dataforseo/outputs/keywords_search_volume_nz_*.csv` (130 rows).

---

## 4. Keyword → URL map — additions to plan.md §3

Plan.md §3 already assigns primaries for home, Helensville, keratin post, balayage, half-head-highlights, keratin-treatments, and booking. New findings from this round:

| URL | New/confirmed primary | Secondary | Intent | Evidence |
|---|---|---|---|---|
| `/locations/helensville/` (existing) | hairdresser helensville | hair salon kumeu overflow, near me | Local | GSC 693 impr/90d pos 9.5; SERP local pack #3 for "hairdresser helensville" |
| **NEW — consider a Kumeū location page** | hairdresser kumeu / hair salon kumeu | hairdresser huapai (20/mo) | Local | 110+70 = 180/mo combined volume; real competitor (Aneia Warner Salon) ranks #5 organic / #7 local pack for "hair salon kumeu"; HBM doesn't rank at all (§6, §8). This is the strongest single "new page" candidate in this dataset — Kumeū is already in the client's stated service area. |
| `/services/keratin-treatments/` (existing) | keratin treatment north auckland | keratin treatment auckland, keratin treatment near me | Commercial | GSC pos 61.6 (90d) vs labs #41 — inconsistent, worth a fresh URL Inspection; internal links from the keratin post (plan §4) should help |
| `/services/balayage/` (existing) | balayage north auckland | balayage auckland, balayage vs highlights (link to blog) | Commercial | 3,600/mo national term at position ~75–84; 140/mo "balayage auckland" at position 47–56. Biggest volume-vs-position mismatch on the site. |
| `/hair-dressing/` (existing, purpose unclear) | — | — | — | See T4 above; not a keyword-targeting decision, a content-architecture one |

No other new pages/posts are justified by volume or map-pack evidence found this round (informational terms like "how to look after keratin treated hair" at 10/mo and "keratin aftercare" at 10/mo are already served by the existing keratin-aftercare post — do not fork new posts for them).

---

## 5. Competitor ranked keywords — what Hair By Melissa lacks

Competitors picked from real organic results for "hairdresser helensville" and "hair salon kumeu" (excluding directories/social): **Chanelle Jade Hair Studio** (chanellejadehairstudio.com), **Fifth Hair Studio** (fifthhairstudio.co.nz), **Aneia Warner Salon** (awsalon.co.nz, Kumeū).

`labs_ranked_keywords` (NZ, limit 300 each): HBM ranks for 71 keywords (all long-tail, mostly position 40+, 1–2 clicks worth of volume — see full CSV). Competitor sets are almost entirely their own brand names/near-duplicates, which is not actionable. The one genuine, actionable gap:

- **"hairdresser kumeu" (110/mo) and "hairdressers kumeu" (110/mo)** — Aneia Warner Salon ranks #5 organic for both; Hair By Melissa doesn't rank at all. Confirms the Kumeū page recommendation in §4.
- Aneia Warner Salon also has real reviews at volume (127 votes, 5.0) and ranks in the Kumeū map pack at #7 for both "hairdresser" and "hair salon" — it's the salon to benchmark against for that suburb specifically.
- Chanelle Jade Hair Studio (44 reviews, 4.9) and Fifth Hair Studio (24 reviews, 5.0) both outrank Hair By Melissa in the Helensville map pack (§8) despite Hair By Melissa's higher rating — review count is very likely the deciding factor, not content.

No competitor is meaningfully outranking Hair By Melissa on **informational** (keratin aftercare) content — none of the three competitor sites rank for any keratin-aftercare-style query in this dataset. That content lead is real; the CTR problem in §2/T1 is squarely a snippet issue, not a competitive one.

---

## 6. SERP notes and PAA (verbatim)

All SERPs run at Auckland,Auckland,Auckland,New Zealand, desktop, depth 20.

**"hairdresser kaukapakapa"** — Hair By Melissa is **#3 organic** (title: "Hair By Melissa: Hairdresser Kaukapakapa, North Auckland") and **#2 local pack** ("Hair By Melissa A", 5.0★/1 review). No PAA box on this query. Other organic results are mostly directories (StarOfService, Fresha) and one real competitor (Anna's Hair Studio via northwestcountry.co.nz at #5). This is the strongest SERP position found in the whole audit — protect it, don't disturb the homepage title further without testing.

**"hairdresser helensville"** — HBM at #9 organic (`/locations/helensville/`, titled "Expert Helensville Hairdresser - Hair By Melissa"), not in the 3-pack local results (Chanelle Jade Hair Studio, Fifth Hair Studio, Smart Cuts). PAA: *"What is the average cost of a haircut in New Zealand?"*, *"Where is the cheapest place to get a haircut?"*, *"Why are hair salons closing down?"*, *"How much do hairdressers charge?"*

**"hair salon kumeu"** — HBM does not appear anywhere in the top 20 organic or the 4-pack local results (Marcelo & Co, Aneia Warner Salon, Grove Collective, Roots To Ends). PAA: *"How much does a haircut cost in NZ?"*, *"How much does a hairdresser charge per hour?"*, *"Where is the cheapest place to get a haircut?"*, *"Why are hair salons closing down?"*

**"balayage auckland"** — HBM not in top 20 organic or the 3-pack (Killer Hair @ The Workroom, ANCO Studio, The Following Hair Co.). Real organic competitors: marilyns.co.nz (#4), ferdinandohair.co.nz (#6), ancostudio.com (#11), infusiononline.co.nz (#10). PAA: *"How much does a balayage cost in NZ?"*, *"Is a balayage better for your hair?"*, *"Is $400 a lot for a balayage?"*, *"What is replacing balayage?"* — the $400 question is useful: it signals searchers expect balayage to cost more than HBM's $230, worth surfacing as a value point on the balayage page.

**"keratin treatment auckland"** — HBM not in top 20 or 3-pack (Moment Hair Salon, FMK Epsom, Smart Hair). PAA: *"How much is a keratin treatment in NZ?"*, *"Are keratin treatments good for your hair?"*, *"How much should a keratin treatment cost?"*, *"How long do keratin treatments last?"* — all four are answerable on-page with existing price ($180) and duration (2–3 hrs) data; none currently appear to be answered as FAQ schema on this page per plan.md §5's FAQPage plan — confirm they're the actual questions used.

**"hairdresser near me"** — no local intent resolves to Kaukapakapa at this generic query (Auckland-wide 3-pack: Salon 101, JIN+JEN Hair Salon, Urban Hair Studio); not a realistic target, deprioritise.

---

## 7. Map-pack ranks

`serp_google_maps`, zoom 13z, "hairdresser" and "hair salon":

| Location | Term | Hair By Melissa rank | Top 3 (rating/reviews) |
|---|---|---|---|
| Helensville (-36.6770,174.4500) | hairdresser | **#8** of 15 | Smart Cuts 4.8★/66, Chanelle Jade 4.9★/44, Flash Cutzs 4.3★/3 |
| Helensville | hair salon | **#11** of 18 | Chanelle Jade 4.9★/44, Smart Cuts 4.8★/66, Flash Cutzs 4.3★/3 |
| Kaukapakapa (-36.6150,174.4930) | hairdresser | **#2** of 14 | Anna's Hair Studio 4.9★/26, **Hair By Melissa A 5.0★/1**, Fifth Hair Studio 5.0★/24 |
| Kaukapakapa | hair salon | **#3** of 19 | Anna's Hair Studio, Fifth Hair Studio, **Hair By Melissa A** |
| Kumeū (-36.7730,174.5560) | hairdresser | **not ranked** (0 of 80) | Roots To Ends 4.9★/65, ClipperKings 4.9★/356, Hair By Millie |
| Kumeū | hair salon | **not ranked** (0 of 91) | Roots To Ends, ClipperKings, Grove Collective |

**Read:** dominant at home (Kaukapakapa), weak but present at Helensville (review count is the visible gap — 1 review vs. competitors' 24–66), completely absent from Kumeū's map pack in both terms out of ~85 competing listings each. This is the single clearest three-tier picture in the whole dataset: win / compete / absent.

---

## 8. Seasonality (Google Trends, NZ, past 12 months, relative interest 0–100)

**Balayage** — peak **January 2026 (81.5)**, trough **February 2026 (48.8)**. Secondary lift Dec (69.0). Broadly flat April–August (55–67). Read: summer/holiday-season demand spike, consistent with post-summer colour refreshes; worth a January-targeted push (blog/social) starting mid-December.

**Keratin treatment** — peak **December 2025 (75.0)**, sharp fall to a trough in **July 2026 (37.0)** and stays low through winter (37–47, Jun–Sep). Read: strongly pre-summer/pre-Christmas driven (people want smooth hair for summer events), winter is genuinely quiet — don't over-invest keratin content pushes in winter months; front-load for October–December instead.

---

## 9. Recommendations, prioritised

1. **Confirm plan.md §3 titles actually shipped** for `/blog/keratin-aftercare/`, `/services/keratin-treatments/`, `/services/balayage/` — these three account for the largest impression volume on the site (2,822 + 265 + 204 = 3,291 impressions/90d) at the worst CTRs/positions. If they haven't shipped, this is the single highest-leverage action available. *(Ties to §2 T1–T3.)*
2. **Build a Kumeū location page.** It's the only suburb in the stated service area where Hair By Melissa has zero map-pack presence and zero organic presence, against a real, well-reviewed competitor (Aneia Warner Salon, 127 reviews) that ranks #5–7 for exactly the terms Hair By Melissa is missing ("hairdresser kumeu" / "hair salon kumeu", 110/mo each). *(Ties to §4, §5, §7.)*
3. **Close the balayage gap.** 3,600/mo nationally, 140/mo "balayage auckland" — the page sits at position 47–84 despite the service being priced and described. Check for thin content, missing FAQ answers to the "$400" cost question surfaced in §6, and the internal link from `/gallery/` specified in plan.md §4. *(Ties to §3, §6.)*
4. **Get Helensville reviews.** Map-pack rank #8–11 against competitors with 24–66 reviews vs. Hair By Melissa's 1 is very likely review count, not content — this is squarely the owner's "Google reviews campaign" already logged as a to-do in PROJECT-LOG.md. Reprioritise it given this data. *(Ties to §7.)*
5. **Resolve the `/hair-dressing/` and `/locations/kaukapakapa/` overlap.** Neither is a simple title fix; both need a content-architecture decision from the lead (consolidate vs. keep distinct, and a 301 if a URL changes). *(Ties to §2 T4/T5.)*
6. **Front-load keratin content/promo for Oct–Dec and balayage for Nov–Jan**, not evenly through the year — both terms trough in winter (Trends, §8).
7. **Do not chase "hairdresser near me" or generic "hair salon" (9,900–14,800/mo)** — Auckland-wide queries with no local-intent resolution to Kaukapakapa in the SERP (§6); budget for local terms with actual map-pack traction instead.

---

## 10. Failed / no-data items

- `keywords_search_volume`: 78 of 130 curated terms returned no reported volume (below Google Ads' threshold) — almost entirely `<service> × {kaukapakapa, waitoki, wainui, huapai, waimauku}` combinations and `home hair salon` variants. Listed in full in §3; flagged because several of these (esp. "hairdresser kaukapakapa") demonstrably have real search demand per GSC/SERP evidence despite no official volume figure — a known Keyword Planner limitation for hyper-local/low-volume terms, not a data error.
- `serp_google_organic` for "balayage north shore" was explicitly excluded per the task brief (confirmed not-ours geography).
- No PAA box returned for "hairdresser kaukapakapa" (Google didn't generate one for this query) — not a fetch failure, just absent for that SERP.
- All other requested calls (a–f) returned complete data; no timeouts or errors encountered.

---

*Report generated 2026-09-21. Raw data: `tools/dataforseo/outputs/` (24 CSVs, 4 from GSC + 20 from DataForSEO). Next step per plan.md is the lead's title/content decisions above, then a build pass.*
