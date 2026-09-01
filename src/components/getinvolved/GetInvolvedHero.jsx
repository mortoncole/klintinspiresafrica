const ways = [
  { label: 'Donate', href: '#donate' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'Partner', href: '#partner' },
  { label: 'Spread the Word', href: '#spread' },
]

export default function GetInvolvedHero() {
  return (
    <section className="relative bg-brand-navy overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-orange-400 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-brand-orange/10" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-white/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28">
        <span className="inline-block text-brand-orange text-xs font-bold uppercase tracking-widest mb-5 border border-brand-orange/40 rounded-full px-4 py-1">
          Take Action
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-3xl">
          Be Part of the{' '}
          <span className="text-brand-orange">Change</span>
        </h1>
        <p className="text-white/55 text-base sm:text-lg leading-relaxed max-w-xl mb-14">
          There are many ways to stand with us. Whether you give, serve, partner, or simply share, every action sparks hope in a young person's life.
        </p>

        {/* Quick-jump cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {ways.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl
                         bg-white/5 border border-white/10 hover:bg-brand-orange
                         hover:border-brand-orange transition-all duration-300 text-center"
            >
              <span className="text-white font-bold text-sm tracking-wide">{label}</span>
              <div className="w-5 h-0.5 bg-white/30 group-hover:bg-white rounded-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
