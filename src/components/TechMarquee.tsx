/**
 * TechMarquee — Scrolling ticker strip showing tech stack and client types.
 * Creates visual richness between the Hero and Services sections.
 */

const techItems = [
  { icon: 'code', label: 'React' },
  { icon: 'terminal', label: 'Laravel' },
  { icon: 'storage', label: 'PostgreSQL' },
  { icon: 'smart_toy', label: 'AI Agents' },
  { icon: 'cloud', label: 'Docker' },
  { icon: 'security', label: 'Cloudflare WAF' },
  { icon: 'language', label: 'Next.js' },
  { icon: 'psychology', label: 'LLM Integration' },
  { icon: 'developer_board', label: 'TypeScript' },
  { icon: 'hub', label: 'RESTful APIs' },
  { icon: 'database', label: 'Redis Cache' },
  { icon: 'deployed_code', label: 'CI/CD Pipelines' },
  { icon: 'monitor_heart', label: 'NMS Systems' },
  { icon: 'folder_managed', label: 'DMS Platforms' },
  { icon: 'shopping_cart', label: 'E-Commerce' },
  { icon: 'analytics', label: 'GA4 Analytics' },
]

// Duplicate for seamless loop
const items = [...techItems, ...techItems]

export default function TechMarquee() {
  return (
    <div
      className="w-full border-y border-[#1e1f25] bg-[#0d0e13] py-4 overflow-hidden relative"
      aria-hidden="true"
    >
      {/* Left/right fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0d0e13] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0d0e13] to-transparent z-10 pointer-events-none" />

      {/* Marquee track */}
      <div
        className="flex items-center gap-8 whitespace-nowrap"
        style={{
          animation: 'marquee 32s linear infinite',
          width: 'max-content',
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-[11px] font-medium text-[#849589] uppercase tracking-widest flex-shrink-0 group hover:text-[#6dffba] transition-colors cursor-default"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            <span className="material-symbols-outlined text-[14px] text-[#3b4a41] group-hover:text-[#6dffba] transition-colors">
              {item.icon}
            </span>
            {item.label}
            {i < items.length - 1 && (
              <span className="ml-6 text-[#292a2f]">·</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
