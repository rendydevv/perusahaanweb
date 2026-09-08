import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const studioFacts = [
  { icon: 'code', label: 'Lines of Code', value: '500K+', color: 'text-[#6dffba]' },
  { icon: 'check_circle', label: 'Projects Delivered', value: '10+', color: 'text-[#7bd0ff]' },
  { icon: 'groups', label: 'Engineer Team', value: '2 Core', color: 'text-[#ffddb8]' },
  { icon: 'schedule', label: 'Years Active', value: '3+', color: 'text-[#6dffba]' },
]

const values = [
  {
    icon: 'precision_manufacturing',
    title: 'Precision Over Speed',
    desc: 'Kami tidak terburu-buru. Setiap baris kode ditulis dengan niat, setiap komponen dirancang dengan tujuan.',
    color: 'text-[#6dffba]',
  },
  {
    icon: 'handshake',
    title: 'Direct Communication',
    desc: 'Kamu berbicara langsung dengan engineer yang menulis kodenya — bukan sales rep, bukan PM perantara.',
    color: 'text-[#7bd0ff]',
  },
  {
    icon: 'architecture',
    title: 'Built to Last',
    desc: 'Kode yang kami tulis bersih, terdokumentasi, dan mudah dikembangkan di masa depan oleh siapa pun.',
    color: 'text-[#ffddb8]',
  },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      if (!sectionRef.current) return

      gsap.from('.about-header', {
        y: 30,
        autoAlpha: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
      })

      gsap.from('.about-fact', {
        y: 20,
        autoAlpha: 0,
        duration: 0.4,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.about-facts', start: 'top 80%', once: true },
      })

      gsap.from('.about-value', {
        y: 25,
        autoAlpha: 0,
        duration: 0.45,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.about-values', start: 'top 80%', once: true },
      })

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          x: 50,
          autoAlpha: 0,
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
            <div className="about-header flex flex-col gap-4" style={{ opacity: 0 }}>
              <div className="section-label">
                <span className="w-2 h-2 rounded-full bg-[#00e599]" />
                <span>Studio Identity</span>
              </div>
              <h2
                id="about-heading"
                className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight text-[#e3e1e9]"
                style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
              >
                A 2-Engineer Studio.<br />
                <span className="text-[#6dffba]">Zero Overhead.</span>
              </h2>
              <p className="text-[16px] text-[#bacbbe] leading-relaxed">
                Kami bukan agency besar dengan lapisan birokrasi. Kami adalah dua engineer yang obsesif dengan kualitas, membangun digital solutions yang benar-benar bekerja — dari arsitektur sistem hingga pixel terkecil di UI.
              </p>
            </div>

            {/* Stats grid */}
            <div className="about-facts grid grid-cols-2 gap-4">
              {studioFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="about-fact p-4 bg-[#1a1b21] rounded-xl border border-[#1e1f25] hover:border-[#3b4a41] transition-all flex flex-col gap-2"
                  style={{ opacity: 0 }}
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
              {values.map((v) => (
                <div
                  key={v.title}
                  className="about-value flex items-start gap-4 p-4 rounded-lg hover:bg-[#1a1b21] transition-all group"
                  style={{ opacity: 0 }}
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
          <div ref={imageRef} className="relative" style={{ opacity: 0 }}>
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
                        Currently available
                      </p>
                      <p className="text-[10px] text-[#849589]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        ACCEPTING NEW PROJECTS — Q4 2026
                      </p>
                    </div>
                  </div>
                  <a
                    href="#cta"
                    onClick={(e) => { e.preventDefault(); document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="btn-primary text-xs px-3 py-1.5"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </div>

            {/* Floating tech badge cards */}
            <div className="absolute -top-4 -right-4 bg-[#1e1f25] border border-[#292a2f] rounded-xl p-3 shadow-xl flex items-center gap-2">
              <span className="material-symbols-outlined text-[#6dffba] text-[16px]">code</span>
              <span className="text-[11px] font-semibold text-[#e3e1e9]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Full Stack</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#1e1f25] border border-[#292a2f] rounded-xl p-3 shadow-xl flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7bd0ff] text-[16px]">smart_toy</span>
              <span className="text-[11px] font-semibold text-[#e3e1e9]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>AI Enabled</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
