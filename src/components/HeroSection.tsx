import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const metricsRef = useRef<HTMLDivElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const chipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add(
      { reduceMotion: '(prefers-reduced-motion: reduce)', isDesktop: '(min-width: 768px)' },
      (context) => {
        const { reduceMotion } = context.conditions as { reduceMotion: boolean; isDesktop: boolean }

        if (!reduceMotion) {
          const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

          tl.from(chipRef.current, { y: -16, autoAlpha: 0, duration: 0.5 })
            .from(headlineRef.current, { y: 32, autoAlpha: 0, duration: 0.7 }, '-=0.2')
            .from(subRef.current, { y: 24, autoAlpha: 0, duration: 0.6 }, '-=0.4')
            .from(ctaRef.current, { y: 20, autoAlpha: 0, duration: 0.5 }, '-=0.3')
            .from(metricsRef.current, { y: 20, autoAlpha: 0, duration: 0.5 }, '-=0.3')
            .from(terminalRef.current, { x: 40, autoAlpha: 0, duration: 0.7, ease: 'power2.out' }, '-=0.7')
        }
      }
    )

    return () => mm.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="w-full relative overflow-hidden pt-10 pb-20"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden="true" />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6dffba]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#7bd0ff]/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      {/* Hero art illustration — faded background decoration */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden" aria-hidden="true">
        <img
          src="/hero-art.jpg"
          alt=""
          className="w-[60%] h-full object-cover opacity-[0.04] mix-blend-luminosity"
        />
      </div>

      <div className="container-max relative z-10">
        {/* Status chip */}
        <div ref={chipRef} className="flex items-center gap-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a1b21] rounded border border-[#3b4a41]/50">
            <span className="status-pulse" />
            <span
              className="text-[11px] font-medium text-[#bacbbe] uppercase tracking-wider"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              // SYSTEM INTEGRITY: <span className="text-[#6dffba] font-semibold">OPTIMAL</span> — 2-ENGINEER DEV STUDIO
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[#849589] text-[10px] font-medium uppercase tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <span>LATENCY: 14MS</span>
            <span>·</span>
            <span>BUILD: 2026.9.8</span>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1
              ref={headlineRef}
              className="text-[clamp(36px,6vw,56px)] font-bold leading-[1.1] tracking-[-0.04em] text-[#e3e1e9]"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              We Build Digital{' '}
              <span className="text-[#6dffba] relative">
                Solutions
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="3"
                  viewBox="0 0 100 3"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M0 1.5 Q50 0 100 1.5" stroke="#6dffba" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                </svg>
              </span>
              {' '}That Work.
            </h1>

            <p
              ref={subRef}
              className="text-[16px] leading-[1.7] text-[#bacbbe] max-w-xl"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Websites, web applications, business systems, automation, and AI-powered
              solutions — engineered with precision around your exact operational needs.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#cta"
                onClick={(e) => { e.preventDefault(); document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary"
                id="hero-start-project"
              >
                <span>Start a Project</span>
                <span className="material-symbols-outlined text-[18px]">terminal</span>
              </a>
              <a
                href="#portfolio"
                onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-secondary"
                id="hero-view-work"
              >
                <span>View Our Work</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>

            {/* Quick metrics */}
            <div ref={metricsRef} className="grid grid-cols-3 gap-4 pt-4">
              {[
                {
                  label: 'Zero Bloat',
                  value: '100% Custom',
                  sub: 'No generic templates',
                  color: 'text-[#e3e1e9]',
                },
                {
                  label: 'Communication',
                  value: 'Direct Eng',
                  sub: 'No account managers',
                  color: 'text-[#6dffba]',
                },
                {
                  label: 'Architecture',
                  value: '< 100ms',
                  sub: 'P99 response target',
                  color: 'text-[#7bd0ff]',
                },
              ].map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col gap-1 p-3 bg-[#0d0e13] rounded-lg border border-[#1e1f25] hover:border-[#3b4a41] transition-colors"
                >
                  <span
                    className="text-[10px] font-medium text-[#849589] uppercase tracking-widest"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {m.label}
                  </span>
                  <span className={`text-[18px] font-bold leading-tight ${m.color}`} style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
                    {m.value}
                  </span>
                  <span className="text-[11px] text-[#849589]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {m.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal topology card */}
          <div ref={terminalRef} className="lg:col-span-5">
            <div className="bg-[#0d0e13] rounded-xl border border-[#1e1f25] shadow-2xl overflow-hidden relative">
              {/* Ambient glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#6dffba]/8 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#1e1f25] bg-[#1a1b21]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ffb4ab] opacity-90" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbc68] opacity-90" />
                  <span className="w-3 h-3 rounded-full bg-[#00e599] opacity-90" />
                  <span
                    className="text-[10px] font-medium text-[#849589] uppercase ml-2 tracking-wider"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    topology_preview.sys
                  </span>
                </div>
                <span
                  className="text-[10px] font-bold text-[#6dffba] bg-[#6dffba]/10 px-2 py-1 rounded tracking-wider"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  LIVE PING
                </span>
              </div>

              {/* Topology nodes */}
              <div className="p-4 flex flex-col gap-3 relative">
                {/* Scan line effect */}
                <div className="terminal-scan absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" />

                {/* Node 1: Edge */}
                <div className="flex items-center justify-between p-3 bg-[#1a1b21] rounded-lg border border-[#1e1f25] hover:border-[#6dffba]/20 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#292a2f] flex items-center justify-center text-[#6dffba] group-hover:bg-[#6dffba]/10 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">dns</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-[#e3e1e9]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>API Gateway & Edge</p>
                      <p className="text-[10px] text-[#849589] tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Global CDN Routing · Anycast</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00e599] animate-pulse" />
                    <span className="text-[12px] font-semibold text-[#6dffba]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>14ms</span>
                  </div>
                </div>

                {/* Connector */}
                <div className="flex items-center justify-center py-1">
                  <span className="text-[11px] text-[#3b4a41] tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    │ [gRPC / TLS 1.3] │
                  </span>
                </div>

                {/* Node 2 split */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      label: 'Frontend UI Node',
                      name: 'Hydrated SPA/SSR',
                      detail: 'Next.js · Vite · Island',
                      color: 'text-[#7bd0ff]',
                      icon: 'devices',
                    },
                    {
                      label: 'Autonomous Worker',
                      name: 'Agent Orchestrator',
                      detail: 'Async Queue · LLM Bus',
                      color: 'text-[#ffddb8]',
                      icon: 'smart_toy',
                    },
                  ].map((node) => (
                    <div key={node.label} className="p-3 bg-[#1a1b21] rounded-lg border border-[#1e1f25] hover:border-[#3b4a41] transition-colors flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-[9px] font-bold uppercase tracking-widest ${node.color}`} style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                          {node.label}
                        </span>
                        <span className={`material-symbols-outlined text-[14px] ${node.color}`}>{node.icon}</span>
                      </div>
                      <p className="text-[13px] font-semibold text-[#e3e1e9]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{node.name}</p>
                      <p className="text-[10px] text-[#849589]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{node.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Node 3: Data */}
                <div className="flex items-center justify-between p-3 bg-[#1a1b21] rounded-lg border border-[#1e1f25] hover:border-[#7bd0ff]/20 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#292a2f] flex items-center justify-center text-[#7bd0ff] group-hover:bg-[#7bd0ff]/10 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">database</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-[#e3e1e9]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Distributed Cluster</p>
                      <p className="text-[10px] text-[#849589] tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>PostgreSQL + Redis Cache Layer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00e599] animate-pulse" />
                    <span className="text-[12px] font-medium text-[#849589]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>99.99%</span>
                  </div>
                </div>

                {/* Code fragment */}
                <div className="p-3 bg-[#1a1b21] rounded-lg border border-[#1e1f25]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-[#849589]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>worker_thread.ts</span>
                    <span className="text-[9px] font-bold text-[#6dffba] uppercase tracking-wider" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Compiled</span>
                  </div>
                  <pre className="text-[11px] leading-relaxed overflow-x-auto" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    <code>
                      <span className="text-[#7bd0ff]">const</span>
                      <span className="text-[#e3e1e9]"> pipeline = </span>
                      <span className="text-[#6dffba]">new</span>
                      <span className="text-[#e3e1e9]"> SystemPipeline({'{'}
{'\n'}  syncEngine: </span>
                      <span className="text-[#ffbc68]">'hybrid-distributed'</span>
                      <span className="text-[#e3e1e9]">,{'\n'}  telemetry: </span>
                      <span className="text-[#6dffba]">true</span>
                      <span className="text-[#e3e1e9]">,{'\n'}  maxLatency: </span>
                      <span className="text-[#7bd0ff]">50</span>
                      <span className="text-[#849589]"> /* ms */</span>
                      <span className="text-[#e3e1e9]">{'\n'}{'}'});{'\n'}</span>
                      <span className="text-[#7bd0ff]">await</span>
                      <span className="text-[#e3e1e9]"> pipeline.</span>
                      <span className="text-[#6dffba]">executeStateSync</span>
                      <span className="text-[#e3e1e9]">();</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
