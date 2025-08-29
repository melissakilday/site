#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// Simple image converter using ffmpeg (commonly available)
async function convertToWebP(inputPath, outputPath, quality = 80) {
  return new Promise((resolve, reject) => {
    // First try with cwebp (if available)
    const cwebp = spawn('cwebp', ['-q', quality.toString(), inputPath, '-o', outputPath]);
    
    cwebp.on('error', () => {
      // Fallback to ffmpeg if cwebp not available
      const ffmpeg = spawn('ffmpeg', ['-i', inputPath, '-q:v', '2', '-y', outputPath]);
      
      ffmpeg.on('error', (err) => {
        reject(err);
      });
      
      ffmpeg.on('close', (code) => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`ffmpeg process exited with code ${code}`));
        }
      });
    });
    
    cwebp.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`cwebp process exited with code ${code}`));
      }
    });
  });
}

async function main() {
  const originalDir = './public/images/original';
  const outputDir = './public/images/webp-gallery';
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // List of gallery images
  const galleryImages = [
    'blonde-balayage.png',
    'dimensional-highlights.png',
    'hair-care-general.png',
    'updo-styling.png',
    'professional-blowdry.png',
    'natural-balayage.png',
    'color-transformation.png',
    'blow-wave-styling.png',
    'foil-highlights.png',
    'keratin-treatment.png',
    'balayage-transformation.png',
    'highlights-before-after.png',
    'melissa-professional.png',
    'salon-interior.png'
  ];
  
  console.log('Converting images to WebP...');
  
  for (const imageName of galleryImages) {
    const inputPath = path.join(originalDir, imageName);
    const outputName = imageName.replace('.png', '.webp');
    const outputPath = path.join(outputDir, outputName);
    
    if (fs.existsSync(inputPath)) {
      try {
        await convertToWebP(inputPath, outputPath, 85);
        console.log(`✓ Converted ${imageName} -> ${outputName}`);
      } catch (error) {
        console.log(`✗ Failed to convert ${imageName}: ${error.message}`);
      }
    } else {
      console.log(`✗ Source file not found: ${imageName}`);
    }
  }
  
  console.log('Conversion complete!');
}

main().catch(console.error);