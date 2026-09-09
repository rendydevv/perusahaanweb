import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage, LINKS } from '../i18n'

gsap.registerPlugin(ScrollTrigger)

export default function PortfolioSection() {
  const { text } = useLanguage()
  const p = text.portfolio
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      if (!sectionRef.current || !cardsRef.current) return
      
      // Header animation
      gsap.set('.portfolio-header', { autoAlpha: 0 })
      gsap.fromTo('.portfolio-header',
        { y: 30 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      )

      // Cards stagger
      const cards = cardsRef.current.querySelectorAll('.project-card-item')
      gsap.fromTo(cards,
        { y: 60, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.65,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      )
    })
    return () => mm.revert()
  }, [])

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="w-full bg-[#0d0e13] py-24 relative overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b4a41] to-transparent" aria-hidden="true" />
      <div className="absolute top-40 right-0 w-80 h-80 bg-[#6dffba]/4 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#7bd0ff]/4 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container-max relative z-10">
        {/* Section header */}
        <div className="portfolio-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="section-label">
              <span className="w-2 h-2 rounded-full bg-[#00e599]" />
              <span>{p.label}</span>
            </div>
            <h2
              id="portfolio-heading"
              className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight text-[#e3e1e9]"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
            >
              {p.title}
            </h2>
            <p className="text-[16px] text-[#bacbbe] leading-relaxed">
              {p.desc}
            </p>
          </div>
          
          {/* Project count */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="flex flex-col items-end gap-1">
              <span className="text-[32px] font-bold text-[#6dffba]" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.04em' }}>3</span>
              <span className="text-[10px] text-[#849589] uppercase tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{p.featuredLabel}</span>
            </div>
            <div className="w-px h-10 bg-[#292a2f]" />
            <div className="flex flex-col items-end gap-1">
              <span className="text-[32px] font-bold text-[#7bd0ff]" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.04em' }}>10+</span>
              <span className="text-[10px] text-[#849589] uppercase tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{p.totalLabel}</span>
            </div>
          </div>
        </div>

        {/* Project cards */}
        <div ref={cardsRef} className="flex flex-col gap-6">
          {p.items.map((project, i) => (
            <article
              key={project.id}
              className="project-card-item group relative rounded-2xl border border-[#292a2f] overflow-hidden transition-all duration-300 hover:border-[#3b4a41]"
              style={{
                background: project.accentBg,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${project.accent}08, transparent 40%)` }}
              />

              <div className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
                {/* Image panel */}
                <div className="relative w-full lg:w-[52%] h-64 lg:h-auto overflow-hidden bg-[#1a1b21] flex-shrink-0">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.subtitle}`}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 ${i % 2 === 0 ? 'bg-gradient-to-r from-transparent to-[#0d0e13]/40' : 'bg-gradient-to-l from-transparent to-[#0d0e13]/40'}`} />
                  
                  {/* Category badge on image */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider ${project.categoryColor} ${project.categoryBg} backdrop-blur-sm`}
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {project.type}
                    </span>
                  </div>

                  {/* Stats overlay bottom */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="flex flex-col gap-0.5 bg-[#0d0e13]/70 backdrop-blur-sm px-3 py-2 rounded-lg">
                        <span className={`text-[15px] font-bold ${project.categoryColor}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {stat.value}
                        </span>
                        <span className="text-[9px] text-[#849589] uppercase tracking-wide" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content panel */}
                <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    {/* Meta row */}
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[9px] font-bold text-[#849589] uppercase tracking-widest"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {project.client}
                      </span>
                      <span
                        className="text-[9px] font-bold text-[#849589] uppercase tracking-widest flex items-center gap-1.5"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00e599]" />
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3
                        className="text-[clamp(22px,3vw,28px)] font-bold text-[#e3e1e9] mb-1 group-hover:text-white transition-colors"
                        style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.025em' }}
                      >
                        {project.title}
                      </h3>
                      <p className={`text-[13px] font-medium ${project.categoryColor}`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-[14px] text-[#bacbbe] leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {project.desc}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span key={tag} className="badge">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#292a2f]">
                    <span
                      className="text-[10px] font-medium text-[#849589] uppercase tracking-widest"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {project.id}
                    </span>
                    <a
                      href={`${LINKS.whatsapp}?text=${encodeURIComponent(p.inspectMessage.replace('{project}', project.title))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`link-primary text-[13px] ${project.categoryColor} hover:opacity-80`}
                      id={`portfolio-case-${project.id.toLowerCase()}`}
                    >
                      <span>{p.inspect}</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom: "More projects" teaser */}
        <div className="mt-12 p-6 rounded-xl border border-dashed border-[#292a2f] flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-[#3b4a41] transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#1e1f25] border border-[#292a2f] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#849589] text-[20px]">folder_open</span>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[#e3e1e9]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {p.moreTitle}
              </p>
              <p className="text-[12px] text-[#849589]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {p.moreDesc}
              </p>
            </div>
          </div>
          <a
            href="#cta"
            onClick={(e) => { e.preventDefault(); document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-secondary text-sm flex-shrink-0"
          >
            <span>{p.requestPortfolio}</span>
            <span className="material-symbols-outlined text-[16px]">mail</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b4a41] to-transparent" aria-hidden="true" />
    </section>
  )
}
