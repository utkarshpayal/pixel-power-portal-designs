# DecentraGPU – Decentralized GPU Marketplace (UI designs)

Front-end designs for **DecentraGPU**, a concept for a decentralized marketplace where users rent GPU compute from providers. It includes a landing page, a browsable GPU marketplace, GPU detail pages, a simulated command-line terminal and a user dashboard, styled with a dark neon theme.

> **Status:** UI prototype. GPU listings, account data, balances and terminal output are mock data defined in the page components. There is no backend, wallet integration or real rental logic.

## Pages

| Route | Page | Description |
| --- | --- | --- |
| `/` | Home | Hero, platform stats and feature highlights, with a link to browse GPUs |
| `/marketplace` | Marketplace | GPU listings with search, sorting (price, performance, rating, availability) and filters |
| `/gpu/:id` | GPU Details | Overview, technical specifications and reviews tabs, plus rental duration selection |
| `/terminal` | Terminal | Simulated CLI (`decentragpu@terminal`) with system status and quick actions |
| `/dashboard` | Dashboard | Rental history, active jobs/progress, account summary and wallet balance |

### Terminal commands (simulated)

Type `help` in the terminal page to list the supported commands:

`list-gpus`, `rent <gpu-id>`, `status`, `balance`, `deploy <script>`, `logs`, `providers`, `benchmark <gpu-id>`, `clear`, `exit`

Responses are canned output generated in `src/pages/Terminal.tsx` after a short artificial delay.

## Tech stack

- [Vite](https://vitejs.dev/) + React 18 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives) in `src/components/ui`
- React Router, TanStack Query provider, lucide-react icons

## Getting started

Requirements: Node.js and npm.

```sh
npm install
npm run dev
```

The dev server is configured in `vite.config.ts` to listen on port **8080**.

### Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build into `dist/` |
| `npm run build:dev` | Build using development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

No test script is configured.

## Configuration

No environment variables are used.

## Project structure

```
src/
  App.tsx           # Routes
  pages/            # Index, Marketplace, GpuDetails, Terminal, Dashboard, NotFound
  components/       # Navigation + shadcn/ui components
  hooks/, lib/      # Toast/mobile hooks and utility helpers
```
