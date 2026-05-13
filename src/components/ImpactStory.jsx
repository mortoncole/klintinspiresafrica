import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  { image: '/impact/story1.jpg', fallback: 'from-slate-400 to-slate-600' },
  { image: '/impact/story2.jpg', fallback: 'from-orange-300 to-orange-600' },
  { image: '/impact/story3.jpg', fallback: 'from-teal-400 to-teal-700' },
]

export default function ImpactStory() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy uppercase tracking-wide text-center mb-12">
          Real Impact Story
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Slideshow card */}
          <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] flex-shrink-0">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 bg-gradient-to-br ${slide.fallback} ${
                  i === current ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundImage: `url('${slide.image}')` }}
              />
            ))}

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Text content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right gap-8">
            <blockquote className="text-brand-navy font-bold text-base sm:text-lg leading-relaxed max-w-lg">
              During our Streetmas outreach in Accra, we met children who had
              never received a packaged meal before. That day, we didn&apos;t just
              give food — we gave hope, dignity, and a reason to smile.
            </blockquote>

            <Link
              to="/gallery"
              className="px-8 py-4 rounded-xl bg-gray-200 hover:bg-gray-300 text-brand-navy font-bold text-sm transition-colors duration-200 shadow-sm"
            >
              Read More Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
