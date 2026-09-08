import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage, LINKS } from '../i18n'

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const { text } = useLanguage()
  const c = text.cta
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      if (!cardRef.current) return
      gsap.set(cardRef.current, { autoAlpha: 0, y: 30 })
      gsap.to(cardRef.current, {
        y: 0,
        autoAlpha: 1,
        duration: 0.7,
        ease: 'power3.out',
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
      id="cta"
      ref={sectionRef}
      className="w-full py-20 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background grid */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="container-max relative z-10">
        <div
          ref={cardRef}
          className="relative p-10 lg:p-14 bg-[#1e1f25] rounded-2xl border border-[#292a2f] overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10"
        >
          {/* Ambient glow orbs */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#6dffba]/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#7bd0ff]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          {/* Left content */}
          <div className="flex flex-col gap-5 max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 text-[#6dffba] bg-[#6dffba]/10 px-3 py-1.5 rounded w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6dffba] animate-pulse" />
              <span
                className="text-[9px] font-bold uppercase tracking-widest"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {c.label}
              </span>
            </div>

            <h2
              id="cta-heading"
              className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight text-[#e3e1e9]"
              style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
            >
              {c.heading}
              <span className="text-[#6dffba]">{c.headingAccent}</span>
            </h2>

            <p className="text-[16px] text-[#bacbbe] leading-relaxed">
              {c.sub}
            </p>

            <div className="flex items-center gap-3 text-[#849589] text-[13px]">
              <span className="material-symbols-outlined text-[#6dffba] text-[18px]">verified_user</span>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {c.verified}
              </span>
            </div>

            {/* Contact details */}
            <div className="flex flex-wrap gap-4 pt-2">
              <span className="flex items-center gap-2 text-[#849589] text-[13px]" aria-disabled="true">
                <span className="material-symbols-outlined text-[16px]">close</span>
                {c.email} — {c.comingSoon}
              </span>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#bacbbe] hover:text-[#6dffba] transition-colors text-[13px]"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                {c.whatsapp} · {LINKS.whatsappDisplay}
              </a>
            </div>
          </div>

          {/* Right: CTA buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-stretch gap-4 w-full lg:w-auto lg:min-w-[220px] relative z-10 flex-shrink-0">
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center"
              id="cta-start-project"
            >
              <span>{c.startProject}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
            <a
              href="#portfolio"
              onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-secondary justify-center"
              id="cta-view-portfolio"
            >
              <span>{c.viewPortfolio}</span>
              <span className="material-symbols-outlined text-[18px]">folder_open</span>
            </a>

            {/* Mini social links */}
            <div className="flex items-center gap-3 justify-center pt-2">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1a1b21] border border-[#292a2f] flex items-center justify-center text-[#849589] hover:text-[#6dffba] hover:border-[#3b4a41] transition-all"
                aria-label={c.github}
                title={c.github}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <span
                className="w-9 h-9 rounded-lg bg-[#1a1b21] border border-[#292a2f] border-dashed flex items-center justify-center text-[#4d4f57] cursor-not-allowed select-none"
                aria-disabled="true"
                title={`${c.linkedin} — ${c.comingSoon}`}
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
