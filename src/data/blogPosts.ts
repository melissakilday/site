// blogPosts.ts
// Mirrors the pageTitle / pageDescription / slug / publishDate / modifiedDate
// constants defined at the top of each src/pages/blog/*.astro post (and the
// modifiedDate passed to <BlogArticleSchema /> near the bottom of each file).
// If you change a post's title, description, or dates, update the matching
// entry here too — this file is the source for src/pages/rss.xml.ts.

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "balayage-cost-nz",
    title: "How Much Does Balayage Cost in NZ?",
    description:
      "Full balayage is usually about $250 to $340 at Auckland salons. What changes the price, what to check is included, and what $280 gets you in Kaukapakapa.",
    datePublished: "2026-11-06",
    dateModified: "2026-11-06",
  },
  {
    slug: "half-head-vs-full-head-foils",
    title: "Half Head vs Full Head Foils: Cost & Guide",
    description:
      "Half head foils cover the top and sides, full head goes all the way through. Prices, times and how to choose, from a Kaukapakapa hairdresser.",
    datePublished: "2026-11-06",
    dateModified: "2026-11-06",
  },
  {
    slug: "summer-hair-care-nz",
    title: "Summer Hair Care in North Auckland",
    description:
      "Sun, salt water and chlorine all dry hair and fade colour. How to protect your hair this summer, from a Kaukapakapa hairdresser near the west coast.",
    datePublished: "2026-11-06",
    dateModified: "2026-11-06",
  },
  {
    slug: "christmas-wedding-ball-hair",
    title: "Christmas & Wedding Hair: When to Book",
    description:
      "When to book colour, cuts and blow waves before Christmas, a wedding or a school ball, with a simple timeline from a Kaukapakapa hairdresser.",
    datePublished: "2026-11-06",
    dateModified: "2026-11-06",
  },
  {
    slug: "grey-blending-vs-grey-coverage",
    title: "Grey Blending vs Grey Coverage",
    description:
      "Grey coverage hides grey, grey blending softens it. The difference, how often each needs redoing and what it costs, from a Kaukapakapa hairdresser.",
    datePublished: "2026-11-06",
    dateModified: "2026-11-06",
  },
  {
    slug: "frizzy-hair-solutions",
    title: "Frizzy Hair Solutions for Coastal Living",
    description:
      "Combat humidity and frizz with professional techniques designed for Auckland's coastal climate, from a Kaukapakapa hairdresser.",
    datePublished: "2025-01-22",
    dateModified: "2025-01-22",
  },
  {
    slug: "hair-color-maintenance",
    title: "Hair Colour Maintenance: Keep It Vibrant",
    description:
      "Essential tips for maintaining vibrant hair colour in North Auckland's variable climate, from a Kaukapakapa hairdresser.",
    datePublished: "2025-01-22",
    dateModified: "2025-01-22",
  },
  {
    slug: "blow-dry-techniques",
    title: "Blow-Dry Techniques for Salon Results",
    description:
      "Master salon-quality blow-dry techniques at home with professional tips for volume and longevity from a Kaukapakapa hairdresser.",
    datePublished: "2025-01-20",
    dateModified: "2025-01-20",
  },
  {
    slug: "hair-health-signs",
    title: "Hair Health Warning Signs to Spot Early",
    description:
      "Identify early signs of hair damage and when to seek professional treatment, from a Kaukapakapa hairdresser.",
    datePublished: "2025-01-20",
    dateModified: "2025-01-20",
  },
  {
    slug: "keratin-aftercare",
    title: "When to Wash Hair After Keratin Treatment",
    description:
      "Wait 72 hours before washing. What to avoid, when you can brush, tie or dry-shampoo, and how to make a keratin treatment last about 6 months. By an NZ stylist.",
    datePublished: "2025-01-20",
    dateModified: "2026-09-18",
  },
  {
    slug: "balayage-vs-highlights",
    title: "Balayage vs Highlights: Which Suits You?",
    description:
      "Confused between balayage and traditional highlights? Expert comparison of techniques, costs, and maintenance to help you choose the right option.",
    datePublished: "2025-01-18",
    dateModified: "2025-01-18",
  },
  {
    slug: "winter-hair-care",
    title: "Winter Hair Care Essentials",
    description:
      "Protect and nourish your hair during North Auckland's cooler months with professional winter hair care tips from Hair By Melissa in Kaukapakapa.",
    datePublished: "2025-01-15",
    dateModified: "2025-01-15",
  },
];
