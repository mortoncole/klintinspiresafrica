import { useState, useEffect, useCallback, useRef } from 'react'
import { albumCategories, albums } from './galleryData'

// ─── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({ album, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)
  const touchStartX = useRef(null)

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + album.images.length) % album.images.length), [album])
  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % album.images.length), [album])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
    touchStartX.current = null
  }

  const img = album.images[current]

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4 flex-shrink-0">
        <div>
          <p className="text-white font-bold text-sm">{album.title}</p>
          <p className="text-white/40 text-xs">{current + 1} / {album.images.length}</p>
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* Gradient fallback behind image */}
        <div className={`absolute inset-0 bg-gradient-to-br ${album.fallback} opacity-40`} />
        <img
          key={current}
          src={img.src}
          alt={img.caption}
          className="relative z-10 max-w-full max-h-full object-contain"
        />

        {/* Prev arrow */}
        {album.images.length > 1 && (
          <button
            onClick={prev}
            className="absolute left-4 z-10 w-11 h-11 rounded-full bg-black/40 hover:bg-brand-orange border border-white/10 text-white flex items-center justify-center transition-all duration-200"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Next arrow */}
        {album.images.length > 1 && (
          <button
            onClick={next}
            className="absolute right-4 z-10 w-11 h-11 rounded-full bg-black/40 hover:bg-brand-orange border border-white/10 text-white flex items-center justify-center transition-all duration-200"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Bottom — caption + dots + thumbnail strip */}
      <div className="flex-shrink-0 px-5 pt-4 pb-6">
        <p className="text-white font-semibold text-sm text-center mb-4">{img.caption}</p>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mb-4">
          {album.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-6 h-2 bg-brand-orange' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail strip */}
        <div className="flex justify-center gap-2">
          {album.images.map((thumb, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
                i === current ? 'ring-2 ring-brand-orange scale-105' : 'opacity-50 hover:opacity-80'
              }`}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center bg-gradient-to-br ${album.fallback}`}
                style={{ backgroundImage: `url('${thumb.src}')` }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Album Tile ───────────────────────────────────────────────────────────────
function AlbumTile({ album, onOpen }) {
  const cover = album.images[0]

  return (
    <div
      className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer aspect-[4/3]"
      onClick={() => onOpen(album, 0)}
    >
      {/* Cover image */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-gradient-to-br ${album.fallback} transition-transform duration-500 group-hover:scale-105`}
        style={{ backgroundImage: `url('${cover.src}')` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

      {/* Top badges */}
      <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
        <span className="bg-brand-orange text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full shadow">
          {album.category}
        </span>
        <span className="bg-black/50 backdrop-blur-sm text-white/80 text-xs font-semibold px-2.5 py-1 rounded-full">
          {album.year}
        </span>
      </div>

      {/* Dot indicators across top center */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 flex gap-1">
        {album.images.map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-white/50" />
        ))}
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white font-extrabold text-lg leading-snug mb-1 group-hover:text-brand-orange transition-colors duration-200">
          {album.title}
        </h3>
        <p className="text-white/60 text-xs leading-snug mb-3">{album.subtitle}</p>

        {/* Thumbnail strip — revealed on hover */}
        <div className="flex items-center gap-1.5">
          {album.images.slice(1).map((img, i) => (
            <div
              key={i}
              className={`w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-br ${album.fallback}`}
              style={{
                backgroundImage: `url('${img.src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transitionDelay: `${i * 60}ms`,
              }}
            />
          ))}
          <span
            className="text-white/60 text-xs font-semibold ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ transitionDelay: '240ms' }}
          >
            {album.images.length} photos
          </span>
        </div>
      </div>

      {/* View hint */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

// ─── Main Grid ────────────────────────────────────────────────────────────────
export default function GalleryGrid() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All'
    ? albums
    : albums.filter((a) => a.category === active)

  const openLightbox = (album, startIndex) => setLightbox({ album, startIndex })
  const closeLightbox = () => setLightbox(null)

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {albumCategories.map((cat) => {
            const count = cat === 'All' ? albums.length : albums.filter(a => a.category === cat).length
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide border transition-all duration-200 ${
                  active === cat
                    ? 'bg-brand-orange border-brand-orange text-white shadow-md'
                    : 'bg-white border-gray-200 text-gray-500 hover:border-brand-orange hover:text-brand-orange'
                }`}
              >
                {cat} <span className="font-normal normal-case tracking-normal opacity-70">({count})</span>
              </button>
            )
          })}
        </div>

        {/* Album grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((album) => (
            <AlbumTile key={album.id} album={album} onOpen={openLightbox} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          album={lightbox.album}
          startIndex={lightbox.startIndex}
          onClose={closeLightbox}
        />
      )}
    </section>
  )
}
