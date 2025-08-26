// Internal Linking Strategy for Hair By Melissa
// Distributes PageRank and improves user navigation

export interface RelatedLink {
  title: string;
  url: string;
  description: string;
  category: 'service' | 'location' | 'blog' | 'page';
}

// Service-related internal links
export const serviceLinks = {
  keratin: [
    {
      title: "Keratin Aftercare Guide",
      url: "/blog/keratin-aftercare",
      description: "Essential tips to maintain your keratin treatment results",
      category: "blog" as const
    },
    {
      title: "Winter Hair Care",
      url: "/blog/winter-hair-care",
      description: "Protect your hair during harsh winter months",
      category: "blog" as const
    },
    {
      title: "Hair Health Signs",
      url: "/blog/hair-health-signs",
      description: "Recognize when your hair needs professional treatment",
      category: "blog" as const
    }
  ],
  
  highlights: [
    {
      title: "Balayage vs Highlights",
      url: "/blog/balayage-vs-highlights",
      description: "Compare highlighting techniques to find your perfect look",
      category: "blog" as const
    },
    {
      title: "Hair Color Maintenance",
      url: "/blog/hair-color-maintenance",
      description: "Keep your color vibrant with professional tips",
      category: "blog" as const
    },
    {
      title: "Balayage Service",
      url: "/services/balayage",
      description: "Hand-painted highlights for natural sun-kissed hair",
      category: "service" as const
    }
  ],
  
  balayage: [
    {
      title: "Balayage vs Highlights",
      url: "/blog/balayage-vs-highlights",
      description: "Understanding different highlighting techniques",
      category: "blog" as const
    },
    {
      title: "Full Head Highlights",
      url: "/services/full-head-highlights",
      description: "Complete transformation with all-over highlights",
      category: "service" as const
    },
    {
      title: "Hair Color Maintenance",
      url: "/blog/hair-color-maintenance",
      description: "Extend the life of your beautiful balayage",
      category: "blog" as const
    }
  ],
  
  cut: [
    {
      title: "Blow Dry Techniques",
      url: "/blog/blow-dry-techniques",
      description: "Professional styling tips for salon-quality results",
      category: "blog" as const
    },
    {
      title: "Hair Health Signs",
      url: "/blog/hair-health-signs",
      description: "When your hair needs a professional trim",
      category: "blog" as const
    },
    {
      title: "Blow Wave Service",
      url: "/services/blow-wave",
      description: "Professional styling for special occasions",
      category: "service" as const
    }
  ],
  
  color: [
    {
      title: "Hair Color Maintenance",
      url: "/blog/hair-color-maintenance",
      description: "Keep your color looking fresh between appointments",
      category: "blog" as const
    },
    {
      title: "Frizzy Hair Solutions",
      url: "/blog/frizzy-hair-solutions",
      description: "Combat frizz after coloring treatments",
      category: "blog" as const
    },
    {
      title: "Toner Service",
      url: "/services/toner",
      description: "Perfect your color with professional toning",
      category: "service" as const
    }
  ]
};

// Location-related internal links
export const locationLinks = {
  kaukapakapa: [
    {
      title: "All Hair Services",
      url: "/services",
      description: "Complete range of services at our main salon",
      category: "service" as const
    },
    {
      title: "Book Appointment",
      url: "/booking",
      description: "Schedule your visit to our Kaukapakapa salon",
      category: "page" as const
    },
    {
      title: "Gallery",
      url: "/gallery",
      description: "See transformations from our main salon",
      category: "page" as const
    }
  ],
  
  mobile: [
    {
      title: "Helensville Services",
      url: "/locations/helensville",
      description: "Mobile hair services in Helensville area",
      category: "location" as const
    },
    {
      title: "Wainui Services",
      url: "/locations/wainui",
      description: "Professional hair care in Wainui",
      category: "location" as const
    },
    {
      title: "Waitoki Services",
      url: "/locations/waitoki",
      description: "Quality hair services in Waitoki",
      category: "location" as const
    }
  ]
};

// Blog category relationships
export const blogLinks = {
  hairCare: [
    {
      title: "Hair Health Signs",
      url: "/blog/hair-health-signs",
      description: "Recognize when your hair needs attention",
      category: "blog" as const
    },
    {
      title: "Frizzy Hair Solutions",
      url: "/blog/frizzy-hair-solutions",
      description: "Professional treatments for unmanageable hair",
      category: "blog" as const
    },
    {
      title: "Winter Hair Care",
      url: "/blog/winter-hair-care",
      description: "Protect your hair in harsh weather",
      category: "blog" as const
    }
  ],
  
  colorInsights: [
    {
      title: "Hair Color Maintenance",
      url: "/blog/hair-color-maintenance",
      description: "Expert tips for lasting color results",
      category: "blog" as const
    },
    {
      title: "Balayage vs Highlights",
      url: "/blog/balayage-vs-highlights",
      description: "Choose the right coloring technique",
      category: "blog" as const
    }
  ],
  
  stylingGuides: [
    {
      title: "Blow Dry Techniques",
      url: "/blog/blow-dry-techniques",
      description: "Master professional styling at home",
      category: "blog" as const
    }
  ],
  
  seasonalTips: [
    {
      title: "Winter Hair Care",
      url: "/blog/winter-hair-care",
      description: "Seasonal hair protection strategies",
      category: "blog" as const
    }
  ]
};

// Homepage hub links (high authority distribution)
export const homepageLinks = [
  {
    title: "Keratin Treatments",
    url: "/services/keratin-treatments",
    description: "Transform frizzy hair with professional keratin",
    category: "service" as const
  },
  {
    title: "Balayage Coloring",
    url: "/services/balayage",
    description: "Natural sun-kissed highlights technique",
    category: "service" as const
  },
  {
    title: "Our Service Areas",
    url: "/locations",
    description: "Salon and mobile services across North Auckland",
    category: "location" as const
  },
  {
    title: "Hair Care Tips",
    url: "/blog/category/hair-care",
    description: "Professional advice for healthy hair",
    category: "blog" as const
  },
  {
    title: "About Melissa",
    url: "/about",
    description: "Meet your professional hair stylist",
    category: "page" as const
  },
  {
    title: "View Our Work",
    url: "/gallery",
    description: "See stunning hair transformations",
    category: "page" as const
  }
];

// Cross-service recommendations (services that work well together)
export const serviceRelationships = {
  "keratin-treatments": [
    {
      title: "Women's Cut & Finish",
      url: "/services/womens-cut-finish",
      description: "Perfect your new smooth hair with professional styling",
      category: "service" as const
    },
    {
      title: "Hair Health Assessment",
      url: "/blog/hair-health-signs",
      description: "Understand if keratin is right for your hair",
      category: "blog" as const
    }
  ],
  
  "balayage": [
    {
      title: "Toner Application",
      url: "/services/toner",
      description: "Perfect your balayage with professional toning",
      category: "service" as const
    },
    {
      title: "Hair Color Maintenance",
      url: "/blog/hair-color-maintenance",
      description: "Keep your balayage looking fresh",
      category: "blog" as const
    }
  ],
  
  "full-head-highlights": [
    {
      title: "Toner Service",
      url: "/services/toner",
      description: "Achieve the perfect tone for your highlights",
      category: "service" as const
    },
    {
      title: "Blow Wave Styling",
      url: "/services/blow-wave",
      description: "Style your new highlights professionally",
      category: "service" as const
    }
  ],
  
  "womens-cut-finish": [
    {
      title: "Blow Dry Techniques",
      url: "/blog/blow-dry-techniques",
      description: "Maintain your cut with professional styling tips",
      category: "blog" as const
    },
    {
      title: "Hair Health Signs",
      url: "/blog/hair-health-signs",
      description: "Know when your hair needs a trim",
      category: "blog" as const
    }
  ],
  
  "uv-protection-treatments": [
    {
      title: "Hair Color Maintenance",
      url: "/blog/hair-color-maintenance",
      description: "Protect your color investment from sun damage",
      category: "blog" as const
    },
    {
      title: "Keratin Treatments",
      url: "/services/keratin-treatments",
      description: "Combine UV protection with smoothing treatments",
      category: "service" as const
    },
    {
      title: "Beach Hair Care",
      url: "/locations/wainui",
      description: "Specialized services for coastal living",
      category: "location" as const
    }
  ]
};

// Utility function to get related links for any page
export function getRelatedLinks(pageType: string, pageSlug?: string): RelatedLink[] {
  switch (pageType) {
    case 'service':
      if (pageSlug && serviceRelationships[pageSlug as keyof typeof serviceRelationships]) {
        return serviceRelationships[pageSlug as keyof typeof serviceRelationships];
      }
      return homepageLinks.slice(0, 3);
      
    case 'location':
      if (pageSlug === 'kaukapakapa') {
        return locationLinks.kaukapakapa;
      }
      return locationLinks.mobile;
      
    case 'blog':
      if (pageSlug?.includes('hair-care')) return blogLinks.hairCare.slice(0, 3);
      if (pageSlug?.includes('color')) return blogLinks.colorInsights;
      if (pageSlug?.includes('style') || pageSlug?.includes('blow')) return blogLinks.stylingGuides;
      return blogLinks.hairCare.slice(0, 3);
      
    default:
      return homepageLinks.slice(0, 3);
  }
}