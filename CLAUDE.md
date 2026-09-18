# Hair By Melissa - Project Context & Memory

## Project Overview
Hair By Melissa is an Astro v5.13.0 static site for a premium hair salon in Kaukapakapa, Auckland, New Zealand. The site specializes in SEO optimization, image optimization, and Core Web Vitals improvements.

## Current Project Status
- **Framework:** Astro v5.13.0
- **Build Status:** ✅ All 38 pages building successfully
- **Last Updated:** August 24, 2024
- **Development Status:** Production Ready

## Recent Major Improvements (August 24, 2024)

### ✅ Gallery System Complete Overhaul
**Status:** FULLY COMPLETED ✅

**Key Achievements:**
- Fixed critical black squares display issue (PNG files incorrectly named as .webp)
- Converted all 16 gallery images to true WebP format (60-95% size reduction)
- Implemented full lightbox functionality with keyboard and swipe navigation
- Added responsive grid layout (1-4 columns based on screen size)
- Removed debug information for clean production look
- Mobile-optimized with touch gestures and proper spacing

**Technical Details:**
- WebP conversion using Sharp library at 85% quality
- Lightbox supports ESC key, arrow keys, and touch swipes
- Image counter shows position (e.g., "3 / 16")
- Background scroll lock when lightbox is active

### ✅ Homepage 404 Error Fix
**Status:** RESOLVED ✅

**Issue:** Homepage trying to load non-existent `/images/optimized/hero-background_1920.webp`
**Fix:** Updated to correct filename `hero-background_1920q80.webp` with quality suffix

### ✅ SEO Alt Text Optimization
**Status:** COMPLETED ✅

**Improvements:**
- All 16 gallery images have descriptive, keyword-rich alt text
- Fixed generic "Hair transformation" text on homepage gallery preview
- Updated "Beautiful hair" to specific descriptions
- All images site-wide now have proper SEO-optimized alt text
- Includes location keywords (Kaukapakapa, Hair By Melissa) for local SEO

## Image Optimization System

### WebP Gallery Images
Located in `/public/images/forgallery/`:
- 16 high-quality WebP images
- 60-95% smaller than PNG equivalents
- Example: `balayage-transformation.png` (2.2MB) → `.webp` (102KB)

### Optimized Images System
Located in `/public/images/optimized/`:
- 304 total files (152 WebP + 152 JPEG fallbacks)
- 7 responsive breakpoints per image (320px-1920px)
- Quality variants (q80 for WebP, q85 for JPEG)
- Naming convention: `[name]_[width]q[quality].[ext]`

## Technical Architecture

### Build Configuration
```bash
# Development
npm run dev        # Start dev server on localhost:4321

# Production Build
npm run build      # ~45-70 seconds for all 38 pages

# Quality Checks
npm run lint       # ESLint checks
npm run typecheck  # TypeScript validation
```

### Gallery Implementation
```javascript
// Gallery structure with SEO-optimized alt text
const galleryImages = [
  {
    src: "/images/forgallery/balayage-transformation.webp",
    alt: "Beautiful balayage transformation with natural-looking highlights"
  },
  // ... 16 total images
];
```

### Lightbox Features
- Click to open full-size image
- Previous/Next navigation buttons
- Keyboard support (ESC, ←, →)
- Touch swipe gestures for mobile
- Image counter display
- Smooth fade animations

## Performance Metrics

### Core Web Vitals
- **LCP:** Optimized with WebP images and eager loading for critical images
- **CLS:** Fixed aspect ratios prevent layout shifts
- **FID:** Minimal JavaScript, optimized event handlers

### Image Performance
- **WebP Benefits:** 60-95% file size reduction
- **Loading Strategy:** Eager for above-fold, lazy for below-fold
- **Fallback Support:** JPEG alternatives for older browsers

## SEO Optimizations

### Image SEO
- ✅ Descriptive alt text with keywords on all images
- ✅ Local SEO keywords (Kaukapakapa, North Auckland)
- ✅ Service keywords (balayage, highlights, keratin)
- ✅ Structured data for LocalBusiness schema

### Technical SEO
- Static site generation for fast loading
- Clean URL structure with semantic paths
- Mobile-responsive design
- XML sitemaps for all content types

## Known Issues & Solutions

### Previously Resolved Issues

#### Gallery Black Squares (RESOLVED)
- **Cause:** PNG files incorrectly had .webp extensions
- **Solution:** Renamed files and converted to true WebP format
- **Prevention:** Verify file formats match extensions

#### Homepage 404 Error (RESOLVED)
- **Cause:** Missing quality suffix in image filename
- **Solution:** Updated to include q80/q85 suffixes
- **Prevention:** Use consistent naming convention

## File Structure
```
hairbymelissa-astro/
├── public/
│   └── images/
│       ├── forgallery/        # 16 WebP gallery images
│       ├── optimized/         # 304 responsive images
│       └── original/          # Source images
├── src/
│   ├── components/
│   │   └── OptimizedImage.astro
│   ├── pages/
│   │   ├── index.astro       # Homepage
│   │   ├── gallery.astro     # Gallery with lightbox
│   │   ├── services/         # Individual service pages
│   │   └── blog/             # Blog posts
│   ├── styles/
│   │   └── global.css        # Global styles
│   └── utils/
│       └── imageMap.ts       # Image mapping utilities
└── CLAUDE.md                 # This file
```

## Development Guidelines

### Image Handling
1. Always verify file format matches extension
2. Use WebP for gallery images (better compression)
3. Provide JPEG fallbacks for compatibility
4. Include descriptive, keyword-rich alt text
5. Test on slow connections and older devices

### Code Quality
1. Run `npm run build` before committing
2. Verify no 404 errors in browser console
3. Test responsive layouts on multiple devices
4. Ensure all images have proper alt text
5. Check Core Web Vitals scores

## Next Planned Enhancements
- Consider adding image lazy loading for below-fold gallery items
- Implement image preloading for next/previous in lightbox
- Add social sharing buttons for gallery images
- Consider AVIF format for even better compression
- Add breadcrumb navigation for better SEO

## Emergency Procedures

### If Gallery Shows Black Squares
1. Check browser console for 404 errors
2. Verify file extensions match actual format: `file [filename]`
3. Ensure images are in `/public/images/forgallery/`
4. Clear browser cache and restart dev server

### If Build Fails
1. Run `npm install` to ensure dependencies
2. Delete `.astro` and `dist` folders
3. Run `npm run build` again
4. Check for TypeScript errors with `npm run typecheck`

### Performance Issues
1. Check image sizes - should be WebP format
2. Verify lazy loading is working (IntersectionObserver)
3. Use browser DevTools Network tab to identify slow resources
4. Consider reducing image quality if files still too large

---
*Last Updated: August 24, 2024*
*Version: 2.0.0*
*Status: Production Ready*
## Agent Team Rules (added 2026-09-18)

**Model doctrine for all growth/SEO/conversion work on this repo:**
- **Planning:** Fable 5.1 (`fable`). Writes `plan.md`, owns the approval gate, does the final voice pass on customer-facing copy.
- **Orchestrating:** Opus 5 (`opus`). Runs the build phase from the approved plan, fans out tasks, merges results, runs QA.
- **Tasks / building:** Sonnet 5 (`sonnet`). Research, audits, component edits, drafts, verification. Always parallel where independent.
- **Mechanical tail:** Haiku 4.5 (`haiku`). Meta trims, alt text, link checks, formatting.

Agent definitions live in `.claude/agents/` (growth-orchestrator, growth-builder, growth-researcher, growth-mechanical). Use them by name with the Agent tool.

**Process:** follow the `web-growth-team` skill pipeline (context → research fan-out → plan → gate → build → adversarial QA). Use `/loop` to poll a long-running orchestrator rather than blocking.

**Changelog:** every change set gets an entry in `changelog/` named `YYYY-MM-DD-<slug>.md` (what changed, why, files touched, GSC metric it targets, date to re-check). `changelog/README.md` is the index.

**Git / deploy:** production deploys via Netlify from **github.com/melissakilday/site** (`main`), added as remote `deploy`; the local working branch is `deploy-main` (tracks it). `origin` (AltusSnyman/hairbymelissa-astro) is a stale fork, do not deploy from it. Work on a `growth/<slug>-<date>` branch, then fast-forward `deploy-main` and push `deploy-main:main` — never force-push. Pushing needs the classic token in `.env` (`classictoken:`), passed to git as an in-memory header only, never stored. Never push to GitHub without the user explicitly asking. Never change a URL without a 301 in `public/netlify.toml` and `public/_redirects` in the same commit.

**Data:** the `gsc` MCP server (project-scoped, `.mcp.json`) is the source of truth for rankings. Property is `sc-domain:hairbymelissa.co.nz`. Use it before any keyword estimate.
