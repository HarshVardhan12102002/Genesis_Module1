# GitHub Profile Explainer

Premium, animated GitHub profile analysis app built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Recharts.

## Features

- CRED-inspired dark, premium landing and analysis experience
- GitHub profile URL input and username extraction
- API route backend for GitHub REST integration (`/api/github`)
- Insight engine for developer summary, tech stack, top repositories, personality, and complexity/activity breakdowns
- Count-up stats, scroll-reveal animations, hover glow cards, loading skeletons, typing effects
- Dynamic/lazy-loaded heavy analysis sections for smooth performance

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn-style component primitives
- lucide-react
- Recharts
- react-countup
- react-type-animation

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment:

```bash
cp .env.example .env.local
```

3. (Optional) Add `GITHUB_TOKEN` in `.env.local` for higher GitHub API rate limits.

4. Run development server:

```bash
npm run dev
```

## Routes

- `/` Landing page
- `/analysis/[username]` Animated analysis dashboard
- `/api/github?username=<username>` Analysis API endpoint

## Project Structure

- `src/app`
- `src/app/api/github`
- `src/components`
- `src/components/ui`
- `src/analysis`
- `src/lib/github`
- `src/utils/analysis`
- `src/styles`
