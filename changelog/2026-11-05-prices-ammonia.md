# 2026-11-05: price rise, ammonia-free claim removed

**What changed**

| Service | Old | New |
|---|---|---|
| Women's cut & finish | $50 | $70 |
| Partial foils | $90 | $150 |
| Half head highlights | $140 | $200 |
| Full head highlights | $180 | $250 |
| Permanent tint touch-up | $90 | $130 |

Updated in `src/data/services.ts`, visible copy, page titles and descriptions, FAQs and their schema, Offer schema in `Layout.astro`, `priceRange` ($40-$250), `llms.txt` and `sitemap-images.xml`.

All 4 "ammonia-free" statements removed (toner schema, partial foils and toner copy on /services/, highlights FAQ).

Balayage vs highlights post: the full head figures are updated (12-month total now $1,250). Balayage is no longer the higher upfront cost, since full head is $250 and balayage $230, so the "Considerations" line and the Cost Insight were reworded.

Two stale prices found and corrected: color-insights listed half head at $150, seasonal-tips listed cuts at $80-120.

**Why:** owner price rise. Ammonia-free can't currently be confirmed for every product.

**Left as is:** keratin $180, nanoplasty from $200, balayage $230, all-over tint $140, blow wave $50, toner $40, UV $40. The balayage "3 × $180" touch-up estimate in the 12-month comparison has no menu price behind it, so it needs an owner answer.

**Files:** 23 (src/data, Layout, services, index, 404, location pages, service pages, 3 blog pages, public/llms.txt, public/sitemap-images.xml).

**GSC metric:** CTR on /services/ pages and /locations/helensville/, whose titles show prices. Watch for a drop on the 5 changed pages.

**Re-check:** 2026-11-26.
