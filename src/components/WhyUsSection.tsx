import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../i18n'

gsap.registerPlugin(ScrollTrigger)

export default function WhyUsSection() {
  const { text } = useLanguage()
  const w = text.whyUs
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      if (!sectionRef.current || !gridRef.current) return
      const items = gridRef.current.querySelectorAll('.cap-item')
      gsap.set(items, { autoAlpha: 0, y: 20 })
      gsap.to(items, {
        y: 0,
        autoAlpha: 1,
        duration: 0.45,
        stagger: { each: 0.05, from: 'start' },
        ease: 'power2.out',
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
      id="why-us"
      ref={sectionRef}
      className="w-full py-20 relative"
      aria-labelledby="why-us-heading"
    >
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121318] via-[#141519] to-[#121318] pointer-events-none" aria-hidden="true" />

      <div className="container-max relative z-10">
        <div className="flex flex-col gap-4 max-w-2xl mb-14">
          <div className="section-label">
            <span className="w-2 h-2 rounded-full bg-[#00e599]" />
            <span>{w.label}</span>
          </div>
          <h2
            id="why-us-heading"
            className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight text-[#e3e1e9]"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
          >
            {w.title}
          </h2>
          <p className="text-[16px] text-[#bacbbe] leading-relaxed">
            {w.desc}
          </p>
        </div>

        {/* Capability matrix 4×3 */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {w.items.map((cap) => (
            <div
              key={cap.id}
              className="cap-item cap-card p-5 bg-[#1a1b21] rounded-lg border border-[#1e1f25] flex flex-col gap-2 hover:border-[#3b4a41] transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`material-symbols-outlined text-[20px] ${cap.color}`}>{cap.icon}</span>
                <span
                  className="text-[9px] font-bold text-[#849589] uppercase tracking-widest"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {cap.id}
                </span>
              </div>
              <h4
                className="text-[15px] font-semibold text-[#e3e1e9]"
                style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' }}
              >
                {cap.title}
              </h4>
              <p className="text-[12px] text-[#849589] leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
