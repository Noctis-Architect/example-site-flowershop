# Native Flower Studio — Artisan Boutique Florist & E-Commerce Web Experience

[![Deploy to GitHub Pages](https://github.com/Noctis-Architect/example-site-flowershop/actions/workflows/deploy.yml/badge.svg)](https://github.com/Noctis-Architect/example-site-flowershop/actions/workflows/deploy.yml)
[![Demo](https://img.shields.io/badge/Live-Demo-233A29?style=flat&logo=githubpages&logoColor=white)](https://noctis-architect.github.io/example-site-flowershop/)
[![License](https://img.shields.io/badge/License-MIT-C2634B)](LICENSE)

A high-performance, zero-dependency e-commerce storefront for an independent botanical florist studio. Built from the ground up using clean vanilla JavaScript, modern CSS architecture, and fluid physics-based micro-interactions.

---

## Live Preview
Explore the interactive storefront:  
**[https://noctis-architect.github.io/example-site-flowershop/](https://noctis-architect.github.io/example-site-flowershop/)**

---

## Key Features & Highlights

- **Zero Runtime Dependencies**: Ultra-fast loading speeds without bloated frameworks or third-party libraries.
- **Physics-Based Micro-Interactions**:
  - Smooth custom cubic-bezier easings (`--ease-out-expo`, `--ease-spring`).
  - Staggered scroll reveals utilizing `IntersectionObserver`.
  - Organic floating badges and responsive card lift effects with ambient depth shadows.
  - Tactile button press feedback and animated checkout progress bars.
  - Cart counter spring badge bounce (`@keyframes badgePop`).
- **Interactive E-Commerce Workflows**:
  - **Dynamic Product Catalog**: Real-time category filtering and client-side keyword search.
  - **Quick View Modal**: Deep-dive product preview featuring image galleries, stem composition tags, tiered size upgrades, and gift card messaging.
  - **Offcanvas Slide-Out Cart**: Persistent cart state (`localStorage`), item quantity stepper, real-time tax calculation, and free delivery threshold meter.
  - **Delivery Area Validator**: Interactive ZIP code checker with real-time feedback.
  - **Consultation & Checkout Simulator**: Complete wedding consultation booking modal and order receipt generation.
- **Clean Aesthetic & Visual Discipline**:
  - 100% custom vector SVG icons (zero emoji reliance).
  - Editorial typography pairing *Cormorant Garamond* with *Plus Jakarta Sans*.
  - Refined color scheme centered on earthy botanical tones, terracotta rose, and warm alabaster.

---

## Tech Stack & Architecture

| Layer | Technology |
|---|---|
| **Markup** | Semantic HTML5, WAI-ARIA accessible dialogs & drawers |
| **Styling** | Modern CSS3, CSS Custom Properties, Flexbox & CSS Grid, Keyframe Animations |
| **Logic** | Vanilla ES6+ JavaScript (State management, DOM delegation, LocalStorage) |
| **Deployment** | GitHub Actions CI/CD automated deployment to GitHub Pages |

---

## Project Structure

```
example-site-flowershop/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD pipeline
├── assets/
│   └── images/                 # Optimized product and editorial imagery
├── css/
│   └── style.css               # Design system, layout grid, and keyframes
├── data/
│   └── products.js             # Catalog inventory and stem composition data
├── js/
│   └── app.js                  # Core state manager, UI engine, and animations
├── index.html                  # Accessible semantic layout
└── README.md                   # Documentation and showcase overview
```

---

## Local Development

No build step or Node packages required. Simply clone and serve:

```bash
# Clone the repository
git clone https://github.com/Noctis-Architect/example-site-flowershop.git

# Navigate to project directory
cd example-site-flowershop

# Run with any static HTTP server, for example:
python3 -m http.server 8000
# or
npx serve .
```

Open `http://localhost:8000` in your browser.

---

## Deployment via GitHub Actions

This repository includes a continuous deployment workflow configured under `.github/workflows/deploy.yml`. Every push to the `main` branch automatically builds and publishes the latest version to GitHub Pages.

To enable GitHub Pages in your repository settings:
1. Navigate to **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.

---

## License

MIT License. Designed and developed as a modern portfolio showcase.
