# Changelog

All notable changes to the Hair By Melissa website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Complete Gallery System**: 16 WebP optimized images with lightbox navigation
  - Full-screen image viewing with keyboard controls (arrow keys, escape)
  - Mobile swipe gestures for touch navigation
  - Responsive 4-column grid layout with hover effects
  - All images converted to WebP format for SEO optimization
- **Advanced Image Optimization System**: 304 optimized files across the site
  - WebP format with JPEG fallbacks for browser compatibility
  - Responsive image breakpoints (320px-1920px)
  - Lazy loading with IntersectionObserver
  - 60%+ file size reduction for improved Core Web Vitals
- **SEO Enhancements**: Comprehensive alt text optimization
  - Descriptive, keyword-rich alt text for all images
  - Structured data and meta optimization
  - Image sitemaps for search engine crawling
- **Complete Site Structure**: 38 static pages
  - Homepage with hero section, services preview, testimonials
  - About, Contact, FAQ, Booking pages
  - Blog system with 9 articles and category filtering
  - 10 individual service pages with detailed descriptions
  - 4 location-specific pages (Kaukapakapa, Helensville, Wainui, Waitoki)
  - Winter keratin special promotion page
- **Advanced Components**:
  - OptimizedImage component with responsive loading
  - LoadingSpinner for better UX
  - Image optimization JavaScript with error handling
- **Development Tools**:
  - Custom image conversion scripts using Sharp library
  - Automated URL replacement for image migration
  - Project documentation and memory system

### Fixed
- **Critical Gallery Display Issue**: Fixed PNG files incorrectly named with .webp extensions
  - Root cause: File format mismatch causing browser load failures
  - Solution: Converted all 16 gallery images to true WebP format using Sharp
  - Result: Gallery thumbnails now display correctly without black squares
- **Homepage Hero Background 404 Error**: Fixed missing image reference
  - Issue: `/images/optimized/hero-background_1920.webp` not found
  - Fix: Updated to correct filename `hero-background_1920q80.webp`
- **SEO Alt Text Optimization**: Replaced generic descriptions throughout site
  - Before: "Hair transformation", "Beautiful hair"
  - After: Descriptive, SEO-optimized alt text for each image
- **Image Loading Performance**: Resolved opacity conflicts in lazy loading
  - Disabled opacity-based loading for gallery images
  - Maintained hover effects and performance benefits
  - Implemented eager loading for critical above-fold images

### Changed
- **Image System Migration**: Migrated from Google Cloud Storage to local optimization
  - From: `https://storage.googleapis.com/msgsndr/...`
  - To: `/images/optimized/[name]_[size].webp`
  - Implemented comprehensive mapping system in `src/utils/imageMap.ts`
- **Performance Improvements**: Enhanced Core Web Vitals scores
  - LCP (Largest Contentful Paint): Critical image prioritization
  - CLS (Cumulative Layout Shift): Aspect ratio containers
  - FID (First Input Delay): Non-blocking image loading

### Technical Details
- **Framework**: Astro v5.13.0 with TypeScript
- **Styling**: Tailwind CSS v4.0 with custom design system
- **Image Processing**: Sharp library for WebP conversion
- **Performance**: IntersectionObserver API for lazy loading
- **Build System**: Static site generation with 304 optimized images
- **Development**: Comprehensive documentation and troubleshooting guides

## [1.0.0] - TBD

### Initial Release
- Complete website ready for production deployment
- All planned pages implemented
- Full responsive design
- SEO optimization
- Performance optimization