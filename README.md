# ZevZev.ai

The official marketing site for **ZevZev** — the open-source platform for digital employees.

> Build, train, deploy, and operate AI employees. **Employee as Code** for the AI workforce era.
>
> _Kubernetes manages Containers. ZevZev manages Digital Employees._

This repository is the landing site only. The ZevZev platform lives at
[github.com/GigaValue/ZevZev](https://github.com/GigaValue/ZevZev).

## Tech stack

- [Nuxt 3](https://nuxt.com) (Vue 3, Vite)
- Zero external runtime dependencies — system font stack, inline SVG icons, and
  a single global stylesheet. The site is fully static-generatable and needs no
  backend.

## Getting started

Requires **Node 18+** (developed on Node 24) and npm.

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:3000
```

## Building

```bash
npm run build      # build the Nuxt server bundle (.output/)
npm run generate   # pre-render a fully static site (.output/public/)
npm run preview    # preview the production build locally
```

`npm run generate` produces a static site in `.output/public/` suitable for any
static host (GitHub Pages, Netlify, Cloudflare Pages, S3, …). `public/CNAME`
pins the `zevzev.io` custom domain for GitHub Pages.

## Internationalization (EN / 中文)

The site ships bilingual with an in-page language toggle (`EN | 中文` in the
header) — no separate routes, so the static export stays clean. Locale is a
reactive `useState('locale')` (see `composables/useLocale.ts`); a client plugin
(`plugins/locale.client.ts`) picks the initial locale from `localStorage`,
falling back to `navigator.language`, and the choice is persisted across
reloads. Each component holds its own `en`/`zh` copy and renders the active one.
Product/brand names (ZevZev, ZevOps), all code/YAML/terminal blocks, and CLI
commands stay in English in both locales.

## Project structure

```
zevzev.io/
├── app.vue                 # app shell: header + <NuxtPage/> + footer; syncs <html lang>
├── nuxt.config.ts          # Nuxt config, <head> meta, global CSS
├── assets/css/main.css     # design tokens + global styles
├── composables/
│   └── useLocale.ts        # reactive EN/中文 locale state + persistence
├── plugins/
│   └── locale.client.ts    # initial locale from storage / navigator.language
├── pages/
│   └── index.vue           # single-page landing composition
├── components/
│   ├── SiteHeader.vue      # sticky nav + language toggle
│   ├── HeroSection.vue     # hero + Employee manifest YAML
│   ├── ConceptSection.vue  # "Employee as Code" concept + manifest anatomy
│   ├── FeatureGrid.vue     # platform modules
│   ├── LifecycleFlow.vue   # Hire → Retire step flow
│   ├── FlagshipZevOps.vue  # ZevOps flagship example
│   ├── QuickStart.vue      # quick-start terminal block
│   ├── PrinciplesSection.vue
│   ├── SiteFooter.vue
│   └── IconGithub.vue
└── public/
    ├── favicon.svg
    └── CNAME               # zevzev.io (GitHub Pages custom domain)
```

## License

Apache-2.0 · © GigaValue
