import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../i18n'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const { text } = useLanguage()
  const a = text.about
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      if (!sectionRef.current) return

      gsap.set('.about-header', { autoAlpha: 0, y: 20 })
      gsap.to('.about-header', {
        y: 0,
        autoAlpha: 1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
      })

      gsap.set('.about-fact', { autoAlpha: 0, y: 15 })
      gsap.to('.about-fact', {
        y: 0,
        autoAlpha: 1,
        duration: 0.4,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.about-facts', start: 'top 80%', once: true },
      })

      gsap.set('.about-value', { autoAlpha: 0, y: 15 })
      gsap.to('.about-value', {
        y: 0,
        autoAlpha: 1,
        duration: 0.45,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.about-values', start: 'top 80%', once: true },
      })

      if (imageRef.current) {
        gsap.set(imageRef.current, { autoAlpha: 0, x: 30 })
        gsap.to(imageRef.current, {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: imageRef.current, start: 'top 75%', once: true },
        })
      }
    })
    return () => mm.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-24 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#121318] via-[#141519] to-[#121318] pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[#6dffba]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div ref={contentRef} className="flex flex-col gap-10">
            {/* Header */}
            <div className="about-header flex flex-col gap-4">
              <div className="section-label">
                <span className="w-2 h-2 rounded-full bg-[#00e599]" />
                <span>{a.label}</span>
              </div>
              <h2
                id="about-heading"
                className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight text-[#e3e1e9]"
                style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
              >
                {a.heading}<br />
                <span className="text-[#6dffba]">{a.headingAccent}</span>
              </h2>
              <p className="text-[16px] text-[#bacbbe] leading-relaxed">
                {a.intro}
              </p>
            </div>

            {/* Stats grid */}
            <div className="about-facts grid grid-cols-2 gap-4">
              {a.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="about-fact p-4 bg-[#1a1b21] rounded-xl border border-[#1e1f25] hover:border-[#3b4a41] transition-all flex flex-col gap-2"
                >
                  <span className={`material-symbols-outlined text-[20px] ${fact.color}`}>{fact.icon}</span>
                  <span className={`text-[24px] font-bold ${fact.color}`} style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.04em' }}>
                    {fact.value}
                  </span>
                  <span className="text-[11px] text-[#849589] uppercase tracking-wide" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {fact.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="about-values flex flex-col gap-4">
              {a.values.map((v) => (
                <div
                  key={v.title}
                  className="about-value flex items-start gap-4 p-4 rounded-lg hover:bg-[#1a1b21] transition-all group"
                >
                  <div className={`w-9 h-9 rounded-lg bg-[#1a1b21] group-hover:bg-[#292a2f] border border-[#292a2f] flex items-center justify-center flex-shrink-0 ${v.color} transition-colors`}>
                    <span className="material-symbols-outlined text-[18px]">{v.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-[#e3e1e9] mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {v.title}
                    </h4>
                    <p className="text-[13px] text-[#849589] leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Team illustration */}
          <div ref={imageRef} className="relative">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden border border-[#292a2f] shadow-2xl">
              <img
                src="/team.jpg"
                alt="Two engineers working together on a project"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121318]/60 via-transparent to-transparent" />

              {/* Floating status card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#0d0e13]/85 backdrop-blur-md rounded-xl p-4 border border-[#292a2f] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#6dffba]/20 flex items-center justify-center">
                      <span className="status-pulse" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#e3e1e9]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {a.available}
                      </p>
                      <p className="text-[10px] text-[#849589]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {a.accepting}
                      </p>
                    </div>
                  </div>
                  <a
                    href="#cta"
                    onClick={(e) => { e.preventDefault(); document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="btn-primary text-xs px-3 py-1.5"
                  >
                    {a.letsTalk}
                  </a>
                </div>
              </div>
            </div>

            {/* Floating tech badge cards */}
            <div className="absolute -top-4 -right-4 bg-[#1e1f25] border border-[#292a2f] rounded-xl p-3 shadow-xl flex items-center gap-2">
              <span className="material-symbols-outlined text-[#6dffba] text-[16px]">code</span>
              <span className="text-[11px] font-semibold text-[#e3e1e9]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{a.badgeFullstack}</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#1e1f25] border border-[#292a2f] rounded-xl p-3 shadow-xl flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7bd0ff] text-[16px]">smart_toy</span>
              <span className="text-[11px] font-semibold text-[#e3e1e9]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{a.badgeAI}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
