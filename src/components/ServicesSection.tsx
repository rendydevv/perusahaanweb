import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../i18n'

gsap.registerPlugin(ScrollTrigger)

export default function ServicesSection() {
  const { text } = useLanguage()
  const s = text.services
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      if (!sectionRef.current || !cardsRef.current) return

      const cards = cardsRef.current.querySelectorAll('.service-card-item')
      gsap.set(cards, { autoAlpha: 0, y: 30 })

      gsap.to(cards, {
        y: 0,
        autoAlpha: 1,
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
              <span>{s.label}</span>
            </div>
            <h2
              id="services-heading"
              className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight text-[#e3e1e9]"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
            >
              {s.title}
            </h2>
            <p className="text-[16px] text-[#bacbbe] leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {s.desc}
            </p>
          </div>
          <a
            href="#portfolio"
            onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="link-primary flex-shrink-0"
            id="services-view-all"
          >
            <span>{s.cta}</span>
            <span className="material-symbols-outlined text-[20px]">arrow_right_alt</span>
          </a>
        </div>

        {/* Services grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.items.map((svc) => (
            <div
              key={svc.id}
              className="service-card service-card-item p-6 bg-[#1e1f25] rounded-xl border border-[#292a2f] flex flex-col justify-between group cursor-default"
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
