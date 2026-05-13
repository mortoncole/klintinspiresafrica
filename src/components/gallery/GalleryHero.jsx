import { albums } from './galleryData'

export default function GalleryHero() {
  return (
    <section className="relative bg-brand-navy overflow-hidden">
      {/* Orange top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-orange-400 to-transparent" />

      {/* Decorative rings */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-brand-orange/10" />
      <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full border border-brand-orange/10" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-white/5" />

      {/* Floating image strip — decorative */}
      <div className="absolute inset-y-0 right-0 w-1/3 hidden lg:flex flex-col gap-1 overflow-hidden opacity-20">
        {albums.slice(0, 6).map((album) => (
          <div
            key={album.id}
            className={`flex-1 bg-gradient-to-br ${album.fallback} bg-cover bg-center`}
            style={{ backgroundImage: `url('${album.images[0].src}')` }}
          />
        ))}
        {/* gradient fade so it blends left */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <span className="inline-block text-brand-orange text-xs font-bold uppercase tracking-widest mb-5 border border-brand-orange/40 rounded-full px-4 py-1">
          Visual Stories
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-2xl">
          Every Photo Tells a{' '}
          <span className="text-brand-orange">Story of Impact</span>
        </h1>

        <p className="text-white/55 text-base sm:text-lg leading-relaxed max-w-xl mb-12">
          Moments captured from our outreaches, empowerment sessions, and community work across Ghana — real people, real change.
        </p>

        {/* Stats strip */}
        <div className="flex flex-wrap gap-10">
          {[
            { value: `${albums.length * 5}+`, label: 'Photos Captured' },
            { value: '5+', label: 'Projects Captured' },
            { value: '5+', label: 'Years of Impact' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span className="text-2xl font-extrabold text-brand-orange">{value}</span>
              <span className="text-white/45 text-xs font-medium mt-0.5">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
