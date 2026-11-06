# 2026-11-06: SEO and blog round

**Plan:** `../research/plan-2026-11-06.md`, approved by Altus 2026-11-06.

**New posts (5):** how much balayage costs in NZ; half head vs full head foils; summer hair care in North Auckland; Christmas, wedding and ball hair; grey blending vs grey coverage. Shared shell: `src/components/BlogPostLayout.astro`. Added to the blog index, category pages, RSS and llms.txt.

**Pages:** balayage rebuilt (new illustrated hero, confirmed client photos, 9 sections, page-level price and travel copy). Blow wave answers "what is a blow wave", adds blow dry to title and H1, new hero. Women's cut adds women's hairdresser wording, kids' cuts and Sundays. Half head and partial foils add definitions up top. Helensville adds a balayage, keratin and foils section; Kumeū grows from about 590 to about 1,000 words. Kaukapakapa loses its duplicate hand-written FAQ.

**Removed:** off-menu services and prices (colour gloss, deep conditioning, styling tutorial, winter packages, $60-80 blow-dry, protective styling, scalp and clarifying prices); invented figures (80% styling time, $1 per day, 12-month touch-up dollar sums); unsupported popularity claims; "Popular Choice" badges; Kaukapakapa railway date and place-name translation. The free hair health consultation stays (owner confirmed).

**Technical:** trailing slashes on all internal links; 11 long titles shortened; visible US spelling changed to NZ; false wordCount removed from Article schema; Article @id fixed; robots Host line removed; body links added to the weakest service pages; 301 from the netlify.app mirror in `netlify.toml` and `public/_redirects`.

**Consistency fixes:** balayage refresh (no fixed date, 8 to 12 weeks if you want to keep contrast) and appointment length (3 to 4 hours); UV treatment (4 to 6 weeks).

**Found in QA and fixed:** wrong opening hours in a Kaukapakapa FAQ (now match Google); a made-up "10% off" package deal and loyalty pricing on /faq/ (removed; Altus to confirm no packages); Kumeū distance on Kaukapakapa (15 corrected to 25 minutes); toner refresh interval (4 to 6 weeks throughout); heading order on 4 service pages; bullets on new posts; the invisible white menu at the top of blog, category, privacy, terms and 3 location pages (solid menu unless the page has a dark hero).

**Why:** research showed real NZ near-misses on half head, partial foils, Helensville and blow wave; head terms like balayage auckland are out of reach.

**GSC metric (NZ):** half head highlights (9.6), partial foils (8.9), hairdresser helensville (6.9), blow wave (11.4), full head highlights (16.8), kumeu hair salon (9.5), plus new balayage cost impressions.

**Re-check:** 2026-11-20, 2026-12-06, 2027-02-04.
