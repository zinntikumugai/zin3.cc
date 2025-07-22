# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for zin3 (じんさん) built with SvelteKit, TypeScript, and Tailwind CSS. The site displays social media profiles, blog links, git repositories, and GPG key information.

## Key Technologies

- **SvelteKit** (v2.0.0) - Web application framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework with Skeleton UI plugin
- **Vite** - Build tool and development server
- **PostCSS** - CSS processing

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run check          # Single run
npm run check:watch    # Watch mode

# Code quality
npm run lint           # Check formatting and linting
npm run format         # Auto-format code
```

## Architecture Overview

### Directory Structure

- `/src/routes/` - SvelteKit pages and layouts
  - `+page.svelte` - Main landing page with social links grid
  - `+layout.svelte` - Root layout wrapper
- `/src/lib/` - Shared library code
- `/static/` - Static assets (favicon, images)

### Routing

SvelteKit uses file-based routing. The main page (`/`) is defined in `src/routes/+page.svelte`.

### Styling

- Global styles in `src/app.pcss` using PostCSS
- Tailwind CSS with custom Noto Sans JP font
- Skeleton UI components
- Dark mode support via Tailwind class method

### Deployment

The project is configured for Cloudflare deployment using `@sveltejs/adapter-cloudflare`.

## Project-Specific Notes

- The site is a single-page portfolio displaying various social media and platform links
- All external links open in the same window
- The layout is responsive with grid columns adjusting for mobile/desktop
- Copyright notice shows "©zin3 2024"
