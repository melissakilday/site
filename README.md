# Hair By Melissa - Professional Hair Salon Website

A modern, responsive website for Hair By Melissa, a premium hair salon specializing in coloring, keratin treatments, and expert styling services.

## 🌟 Overview

This website showcases Hair By Melissa's services and expertise, providing an elegant online presence that reflects the quality and professionalism of the salon. Built with Astro and Tailwind CSS for optimal performance and beautiful design.

## ✨ Features

- **Responsive Design**: Fully responsive layout that looks great on all devices
- **Service Showcase**: Detailed service pages with pricing and descriptions
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Astro for lightning-fast load times
- **SEO Optimized**: Proper meta tags and structured content
- **Accessible**: WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) v5.13.0
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4.0
- **Language**: TypeScript
- **Package Manager**: npm
- **Hosting**: Ready for deployment on any static hosting service

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   └── Navbar.astro
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── ServiceLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── services.astro
│   │   └── services/
│   │       ├── balayage.astro
│   │       ├── blow-wave.astro
│   │       ├── full-head-highlights.astro
│   │       ├── half-head-highlights.astro
│   │       ├── keratin-treatments.astro
│   │       ├── partial-foils.astro
│   │       ├── permanent-tint-all-over.astro
│   │       ├── permanent-tint-touch-up.astro
│   │       ├── toner.astro
│   │       └── womens-cut-finish.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.1 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/hair-by-melissa.git
cd hair-by-melissa
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📄 Pages

### Current Pages
- **Home** (`/`) - Landing page with hero section, services preview, testimonials
- **Services** (`/services`) - Complete list of all services with modal details
- **Individual Service Pages** (`/services/[service-name]`) - Detailed pages for each service

### Planned Pages (To Be Implemented)
- **About** (`/about`) - About Melissa and the salon
- **Gallery** (`/gallery`) - Portfolio of work
- **Contact** (`/contact`) - Contact information and form
- **FAQ** (`/faq`) - Frequently asked questions
- **Booking** (`/booking`) - Online booking system
- **Keratin Special** (`/keratin`) - Winter special promotion

## 🎨 Design System

### Colors
- **Primary Blue**: #D3E4FD
- **Secondary Pink**: #FFDEE2
- **Accent Blue**: #1EAEDB
- **Light Gray**: #F8F9FA
- **Text**: #111827 (dark), #ffffff (light)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
- Responsive navigation with dropdown menu
- Hero sections with background images
- Service cards with hover effects
- Call-to-action buttons
- Footer with contact information

## 🔧 Configuration

### Astro Config
The site is configured in `astro.config.mjs` with:
- Tailwind CSS integration
- Image optimization for external sources
- Vite plugins

### Environment Variables
No environment variables required for basic operation.

## 📝 Content Management

All service information and content is currently hardcoded in the respective Astro files. Future improvements could include:
- CMS integration for easier content updates
- Dynamic pricing management
- Service availability calendar

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For any questions about the website, please contact:
- **Developer**: [Your Name]
- **Email**: [your.email@example.com]

For salon inquiries:
- **Hair By Melissa**
- **Phone**: [Salon Phone Number]
- **Address**: [Salon Address]

## 🙏 Acknowledgments

- Design inspired by modern salon websites
- Images hosted on Google Cloud Storage
- Built with love using Astro and Tailwind CSS