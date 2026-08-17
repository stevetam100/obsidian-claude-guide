# Obsidian + Claude setup guide

A single-page, step-by-step guide for a non-technical writer: install Obsidian and the Claude
desktop app, set up the open-source [Creator System](https://github.com/mattymostudio/creator-system)
vault, and pull years of Word / Google Docs writing into it so it can be searched, sorted, and
mined for topics.

- Next.js (App Router) · TypeScript · Tailwind v4 · pnpm
- One page: `app/page.tsx`. Prompt boxes (`components/Prompt.tsx`) have a copy button;
  each step (`components/Step.tsx`) has a checkbox saved in the browser.
- Deploy: push to `main` → Vercel auto-deploys.

```bash
pnpm install
pnpm dev
```

Live: https://obsidian-claude-guide.vercel.app
