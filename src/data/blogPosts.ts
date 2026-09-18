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
    slug: "frizzy-hair-solutions",
    title: "Frizzy Hair Solutions for Coastal Living",
    description:
      "Combat humidity and frizz with professional techniques designed for Auckland's coastal climate, from a Kaukapakapa hairdresser.",
    datePublished: "2025-01-22",
    dateModified: "2025-01-22",
  },
  {
    slug: "hair-color-maintenance",
    title: "Hair Colour Maintenance: Keep Your Colour Vibrant",
    description:
      "Essential tips for maintaining vibrant hair color in North Auckland's variable climate, from a Kaukapakapa hairdresser.",
    datePublished: "2025-01-22",
    dateModified: "2025-01-22",
  },
  {
    slug: "blow-dry-techniques",
    title: "Professional Blow-Dry Techniques for Salon Results",
    description:
      "Master salon-quality blow-dry techniques at home with professional tips for volume and longevity from a Kaukapakapa hairdresser.",
    datePublished: "2025-01-20",
    dateModified: "2025-01-20",
  },
  {
    slug: "hair-health-signs",
    title: "Hair Health Warning Signs: Spot Damage Early",
    description:
      "Identify early signs of hair damage and when to seek professional treatment, from a Kaukapakapa hairdresser.",
    datePublished: "2025-01-20",
    dateModified: "2025-01-20",
  },
  {
    slug: "keratin-aftercare",
    title: "Keratin Aftercare: When Can You Wash Your Hair?",
    description:
      "Wait 72 hours before washing. What to avoid, when you can brush, tie or dry-shampoo, and how to make a keratin treatment last 5 months. By an NZ stylist.",
    datePublished: "2025-01-20",
    dateModified: "2026-09-18",
  },
  {
    slug: "balayage-vs-highlights",
    title: "Balayage vs Highlights: Which Is Right for You?",
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
