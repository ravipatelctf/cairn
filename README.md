# Cairn

A pnpm monorepo. Project management, minus the management overhead.

## Layout

```
cairn/
├─ apps/
│  └─ web/          # @cairn/web — Vite + React landing site
├─ packages/
│  └─ config/       # @cairn/config — shared PostCSS + oxlint config
├─ pnpm-workspace.yaml
├─ vercel.json      # Vercel build/serve config (SPA rewrites)
└─ package.json     # workspace root
```

## Prerequisites

- [pnpm](https://pnpm.io) (see `packageManager` in `package.json`)

## Getting started

```bash
pnpm install     # install all workspace deps
pnpm dev         # run the web app (Vite dev server)
pnpm build       # build the web app → apps/web/dist
pnpm preview     # preview the production build
pnpm lint        # lint every workspace package (oxlint)
```

Each script runs against `@cairn/web` via pnpm filters. To target a package
directly:

```bash
pnpm --filter @cairn/web dev
```

## Deployment (Vercel)

`vercel.json` at the repo root drives the deployment — keep the Vercel project's
**Root Directory** at the repo root. It installs with pnpm, builds `@cairn/web`,
serves `apps/web/dist`, and rewrites all paths to `index.html` so client-side
routes (e.g. `/docs`) resolve on direct navigation and refresh.
