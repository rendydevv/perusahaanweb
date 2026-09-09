# RSM Technologies — Digital Studio & Engineering

> **We Build Digital Solutions That Work.**

A premium, high-performance landing page for **RSM Technologies** — a boutique technology studio based in Indonesia that engineers websites, web applications, e-commerce platforms, custom business systems, and AI-powered automation.

[![Live Site](https://img.shields.io/badge/Live-Site-00e297?style=for-the-badge&logo=vercel&logoColor=white)](https://perusahaanweb.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

---

## 📋 Table of Contents

- [Features](#-features)
- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Docker Deployment](#-docker-deployment)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [SEO & Accessibility](#-seo--accessibility)
- [Cloudflare Protection](#-cloudflare-protection)
- [CI/CD](#-cicd)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- **Bilingual EN/ID** — language toggle with `react-router-dom` and a custom i18n context
- **One-page studio experience** — Hero, Services, Why Us, Portfolio, Process, Tech Stack, CTA, Footer
- **GSAP 3 scroll-driven animations** — ScrollTrigger for parallax and staggered reveals
- **Bento services grid** — 6 service cards: Websites, Web Apps, E-Commerce, Custom Systems, NMS/DMS, AI Automation
- **12-item capability matrix** — expedience, transparency, security, and precision engineering
- **Real portfolio section** — NMS, SIARSIP, and TemanBicara showcase projects
- **Dark, premium design system** — Space Grotesk + JetBrains Mono, neon accent `#00e297`
- **SEO-ready** — semantic HTML, Open Graph, Twitter cards, JSON-LD `Organization` schema, `sitemap.xml`, `robots.txt`
- **Production-hardened** — gzip, immutable cache headers, security headers, SPA routing
- **Container-first** — Docker multi-stage builds with Nginx Alpine and healthcheck

---

## 🌐 Live Demo

Visit the production site:

```
https://perusahaanweb.vercel.app
```

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| Animations | GSAP 3 + ScrollTrigger |
| Routing / i18n | react-router-dom + custom i18n context |
| Icons | Lucide React / Material Symbols |
| Fonts | Space Grotesk + JetBrains Mono |
| Container | Docker (multi-stage → Nginx Alpine) |
| CI/CD | GitHub Actions → GitHub Container Registry (GHCR) |
| Infra | Vercel / VPS + Docker + Cloudflare |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20+
- **npm** 10+

### Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (hot reload)
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Production Build

```bash
# Type-check + bundle for production
npm run build

# Preview the production build locally
npm run preview
```

---

## 🐳 Docker Deployment

### Production (single command)

```bash
# Build and start the containerized site
docker compose up -d

# Verify the container is healthy
docker compose ps

# Rebuild after code changes
docker compose up -d --build

# Stop and remove containers
docker compose down
```

The site is then available at [http://localhost](http://localhost).

### Development with Docker (Hot Reload)

```bash
docker compose --profile dev up app-dev
```

Available at [http://localhost:5173](http://localhost:5173) with volume mounts for live reloading.

---

## 🏗 Project Structure

```
perusahaanweb/
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Sticky nav with active-section detection
│   │   ├── HeroSection.tsx      # Hero with terminal topology card
│   │   ├── ServicesSection.tsx  # 6-service bento grid
│   │   ├── WhyUsSection.tsx     # 12-item capability matrix
│   │   ├── PortfolioSection.tsx # 3 featured project cards
│   │   ├── ProcessSection.tsx   # 7-stage delivery pipeline
│   │   ├── TechStackSection.tsx # Technology domains
│   │   ├── CTASection.tsx       # Final call-to-action with contact
│   │   └── Footer.tsx           # 4-column footer
│   ├── i18n.tsx                 # EN/ID language context
│   ├── App.css                  # Component-level styles
│   ├── index.css                # Design tokens & global styles
│   ├── App.tsx                  # Root component
│   └── main.tsx                 # Entry point
├── public/
│   ├── logo.png / logo.jpg      # Brand assets
│   ├── hero-art.jpg             # Open Graph image
│   ├── icons.svg                # SVG icon sprite
│   ├── portfolio/               # Project screenshots
│   ├── robots.txt
│   └── sitemap.xml
├── .github/workflows/
│   └── deploy.yml               # CI/CD pipeline
├── Dockerfile                   # Multi-stage production build
├── Dockerfile.dev               # Development container
├── docker-compose.yml           # Prod + dev compose config
├── nginx.conf                   # Nginx: gzip, caching, SPA routing, headers
├── tailwind.config.ts
├── vite.config.ts
├── index.html                   # SEO meta + structured data
└── package.json
```

---

## 🔧 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Type-check (`tsc -b`) and build the production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run oxlint over the codebase |

---

## 📦 Deployment

This site is portable across hosting providers. Two supported paths:

### 1. Vercel (recommended, simplest)

```bash
npm run build   # outputs to dist/
```

Point Vercel at the repo — it auto-detects Vite and serves `dist/`. Or deploy via `vercel --prod`.

### 2. VPS / Dedicated Server (Docker)

```bash
docker compose up -d
```

Behind an Nginx reverse proxy or directly on port 80. See [Cloudflare Protection](#-cloudflare-protection) to add WAF/DDoS/SSL on top.

---

## 🎯 SEO & Accessibility

- ✅ One `<h1>` per page, semantic landmarks (`header`, `main`, `footer`, `section`)
- ✅ `meta` title/description/keywords with Indonesian market targeting
- ✅ Open Graph (`og:`) + Twitter Card for rich link previews
- ✅ JSON-LD `Organization` schema (logo, contact point, socials, `areaServed: ID`)
- ✅ `sitemap.xml` + `robots.txt` for crawlers
- ✅ Google Search Console verification meta
- ✅ Canonical URL — `https://perusahaanweb.vercel.app/`
- ✅ Contrast-compliant dark palette, focus states, and reduced-motion support via GSAP `matchMedia`

---

## 🛡 Cloudflare Protection

Cloudflare here acts as a **shield in front of the website** — not a host. All
visitor traffic passes through Cloudflare first (proxied), so DDoS attacks,
malicious bots, and suspicious access are blocked before reaching the origin
server. SSL/HTTPS is automatic.

> ⚠️ **Prerequisite:** you must own your **own domain** (e.g. `rsmtech.com`).
> The free `*.vercel.app` domain **cannot** be fronted by Cloudflare. Buy a
> domain at Niagahoster / GoDaddy / Namecheap (from ~Rp100k/yr).

### One-time setup via dashboard (~30 min)

1. **Create an account** at https://dash.cloudflare.com (Free plan is enough).
2. **Add a site** → enter your domain → choose **Free** → **Continue**.
   Cloudflare gives you 2 **nameservers** (e.g. `abc.ns.cloudflare.com` and
   `def.ns.cloudflare.com`). **Save both.**
3. **Change nameservers** at your registrar:
   - Open your registrar panel → **DNS / Nameservers** → **Custom
     nameservers** → enter the 2 Cloudflare nameservers → save.
   - Wait until the Cloudflare dashboard shows **Active** (minutes up to 24h).
4. **Add DNS records** in Cloudflare (**DNS → Records**):
   - **Vercel hosting**: add a **CNAME record** — `Name`: `www` (and `@` if
     supported) → `Target`: `cname.vercel-dns.com` → **Proxied** (orange cloud) ✅
   - **VPS (Docker) hosting**: add an **A record** — `Name`: `@` and `www` →
     `IPv4`: the VPS IP → **Proxied** ✅
   - Make sure every record is **Proxied** (orange cloud), not DNS-only.
5. **Enable SSL** (**SSL/TLS → Overview**): set mode to **Full (strict)**.
   Certificates are issued automatically and for free.
6. **Enable protections** (**Security**):
   - **Bots**: turn on **Bot Fight Mode** (free) → **Security → Bots**
   - **WAF**: enable **Managed Rules** → **Security → WAF → Manage WAF**
   - **DDoS**: always-on by default, nothing to configure
   - **Security Level**: set **Medium** or **High** → Security → Settings
7. *(Optional)* Free **Web Analytics**: **Analytics & Logs → Web Analytics →
   Add a site** → automatic setup.

### Verify protection is active

- Open the Cloudflare dashboard → your site → **Traffic / Analytics**: if you
  see numbers & graphs, traffic is already flowing through Cloudflare.
- Attack traffic (DDoS/WAF) appears under **Security → Events**.

---

## 🔄 CI/CD

A GitHub Actions workflow (`.github/workflows/deploy.yml`) runs on every push
to `main`:

1. Installs dependencies and runs the production build
2. Builds the Docker image (multi-stage)
3. Pushes it to **GitHub Container Registry (GHCR)**

```bash
# Pull and run the published image
docker pull ghcr.io/rendydevv/perusahaanweb:latest
docker run -p 80:80 ghcr.io/rendydevv/perusahaanweb:latest
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/my-feature`)
3. Commit your changes (`git commit -m "feat: add smth"`)
4. Push to the branch (`git push origin feat/my-feature`)
5. Open a Pull Request

Please keep the codebase lint-clean (`npm run lint`) and ensure `npm run build`
passes before submitting.

---

## 📄 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for details.

© 2026 **RSM Technologies** — We Build Digital Solutions That Work.