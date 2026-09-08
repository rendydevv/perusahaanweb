import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#why-us' },
  { label: 'Contact', href: '#cta' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Detect active section
      const sections = ['hero', 'services', 'why-us', 'portfolio', 'process', 'tech', 'cta']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const getSectionForLink = (label: string) => {
    const map: Record<string, string> = {
      Home: 'hero',
      Services: 'services',
      Portfolio: 'portfolio',
      About: 'why-us',
      Contact: 'cta',
    }
    return map[label] || ''
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#121318]/90 backdrop-blur-xl shadow-[0_1px_16px_rgba(0,0,0,0.7)] border-b border-[#1e1f25]'
            : 'bg-transparent'
        }`}
      >
        <div className="container-max h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollToSection('#hero') }}
            className="flex items-center gap-3 group flex-shrink-0"
            aria-label="SIXCOMPANY Home"
          >
            <div className="relative">
              <img
                src="/logo.jpg"
                alt="SIXCOMPANY"
                className="h-8 w-8 object-contain rounded-lg"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-[#6dffba]/20 group-hover:ring-[#6dffba]/50 transition-all" />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="font-bold text-[15px] tracking-wider text-[#e3e1e9] uppercase"
                style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.08em' }}
              >
                SIX<span className="text-[#6dffba]">COMPANY</span>
              </span>
              <span
                className="text-[9px] tracking-widest text-[#849589] uppercase"
                style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.12em' }}
              >
                STUDIO // ENG
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === getSectionForLink(link.label)
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href) }}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Status pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-[#1a1b21] rounded border border-[#3b4a41]/50">
              <span className="status-pulse" />
              <span
                className="text-[10px] font-medium text-[#bacbbe] uppercase tracking-widest"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Available for Q2 Projects
              </span>
            </div>

            {/* CTA Button */}
            <a
              href="#cta"
              onClick={(e) => { e.preventDefault(); scrollToSection('#cta') }}
              className="btn-primary text-sm px-4 py-2 hidden sm:inline-flex"
              id="header-cta"
            >
              <span>Start a Project</span>
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 group"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span
                className={`block w-5 h-0.5 bg-[#e3e1e9] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#e3e1e9] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-[#e3e1e9] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#121318]/95 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className={`absolute top-16 left-0 right-0 border-b border-[#1e1f25] bg-[#1a1b21] px-6 pb-6 pt-4 flex flex-col gap-1 transition-all duration-300 ${
            mobileOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === getSectionForLink(link.label)
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href) }}
                className={`py-3 px-4 rounded text-[15px] font-medium transition-all duration-200 flex items-center justify-between ${
                  isActive
                    ? 'text-[#6dffba] bg-[#6dffba]/10'
                    : 'text-[#bacbbe] hover:text-[#e3e1e9] hover:bg-[#1e1f25]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="material-symbols-outlined text-[16px]">chevron_right</span>}
              </a>
            )
          })}
          <div className="pt-3 mt-1 border-t border-[#1e1f25]">
            <a
              href="#cta"
              onClick={(e) => { e.preventDefault(); scrollToSection('#cta') }}
              className="btn-primary w-full justify-center text-sm"
            >
              <span>Start a Project</span>
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
