# Almanac — Dispatch Landing Page

A single-page marketing site for Almanac, a dispatch and field-service ops product. Built to look like an editorial trade publication rather than a typical SaaS template: warm paper tones, an italic serif display face, asymmetric feature rows, and a scrolling testimonial strip.

## Sections

- Hero with a floating gradient accent and a rotating list of customer names
- A dark proof band with three headline stats
- Four zig-zag feature rows, each paired with a large stat callout
- An auto-scrolling testimonial marquee (pauses on hover)
- A dark call-to-action band
- A footer with a working newsletter signup form (Netlify Forms)

## Tech stack

- [TanStack Start](https://tanstack.com/start) on React 19
- TanStack Router for file-based routing (`src/routes`)
- Tailwind CSS 4 for styling, with custom CSS variables and keyframes in `src/styles.css`
- [Fraunces](https://fonts.google.com/specimen/Fraunces) (display) and [Libre Franklin](https://fonts.google.com/specimen/Libre+Franklin) (body) via Google Fonts
- [lucide-react](https://lucide.dev) for icons
- Netlify Forms for the newsletter signup, with a static skeleton at `public/newsletter-form.html` so the form is registered at build time

## Running locally

```bash
pnpm install
pnpm dev
```

The dev server runs on port 3000. Note that Netlify Forms submissions only work once deployed — they will not succeed against the local dev server.

To emulate the full Netlify environment (including forms) locally, use the Netlify CLI instead:

```bash
netlify dev
```
