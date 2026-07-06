# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for zin3 (じんさん) built with **React 19, TypeScript, MUI, and Vite** as a single-page app. The site displays social media profiles, blog links, git repositories, GPG key information, LT (lightning talk) history, and創作物ページ. It deploys to Cloudflare Pages.

## Key Technologies

- **React 19** + **TypeScript** — SPA
- **MUI v9** (`@mui/material`, emotion) — UI components + custom theme (auto/light/dark)
- **react-router v7** — client-side routing
- **Vite 8** — build tool / dev server
- **Vitest 4** + **React Testing Library** — tests
- **react-icons** (brand icons), **@fontsource** (self-hosted fonts)
- **pnpm** — package manager (do NOT use npm)

## Development Commands

```bash
pnpm install
pnpm dev            # dev server
pnpm build          # tsc --noEmit + vite build -> dist/
pnpm preview        # preview production build
pnpm check          # type check
pnpm test           # tests (watch)
pnpm test:run       # tests (single run)
pnpm lint           # prettier + eslint
pnpm format         # auto-format
```

## Architecture Overview

- `src/main.tsx` — entry: `createRoot` + `BrowserRouter` + `ColorModeProvider`
- `src/App.tsx` — route table
- `src/theme/` — design tokens, `createAppTheme`, `ColorModeProvider` (theme mode + localStorage)
- `src/data/` — `sections.ts` (home links), `talks.ts` (LT history)
- `src/components/` — `Layout` (header/nav/footer), `LinkCard`
- `src/pages/` — `Home`, `Lt`, `UniPostor`, `Poe`
- `public/` — static assets (favicon, icons, `.well-known/*`, `_redirects`)

### Routing

- `/` Home, `/lt` LT実績, `/create/unipostor` UniPostor, `/create/poe_plus_plus_plus_plus_plus` PoE+++++

### Styling / Theme

- MUI theme with custom palette tokens (`bd`, `bd2`, `chip`, `accent`) mapped from the design's CSS variables.
- Theme mode auto/light/dark, persisted to `localStorage['zin3cc-theme']`, `auto` follows `prefers-color-scheme`.
- Per-page `<title>`/OGP `<meta>` use React 19 native document metadata (no helmet).

### Deployment

Cloudflare Pages: build `pnpm run build`, output `dist`, SPA fallback via `public/_redirects`.

## Project-Specific Notes

- `public/profile.svg` is a placeholder avatar; swap in a real photo and update `src` in `Home.tsx`/`Poe.tsx`.
- Copyright notice shows "©zin3 2024".
- `public/.well-known/nostr.json` (nostr NIP-05) and `mantela.json` are functional; keep them.
