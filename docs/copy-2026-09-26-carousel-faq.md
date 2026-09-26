# Copy: review widget swap, carousel, owner FAQs, nanoplasty removal (lead-written 2026-09-26)

Use verbatim. Owner facts supplied today by Altus: **she does NOT offer nanoplasty**; kids' cuts for any age; online booking plus call or email; every service includes a consultation.

## 1. Review widget swap (all four pages that use GoogleReviewsWidget)
Replace the Local Marketing Manager embed inside `src/components/GoogleReviewsWidget.astro` with the owner's GoHighLevel reputation widget:
```html
<script is:inline type="text/javascript" src="https://reputationhub.site/reputation/assets/review-widget.js"></script>
<iframe class="lc_reviews_widget" src="https://reputationhub.site/reputation/widgets/review_widget/BLeUCGmXOpptWsB7PyZu?widgetId=6ab76d0944972f81f347d67f" frameborder="0" scrolling="no" loading="lazy" title="Google reviews for Hair By Melissa" style="min-width: 100%; width: 100%; min-height: 300px;"></iframe>
```
Headings, lead lines and "Leave a Google review" links around it stay as they are. Review link unchanged: `/review/` → `https://search.google.com/local/writereview?placeid=ChIJGZmF0E4bDW0RWFLRlnwvU20` (already the owner's link).

## 2. Remove the recent-posts widget
Delete the "Latest from the salon" section on the home page and `src/components/GooglePostsWidget.astro`. The carousel takes that slot.

## 3. Before-and-after carousel (home, in the old posts slot, directly before "Find Us")
- H2: **Before and after**
- Lead: **Smoothing, colour, cuts and curls. Swipe or use the arrows.**
- Button under the carousel: **See the full gallery** → `/gallery/`

Slides (source `/Users/altusmacbook/Downloads/melair/imageN.png`, 1122×1402 PNG; output `public/images/transformations/<slug>-480.webp` and `-800.webp`, quality 80, aspect ratio kept):

| # | Source | Slug | Caption (links where given) | Alt text |
|---|---|---|---|---|
| 1 | image1 | keratin-smoothing-long-dark-hair | Keratin smoothing → /services/keratin-treatments/ | Before and after: long, frizzy dark brown waves smoothed into sleek, straight hair |
| 2 | image2 | curl-definition | Curl definition | Before and after: dry, undefined curly hair styled into defined, glossy curls |
| 3 | image3 | cut-and-smooth-blow-dry | Cut and smooth blow-dry → /services/womens-cut-finish/ | Before and after, side view: shoulder-length curly hair cut and blow-dried into a smooth, sleek lob |
| 4 | image4 | copper-colour-refresh | Copper colour refresh → /services/toner/ | Before and after: faded red waves refreshed to a glossy copper colour |
| 5 | image5 | bob-haircut | Bob cut → /services/womens-cut-finish/ | Before and after: an overgrown brunette bob reshaped into a sleek chin-length bob |
| 6 | image6 | curly-cut-and-shape | Curly cut and shape → /services/womens-cut-finish/ | Before and after, side view: long curly hair cut and shaped into defined, bouncy curls |
| 7 | image7 | blonde-balayage-refresh | Blonde tone and refresh → /services/balayage/ | Before and after: brassy wavy blonde toned and refreshed into bright, smooth blonde |
| 8 | image8 | keratin-smoothing-brunette | Keratin smoothing → /services/keratin-treatments/ | Before and after, side view: frizzy long brunette hair smoothed into glossy, straight hair |
| 9 | image9 | balayage-brunette-lob | Balayage refresh → /services/balayage/ | Before and after: grown-out brunette balayage brightened with caramel face-framing pieces |
| 10 | image10 | layered-cut-blow-dry | Layered cut and blow-dry → /services/womens-cut-finish/ | Before and after: long dark hair given a layered cut and a smooth, bouncy blow-dry |

Build rules: no carousel library. CSS scroll-snap track (1 slide visible under 640px, 2 from 640px, 3 from 1024px), previous/next buttons (`aria-label` "Previous photo" / "Next photo"), keyboard arrows on the focused track, `aria-roledescription="carousel"` on the section and `aria-label` "Slide N of 10" on each slide. No autoplay. `<img>` with `srcset` 480w/800w, `sizes`, explicit `width="800" height="1000"`, `loading="lazy"`, `decoding="async"`. Rounded corners and card styling to match the site. The images already carry BEFORE/AFTER labels, so no overlay text.

## 4. Remove nanoplasty everywhere (she does not offer it)
- Home meta description (replaces the owner's earlier line): **Hair stylist and hairdresser for women and kids in Kaukapakapa: balayage, cuts, blow dries, foil highlights and keratin smoothing. Helensville & Wainui.** (152)
- Home services intro: **Cuts for women and kids, blow dries, foil highlights, balayage and keratin smoothing. Prices below.**
- Home `keywords`: drop "nanoplasty north auckland".
- Schema description in `Layout.astro`: replace "plus keratin smoothing and nanoplasty for frizz-free hair" with **"plus keratin smoothing for frizz-free, manageable hair"**.
- Home FAQ "Do you offer nanoplasty?" is replaced by the owner's answer below.

## 5. Keratin wash time: one answer site-wide (72 hours)
The site said 72 hours in the article, the FAQ page and the service FAQs, but 48 hours on `src/pages/services/keratin-treatments.astro` (the "No Water Contact" line). Change that line to 72 hours. The owner's FAQ below is set to 72 hours for the same reason. **Owner to confirm 72 vs 48.**

## 6. Home FAQs (replace the whole `homeFaqs` array, in this order; feeds the visible list and the FAQPage JSON-LD)
Render as an accordion with `<details>`/`<summary>` (first one open), same card styling. Answers verbatim; the lead's only edits to the owner's text are NZ spelling and the 72-hour line.

1. **How should I prepare for my appointment, and what aftercare helps my colour or smoothing last longer?** — Before your appointment, come in with your hair clean, dry, and as close to natural as possible. Avoid heavy styling products and don't use a straightener or curling iron right beforehand. Make a note of any inspiration photos or specific goals you have for your hair, as these are helpful to share during your consultation. After your service, it's best to use salon-recommended, sulfate-free shampoos and conditioners to protect your colour or smoothing treatment. Try to wash your hair less often if possible and use lukewarm water instead of hot. For keratin treatments, don't wash your hair for at least 72 hours and avoid tying it up during that time. Always use a heat protectant if you use hot tools, and book in for regular trims and any suggested toners or touch-ups. Following these tips helps keep your colour vibrant and your hair smoother for longer.
2. **Can I book online, or do I need to call or email to make an appointment?** — You can book your appointment online any time. It's quick and easy. If you'd rather talk things through or have specific questions, you can also call 0274 799 320 or email. All options work, so just use whatever's easiest for you.
3. **Do you offer a consultation to help choose the right colour and cut for my hair type and lifestyle?** — Every service includes a thorough consultation before we start. We talk about your hair type, face shape, and what style or colour will really suit your day-to-day life. All your questions about colouring, cutting, or treatments get answered, and you'll know exactly what to expect. It's important to make sure you feel confident about your options before we do anything.
4. **Do you offer kids' haircuts, and what ages do you work with?** — Kids' haircuts are available, and I'm happy to work with children of any age. The approach is gentle and unhurried, focusing on making the experience comfortable for younger clients. If you have a child who's nervous or prefers extra time, just let me know so I can make sure we go at their pace.
5. **Do you offer foil highlights, and what are the starting prices?** — You can get foil highlights here, including partial foils starting at $90, half head highlights from $140, and full head highlights from $180. Each option is tailored to fit your look and lifestyle, with a detailed consultation before we start so you know what to expect and how it'll suit your hair type.
6. **How does balayage work, and what maintenance should I expect as it grows out?** — Balayage is a hand-painting technique where the colour is applied in soft, sweeping sections for a natural, sun-kissed look. Before starting, I do a detailed consultation to talk through your hair history, goals, and the exact effect you want. I mix a custom colour formula and section your hair to create a blend that suits your hair type, face shape, and lifestyle. After painting, the colour is processed, then toned and finished with a blow-dry so you can see the result right away. Balayage blends your roots with lighter ends, so as your hair grows there's no harsh line. Instead, the colour fades out gently, making grow-out softer and much lower maintenance than traditional highlights. Most people only need touch-ups every 3–6 months, plus a good shampoo and conditioner for coloured hair to keep the colour fresh between appointments.
7. **How much does a haircut and blow-dry cost, and what's included?** — A women's cut and finish starts at $50. This includes a detailed consultation to discuss your style and hair needs, a professional haircut tailored to suit you, and a blow-dry to finish so you leave with your hair looking polished. You'll also get advice on styling and caring for your hair at home. The service is always personalised, with enough time to make sure you're happy with the end result.
8. **Do you offer nanoplasty smoothing?** — I don't offer nanoplasty smoothing. Instead, I provide keratin smoothing treatments, which help reduce frizz and make hair smoother and more manageable. The results from a keratin treatment usually last around 4–5 months, depending on your hair type and how you care for your hair after the service.
9. **Are you open on Sundays?** — Yes. Hair By Melissa is open Sunday 9am to 5pm, Saturday 2pm to 5pm, and Monday to Friday 9am to 1:30pm. Book online or call 0274 799 320.
10. **Where can I get a keratin treatment near Helensville?** — Hair By Melissa is 15 minutes from Helensville in Kaukapakapa. A keratin treatment is $180 and usually lasts four to five months with good aftercare. Free parking at the door.
11. **How do I leave a review for Hair By Melissa?** — Go to hairbymelissa.co.nz/review, which opens our Google review form. It takes about a minute, and it helps other locals find a hairdresser they can trust.

(Removed: "What's the best hair salon near me in North Auckland?" and the old "Do you cut kids' hair?" and "Do you offer nanoplasty?" entries, superseded by the owner's answers.)
