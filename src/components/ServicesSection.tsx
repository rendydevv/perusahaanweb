import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 'SYS.01',
    icon: 'language',
    title: 'Web Development',
    desc: 'Corporate digital identities, high-converting product showcases, responsive portals, and custom web apps built without bloat.',
    tags: ['Next.js', 'Vite', 'Tailwind'],
    color: 'text-[#6dffba]',
    glow: 'rgba(109,255,186,0.1)',
  },
  {
    id: 'SYS.02',
    icon: 'shopping_cart',
    title: 'E-Commerce Architecture',
    desc: 'High-velocity storefronts, localized product inventory engines, frictionless checkout pipelines, and custom payment handling.',
    tags: ['Stripe Engine', 'Inventory Sync', 'Cart State'],
    color: 'text-[#7bd0ff]',
    glow: 'rgba(123,208,255,0.1)',
  },
  {
    id: 'SYS.03',
    icon: 'developer_board',
    title: 'Custom Business Systems',
    desc: 'Internal mission-critical dashboards, DMS (Document Management), NMS (Network Systems), and proprietary client operation hubs.',
    tags: ['DMS / NMS', 'Admin Ops', 'Role RBAC'],
    color: 'text-[#6dffba]',
    glow: 'rgba(109,255,186,0.1)',
  },
  {
    id: 'SYS.04',
    icon: 'neurology',
    title: 'AI & Automation',
    desc: 'Domain-specific LLM integrations, autonomous multi-step agents, document semantic search, and recurring task automation pipelines.',
    tags: ['AI Agents', 'Vector RAG', 'Pipelines'],
    color: 'text-[#ffb95f]',
    glow: 'rgba(255,185,95,0.1)',
  },
  {
    id: 'SYS.05',
    icon: 'hub',
    title: 'API & System Integration',
    desc: 'Connecting modern interfaces with legacy databases, ERP systems, Salesforce/HubSpot CRMs, custom webhooks, and third-party SaaS.',
    tags: ['REST / GraphQL', 'Webhooks', 'ETL Flow'],
    color: 'text-[#7bd0ff]',
    glow: 'rgba(123,208,255,0.1)',
  },
  {
    id: 'SYS.06',
    icon: 'view_quilt',
    title: 'UI/UX Systems Design',
    desc: 'Systematic design tokens, deterministic components, dark-mode first design languages, and ergonomics created specifically for humans.',
    tags: ['Figma Tokens', 'Design Systems', 'A11y'],
    color: 'text-[#6dffba]',
    glow: 'rgba(109,255,186,0.1)',
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      if (!sectionRef.current || !cardsRef.current) return

      const cards = cardsRef.current.querySelectorAll('.service-card-item')

      gsap.from(cards, {
        y: 40,
        autoAlpha: 0,
        duration: 0.5,
        stagger: { each: 0.08, from: 'start' },
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="w-full bg-[#0d0e13] py-20 relative"
      aria-labelledby="services-heading"
    >
      {/* Top edge decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b4a41] to-transparent" aria-hidden="true" />

      <div className="container-max">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="section-label">
              <span className="w-2 h-2 rounded-full bg-[#00e599]" />
              <span>Capabilities Spectrum</span>
            </div>
            <h2
              id="services-heading"
              className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight text-[#e3e1e9]"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
            >
              What We Build
            </h2>
            <p className="text-[16px] text-[#bacbbe] leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              From focused business websites to complex digital operating systems, we engineer
              resilient software around the specific way your business operates.
            </p>
          </div>
          <a
            href="#portfolio"
            onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="link-primary flex-shrink-0"
            id="services-view-all"
          >
            <span>View All Services</span>
            <span className="material-symbols-outlined text-[20px]">arrow_right_alt</span>
          </a>
        </div>

        {/* Services grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="service-card service-card-item p-6 bg-[#1e1f25] rounded-xl border border-[#292a2f] flex flex-col justify-between group cursor-default"
              style={{ opacity: 0 }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-11 h-11 rounded-lg bg-[#0d0e13] border border-[#292a2f] flex items-center justify-center ${svc.color} group-hover:scale-110 transition-transform duration-300`}
                    style={{ boxShadow: `0 0 16px ${svc.glow}` }}
                  >
                    <span className="material-symbols-outlined text-[22px]">{svc.icon}</span>
                  </div>
                  <span
                    className="text-[10px] font-medium text-[#849589] uppercase tracking-widest"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {svc.id}
                  </span>
                </div>

                <h3
                  className="text-[18px] font-semibold text-[#e3e1e9] group-hover:text-white transition-colors"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.015em' }}
                >
                  {svc.title}
                </h3>

                <p className="text-[13px] text-[#bacbbe] leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {svc.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-5">
                {svc.tags.map((tag) => (
                  <span key={tag} className="badge group-hover:border-[#3b4a41]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom edge decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b4a41] to-transparent" aria-hidden="true" />
    </section>
  )
}
