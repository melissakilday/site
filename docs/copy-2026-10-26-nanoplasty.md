# Copy: nanoplasty launch (2026-10-26)

Final customer-facing copy, written by the lead. Builders paste it as written. Don't reword it, add claims, or add em dashes.

## Owner facts (Melissa via Altus, 2026-10-26). These are the ONLY nanoplasty facts allowed on the site
- Price: from $200, depending on hair length
- Time: about 3½ hours
- Lasts: 3 to 6 months
- Products: formaldehyde-free, professional salon brands (no brand named)
- Washing: can wash straight away
- Suits: frizzy, long, hard-to-manage hair
- Keratin is still offered and is a different treatment
- Keratin now lasts "about 6 months". This replaces every "4 to 5 months", "4–5 months", "up to 5 months" and "3–6 months" keratin claim on the site.
- Photos: the owner's real photos are on the Google Business Profile. For launch, use the labelled Kie illustrations; swap in real photos later.

---

## 1. services.ts entry
```ts
  {
    slug: 'nanoplasty',
    name: 'Nanoplasty',
    price: 'From $200',
    priceValue: 200,
    duration: 'About 3.5 hours',
    h1: 'Nanoplasty in Kaukapakapa, North Auckland',
  },
```
Put it directly after the keratin entry.

## 2. New page /services/nanoplasty/ (src/pages/services/nanoplasty.astro)
Copy the structure, classes and components of keratin-treatments.astro exactly.

- **pageTitle:** `Nanoplasty Treatment Auckland, from $200`. With the suffix it renders at 58 characters.
- **pageDescription:** `Formaldehyde-free nanoplasty for frizzy, long or hard-to-manage hair in Kaukapakapa, North Auckland. From $200, about 3½ hours, lasts 3 to 6 months.`
- **pageKeywords:** `nanoplasty auckland, nanoplasty hair treatment, nanoplasty treatment, nanoplasty nz, nanoplasty near me, nanoplasty north auckland, nanoplasty helensville, nanoplasty kaukapakapa, nanoplasty vs keratin`
- **Hero:** `/images/nanoplasty/nanoplasty-hero-{640,1200,1600}.webp`, 1600×900. **Alt:** `Illustration: a hairdresser combing through long, smooth hair after a nanoplasty treatment`. **OG image:** `/images/nanoplasty/nanoplasty-hero-og.jpg`.

### Intro paragraph
A nanoplasty treatment smooths frizzy, long or hard-to-manage hair so it's softer, shinier and quicker to style, and you can wash it the same day. At Hair By Melissa in Kaukapakapa, North Auckland, nanoplasty starts from $200 depending on your hair length, takes about 3½ hours, and is done one-on-one with Melissa using formaldehyde-free salon brands.

### Facts box (same dl grid as keratin)
- **Price:** From $200
- **Time:** About 3½ hours
- **Lasts:** 3 to 6 months
- **First wash:** Straight away

### Buttons
- "Book a nanoplasty treatment" → /booking/
- "Call {phone}"

### H2: What nanoplasty does
Nanoplasty is a smoothing treatment for hair that frizzes, puffs up or just won't do what you want. It leaves hair smoother, shinier and more manageable, so it dries faster and takes far less work to style. Melissa uses formaldehyde-free salon brands.

One of the biggest differences you'll notice is aftercare. There's no waiting days to wash your hair. You can wash it straight away and get on with your week.

### H2: Is nanoplasty right for your hair?
Nanoplasty usually suits:
- Frizzy hair that puffs up in coastal humidity
- Long hair that takes a long time to dry and style
- Hair that feels unmanageable, tangles easily or won't sit smooth
- Anyone who doesn't want to wait days before washing after a smoothing treatment

If you love your natural curl or volume, talk to Melissa first, because a smoothing treatment is designed to calm it. She'll look at your hair and tell you honestly whether nanoplasty or a keratin treatment will get you the result you're after.

### H2: Nanoplasty or keratin: what's the difference?
Melissa offers both, because they're different treatments that suit different people. Here's how they compare at Hair By Melissa:

Use a simple table with these columns: |   | Nanoplasty | Keratin treatment |

| | Nanoplasty | Keratin treatment |
|---|---|---|
| Price | From $200, depending on length | $180 |
| Time | About 3½ hours | About 2 to 3 hours |
| Lasts | 3 to 6 months | About 6 months |
| First wash | Straight away | After 72 hours |
| Formaldehyde-free | Yes | Yes |

Choose nanoplasty if you have long or very frizzy hair and want to wash it straight away. Choose keratin if you want the longest-lasting smoothing for the lowest price and don't mind keeping your hair dry for three days. Not sure? Ask Melissa at your consultation. Read more about the <a href="/services/keratin-treatments/">keratin treatment</a>.

### H2: What happens at your appointment
1. **Consultation.** Melissa looks at your hair, its history and what you want from it, and confirms your price based on your hair length.
2. **Wash.** Your hair is washed to clear product build-up so the treatment takes evenly.
3. **Application.** The nanoplasty treatment is applied section by section from roots to ends.
4. **Processing.** The treatment is left to work while you relax.
5. **Dry and finish.** Your hair is dried and finished smooth.
6. **Aftercare.** You leave with smooth, sleek hair and simple tips to make it last.

**Figure:** `/images/nanoplasty/nanoplasty-process-{640,1200}.webp`, 1200×900, lazy-loaded.
- Alt: `Illustration: a smoothing treatment being brushed onto a section of long, frizzy hair`
- Caption: `Illustration of the application step.`

### H2: How long nanoplasty lasts, and how to look after it
A nanoplasty treatment lasts around 3 to 6 months. How long yours lasts depends on your hair, how often you wash it and the products you use.

You can wash your hair straight away. To keep it smooth for longer, use a gentle shampoo, go easy on very hot water and heat styling, and ask Melissa which products she recommends for your hair. When the smoothing starts to soften, book in for a top-up.

**Figure:** `/images/nanoplasty/nanoplasty-wash-{640,1200}.webp`, 1200×900, lazy-loaded.
- Alt: `Illustration: long, smooth hair being rinsed at a salon basin`
- Caption: `Illustration: with nanoplasty you can wash your hair straight away.`

### H2: Nanoplasty price in North Auckland
Nanoplasty at Hair By Melissa starts from **$200**. The final price depends on your hair length, because longer hair takes more product and more time. Melissa will confirm your price before she starts, so there are no surprises. The appointment takes about 3½ hours, one-on-one, with free parking at the door.

Want a trim as well? Add a <a href="/services/womens-cut-finish/">women's cut and finish</a> ($50) when you book.

### H2: Coming from Helensville, Kumeū or nearby?
Use the keratin page's paragraph and hours line as they are, with the same links.

### H2: Nanoplasty FAQs
Use the accordion and FAQSchema exactly as the keratin page does. **pageUrl:** `https://hairbymelissa.co.nz/services/nanoplasty/`

### CTA box
- **H2:** Book your nanoplasty treatment in Kaukapakapa
- **Text:** From $200 depending on hair length, about 3½ hours, one-on-one with Melissa. Book online any time or call {phone}.
- **Buttons:** Book online / Call

## 3. serviceFAQs['nanoplasty']
1. **Q:** What is nanoplasty?
   **A:** Nanoplasty is a salon smoothing treatment for frizzy, long or hard-to-manage hair. It leaves hair smoother, shinier and easier to style, and at Hair By Melissa it's done with formaldehyde-free salon brands.
2. **Q:** How much does nanoplasty cost?
   **A:** At Hair By Melissa in Kaukapakapa, nanoplasty starts from $200. The final price depends on your hair length, and Melissa confirms it before she starts.
3. **Q:** How long does nanoplasty last?
   **A:** Around 3 to 6 months, depending on your hair, how often you wash it and the products you use.
4. **Q:** Can I wash my hair after nanoplasty?
   **A:** Yes. You can wash your hair straight away after a nanoplasty treatment. There's no waiting period.
5. **Q:** Is nanoplasty formaldehyde-free?
   **A:** Yes. Melissa uses formaldehyde-free professional salon brands for nanoplasty.
6. **Q:** How long does a nanoplasty appointment take?
   **A:** Allow about 3½ hours. It's one-on-one with Melissa, so there's no rushing.
7. **Q:** Is nanoplasty or keratin better?
   **A:** Neither is better for everyone. Nanoplasty suits long or very frizzy hair and lets you wash straight away; it lasts 3 to 6 months and starts from $200. Keratin is $180, lasts about 6 months and needs 72 hours before the first wash. Melissa will help you choose.
8. **Q:** Who is nanoplasty for?
   **A:** It's ideal for frizzy, long or unmanageable hair that takes a long time to dry and style. If you'd like to keep your natural curl or volume, talk to Melissa first.

## 4. Keratin page edits (keratin-treatments.astro)
- **pageDescription:** `Keratin smoothing for frizzy, curly or hard-to-manage hair in Kaukapakapa, North Auckland. $180, about 2 to 3 hours, lasts about 6 months. Book online.`
- **Intro:** replace "for around four to five months" with "for around six months".
- **Facts box:** "Lasts" becomes `About 6 months`.
- **Aftercare H2 section, first sentence:** `A keratin treatment lasts around six months. How long yours lasts depends on your hair and how you look after it.`
- **Replace the whole "Keratin or nanoplasty?" section** (H2 + paragraph) with:
  - **H2:** Keratin or nanoplasty?
  - **Text:** Melissa offers both. Keratin is $180, lasts about six months and needs 72 hours before your first wash. <a href="/services/nanoplasty/">Nanoplasty</a> starts from $200 depending on hair length, lasts 3 to 6 months and you can wash straight away, which suits long or very frizzy hair. Both use formaldehyde-free products. Not sure which is right for you? Melissa will talk it through before anything goes on your hair.

## 5. serviceFAQs['keratin-treatments']
- **Entry 8 replacement:**
  - **Q:** Do you offer nanoplasty as well?
  - **A:** Yes. Melissa offers nanoplasty too, from $200 depending on hair length. It takes about 3½ hours, lasts 3 to 6 months and you can wash straight away. Keratin is $180, lasts about 6 months and needs 72 hours before the first wash.
- **Any other keratin FAQ that gives a duration** must say "about 6 months".

## 6. Home page FAQ (index.astro ~L86-87)
- **Q:** Do you offer nanoplasty?
- **A:** Yes. I offer nanoplasty from $200 depending on your hair length. It takes about 3½ hours, lasts 3 to 6 months and you can wash your hair straight away. I also offer keratin smoothing for $180, which lasts about 6 months. Both use formaldehyde-free products.

## 7. Home meta description
`Hair stylist and hairdresser for women and kids in Kaukapakapa: balayage, cuts, blow dries, foil highlights, keratin and nanoplasty. Helensville & Wainui.`
It must be 160 characters or fewer; check it.

## 8. llms.txt
- **Keratin bullet:** remove "Keratin only; nanoplasty is not offered." Make its duration and lasts match: $180, about 2–3 hours, lasts about 6 months, wash after 72 hours, formaldehyde-free.
- **New bullet directly after keratin:** `- [Nanoplasty](https://hairbymelissa.co.nz/services/nanoplasty/): smoothing for frizzy, long or hard-to-manage hair. From $200 depending on hair length, about 3.5 hours, lasts 3 to 6 months, wash straight away, formaldehyde-free salon brands.`
- **Summary line 3:** where it says "keratin smoothing treatments", make it "keratin and nanoplasty smoothing treatments".

## 9. Lists, schema and links
- **Navbar dropdown:** add "Nanoplasty" right after "Keratin Treatments".
- **Footer services list:** the same.
- **services.astro cards:** add a nanoplasty card after keratin.
  - Price: "From $200"
  - Duration: "About 3.5 hours"
  - Description: `Formaldehyde-free smoothing for frizzy, long or hard-to-manage hair. Wash straight away; lasts 3 to 6 months. Price depends on hair length.`
  - Keratin card: change "Results last up to 5 months" to "Results last about 6 months".
- **services.astro hero copy:** "From keratin treatments to balayage" becomes "From keratin and nanoplasty to balayage".
- **services.astro meta description:** add "nanoplasty from $200" if it fits within 160 characters.
- **Layout.astro hasOfferCatalog:** add a Nanoplasty Offer modelled on the keratin one.
  - Fields: name Nanoplasty; category Hair Treatment; duration PT3H30M; price 200 with priceSpecification minPrice 200 (UnitPriceSpecification or PriceSpecification with minPrice); url https://hairbymelissa.co.nz/services/nanoplasty/.
  - Description: "Formaldehyde-free smoothing treatment for frizzy, long or hard-to-manage hair. Wash straight away; lasts 3 to 6 months. Price from $200 depending on hair length."
- **Layout.astro knowsAbout:** add "Nanoplasty".
- **Keratin Offer in the catalog:** if its description mentions how long it lasts, change it to about 6 months.
- **Price range:** keep `$40-$230` unless anything forces otherwise. Nanoplasty is "from $200", so the minimum fits.
- **index.astro services array and cards:** add nanoplasty after keratin in the same pattern, and add a nanoplasty card next to the hard-coded keratin card if the layout allows.
- **hair-dressing.astro:** add a short nanoplasty mention or link next to the keratin section: "Prefer to wash straight away? Try <a href='/services/nanoplasty/'>nanoplasty</a>, from $200."
- **Location service lists** (helensville, kumeu, kaukapakapa, wainui, waitoki): add nanoplasty after keratin in the same pattern.
- **internalLinks.ts serviceRelationships:**
  - add a 'nanoplasty' key (related: keratin-treatments, womens-cut-finish, blow-wave, the keratin-aftercare blog);
  - add nanoplasty to keratin's related list.

## 10. Keratin "lasts" consistency, site-wide
grep `src/` and `public/` for keratin lasting claims ("4-5 months", "4–5 months", "four to five months", "up to 5 months", "3-6 months" in a keratin context, "3–6 months" in a keratin context). Make each one "about 6 months" or "around six months", matching the surrounding style. This includes faq.astro, services.astro, blog posts (keratin-aftercare, frizzy-hair-solutions, winter-hair-care, category pages), schema and llms.txt. Do NOT change any nanoplasty 3–6 months text.
