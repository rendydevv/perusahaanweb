import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 'INFRA-CORE',
    status: 'PRODUCTION',
    category: 'Network Monitoring (NMS)',
    categoryColor: 'text-[#6dffba]',
    title: 'PulseOps Telemetry',
    desc: 'Enterprise real-time server metrics dashboard with millisecond latency telemetry, automated threshold alerts, and incident dispatching.',
    tags: ['TypeScript', 'Go', 'InfluxDB', 'Tailwind'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChjujG0CXRjDckvn-nuUNE3wQJeQVLxwD9IOHSc5f_LhG8a8k9NvZV_3fJ1pH0mWvpTbqvf4Q88tz8rUAHx6CQ4igYQfWXTXA_11bZZYipdFqlGupLnvFgc4HIIBNTxWZxMhhg2z-EwLKQhYiOdUyKwawLFm-vWLD8I8q0FAgne0zCibuo9Qqvu3apPSZSS-LKKA5RHo3A11K9PMB11O1SS7qr2_bXqp5yQ4PspEoR1VHhwtgl9Yf-fA',
    accent: '#6dffba',
  },
  {
    id: 'AURA-LABS',
    status: 'GLOBAL',
    category: 'High-Volume E-Commerce',
    categoryColor: 'text-[#7bd0ff]',
    title: 'Aura Commerce Platform',
    desc: 'Headless multi-currency storefront delivering 400ms page transitions, real-time inventory locking, and zero checkout abandonment.',
    tags: ['Next.js', 'Stripe API', 'PostgreSQL', 'Redis'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB89tdhpqsiKL8Qr9JkFP_IgVYJ6rmwDS4hC2hkwUSkyE-1bHF-o7SmXXAKPzo_wDUrxD5jviSfET3kjxG73bmQu5JJR5TYWmwR-M2N_mKaqWbF4m5BJoXYZIPwMCpjO1wRGwyuyCS1eBMfuk4JTCtoMyBS2cvvL8FIVyIkTIaGensoaLs4Wj2m4Xd5Lkzqo3ZVgt42OgQQLVQcFKX3igOC2r8CkK505XY94TZ2cEhvX9L7Nnmn6T8E-g',
    accent: '#7bd0ff',
  },
  {
    id: 'VERITAS-CORP',
    status: 'ENTERPRISE',
    category: 'DMS & AI Extraction',
    categoryColor: 'text-[#ffddb8]',
    title: 'DocuFlow AI Suite',
    desc: 'Intelligent document ingestion engine equipped with high-accuracy OCR, semantic entity validation, and automatic ERP export workflows.',
    tags: ['Python', 'FastAPI', 'React', 'LLM Embeddings'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDN370hJgivGSD-v-LfrOQfUUqvnirQtDOTHYhNQq25gvpJHUX4cRLQXehcszStaCJUHtC4x1Ar1Wl1OjpxzfFz2QUGiMRBaZwW4TAYUraJ6i4vvUy5UHlaGIhXVa9welblRugEsxGCLtnR3_frAlqMGSTDFGoAS2OICJOXbg51zGokkGSef3HY8ixT7v1mOmBi-QG2W00hJHyvd6l3hXvvglnXoJAxY8n9HjQQf6dyG3j3Advh93x1Vg',
    accent: '#ffddb8',
  },
]

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      if (!sectionRef.current || !cardsRef.current) return
      const cards = cardsRef.current.querySelectorAll('.project-card-item')
      gsap.from(cards, {
        y: 50,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      })
    })
    return () => mm.revert()
  }, [])

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="w-full bg-[#0d0e13] py-20 relative"
      aria-labelledby="portfolio-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b4a41] to-transparent" aria-hidden="true" />

      <div className="container-max">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="section-label">
              <span className="w-2 h-2 rounded-full bg-[#00e599]" />
              <span>Production Deployments</span>
            </div>
            <h2
              id="portfolio-heading"
              className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight text-[#e3e1e9]"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
            >
              Selected Work
            </h2>
            <p className="text-[16px] text-[#bacbbe] leading-relaxed">
              A selection of custom websites, applications, and digital business systems we've engineered.
            </p>
          </div>
          <a
            href="#"
            className="link-primary flex-shrink-0"
            id="portfolio-view-all"
          >
            <span>View All Projects</span>
            <span className="material-symbols-outlined text-[20px]">arrow_right_alt</span>
          </a>
        </div>

        {/* Projects grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card project-card-item bg-[#1e1f25] rounded-xl overflow-hidden border border-[#292a2f] flex flex-col group"
              style={{ opacity: 0 }}
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden bg-[#292a2f]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1f25]/60 to-transparent" />
                {/* Category badge */}
                <div
                  className="absolute top-3 left-3 px-2 py-1 bg-[#0d0e13]/80 backdrop-blur rounded-lg"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  <span className={`text-[9px] font-bold uppercase tracking-wider ${project.categoryColor}`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[9px] font-bold text-[#849589] uppercase tracking-widest"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      CLIENT: {project.id}
                    </span>
                    <span
                      className="text-[9px] font-bold text-[#849589] uppercase tracking-widest"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      STATUS: {project.status}
                    </span>
                  </div>

                  <h3
                    className="text-[18px] font-semibold text-[#e3e1e9] group-hover:text-white transition-colors"
                    style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.015em' }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-[13px] text-[#bacbbe] leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge">{tag}</span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="link-primary text-[13px] group-hover:gap-2 transition-all"
                    id={`portfolio-inspect-${project.id.toLowerCase()}`}
                  >
                    <span>Inspect System Study</span>
                    <span className="material-symbols-outlined text-[15px]">chevron_right</span>
                  </a>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, transparent, ${project.accent}40, transparent)` }}
              />
            </article>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b4a41] to-transparent" aria-hidden="true" />
    </section>
  )
}
