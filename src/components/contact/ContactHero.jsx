export default function ContactHero() {
  return (
    <section className="relative bg-brand-navy overflow-hidden">
      {/* Orange top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-orange-400 to-transparent" />

      {/* Decorative rings */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-brand-orange/10" />
      <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full border border-brand-orange/10" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full border border-white/5" />
      <div className="absolute bottom-0 left-1/2 w-px h-16 bg-gradient-to-b from-transparent to-brand-orange/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28">
        <span className="inline-block text-brand-orange text-xs font-bold uppercase tracking-widest mb-5 border border-brand-orange/40 rounded-full px-4 py-1">
          Reach Out
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 max-w-2xl">
          Let&apos;s Start a{' '}
          <span className="text-brand-orange">Conversation</span>
        </h1>
        <p className="text-white/55 text-base sm:text-lg leading-relaxed max-w-xl">
          Whether you want to partner, volunteer, donate, or just say hello, we'd love to hear from you. Every message matters.
        </p>
      </div>
    </section>
  )
}
