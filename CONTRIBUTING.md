# Contributing to Hair By Melissa Website

Thank you for your interest in contributing to the Hair By Melissa website! This document provides guidelines and instructions for contributing.

## 🤝 Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your feature/fix
4. Make your changes
5. Test thoroughly
6. Submit a pull request

## 📋 Development Process

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/gallery-page`)
- `fix/` - Bug fixes (e.g., `fix/mobile-navigation`)
- `update/` - Updates to existing features (e.g., `update/service-prices`)
- `docs/` - Documentation changes (e.g., `docs/readme-update`)

### Commit Messages

Follow conventional commit format:
```
type(scope): description

[optional body]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

Examples:
```
feat(services): add online booking integration
fix(nav): correct mobile menu toggle behavior
docs(readme): update installation instructions
```

## 🛠️ Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📝 Code Standards

### General Guidelines

- Use TypeScript for type safety
- Follow existing code patterns and conventions
- Maintain consistent indentation (2 spaces)
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

### Astro Components

- Use `.astro` files for static components
- Keep component logic minimal
- Separate concerns between layout and content
- Use TypeScript interfaces for props

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and sizing
- Use CSS custom properties for repeated values
- Keep custom CSS in `global.css` to minimum

### Images

- Optimize images before adding
- Use appropriate formats (WebP, AVIF when possible)
- Include descriptive alt text
- Ensure images are responsive
- Host large images on CDN (currently Google Cloud Storage)

## 🧪 Testing

Before submitting a PR:

1. **Visual Testing**
   - Test on multiple screen sizes
   - Check in different browsers (Chrome, Firefox, Safari, Edge)
   - Verify mobile responsiveness

2. **Functionality Testing**
   - Test all interactive elements
   - Verify navigation works correctly
   - Check form submissions (if applicable)
   - Test modal behaviors

3. **Performance Testing**
   - Run Lighthouse audit
   - Check page load times
   - Verify images load properly
   - Test on slower connections

## 📚 Adding New Pages

When adding a new page:

1. Create the page in `src/pages/`
2. Update navigation in `Navbar.astro`
3. Add to sitemap (if applicable)
4. Update README.md pages section
5. Add appropriate meta tags
6. Ensure consistent styling with existing pages

## 🎨 Design Guidelines

- Maintain consistent color scheme (#D3E4FD, #FFDEE2, #1EAEDB)
- Use Playfair Display for headings
- Use Inter for body text
- Keep design clean and professional
- Ensure adequate contrast for accessibility

## 🐛 Reporting Issues

When reporting issues:

1. Check existing issues first
2. Use issue templates if available
3. Include:
   - Clear description of the problem
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots (if applicable)
   - Browser and device information

## 📦 Submitting Pull Requests

1. Update your fork with latest changes from main
2. Create a descriptive PR title
3. Fill out the PR template
4. Link related issues
5. Ensure all checks pass
6. Request review from maintainers

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] Changes are tested on multiple devices
- [ ] Documentation is updated if needed
- [ ] Commit messages follow convention
- [ ] No console errors or warnings
- [ ] Performance impact is minimal

## 🔄 Release Process

1. Changes are merged to main
2. Version is bumped following semver
3. CHANGELOG.md is updated
4. Release is tagged
5. Production deployment follows

## 📞 Questions?

If you have questions:

1. Check existing documentation
2. Look through closed issues
3. Ask in discussions (if enabled)
4. Contact maintainers

Thank you for contributing to Hair By Melissa website! 💇‍♀️✨