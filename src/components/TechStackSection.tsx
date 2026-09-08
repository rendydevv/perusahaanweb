import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const domains = [
  {
    title: 'Frontend Systems',
    icon: 'layers',
    color: 'text-[#7bd0ff]',
    tags: ['React', 'Vite', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Compute',
    icon: 'terminal',
    color: 'text-[#6dffba]',
    tags: ['Laravel', 'Django', 'PHP 8.3+', 'Python', 'Node.js'],
  },
  {
    title: 'Database & Caching',
    icon: 'storage',
    color: 'text-[#ffbc68]',
    tags: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis Cache'],
  },
  {
    title: 'AI & Cognitive Engines',
    icon: 'smart_toy',
    color: 'text-[#6dffba]',
    tags: ['LLM Integration', 'AI APIs', 'AI Agents', 'Autonomous Workflows'],
  },
  {
    title: 'Infrastructure & DevOps',
    icon: 'cloud',
    color: 'text-[#7bd0ff]',
    tags: ['Linux / Ubuntu', 'Docker Containers', 'Cloudflare WAF', 'CI/CD Pipelines'],
  },
  {
    title: 'Integrations & Protocols',
    icon: 'sync',
    color: 'text-[#ffbc68]',
    tags: ['RESTful APIs', 'Webhooks', 'Payment Gateways', 'Third-Party SaaS'],
  },
]

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      if (!sectionRef.current || !gridRef.current) return
      const cards = gridRef.current.querySelectorAll('.tech-card')
      gsap.from(cards, {
        y: 30,
        autoAlpha: 0,
        duration: 0.5,
        stagger: { each: 0.08 },
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
      id="tech"
      ref={sectionRef}
      className="w-full bg-[#0d0e13] py-20 relative"
      aria-labelledby="tech-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b4a41] to-transparent" aria-hidden="true" />

      <div className="container-max">
        <div className="flex flex-col gap-4 max-w-2xl mb-14">
          <div className="section-label">
            <span className="w-2 h-2 rounded-full bg-[#00e599]" />
            <span>Stack Discipline</span>
          </div>
          <h2
            id="tech-heading"
            className="text-[clamp(28px,4vw,40px)] font-bold tracking-tight text-[#e3e1e9]"
            style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.03em' }}
          >
            Built With Modern Technology
          </h2>
          <p className="text-[16px] text-[#bacbbe] leading-relaxed">
            We leverage modern, battle-tested tools selected for deterministic reliability, speed, and long-term maintainability.
          </p>
        </div>

        {/* Domain grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="tech-card p-6 bg-[#1e1f25] rounded-xl border border-[#292a2f] flex flex-col gap-5 hover:border-[#3b4a41] transition-all group"
              style={{ opacity: 0 }}
            >
              <div className="flex items-center justify-between">
                <h3
                  className="text-[15px] font-semibold text-[#e3e1e9]"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.01em' }}
                >
                  {domain.title}
                </h3>
                <span className={`material-symbols-outlined text-[20px] ${domain.color} group-hover:scale-110 transition-transform`}>
                  {domain.icon}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {domain.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-[#0d0e13] text-[#e3e1e9] rounded border border-[#292a2f] hover:border-[#3b4a41] transition-colors"
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '11px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b4a41] to-transparent" aria-hidden="true" />
    </section>
  )
}
