// Single source of truth for service names, prices and durations.
// Prices confirmed against /services and the homepage price list (2026-09-18).
// Service pages must render these values — never "Contact for pricing".

export interface Service {
  /** URL slug under /services/ */
  slug: string;
  /** Short service name, as used in navigation and price lists */
  name: string;
  /** Display price, e.g. "$230" */
  price: string;
  /** Numeric price for schema.org Offer */
  priceValue: number;
  /** Human duration, e.g. "3-4 hours" */
  duration: string;
  /** Clean H1 for the service page — no pipes, no brand name */
  h1: string;
}

export const services: Service[] = [
  {
    slug: 'balayage',
    name: 'Balayage',
    price: '$230',
    priceValue: 230,
    duration: '3-4 hours',
    h1: 'Balayage in Kaukapakapa, North Auckland',
  },
  {
    slug: 'keratin-treatments',
    name: 'Keratin Treatment',
    price: '$180',
    priceValue: 180,
    duration: '2-3 hours',
    h1: 'Keratin Treatment in Kaukapakapa, North Auckland',
  },
  {
    slug: 'full-head-highlights',
    name: 'Full Head of Highlights',
    price: '$180',
    priceValue: 180,
    duration: '2.5-3 hours',
    h1: 'Full Head of Highlights in Kaukapakapa, North Auckland',
  },
  {
    slug: 'half-head-highlights',
    name: 'Half Head of Highlights',
    price: '$140',
    priceValue: 140,
    duration: '2-2.5 hours',
    h1: 'Half Head of Highlights in Kaukapakapa, North Auckland',
  },
  {
    slug: 'permanent-tint-all-over',
    name: 'Permanent Tint & All Over Colour',
    price: '$140',
    priceValue: 140,
    duration: '1.5-2 hours',
    h1: 'Permanent Tint & All Over Colour in Kaukapakapa, North Auckland',
  },
  {
    slug: 'partial-foils',
    name: 'Partial Foils',
    price: '$90',
    priceValue: 90,
    duration: '1-1.5 hours',
    h1: 'Partial Foils in Kaukapakapa, North Auckland',
  },
  {
    slug: 'permanent-tint-touch-up',
    name: 'Permanent Tint & Touch Up',
    price: '$90',
    priceValue: 90,
    duration: '1-1.5 hours',
    h1: 'Permanent Tint & Touch Up in Kaukapakapa, North Auckland',
  },
  {
    slug: 'womens-cut-finish',
    name: "Women's Cut & Finish",
    price: '$50',
    priceValue: 50,
    duration: '45-60 minutes',
    h1: "Women's Cut & Finish in Kaukapakapa, North Auckland",
  },
  {
    slug: 'blow-wave',
    name: 'Blow Wave',
    price: '$50',
    priceValue: 50,
    duration: '45-60 minutes',
    h1: 'Blow Wave in Kaukapakapa, North Auckland',
  },
  {
    slug: 'toner',
    name: 'Toner',
    price: '$40',
    priceValue: 40,
    duration: '30-45 minutes',
    h1: 'Toner in Kaukapakapa, North Auckland',
  },
  {
    slug: 'uv-protection-treatments',
    name: 'UV Protection Treatment',
    price: '$40',
    priceValue: 40,
    duration: '30 minutes',
    h1: 'UV Protection Treatments in Kaukapakapa, North Auckland',
  },
];

export const serviceBySlug: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s])
);

/** Look up a service by slug, throwing loudly at build time if it is missing. */
export function getService(slug: string): Service {
  const service = serviceBySlug[slug];
  if (!service) throw new Error(`Unknown service slug: ${slug}`);
  return service;
}

export default services;
