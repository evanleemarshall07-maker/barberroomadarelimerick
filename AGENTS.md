# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A one-page marketing/landing site for "Almanac", a fictional field-service dispatch product. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS variables/keyframes |
| Icons | lucide-react |
| Fonts | Fraunces (display), Libre Franklin (body) — loaded via Google Fonts in `src/styles.css` |
| Forms | Netlify Forms (newsletter signup) |
| Language | TypeScript 5.9 |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── favicon.ico
│   └── newsletter-form.html  # Static skeleton form so Netlify's build bot registers the "newsletter" form. Never rendered to users.
├── src
│   ├── routes
│   │   ├── __root.tsx  # Root layout: HTML shell, meta tags, fixed grain-texture overlay.
│   │   ├── faq.tsx      # Standalone FAQ accordion page (not linked from the new landing page nav, left in place from the base template).
│   │   └── index.tsx    # The landing page: nav, hero, proof stats, features, testimonials, CTA, footer with newsletter form.
│   ├── router.tsx  # TanStack Router setup.
│   └── styles.css  # Tailwind import, Google Fonts import, CSS custom properties (color palette), keyframes for reveal/marquee animations.
├── AGENTS.md
├── README.md
├── netlify.toml
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Key Concepts

### Design system

Color palette and typography are defined as CSS custom properties in `src/styles.css` (`--ink`, `--paper`, `--rust`, `--gold`, `--moss`, etc.) and referenced via inline `style` attributes in components rather than Tailwind color utilities — this keeps the editorial palette centralized and easy to re-theme. Tailwind is used for layout, spacing, and responsive behavior.

`font-display` (Fraunces) is used for headlines and stat callouts; body copy uses the default `Libre Franklin` set on `body`.

### Netlify Forms in TanStack Start

TanStack Start renders forms client-side, so Netlify's build-time HTML scanner never sees the React form directly. `public/newsletter-form.html` is a hidden, unrendered duplicate of the form's fields that exists purely so Netlify registers the `newsletter` form at build time. The real form in `src/routes/index.tsx` (`NewsletterForm`) submits via `fetch('/newsletter-form.html', ...)` with `application/x-www-form-urlencoded` — posting to `/` would be intercepted by the SSR handler instead of Netlify's forms middleware. Newsletter submissions only work on a deployed site, not against the local Vite dev server.

### File-Based Routing (TanStack Router)

Routes are defined by files in `src/routes/`:

- `__root.tsx` - Root layout wrapping all pages
- `index.tsx` - The landing page, route for `/`
- `faq.tsx` - Leftover FAQ page from the base template, not currently linked in navigation

## Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite plugins: TanStack Start, Netlify, Tailwind |
| `tsconfig.json` | TypeScript config with `@/*` path alias for `src/*` |
| `netlify.toml` | Build command, output directory, dev server settings |
| `styles.css` | Tailwind import, font imports, CSS custom properties (color tokens), keyframes |

## Development Commands

```bash
pnpm dev      # Start dev server (port 3000)
pnpm build    # Production build
```

## Conventions

### Naming
- Components: PascalCase
- Routes: kebab-case files

### Styling
- Tailwind CSS utility classes for layout/spacing/responsive breakpoints
- Inline `style` props referencing CSS custom properties for color, to keep the palette centralized in `styles.css`
- Avoid dynamically interpolated Tailwind class names (e.g. `` `md:col-start-${n}` ``) — Tailwind's static scanner won't pick them up; use literal class strings in conditional expressions instead

### TypeScript
- Strict mode enabled
- Import paths use `@/` alias
