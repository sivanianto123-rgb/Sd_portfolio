# Sd_portfolio

Personal portfolio website for **T Sivani** — Software Engineer (Full-Stack & AI Systems).

A single-page, framework-free site (plain HTML/CSS/JS) covering:

- **Hero** — intro, resume download, social links
- **About** — professional summary
- **Skills** — frontend, backend/APIs, databases, AI/ML systems, architecture & tools
- **Experience** — Coreillustrio, Larsen & Toubro
- **Projects** — five systems built from first principles:
  - [ModelWatch](https://github.com/sivanianto123-rgb/workspace/tree/main/modelwatch) — ML drift-detection platform (Flask + PostgreSQL)
  - [HNSW Vector Search Engine](https://github.com/sivanianto123-rgb/workspace/tree/main/vecsearch) — from-scratch approximate nearest-neighbour search, with benchmark chart
  - [Raft Consensus Simulator](https://github.com/sivanianto123-rgb/workspace/tree/main/raftsim) — deterministic distributed-systems simulation
  - [Repo Doctor CLI](https://github.com/sivanianto123-rgb/workspace/tree/main/repodoc) — git static-analysis / secret-scanning tool
  - [WAL + MVCC Transaction Engine](https://github.com/sivanianto123-rgb/workspace/tree/main/txnkv) — transactional key-value store
- **Education & Certifications**
- **Contact** — email, phone, LinkedIn, GitHub, resume download

## Tech

Plain HTML5, CSS3 (custom properties, no framework), and vanilla JS (theme toggle,
scroll reveal, animated counters, mobile nav). Fonts via Google Fonts, icons via Font Awesome
(cdnjs). No build step — it's deployable as-is.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

1. In the repo settings, go to **Pages** → **Build and deployment** → **Source: Deploy from a branch**.
2. Branch: `claude/keen-franklin-q2lyb4` (or `main`, if you've merged it there), folder: `/ (root)`.
3. Save — the site will be published at `https://sivanianto123-rgb.github.io/Sd_portfolio/`.

## Structure

```
.
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── img/vecsearch-benchmark.png
│   └── resume/T_Sivani_Resume.pdf
└── README.md
```
