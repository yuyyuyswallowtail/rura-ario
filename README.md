# RURA — Inspired by ARIO Law

> **Dummy portfolio project.** RURA adalah perusahaan hukum fiktif yang dibuat sebagai studi desain dan latihan front-end. Project ini bukan firma hukum atau layanan nyata.

🔗 Inspirasi desain: [ARIO Law](https://ario.law/en/press_center/)

## About

RURA mengeksplorasi **editorial legal web design** yang terinspirasi dari ARIO Law, dengan identitas dan konten yang sepenuhnya berbeda.

Fokus desain:

- Oversized typography
- Minimal navigation
- Black & white layout
- Large whitespace
- Asymmetric grid
- Grayscale photography
- Editorial cards
- Smooth motion
- Blue gradient footer
- Responsive layout

RURA tidak berafiliasi dengan ARIO Law dan tidak menggunakan logo, foto, copywriting, atau aset dari situs aslinya.

## Features

- Responsive homepage
- About
- Practice areas
- Team
- Press Center
- Dynamic press articles
- Contact form
- Framer Motion animations
- Page transitions
- Scroll reveal
- Image reveal
- Hover interactions
- SEO metadata
- OpenGraph
- Reduced-motion support
- Unsplash photography

## Routes

| Route | Description |
| --- | --- |
| `/` | Homepage |
| `/about` | About |
| `/practice` | Practice areas |
| `/team` | Team |
| `/press` | Press Center |
| `/press/[slug]` | Press article |
| `/contact` | Contact |

## Tech Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide React · React Hook Form · Zod · Three.js · React Three Fiber · Sharp · Biome · Bun

## Images

Images are sourced from Unsplash and configured in:

`src/data/images.ts`

Images include descriptive alt text and captions. ARIO Law images and assets are not used.

## Development

```bash
bun install
bun run dev
```

Open:

`http://localhost:3000`

Quality checks:

```bash
bun run format
bun run lint
bun run build
```

## Disclaimer

All RURA company information, team members, clients, articles, awards, and contact details are fictional.

The contact form is a demo and does not send or store real messages.

This project does not provide legal advice and is not affiliated with ARIO Law.

## Credits

**Design inspiration:** [ARIO Law](https://ario.law/en/press_center/)

**Photography:** [Unsplash](https://unsplash.com/)

**Framework:** Next.js

**UI & Motion:** React · Tailwind CSS · Framer Motion

**Tooling:** Bun · Biome

## License

Created for portfolio and educational purposes.

RURA is a fictional brand. ARIO Law and its trademarks, identity, and original assets belong to their respective owners.
