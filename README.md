# SIXCOMPANY — Digital Studio & Engineering

> We Build Digital Solutions That Work.

A premium landing page for SIXCOMPANY — a boutique technology studio engineering websites, web applications, e-commerce platforms, AI-powered solutions, automation, and digital infrastructure.

---

## 🚀 Quick Start

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Production Build

```bash
npm run build
npm run preview
```

---

## 🐳 Docker

### Build & Run (Production)

```bash
# Build and start container
docker compose up -d

# Stop container
docker compose down

# Rebuild after changes
docker compose up -d --build
```

The app will be available at [http://localhost](http://localhost)

### Development with Docker (Hot Reload)

```bash
docker compose --profile dev up app-dev
```

Available at [http://localhost:5173](http://localhost:5173)

---

## 🏗️ Project Structure

```
perusahaanweb/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Sticky nav with active section detection
│   │   ├── HeroSection.tsx     # Hero with terminal topology card
│   │   ├── ServicesSection.tsx # 6 service bento cards
│   │   ├── WhyUsSection.tsx    # 12-item capability matrix
│   │   ├── PortfolioSection.tsx# 3 featured project cards
│   │   ├── ProcessSection.tsx  # 7-stage delivery pipeline
│   │   ├── TechStackSection.tsx# Tech stack by domain
│   │   ├── CTASection.tsx      # Final CTA with contact
│   │   └── Footer.tsx          # 4-column footer
│   ├── index.css               # Design system tokens & global styles
│   ├── App.tsx                 # Root component
│   └── main.tsx                # Entry point
├── public/
│   └── logo.jpg                # Company logo
├── Dockerfile                  # Multi-stage production build
├── Dockerfile.dev              # Development container
├── docker-compose.yml          # Compose config
├── nginx.conf                  # Nginx with gzip + SPA routing
├── .github/workflows/
│   └── deploy.yml              # CI/CD GitHub Actions
└── README.md
```

---

## 🎨 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| Animation | GSAP 3 + ScrollTrigger |
| Icons | Material Symbols Outlined |
| Fonts | Space Grotesk + JetBrains Mono |
| Container | Docker (Nginx Alpine) |
| CI/CD | GitHub Actions → GHCR |

---

## 📦 Skills Used

This project follows the skills defined in `skills-lock.json`:

- `frontend-design` — Premium, distinctive interface design
- `gsap-core` + `gsap-scrolltrigger` — GSAP scroll-driven animations
- `tailwind-css-patterns` — Tailwind v4 CSS-first theming
- `seo-aeo-best-practices` — Meta tags, semantic HTML, structured data
- `web-design-guidelines` — Accessibility, performance, UX standards
- `vercel-react-best-practices` — React component architecture

---

## 🌐 GitHub Actions CI/CD

On every push to `main`:
1. Installs dependencies + runs build
2. Builds Docker image
3. Pushes to GitHub Container Registry (GHCR)

```bash
# Pull and run the published image
docker pull ghcr.io/<your-username>/perusahaanweb:latest
docker run -p 80:80 ghcr.io/<your-username>/perusahaanweb:latest
```

---

## 📄 License

© 2026 SIXCOMPANY. All rights reserved.
