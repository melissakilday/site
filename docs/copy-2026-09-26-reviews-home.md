# Copy: reviews, home and page fixes (lead-written 2026-09-26)

Use verbatim. NZ English. Facts only from `src/data/business.ts` and `src/data/services.ts`. No review counts or star ratings in page copy or schema.

## Fixed links
- Review short link: `/review/` → 302 to `https://search.google.com/local/writereview?placeid=ChIJGZmF0E4bDW0RWFLRlnwvU20` (Google place ID for "Hair By Melissa A", from DataForSEO maps data 2026-09-21).
- Google Maps listing: `https://www.google.com/maps?cid=7877692385353880152`
- Facebook: `https://www.facebook.com/p/Hair-By-Melissa-A-Kaukapakapa-61581136381949/`
- Instagram: `https://www.instagram.com/hair_by_melissa_nz/`

## Widgets (owner's Google-profile widgets)
- Reviews: iframe `#reviewsWidget` inside `#reviewsWidgetContainer`, src set by the supplied script (pageSize by container width), `https://www.localmarketingmanager.com/api/reviews/hair-by-melissa-review-widget?pageSize=N`
- Images: `https://www.localmarketingmanager.com/api/images/hair-by-melissa-image-widget`, min-height 480px
- Posts: `https://www.localmarketingmanager.com/api/local-posts/hair-by-melissa-local-posts-widget?objectFit=cover`, min-height 480px
All iframes `loading="lazy"`, `title` set, reserved min-height (no layout shift). They are below the fold everywhere.

---

## 1. Home `/`
- `<title>` exactly (no " | Hair By Melissa" suffix): **Hairdresser | Hair Stylist: Kaukapakapa, Helensville, Wainui** (60)
- Meta description: **Hair stylist and hairdresser for women and kids in Kaukapakapa: balayage, cuts, blow dries, foil highlights, keratin and nanoplasty. Helensville & Wainui.** (154)
- H1: **Hairdresser in Kaukapakapa for** <span gradient>**Cuts, Colour and Keratin Treatments**</span>
- Hero lead (replace): **One stylist, unhurried appointments for women and kids, and colour that suits you. 45 minutes from central Auckland, free parking at the door.**
- Services section, add as the intro line under "Our Premium Services": **Cuts for women and kids, blow dries, foil highlights, balayage, keratin smoothing and nanoplasty. Prices below; ask about nanoplasty when you book.**

### Reviews section (replaces the three placeholder testimonials)
- H2: **What clients say on Google**
- Lead: **Real reviews from Hair By Melissa clients, straight from our Google profile.**
- Reviews widget.
- Buttons: primary **Leave a Google review** → `/review/` (new tab, `rel="noopener"`); secondary **View our work** → `/gallery/`

### Latest from the salon (new section, directly before "Find Us")
- H2: **Latest from the salon**
- Lead: **Offers, new work and updates from our Google profile.**
- Posts widget.

### FAQ additions (append to `homeFaqs`, so they flow into the visible list and the FAQPage JSON-LD)
1. **Are you open on Sundays?** — Yes. Hair By Melissa is open Sunday 9am to 5pm, Saturday 2pm to 5pm, and Monday to Friday 9am to 1:30pm. Book online or call 0274 799 320.
2. **Do you cut kids' hair?** — Yes. Melissa cuts kids' hair as well as women's. For school-age children, Saturday afternoon and Sunday are the easiest times. Book online or call 0274 799 320.
3. **Do you offer nanoplasty?** — Yes. Alongside keratin smoothing, Melissa offers nanoplasty to calm frizz and make hair easier to manage. Call 0274 799 320 to talk through which suits your hair and for a price.
4. **How do I leave a review for Hair By Melissa?** — Go to hairbymelissa.co.nz/review, which opens our Google review form. It takes about a minute, and it helps other locals find a hairdresser they can trust.

(Remove the duplicate `itemscope itemtype=FAQPage` microdata on the visible list; keep the JSON-LD.)

## 2. About, Kaukapakapa and Helensville pages
Replace each placeholder testimonial block with the reviews widget.
- H2: **What clients say on Google**
- Line under the widget: **Been to see Melissa?** <a href="/review/">**Leave a Google review**</a>

## 3. Gallery `/gallery/`
New section after the portfolio grid:
- H2: **More recent work**
- Lead: **The newest photos from our Google profile.**
- Images widget.

## 4. Footer (site-wide) and contact page
- Footer link beside the contact details: **Leave a Google review** → `/review/`
- Contact page, under the phone/address block: **Had your hair done with Melissa?** <a href="/review/">**Leave a Google review**</a>

## 5. Helensville `/locations/helensville/` (click-rate fix; position 6, 211 impressions, 1.9% CTR)
- Title core: **Helensville Hairdresser: Cuts from $50** (56 with suffix; the old one was 68 and truncated)
- Description: **Hairdresser 15 minutes from Helensville. Cuts from $50, foils from $90, balayage $230, keratin $180. Open 7 days, free parking at the door. Book online.** (152)

## 6. Keratin post `/blog/keratin-aftercare/` (position ~40; main query "when can i wash my hair after keratin treatment", 74 impressions)
- Title core: **When to Wash Hair After Keratin Treatment** (59 with suffix; the old one was 65 and truncated)
- Description: **Wait 72 hours before washing, then switch to sulfate-free shampoo. A stylist's day-by-day keratin aftercare guide: brushing, tying up, dry shampoo, colour.** (155)
- H1: **When Can You Wash Your Hair After a Keratin Treatment?**
- Quick-answer box directly under the H1 (before the first H2): **Wait 72 hours before you wash your hair after a keratin treatment. Keep it dry and loose for those three days, with no ponytails, clips or tucking it behind your ears. After that, wash with a sulfate-free shampoo in lukewarm water, no more than two or three times a week, to make the smoothing last.**
- Day-by-day table (built from the article's own sections; builder must match every row to what the article already says and drop any row the article doesn't support): Days 1–3 / Days 4–14 / From week 3 / Ongoing, columns "Wash", "Style", "Avoid".
- Byline: **By Melissa, owner and stylist at Hair By Melissa, Kaukapakapa** · "Updated 26 September 2026". Schema `dateModified` 2026-09-26, `author` Person "Melissa".
- End-of-article CTA line: **Booking a keratin treatment? See prices and what's included on the** <a href="/services/keratin-treatments/">**keratin treatment page**</a>.

## 7. Half head highlights `/services/half-head-highlights/` (position ~18; "1/2 head highlights" and "half head of highlights" at ~8)
- Title core: **Half Head Highlights (1/2 Head Foils) $140** (60 with suffix)
- Description: **Half head highlights for $140 in Kaukapakapa: foils through the top and sides where colour shows most, with softer regrowth. 2 to 2.5 hours. Book online.** (153)
- FAQ additions (serviceFAQs `half-head-highlights`, prepend):
  1. **How much are half head highlights?** — $140 at Hair By Melissa, and the appointment takes about 2 to 2.5 hours. Partial foils are $90 and a full head of highlights is $180.
  2. **What's the difference between half head and full head highlights?** — A half head places foils through the top and sides, where colour shows when your hair is down. A full head adds foils underneath as well, for all-over brightness. Half head is $140; full head is $180.
- Internal links in: from `/blog/balayage-vs-highlights/` (ranks ~7 for "half head highlights vs balayage"), `/services/full-head-highlights/` and `/services/partial-foils/`, anchor **half head highlights**.
