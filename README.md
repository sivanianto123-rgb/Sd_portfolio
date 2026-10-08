# Sd_portfolio

Personal landing page for **T Sivani** — Software Engineer (Full-Stack & AI Systems).

A full-screen, animated hero: a background video, minimal black-and-white type, and a
slide-in menu with contact links (GitHub, LinkedIn, email, resume).

## Tech

React 19 + Vite, animated with [`motion`](https://motion.dev) (Framer Motion's successor
package), icons from `lucide-react`. Plain CSS — no Tailwind. Font is Inter (300–600) from
Google Fonts.

## Run locally

```bash
npm install
npm run dev
# open the printed localhost URL
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Deploy to GitHub Pages

Deployment is automatic via `.github/workflows/deploy.yml`: every push to `main` (or
`claude/keen-franklin-q2lyb4`) builds the site and publishes it with GitHub's
`actions/deploy-pages`.

One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**
(not "Deploy from a branch"). After that, every push redeploys automatically. The site is
served at `https://sivanianto123-rgb.github.io/Sd_portfolio/`, which is also why
`vite.config.js` sets `base: "/Sd_portfolio/"`.

## Structure

```
.
├── index.html              Vite entry point
├── vite.config.js
├── public/
│   └── resume/T_Sivani_Resume.pdf
├── src/
│   ├── main.jsx
│   ├── App.jsx              hero, navbar, menu overlay
│   ├── App.css
│   └── index.css            resets + font
└── .github/workflows/deploy.yml
```
