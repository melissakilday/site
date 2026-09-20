# 2026-09-21 — Keyword research (DataForSEO + Search Console), Kumeū page, hub fixes

**What:** Vendored the DataForSEO skill project-locally (`.claude/skills/dataforseo`, creds from `.env`, outputs in `tools/dataforseo/outputs/`, gitignored). Sonnet analyst: 90-day Search Console (query, page, query+page), NZ volumes for 130 service × place terms, 300 keyword ideas, ranked keywords for hairbymelissa.co.nz and three local salons, six SERPs with People Also Ask, map packs at Helensville / Kaukapakapa / Kumeū, Trends. Cost US$0.29. Report `tools/dataforseo/reports/2026-09-21-hbm-keywords.md`.

**Findings:** ~5,850 impressions / 90 days, half on the keratin aftercare post (2,822, CTR 0.43%, position 21–38). "balayage" 3,600/mo NZ and "balayage auckland" 140/mo with the page at position 47–84. "hairdresser kumeu" 110/mo and "hair salon kumeu" 70/mo with zero presence (organic or map) against Aneia Warner Salon (127 reviews). Map pack: #2 Kaukapakapa, #8–11 Helensville (1 review vs 24–66), absent Kumeū. Town-level terms mostly below Google's volume floor although "hairdresser kaukapakapa" is won at #1 organic. Seasonality: balayage peaks January, keratin December.

**Built (Sonnet + Haiku):** new `/locations/kumeu/` (real content, FAQ + schema, linked from the hub); `/hair-dressing/` reframed from a dated generic guide into the local services-and-prices hub, URL kept; `/locations/kaukapakapa/` title now leads with "Hairdresser"; balayage page FAQ (cost, longevity, vs highlights) with schema and internal links from the gallery and the comparison post. Earlier title fixes on keratin aftercare, keratin treatments and balayage were confirmed live already.

**Owner:** Google reviews campaign is now the top item (Helensville map pack is a review-count gap). Kumeū: encourage any Kumeū clients to mention the town in reviews.

**Targets:** `/locations/kumeu/` indexed and showing impressions for "hairdresser kumeu"; balayage page position < 30 for "balayage auckland"; keratin post CTR ≥ 1%. **Re-check:** 2026-10-21 (and the existing 2026-10-16 check).

## Deployed 2026-09-21 (melissakilday/site main a69e51a, Netlify live in ~30 s)

Live checks: Kumeū page 200 with FAQPage, in the sitemap; hair-dressing hub and Kaukapakapa titles serving; balayage FAQ present; gallery links to the balayage page. Indexing requested for /locations/kumeu/. Re-check 2026-10-21.
