<div align="center">

# GitHub Profile Explainer

### Decode Any GitHub Profile with a Premium, Animated Experience

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-0055FF?style=for-the-badge)](https://www.framer.com/motion/)
[![Netlify Status](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://github-profile-explainer-hvs.netlify.app)

### Live Demo

## [github-profile-explainer-hvs.netlify.app](https://github-profile-explainer-hvs.netlify.app)

</div>

---

## What is this?

**GitHub Profile Explainer** is a Developer intelligence app.
Paste any GitHub profile URL and get a rich, animated breakdown of:

- Developer summary and social proof
- Tech stack distribution
- Top repositories and activity signals
- Coding personality interpretation
- Codebase complexity/activity insights

---

## Core Features

- Dark premium UI with glow gradients + glassmorphism cards
- Smooth page transitions and section reveal animations
- Animated stat counters, typing effects, skeleton loaders
- GitHub REST API integration through Next.js API routes
- Insight engine for language aggregation + repository scoring
- Lazy-loaded analysis sections for better performance

---

## Tech Stack

### Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn-style reusable UI primitives
- lucide-react icons
- Recharts
- react-countup
- react-type-animation

### Backend

- Next.js Route Handlers (`/api/github`)
- GitHub REST API (`/users/{username}`, `/users/{username}/repos`)

---

## Quick Start

1. Install dependencies

```bash
npm install
```

2. Create environment file

```bash
cp .env.example .env.local
```

3. (Optional but recommended) add a GitHub token in `.env.local`

```bash
GITHUB_TOKEN=your_github_token
```

4. Start dev server

```bash
npm run dev
```

5. Open

- [http://localhost:3000](http://localhost:3000)

---

## Production Deployment (Netlify)

- **Production URL:** [https://github-profile-explainer-hvs.netlify.app](https://github-profile-explainer-hvs.netlify.app)
- **Unique Deploy URL:** [https://69a8327cef5bcc37e9951561--github-profile-explainer-hvs.netlify.app](https://69a8327cef5bcc37e9951561--github-profile-explainer-hvs.netlify.app)

---

## App Routes

- `/` Landing page
- `/analysis/[username]` Analysis dashboard
- `/api/github?username=<username>` API endpoint

---

## Project Structure

```text
src/
  app/
    api/github/
    analysis/[username]/
  components/
    sections/
    ui/
  analysis/
  lib/github/
  utils/analysis/
  styles/
```

---

## Notes

- For production reliability, set `GITHUB_TOKEN` in Netlify environment variables.
- Without token, GitHub rate limits can trigger 403 responses on heavy usage.
