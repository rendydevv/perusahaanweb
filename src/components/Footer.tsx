import { useLanguage, LINKS } from '../i18n'

const scrollTo = (href: string) => {
  const id = href.replace('#', '')
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const { text } = useLanguage()
  const f = text.footer
  const navLinks = f.nav
  return (
    <footer className="w-full bg-[#0d0e13] border-t border-[#1e1f25] py-16">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
              className="flex items-center gap-3 group w-fit"
              aria-label="SIXCOMPANY Home"
            >
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="SIXCOMPANY"
                  className="h-8 w-8 object-cover rounded-full opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="font-bold text-[14px] tracking-wider text-[#e3e1e9] uppercase"
                  style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.08em' }}
                >
                  SIX<span className="text-[#6dffba]">COMPANY</span>
                </span>
                <span
                  className="text-[8px] tracking-widest text-[#849589] uppercase"
                  style={{ fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.12em' }}
                >
                  STUDIO // ENG
                </span>
              </div>
            </a>

            <p className="text-[13px] text-[#849589] leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {f.desc}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#1a1b21] border border-[#292a2f] flex items-center justify-center text-[#849589] hover:text-[#6dffba] hover:border-[#3b4a41] transition-all"
                aria-label={f.github}
                title={f.github}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#1a1b21] border border-[#292a2f] flex items-center justify-center text-[#849589] hover:text-[#ffbc68] hover:border-[#3b4a41] transition-all"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#1a1b21] border border-[#292a2f] flex items-center justify-center text-[#849589] hover:text-[#6dffba] hover:border-[#3b4a41] transition-all"
                aria-label={f.linkedin}
                title={f.linkedin}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
              </a>
            </div>

            <span
              className="text-[10px] font-medium text-[#849589] uppercase tracking-widest mt-auto"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {f.copyright}
            </span>
          </div>

          {/* Navigation column */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-[10px] font-semibold text-[#e3e1e9] uppercase tracking-widest"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {f.navTitle}
            </h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className="text-[13px] text-[#849589] hover:text-[#6dffba] transition-colors w-fit"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-[10px] font-semibold text-[#e3e1e9] uppercase tracking-widest"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {f.servicesTitle}
            </h4>
            <div className="flex flex-col gap-2">
              {f.services.map((svc) => (
                <a
                  key={svc}
                  href="#services"
                  onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
                  className="text-[13px] text-[#849589] hover:text-[#6dffba] transition-colors w-fit"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {svc}
                </a>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-[10px] font-semibold text-[#e3e1e9] uppercase tracking-widest"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {f.contactTitle}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${LINKS.email}`}
                className="text-[13px] text-[#849589] hover:text-[#6dffba] transition-colors flex items-center gap-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <span className="material-symbols-outlined text-[14px]">mail</span>
                {LINKS.email}
              </a>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#849589] hover:text-[#6dffba] transition-colors flex items-center gap-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <span className="material-symbols-outlined text-[14px]">chat</span>
                {f.whatsapp} · {LINKS.whatsappDisplay}
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#849589] hover:text-[#6dffba] transition-colors flex items-center gap-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                {f.github}
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#849589] hover:text-[#6dffba] transition-colors flex items-center gap-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                {f.linkedin}
              </a>
              <span
                className="text-[11px] font-medium text-[#849589] mt-2 flex items-center gap-2"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <span className="material-symbols-outlined text-[13px]">location_on</span>
                {f.remote}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#1e1f25] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="status-pulse" />
            <span
              className="text-[10px] text-[#849589] uppercase tracking-widest"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {f.operational}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[11px] text-[#849589] hover:text-[#bacbbe] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{f.privacy}</a>
            <span className="text-[#292a2f]">·</span>
            <a href="#" className="text-[11px] text-[#849589] hover:text-[#bacbbe] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{f.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
