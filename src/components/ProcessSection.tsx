import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { num: '01', title: 'Discover', desc: 'Understand the business models, target audience, core bottlenecks, and technical requirements.', icon: 'search' },
  { num: '02', title: 'Plan', desc: 'Define system architecture, tech stack, data schemas, milestones, and scope boundaries.', icon: 'architecture' },
  { num: '03', title: 'Design', desc: 'Create user flows, ergonomic interactive components, wireframes, and design token system.', icon: 'palette' },
  { num: '04', title: 'Build', desc: 'Implement frontend components, backend endpoints, database models, integrations, and logic.', icon: 'code' },
  { num: '05', title: 'Test', desc: 'Unit test verification, responsiveness checks, load testing, security scans, and audit pass.', icon: 'bug_report' },
  { num: '06', title: 'Deploy', desc: 'Production DNS switch, continuous CI/CD pipelines, SSL provisioning, and live launch review.', icon: 'rocket_launch' },
  { num: '07', title: 'Maintain', desc: 'Uptime alerts, dependency patches, ongoing feature additions, and direct engineering guidance.', icon: 'published_with_changes' },
]

const deliverables = [
  { label: 'Source Code', icon: 'folder_zip' },
  { label: 'Documentation', icon: 'description' },
  { label: 'Deployment', icon: 'cloud_upload' },
  { label: 'Training', icon: 'school' },
  { label: 'Post-launch Support', icon: 'support_agent' },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      if (!sectionRef.current || !stepsRef.current) return
      const items = stepsRef.current.querySelectorAll('.step-item')
      gsap.from(items, {
        y: 30,
        autoAlpha: 0,
        duration: 0.45,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      })

      gsap.from('.process-right', {
        x: 40,
        autoAlpha: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.process-right',
          start: 'top 75%',
          once: true,
        },
      })
    })
    return () => mm.revert()
  }, [])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="w-full py-24 relative"
      aria-labelledby="process-heading"
    >
      {/* Background glow */}
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-[#6dffba]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          {/* Left: Steps */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="flex flex-col gap-4 max-w-2xl">
              <div className="section-label">
                <span className="w-2 h-2 rounded-full bg-[#00e599]" />
                <span>Engineering Lifecycle</span>
              </div>
              <h2
                id="process-heading"
                className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight text-[#e3e1e9]"
                style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
              >
                From Idea to Production
              </h2>
              <p className="text-[16px] text-[#bacbbe] leading-relaxed">
                Our systematic 7-stage delivery pipeline guarantees high velocity, technical clarity, and zero surprise deliverables.
              </p>
            </div>

            {/* Steps — vertical list on mobile, 7-col grid on desktop */}
            <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="step-item relative flex items-start gap-4 p-4 bg-[#1a1b21] rounded-lg border border-[#1e1f25] hover:border-[#3b4a41] hover:bg-[#1e1f25] transition-all group"
                  style={{ opacity: 0 }}
                >
                  {/* Step number + connector line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-[#6dffba] bg-[#0d0e13] border ${i === 0 ? 'border-[#6dffba]/40' : 'border-[#292a2f]'} group-hover:border-[#6dffba]/30 transition-colors`}>
                      <span className="material-symbols-outlined text-[16px]">{step.icon}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="hidden lg:block w-px flex-1 min-h-[12px] my-1 bg-[#292a2f] group-hover:bg-[#3b4a41] transition-colors" />
                    )}
                  </div>

                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span
                        className={`text-[11px] font-bold ${i === 0 ? 'text-[#6dffba]' : 'text-[#849589]'} group-hover:text-[#6dffba] transition-colors`}
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {step.num}
                      </span>
                      <h4
                        className="text-[15px] font-semibold text-[#e3e1e9]"
                        style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' }}
                      >
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-[12px] text-[#849589] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Active indicator */}
                  {i === 0 && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#6dffba]/10 px-2 py-1 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6dffba] animate-pulse" />
                      <span className="text-[9px] font-bold text-[#6dffba] uppercase tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Active</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Deliverables + timeline visual */}
          <div className="process-right lg:col-span-4 flex flex-col gap-6" style={{ opacity: 0 }}>
            {/* What you get */}
            <div className="p-6 bg-[#1a1b21] rounded-xl border border-[#292a2f] flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#6dffba] text-[18px]">inventory_2</span>
                <h3 className="text-[14px] font-semibold text-[#e3e1e9]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  What You Get
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {deliverables.map((d) => (
                  <div key={d.label} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded bg-[#6dffba]/10 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[#6dffba] text-[14px]">{d.icon}</span>
                    </div>
                    <span className="text-[13px] text-[#bacbbe]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {d.label}
                    </span>
                    <span className="ml-auto text-[#6dffba] text-[14px] material-symbols-outlined">check</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline estimate */}
            <div className="p-6 bg-[#1a1b21] rounded-xl border border-[#292a2f] flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#7bd0ff] text-[18px]">schedule</span>
                <h3 className="text-[14px] font-semibold text-[#e3e1e9]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Typical Timeline
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { type: 'Landing Page', time: '3–7 days', color: '#6dffba', pct: 20 },
                  { type: 'Web App / DMS', time: '3–6 weeks', color: '#7bd0ff', pct: 55 },
                  { type: 'Complex System', time: '2–4 months', color: '#ffddb8', pct: 100 },
                ].map((t) => (
                  <div key={t.type} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-[#e3e1e9]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{t.type}</span>
                      <span className="text-[10px] text-[#849589]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{t.time}</span>
                    </div>
                    <div className="h-1.5 bg-[#292a2f] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${t.pct}%`, background: t.color, opacity: 0.7 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick start CTA */}
            <div className="p-5 rounded-xl border border-dashed border-[#3b4a41] flex flex-col gap-3 text-center">
              <p className="text-[13px] text-[#bacbbe]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Ready to start? We typically respond within 24 hours.
              </p>
              <a
                href="#cta"
                onClick={(e) => { e.preventDefault(); document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary justify-center text-sm"
              >
                Get a Free Estimate
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
