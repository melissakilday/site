#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ULTRA-AGGRESSIVE compression for PageSpeed
const WEBP_QUALITY = 30;  // Much lower quality for large images
const JPEG_QUALITY = 40;  // Much lower quality for large images

const optimizedDir = path.join(__dirname, 'public', 'images', 'optimized');

// Critical images that are causing payload issues
const problematicImages = [
  {
    input: 'balayage-transformation_1920q80.webp',
    sizes: [
      { width: 800, quality: 25, suffix: '_800q25' },   // Mobile hero
      { width: 1280, quality: 30, suffix: '_1280q30' }, // Tablet/Desktop
      { width: 1920, quality: 35, suffix: '_1920q35' }  // Large desktop
    ]
  },
  {
    input: 'salon-exterior_1280.webp', 
    sizes: [
      { width: 640, quality: 35, suffix: '_640q35_new' },   // Mobile
      { width: 1280, quality: 40, suffix: '_1280q40_new' }, // Desktop
    ]
  }
];

async function recompressImage(inputFile, outputConfigs) {
  const inputPath = path.join(optimizedDir, inputFile);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`❌ Input file not found: ${inputFile}`);
    return;
  }

  const originalSize = fs.statSync(inputPath).size;
  console.log(`\n🔧 Recompressing: ${inputFile} (${(originalSize/1024/1024).toFixed(2)}MB)`);

  for (const config of outputConfigs) {
    try {
      const outputPath = path.join(optimizedDir, inputFile.replace(/_([\d]+)q(\d+)\.webp$/, `${config.suffix}.webp`));
      
      await sharp(inputPath)
        .resize(config.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({
          quality: config.quality,
          effort: 6,
          lossless: false
        })
        .toFile(outputPath);

      const newSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
      
      console.log(`   ✅ ${config.width}px@${config.quality}%: ${(newSize/1024).toFixed(1)}KB (${savings}% smaller)`);

      // Also create JPEG fallback
      const jpegPath = outputPath.replace('.webp', '.jpg');
      await sharp(inputPath)
        .resize(config.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({
          quality: config.quality + 10, // Slightly higher for JPEG
          progressive: true,
          mozjpeg: true
        })
        .toFile(jpegPath);

    } catch (error) {
      console.error(`   ❌ Error creating ${config.suffix}:`, error.message);
    }
  }
}

async function main() {
  console.log('🚨 EMERGENCY IMAGE COMPRESSION - Fixing PageSpeed Issues\n');
  
  try {
    for (const imageConfig of problematicImages) {
      await recompressImage(imageConfig.input, imageConfig.sizes);
    }
    
    console.log('\n✅ Emergency compression complete!');
    console.log('📊 Expected payload reduction: ~80-90%');
    console.log('🎯 New target: <400KB total image payload');
    
  } catch (error) {
    console.error('❌ Emergency compression failed:', error);
    process.exit(1);
  }
}

main();