import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const capabilities = [
  { id: 'SEC.01', icon: 'shield', color: 'text-[#6dffba]', title: 'Layered Security', desc: 'SSL configuration, firewall guards, hardened servers, input validation, and automatic backup protocols.' },
  { id: 'PERF.02', icon: 'bolt', color: 'text-[#6dffba]', title: 'Extreme Performance', desc: 'Sub-second response, asset minification, 95+ Google Core Web Vitals, and edge caching pipelines.' },
  { id: 'SCALE.03', icon: 'trending_up', color: 'text-[#6dffba]', title: 'Elastic Scalability', desc: 'Stateless service architectures engineered to effortlessly ingest sudden traffic bursts and large datasets.' },
  { id: 'INT.04', icon: 'sync_alt', color: 'text-[#7bd0ff]', title: 'Native Integrations', desc: 'Deep bi-directional hooks into ERPs, payment providers, email systems, and enterprise cloud tools.' },
  { id: 'SEO.05', icon: 'travel_explore', color: 'text-[#7bd0ff]', title: 'Technical SEO', desc: 'JSON-LD structured schemas, semantic DOM hierarchy, automated XML sitemaps, and indexation controls.' },
  { id: 'DATA.06', icon: 'insights', color: 'text-[#7bd0ff]', title: 'Precision Analytics', desc: 'Server-side GA4 setup, user funnels, custom event tracking, and conversion metric dashboards.' },
  { id: 'DES.07', icon: 'palette', color: 'text-[#ffbc68]', title: 'Bespoke Design', desc: 'Tailored UI systems reflecting brand character and client workflows. Zero off-the-shelf theme clutter.' },
  { id: 'CMS.08', icon: 'edit_note', color: 'text-[#ffbc68]', title: 'Intuitive CMS', desc: 'Headless and modular content control panels allowing non-technical editors to update content seamlessly.' },
  { id: 'UX.09', icon: 'devices_other', color: 'text-[#ffbc68]', title: 'Omni-Device Polish', desc: 'Pixel-level control across mobile touchscreens, wide 4K displays, tablets, and varied viewport densities.' },
  { id: 'SLA.10', icon: 'support_agent', color: 'text-[#6dffba]', title: 'Direct Eng Support', desc: 'Direct communication channels to the actual studio founders who wrote your system\'s codebase.' },
  { id: 'OPS.11', icon: 'published_with_changes', color: 'text-[#6dffba]', title: 'Proactive Health', desc: 'Quarterly dependency refreshes, security patches, uptime monitoring, and vulnerability assessments.' },
  { id: 'STD.12', icon: 'code_blocks', color: 'text-[#6dffba]', title: 'Clean Architecture', desc: 'Strict linting, self-documenting code, modular component hierarchies, and automated CI tests.' },
]

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      if (!sectionRef.current || !gridRef.current) return
      const items = gridRef.current.querySelectorAll('.cap-item')
      gsap.from(items, {
        y: 30,
        autoAlpha: 0,
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
            <span>Engineering Standard</span>
          </div>
          <h2
            id="why-us-heading"
            className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight text-[#e3e1e9]"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
          >
            Built Beyond the Surface
          </h2>
          <p className="text-[16px] text-[#bacbbe] leading-relaxed">
            We don't just make websites look good. We engineer the robust, dependable software architecture behind them.
          </p>
        </div>

        {/* Capability matrix 4×3 */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className="cap-item cap-card p-5 bg-[#1a1b21] rounded-lg border border-[#1e1f25] flex flex-col gap-2 hover:border-[#3b4a41] transition-all"
              style={{ opacity: 0 }}
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
