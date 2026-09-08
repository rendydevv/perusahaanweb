import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { num: '01', title: 'Discover', desc: 'Understand the business models, target audience, core bottlenecks, and technical requirements.' },
  { num: '02', title: 'Plan', desc: 'Define system architecture, tech stack, data schemas, milestones, and scope boundaries.' },
  { num: '03', title: 'Design', desc: 'Create user flows, ergonomic interactive components, wireframes, and design token system.' },
  { num: '04', title: 'Build', desc: 'Implement frontend components, backend endpoints, database models, integrations, and logic.' },
  { num: '05', title: 'Test', desc: 'Unit test verification, responsiveness checks, load testing, security scans, and audit pass.' },
  { num: '06', title: 'Deploy', desc: 'Production DNS switch, continuous CI/CD pipelines, SSL provisioning, and live launch review.' },
  { num: '07', title: 'Maintain', desc: 'Uptime alerts, dependency patches, ongoing feature additions, and direct engineering guidance.' },
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
    })
    return () => mm.revert()
  }, [])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="w-full py-20 relative"
      aria-labelledby="process-heading"
    >
      <div className="container-max">
        <div className="flex flex-col gap-4 max-w-2xl mb-14">
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

        {/* Linear timeline */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 relative"
        >
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-8 left-[calc(100%/14)] right-[calc(100%/14)] h-px bg-gradient-to-r from-transparent via-[#3b4a41] to-transparent z-0"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="step-item relative flex flex-col gap-3 p-4 bg-[#1a1b21] rounded-lg border border-[#1e1f25] hover:border-[#3b4a41] hover:bg-[#1e1f25] transition-all z-10"
              style={{ opacity: 0 }}
            >
              {/* Step number with green accent on first */}
              <div className="flex items-center gap-2">
                <span
                  className={`text-[13px] font-bold ${i === 0 ? 'text-[#6dffba]' : 'text-[#849589]'}`}
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {step.num}
                </span>
                {i < steps.length - 1 && (
                  <div className="lg:hidden h-px flex-1 bg-[#292a2f]" />
                )}
              </div>

              <h4
                className="text-[15px] font-semibold text-[#e3e1e9]"
                style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' }}
              >
                {step.title}
              </h4>

              <p className="text-[11px] text-[#849589] leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {step.desc}
              </p>

              {/* Active indicator for first step */}
              {i === 0 && (
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#6dffba] opacity-80 animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
