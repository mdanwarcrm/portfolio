# DNK Personal Portfolio

A staged, content-first interactive portfolio built with Next.js, TypeScript,
and Tailwind CSS. Visual references can be integrated one section at a time
without fragmenting the design system.

## Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run check
```

## Structure

- `src/app` — routes, metadata, and global design tokens
- `src/components` — reusable presentation and interaction components
- `src/content/portfolio.ts` — verified portfolio content and section order
- `src/types/portfolio.ts` — shared content models
- `public` — optimized images, resume, and other static assets

Personal facts and links should be added only after they are supplied and
verified. Motion libraries will be introduced only when an interaction needs them.

## Visual system

- Black editorial canvas: `#050505`
- White and zinc typography hierarchy
- Selective interaction accent: `#00ff41`
- General Sans loaded from Fontshare with explicit system fallbacks
- Shared typography, spacing, glass, timing, and easing tokens in `globals.css`
- Motion is progressively reduced with `prefers-reduced-motion`

General Sans currently exposes weights 200–700 through Fontshare. Display text
uses its real 700 weight rather than relying on browser-synthesized 900 weight.
