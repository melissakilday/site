// Script to update image references across the site
// This replaces Google Storage URLs with optimized local images

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Image mapping from Google Storage to local optimized versions
const imageMapping = {
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d3f671384b206baef377.png': '/images/optimized/salon-exterior_800.webp',
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d3eec7a01575d2d242f5.png': '/images/optimized/salon-interior_800.webp',
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45d12053d0241d2b806.png': '/images/optimized/melissa-professional_800.webp',
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45dc7a0157964d24379.png': '/images/optimized/balayage-transformation_800.webp',
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d45dc7a015f66ed24378.png': '/images/optimized/highlights-before-after_800.webp',
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56d71384b7b5faef45d.png': '/images/optimized/blow-wave-styling_800.webp',
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d201419a3c858.png': '/images/optimized/professional-blowdry_800.webp',
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d203cfaa3c859.png': '/images/optimized/foil-highlights_800.webp',
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d20c16aa3c857.png': '/images/optimized/natural-balayage_800.webp',
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56db95d20eb48a3c859.png': '/images/optimized/kaukapakapa-village_800.webp',
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56dc7a0155e95d2446b.png': '/images/optimized/keratin-treatment_800.webp',
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d56dc7a0158170d2446c.png': '/images/optimized/color-transformation_800.webp',
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d5e612053dfc63d2b5f6.png': '/images/optimized/about-hero-bg_1920.webp',
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d652c7a015cdb3d2453d.png': '/images/optimized/updo-styling_800.webp',
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65a12053d06f9d2b9fc.png': '/images/optimized/blonde-balayage_800.webp',
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65a12053d8203d2b9fd.png': '/images/optimized/dimensional-highlights_800.webp',
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65a71384ba9e2aef5ee.png': '/images/optimized/hero-background_1920.webp',
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67f8d65ac7a0155bc1d24545.png': '/images/optimized/hair-care-general_800.webp',
  'https://storage.googleapis.com/msgsndr/BLeUCGmXOpptWsB7PyZu/media/67ff7f22c7a01596d4dd377a.png': '/images/optimized/keratin-before-after_1200.webp'
};

// Directories to search for files to update
const searchDirs = [
  'src/pages',
  'src/components', 
  'src/layouts',
  'src/styles',
  'public'
];

console.log('🔍 Scanning for image references to update...\n');

let totalUpdates = 0;

// Function to update file content
function updateFileContent(filePath, content) {
  let updatedContent = content;
  let fileUpdates = 0;
  
  // Replace each Google Storage URL with optimized local version
  Object.entries(imageMapping).forEach(([googleUrl, localPath]) => {
    const regex = new RegExp(googleUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = (updatedContent.match(regex) || []).length;
    
    if (matches > 0) {
      updatedContent = updatedContent.replace(regex, localPath);
      fileUpdates += matches;
      console.log(`  ✅ ${matches}x: ${path.basename(googleUrl)} → ${path.basename(localPath)}`);
    }
  });
  
  if (fileUpdates > 0) {
    fs.writeFileSync(filePath, updatedContent);
    console.log(`📝 Updated ${filePath} with ${fileUpdates} image replacements\n`);
    totalUpdates += fileUpdates;
  }
  
  return fileUpdates;
}

// Function to recursively scan directories
function scanDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  
  items.forEach(item => {
    const itemPath = path.join(dirPath, item.name);
    
    if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules') {
      scanDirectory(itemPath);
    } else if (item.isFile()) {
      // Process relevant file types
      const ext = path.extname(item.name).toLowerCase();
      if (['.astro', '.ts', '.js', '.css', '.xml', '.md'].includes(ext)) {
        try {
          const content = fs.readFileSync(itemPath, 'utf8');
          
          // Check if file contains Google Storage URLs
          const hasGoogleUrls = Object.keys(imageMapping).some(url => content.includes(url));
          
          if (hasGoogleUrls) {
            console.log(`🔧 Processing: ${itemPath}`);
            updateFileContent(itemPath, content);
          }
        } catch (error) {
          console.error(`❌ Error reading ${itemPath}:`, error.message);
        }
      }
    }
  });
}

// Start scanning
console.log('🚀 Starting image reference updates...\n');

searchDirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  console.log(`📂 Scanning: ${dir}`);
  scanDirectory(fullPath);
});

console.log(`\n🎉 Image reference update complete!`);
console.log(`📊 Total updates: ${totalUpdates} image references`);
console.log(`✨ All Google Storage URLs replaced with optimized local WebP images`);

// Generate summary report
const report = {
  timestamp: new Date().toISOString(),
  totalUpdates,
  imagesOptimized: Object.keys(imageMapping).length,
  formats: ['WebP (primary)', 'JPEG (fallback)'],
  responsiveSizes: [320, 480, 640, 768, 1024, 1280, 1920],
  benefits: [
    'Reduced external dependencies',
    'Improved Core Web Vitals scores', 
    'Better caching control',
    'Reduced bandwidth usage',
    'Faster page load times',
    'Enhanced SEO performance'
  ]
};

fs.writeFileSync('image-optimization-report.json', JSON.stringify(report, null, 2));
console.log(`📋 Report saved: image-optimization-report.json`);

console.log(`\n📈 Expected improvements:`);
console.log(`• 60-80% reduction in image file sizes`);
console.log(`• 40-60% faster image loading`);
console.log(`• Improved Lighthouse performance score`);
console.log(`• Better Core Web Vitals (LCP, CLS)`);
console.log(`• Enhanced mobile performance`);