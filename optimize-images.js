#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Aggressive optimization settings for PageSpeed
const WEBP_QUALITY = 60;  // Lower quality for smaller files
const JPEG_QUALITY = 70;  // Lower quality for smaller files

// Responsive image breakpoints optimized for actual usage
const breakpoints = [
  { width: 320, suffix: '_320' },
  { width: 480, suffix: '_480' },
  { width: 640, suffix: '_640' },
  { width: 768, suffix: '_768' },
  { width: 800, suffix: '_800' },   // Most commonly used size
  { width: 1024, suffix: '_1024' },
  { width: 1280, suffix: '_1280' },
  { width: 1920, suffix: '_1920' }
];

const sourceDir = path.join(__dirname, 'public', 'images', 'original');
const outputDir = path.join(__dirname, 'public', 'images', 'optimized');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(inputPath, outputBase) {
  const inputName = path.basename(inputPath, path.extname(inputPath));
  const fileSize = fs.statSync(inputPath).size;
  
  // Skip very small files (likely placeholders or corrupted)
  if (fileSize < 1000) {
    console.log(`⏭️  Skipping ${inputName} (file too small: ${fileSize} bytes)`);
    return;
  }
  
  console.log(`🔧 Optimizing: ${inputName}`);
  
  try {
    // Read image metadata first
    const metadata = await sharp(inputPath).metadata();
    console.log(`   Original: ${metadata.width}x${metadata.height} (${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(2)}MB)`);

  for (const bp of breakpoints) {
    // Skip if breakpoint is larger than original image
    if (metadata.width && bp.width > metadata.width) {
      console.log(`   ⏭️  Skipping ${bp.width}px (larger than original)`);
      continue;
    }

    const webpPath = path.join(outputDir, `${inputName}${bp.suffix}q${WEBP_QUALITY}.webp`);
    const jpegPath = path.join(outputDir, `${inputName}${bp.suffix}q${JPEG_QUALITY}.jpg`);

    try {
      // Create WebP version
      await sharp(inputPath)
        .resize(bp.width, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ 
          quality: WEBP_QUALITY,
          effort: 6,  // Maximum effort for better compression
          lossless: false
        })
        .toFile(webpPath);

      // Create JPEG fallback
      await sharp(inputPath)
        .resize(bp.width, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ 
          quality: JPEG_QUALITY,
          progressive: true,
          mozjpeg: true
        })
        .toFile(jpegPath);

      const webpSize = fs.statSync(webpPath).size;
      const jpegSize = fs.statSync(jpegPath).size;
      
      console.log(`   ✅ ${bp.width}px: WebP ${(webpSize/1024).toFixed(1)}KB, JPEG ${(jpegSize/1024).toFixed(1)}KB`);

    } catch (error) {
      console.error(`   ❌ Error optimizing ${inputName} at ${bp.width}px:`, error.message);
    }
  }

  // Also create the legacy _800.webp format for backward compatibility
  try {
    const legacyWebpPath = path.join(outputDir, `${inputName}_800.webp`);
    const legacyJpegPath = path.join(outputDir, `${inputName}_800.jpg`);
    
    await sharp(inputPath)
      .resize(800, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ 
        quality: WEBP_QUALITY,
        effort: 6
      })
      .toFile(legacyWebpPath);

    await sharp(inputPath)
      .resize(800, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ 
        quality: JPEG_QUALITY,
        progressive: true
      })
      .toFile(legacyJpegPath);

    const legacyWebpSize = fs.statSync(legacyWebpPath).size;
    const legacyJpegSize = fs.statSync(legacyJpegPath).size;
    
    console.log(`   📦 Legacy 800px: WebP ${(legacyWebpSize/1024).toFixed(1)}KB, JPEG ${(legacyJpegSize/1024).toFixed(1)}KB`);
    
  } catch (error) {
    console.error(`   ❌ Error creating legacy format for ${inputName}:`, error.message);
  }

    console.log(`   ✨ Completed: ${inputName}\n`);
    
  } catch (error) {
    console.error(`   ❌ Error optimizing ${inputName}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Starting aggressive image optimization for PageSpeed...\n');
  
  try {
    const files = fs.readdirSync(sourceDir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    );

    if (imageFiles.length === 0) {
      console.log('❌ No image files found in', sourceDir);
      return;
    }

    console.log(`📸 Found ${imageFiles.length} images to optimize\n`);

    for (const file of imageFiles) {
      const inputPath = path.join(sourceDir, file);
      await optimizeImage(inputPath, outputDir);
    }

    console.log('🎉 Image optimization complete!');
    console.log('📊 Check the optimized directory for smaller, faster-loading images.');
    
    // Show total size savings
    const originalSize = files.reduce((total, file) => {
      const filePath = path.join(sourceDir, file);
      if (fs.existsSync(filePath)) {
        return total + fs.statSync(filePath).size;
      }
      return total;
    }, 0);
    
    console.log(`💾 Original images total: ${(originalSize / 1024 / 1024).toFixed(2)}MB`);
    
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

main();