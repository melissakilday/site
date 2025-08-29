// Image mapping from Google Storage URLs to local optimized images
// This enables us to replace external image URLs with local WebP optimized versions

export interface ImageInfo {
  original: string;
  local: string;
  alt: string;
  category: 'hero' | 'service' | 'gallery' | 'professional' | 'location';
  width?: number;
  height?: number;
}

export const imageMap: Record<string, ImageInfo> = {
  // Salon exterior and interior
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d3f671384b206baef377.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d3f671384b206baef377.png',
    local: '/images/optimized/salon-exterior',
    alt: 'Hair By Melissa salon exterior in Kaukapakapa village',
    category: 'location',
    width: 1920,
    height: 1080
  },
  
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d3eec7a01575d2d242f5.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d3eec7a01575d2d242f5.png',
    local: '/images/optimized/salon-interior',
    alt: 'Modern hair salon interior at Hair By Melissa',
    category: 'location',
    width: 1920,
    height: 1280
  },
  
  // Professional photos
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45d12053d0241d2b806.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45d12053d0241d2b806.png',
    local: '/images/optimized/melissa-professional',
    alt: 'Melissa - Professional hairdresser at Hair By Melissa Kaukapakapa',
    category: 'professional',
    width: 800,
    height: 1200
  },
  
  // Service images - Balayage and Color
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45dc7a0157964d24379.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45dc7a0157964d24379.png',
    local: '/images/optimized/balayage-transformation',
    alt: 'Beautiful balayage hair color transformation by Hair By Melissa',
    category: 'service',
    width: 800,
    height: 600
  },
  
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45dc7a015f66ed24378.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45dc7a015f66ed24378.png',
    local: '/images/optimized/highlights-before-after',
    alt: 'Professional highlights before and after transformation',
    category: 'service',
    width: 800,
    height: 600
  },
  
  // Styling services
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56d71384b7b5faef45d.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56d71384b7b5faef45d.png',
    local: '/images/optimized/blow-wave-styling',
    alt: 'Professional blow wave and styling service result',
    category: 'service',
    width: 600,
    height: 800
  },
  
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d201419a3c858.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d201419a3c858.png',
    local: '/images/optimized/professional-blowdry',
    alt: 'Professional blow-dry with volume and movement',
    category: 'service',
    width: 600,
    height: 800
  },
  
  // Gallery images
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d203cfaa3c859.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d203cfaa3c859.png',
    local: '/images/optimized/foil-highlights',
    alt: 'Gorgeous foil highlights throughout hair',
    category: 'gallery',
    width: 600,
    height: 800
  },
  
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d20c16aa3c857.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d20c16aa3c857.png',
    local: '/images/optimized/natural-balayage',
    alt: 'Natural sun-kissed balayage hair color',
    category: 'gallery',
    width: 600,
    height: 800
  },
  
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d20eb48a3c859.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d20eb48a3c859.png',
    local: '/images/optimized/kaukapakapa-village',
    alt: 'Beautiful Peak Village Kaukapakapa location',
    category: 'location',
    width: 1200,
    height: 800
  },
  
  // Treatment services
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56dc7a0155e95d2446b.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56dc7a0155e95d2446b.png',
    local: '/images/optimized/keratin-treatment',
    alt: 'Keratin treatment smooth results transformation',
    category: 'service',
    width: 600,
    height: 800
  },
  
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56dc7a0158170d2446c.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56dc7a0158170d2446c.png',
    local: '/images/optimized/color-transformation',
    alt: 'Vibrant hair color transformation result',
    category: 'service',
    width: 600,
    height: 800
  },
  
  // Hero and background images
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d5e612053dfc63d2b5f6.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d5e612053dfc63d2b5f6.png',
    local: '/images/optimized/about-hero-bg',
    alt: 'Hair By Melissa about page hero background',
    category: 'hero',
    width: 1920,
    height: 1080
  },
  
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d652c7a015cdb3d2453d.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d652c7a015cdb3d2453d.png',
    local: '/images/optimized/updo-styling',
    alt: 'Elegant updo styling for special occasions',
    category: 'service',
    width: 600,
    height: 800
  },
  
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65a12053d06f9d2b9fc.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65a12053d06f9d2b9fc.png',
    local: '/images/optimized/blonde-balayage',
    alt: 'Beautiful blonde balayage transformation',
    category: 'gallery',
    width: 600,
    height: 800
  },
  
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65a12053d8203d2b9fd.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65a12053d8203d2b9fd.png',
    local: '/images/optimized/dimensional-highlights',
    alt: 'Stunning dimensional highlights with depth',
    category: 'gallery',
    width: 600,
    height: 800
  },
  
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65a71384ba9e2aef5ee.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65a71384ba9e2aef5ee.png',
    local: '/images/optimized/hero-background',
    alt: 'Hair By Melissa hero background image',
    category: 'hero',
    width: 1920,
    height: 1080
  },
  
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65ac7a0155bc1d24545.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65ac7a0155bc1d24545.png',
    local: '/images/optimized/hair-care-general',
    alt: 'Professional hair care and styling at Hair By Melissa',
    category: 'service',
    width: 800,
    height: 600
  },
  
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67ff7f22c7a01596d4dd377a.png': {
    original: 'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67ff7f22c7a01596d4dd377a.png',
    local: '/images/optimized/keratin-before-after',
    alt: 'Keratin treatment before and after comparison results',
    category: 'service',
    width: 1200,
    height: 600
  }
};

// Helper function to get optimized image info
export function getOptimizedImage(originalUrl: string): ImageInfo | null {
  return imageMap[originalUrl] || null;
}

// Helper function to get WebP image path with size
export function getWebPPath(localPath: string, size: number = 800, quality: number = 80): string {
  return `${localPath}_${size}q${quality}.webp`;
}

// Helper function to get fallback JPEG path
export function getJPEGPath(localPath: string, size: number = 800, quality: number = 85): string {
  return `${localPath}_${size}q${quality}.jpg`;
}

// Helper function to generate srcset for responsive images
export function generateSrcSet(localPath: string, sizes: number[] = [320, 640, 768, 1024, 1280, 1920], format: 'webp' | 'jpg' = 'webp'): string {
  return sizes.map(size => {
    const path = format === 'webp' ? getWebPPath(localPath, size) : getJPEGPath(localPath, size);
    return `${path} ${size}w`;
  }).join(', ');
}

// Predefined responsive sizes
export const responsiveBreakpoints = {
  mobile: [320, 480],
  tablet: [640, 768],
  desktop: [1024, 1280],
  large: [1920, 2560]
};

export const allBreakpoints = [320, 480, 640, 768, 1024, 1280, 1920];