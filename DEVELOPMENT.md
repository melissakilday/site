# Development Guide

This guide provides detailed information for developers working on the Hair By Melissa website.

## 🏗️ Architecture Overview

### Technology Stack
- **Framework**: Astro 5.13.0 (Static Site Generator)
- **Styling**: Tailwind CSS 4.0 with Vite plugin
- **Language**: TypeScript
- **Package Manager**: npm
- **Build Tool**: Vite (via Astro)

### Project Structure

```
src/
├── components/       # Reusable Astro components
├── layouts/         # Page layouts
├── pages/           # Route pages (file-based routing)
│   └── services/    # Individual service pages
├── styles/          # Global styles
└── assets/          # Static assets (if needed)
```

## 🛠️ Development Workflow

### Initial Setup

1. **Clone and Install**
```bash
git clone [repository-url]
cd hair-by-melissa
npm install
```

2. **Start Development Server**
```bash
npm run dev
# Server runs on http://localhost:4321
```

3. **Build for Production**
```bash
npm run build
npm run preview  # Preview production build
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready static site
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 📦 Dependencies

### Core Dependencies
- `astro`: Static site generator
- `@tailwindcss/vite`: Tailwind CSS integration

### Development Dependencies
- `typescript`: Type checking
- Various Astro type definitions

## 🎨 Styling Guide

### Tailwind Configuration

Tailwind is configured via Vite plugin. Custom styles are in `src/styles/global.css`.

### Color Palette
```css
:root {
  --salon-blue: #D3E4FD;
  --salon-pink: #FFDEE2;
  --salon-lightgray: #F8F9FA;
  --salon-darkblue: #1EAEDB;
}
```

### Typography
- **Headings**: Playfair Display (Google Fonts)
- **Body**: Inter (Google Fonts)

### Utility Classes
```css
.btn-primary    /* Blue CTA button */
.btn-secondary  /* Pink secondary button */
.container-custom /* Responsive container */
.section-padding /* Consistent section spacing */
.card-shadow    /* Card elevation effect */
```

## 🚀 Component Development

### Creating New Components

1. Create `.astro` file in `src/components/`
2. Follow naming convention: PascalCase
3. Example structure:

```astro
---
// Component logic here
export interface Props {
  title: string;
  // other props
}

const { title } = Astro.props;
---

<div class="component-wrapper">
  <h2>{title}</h2>
  <!-- Component markup -->
</div>

<style>
  /* Component-specific styles if needed */
</style>
```

### Using Components

```astro
---
import MyComponent from '../components/MyComponent.astro';
---

<MyComponent title="Example" />
```

## 📄 Page Development

### Creating New Pages

1. Add `.astro` file in `src/pages/`
2. File name becomes the route
3. Use layouts for consistency:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Page Title">
  <!-- Page content -->
</Layout>
```

### Dynamic Routes

For service pages, we use static files. For dynamic routing:
```
src/pages/[slug].astro  // Catches /anything
src/pages/blog/[...slug].astro  // Catches /blog/2024/post-title
```

## 🖼️ Image Handling

### Current Setup
- Images hosted on Google Cloud Storage
- Direct URLs used in components
- Background images via CSS classes

### Image Optimization
```astro
<!-- For hero backgrounds -->
<div class="hero-bg-home"></div>

<!-- For content images -->
<img 
  src="url" 
  alt="Description"
  loading="lazy"
  decoding="async"
/>
```

## 🔧 Configuration Files

### astro.config.mjs
```javascript
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    domains: ['storage.googleapis.com'],
    remotePatterns: [{ protocol: 'https' }]
  }
});
```

### tsconfig.json
Standard TypeScript configuration for Astro projects.

## 🐛 Common Issues & Solutions

### Hero Images Not Displaying
- Check z-index layering
- Ensure background div is separate from overlay
- Verify image URLs are accessible

### Build Errors
```bash
# Clear cache and rebuild
rm -rf dist/ .astro/
npm run build
```

### Port Already in Use
```bash
# Kill process on port 4321
lsof -ti:4321 | xargs kill -9
# Or use different port
npm run dev -- --port 4322
```

## 📊 Performance Optimization

### Best Practices
1. Use Astro's static generation
2. Lazy load images below fold
3. Minimize custom JavaScript
4. Use Tailwind's purge in production
5. Optimize images before uploading

### Lighthouse Targets
- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load without errors
- [ ] Navigation works on all devices
- [ ] Forms submit correctly (when added)
- [ ] Images load properly
- [ ] No console errors
- [ ] Responsive on mobile/tablet/desktop

### Browser Testing
Test in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari
- Chrome Mobile

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options

1. **Netlify**
   - Drop `dist/` folder
   - Or connect GitHub repo

2. **Vercel**
   - Import project
   - Auto-detects Astro

3. **GitHub Pages**
   - Use GitHub Actions
   - Deploy `dist/` folder

4. **Traditional Hosting**
   - Upload `dist/` contents via FTP

### Environment Variables
Currently none required. If added:
```bash
# .env.local
PUBLIC_API_URL=https://api.example.com
```

## 📝 Code Quality

### ESLint & Prettier
Not currently configured. To add:
```bash
npm install -D eslint prettier eslint-config-prettier
# Add configuration files
```

### Git Hooks
Consider adding Husky for pre-commit hooks:
```bash
npm install -D husky lint-staged
npx husky-init
```

## 🆘 Getting Help

1. Check Astro documentation: https://docs.astro.build
2. Review Tailwind CSS docs: https://tailwindcss.com
3. Search closed GitHub issues
4. Ask in project discussions

## 🔄 Future Enhancements

### Planned Features
- [ ] CMS integration (Strapi/Contentful)
- [ ] Online booking system
- [ ] Email notification system
- [ ] Analytics integration
- [ ] Progressive Web App features
- [ ] Multi-language support

### Performance Improvements
- [ ] Image optimization pipeline
- [ ] Service Worker for offline support
- [ ] Resource hints (preconnect, prefetch)
- [ ] Critical CSS inlining

Happy coding! 🚀