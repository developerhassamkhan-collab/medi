# FlowDesk — Project Management SaaS Landing Page

Built with **TypeScript + Vite** (no frameworks, pure TypeScript).

## Local Development

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework: **Vite** (auto-detected)
4. Click Deploy ✅

## Project Structure

```
src/
  components/
    nav.ts          # Sticky navigation + mobile menu
    hero.ts         # Hero section + interactive Kanban board
    features.ts     # Features grid
    how.ts          # How it works steps
    pricing.ts      # Pricing cards + billing toggle
    testimonials.ts # Testimonials + logo strip
    cta.ts          # CTA banner + footer
  data.ts           # All content data
  types.ts          # TypeScript interfaces
  style.css         # Global styles (CSS variables, responsive)
  main.ts           # App entry point
```
