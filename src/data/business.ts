// Single source of truth for Hair By Melissa business facts.
// Confirmed with the owner 2026-09-18 (phone, hours, address, Google profile).
// Never hard-code a phone number, address or hours line anywhere else.

export const business = {
  name: 'Hair By Melissa',
  legalName: 'Hair By Melissa',
  email: 'melissa@hairbymelissa.co.nz',
  url: 'https://hairbymelissa.co.nz',

  // Phone — confirmed 2026-09-18. Replaces 027 520 1613, 021 044 2277,
  // 021 752 611, +19175551234 and the +64-21-XXX-XXXX placeholder.
  phoneDisplay: '0274 799 320',
  phoneHref: 'tel:+64274799320',
  phoneE164: '+64274799320',

  address: {
    street: '12 Magnolia Lane',
    locality: 'Kaukapakapa',
    region: 'Auckland',
    postcode: '0875',
    country: 'NZ',
  },
  addressLine: '12 Magnolia Lane, Kaukapakapa 0875, Auckland, NZ',

  geo: {
    latitude: -36.6274074,
    longitude: 174.5007108,
  },

  // Google Business Profile hours, confirmed 2026-09-18. Open 7 days.
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '13:30' },
    { days: ['Saturday'], opens: '14:00', closes: '17:00' },
    { days: ['Sunday'], opens: '09:00', closes: '17:00' },
  ],
  hoursLine: 'Mon–Fri 9am–1:30pm · Sat 2–5pm · Sun 9am–5pm',

  // 5.0 from 4 Google reviews (2026-09-26, per the review widget). Never emit aggregateRating/Review markup from this site.
  googleReviewUrl: 'https://share.google/8GVUyoirDJwTIXnxO',
  instagram: 'https://www.instagram.com/hair_by_melissa_nz/',
  facebook: 'https://www.facebook.com/p/Hair-By-Melissa-A-Kaukapakapa-61581136381949/',
  googleMapsUrl: 'https://www.google.com/maps?cid=7877692385353880152',
  googleWriteReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJGZmF0E4bDW0RWFLRlnwvU20',
  googleName: 'Hair By Melissa A',

  // Real files under public/ — verified 2026-09-18.
  images: [
    'https://hairbymelissa.co.nz/images/optimized/salon-exterior_1280q80.webp',
    'https://hairbymelissa.co.nz/images/optimized/salon-interior_800.webp',
    'https://hairbymelissa.co.nz/images/optimized/balayage-transformation_1280q80.webp',
  ],
  logo: 'https://hairbymelissa.co.nz/images/logo.png',
  ogImage: 'https://hairbymelissa.co.nz/images/og-image.jpg',

  priceRange: '$40-$230',
} as const;

// openingHoursSpecification ready for JSON-LD.
export const openingHoursSpecification = business.hours.map((h) => ({
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: h.days.length === 1 ? h.days[0] : [...h.days],
  opens: h.opens,
  closes: h.closes,
}));

export const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: business.address.street,
  addressLocality: business.address.locality,
  addressRegion: business.address.region,
  postalCode: business.address.postcode,
  addressCountry: business.address.country,
};

export default business;
