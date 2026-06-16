import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const DURATION = 5000
const AYLS_DURATION = 60000

const slides = [
  {
    image: '/AYLS.jpg',
    badge: 'Summit · August 2026',
    headline: 'African Young Leaders',
    accent: 'Summit.',
    sub: 'SAT. 29TH AUG at COFKANS CONFERENCE HALL — Join us for the inaugural African Young Leaders Summit: "The Future is Now: Developing Africa\'s Next Generation of Leaders and Policymakers." Free registration, limited slots.',
    primary: { label: 'Register Now', href: 'https://forms.gle/ij8TcTPQU5gz8QAZA', isExternal: true },
    secondary: null,
  },
  {
    image: '/gallery/padagirl/wide5.JPG',
    badge: 'Health · May 2026',
    headline: 'Pad a Girl',
    accent: 'Mission Complete.',
    sub: '500+ JHS girls reached at Independence School Park, Obuasi East — pads distributed, hygiene education delivered.',
    primary: { label: 'See the Gallery', to: '/gallery' },
    secondary: { label: 'Support Us', to: '/get-involved#donate' },
  },
  {
    image: '/hero-bg.jpg',
    badge: 'Our Mission',
    headline: 'Inspiring Hope.',
    accent: 'Changing Lives.',
    sub: 'Klint Inspires empowers African youth and communities through education, outreach, and compassion.',
    primary: { label: 'View Our Projects', to: '/projects' },
    secondary: { label: 'Donate Now', to: '/get-involved#donate' },
  },
  {
    image: '/projects/streetmas2.jpg',
    badge: 'Outreach · 2025',
    headline: '1000+ Lives Touched',
    accent: 'This Christmas.',
    sub: 'Streetmas 2.0 brought meals, gifts, and hope to street-connected youth across Accra — bigger and bolder than ever.',
    primary: { label: 'See the Impact', to: '/projects' },
    secondary: { label: 'Support Us', to: '/get-involved#donate' },
  },
  {
    image: '/projects/edu1.jpg',
    badge: 'Outreach · 2023',
    headline: 'Because Every Child',
    accent: 'Deserves to Smile.',
    sub: 'Elite Day with the Orphans brought joy, gifts, and unforgettable memories to the Adullam Orphanage in Obuasi.',
    primary: { label: 'See Our Work', to: '/projects' },
    secondary: { label: 'Donate Now', to: '/get-involved#donate' },
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef(null)

  const goTo = (i) => setCurrent(i)
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  useEffect(() => {
    if (paused) return
    const duration = current === 0 ? AYLS_DURATION : DURATION
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, duration)
    return () => clearInterval(intervalRef.current)
  }, [paused, current])

  const slide = slides[current]

  return (
    <section
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background layers — crossfade */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${s.image}')` }}
        />
      ))}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(10,18,35,0.85) 0%, rgba(10,18,35,0.60) 55%, rgba(10,18,35,0.30) 100%)',
        }}
      />

      {/* Slide content — key forces re-mount → restarts animation */}
      <div className="relative z-10 flex flex-col justify-center flex-1 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-36">
          <div key={current} className="max-w-2xl animate-slide_up">
            {/* Badge */}
            <span className="inline-block text-brand-orange text-xs font-bold uppercase tracking-widest mb-5 border border-brand-orange/50 rounded-full px-4 py-1">
              {slide.badge}
            </span>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold italic leading-tight text-white drop-shadow-lg mb-4">
              {slide.headline}{' '}
              <span className="text-brand-orange not-italic">{slide.accent}</span>
            </h1>

            {/* Sub */}
            <p 
              className={`text-base sm:text-lg text-white/80 mb-10 max-w-md leading-relaxed ${
                current === 0 ? 'font-bold' : 'font-medium'
              }`}
            >
              {slide.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              {slide.primary.isExternal ? (
                <a
                  href={slide.primary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 rounded-full bg-brand-orange text-white font-bold text-sm sm:text-base uppercase tracking-wide hover:bg-brand-orange-dark transition-colors duration-200 shadow-lg animate-pulse_cta"
                >
                  {slide.primary.label}
                </a>
              ) : (
                <Link
                  to={slide.primary.to}
                  className="px-7 py-3 rounded-full bg-brand-orange text-white font-bold text-sm sm:text-base uppercase tracking-wide hover:bg-brand-orange-dark transition-colors duration-200 shadow-lg"
                >
                  {slide.primary.label}
                </Link>
              )}
              {slide.secondary && (
                <Link
                  to={slide.secondary.to}
                  className="px-7 py-3 rounded-full border-2 border-white/40 hover:border-brand-orange hover:text-brand-orange text-white font-bold text-sm sm:text-base uppercase tracking-wide transition-all duration-200"
                >
                  {slide.secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3">
          {/* Dot indicators */}
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-400 ${
                i === current
                  ? 'w-8 bg-brand-orange'
                  : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}

          {/* Slide counter */}
          <span className="ml-2 text-white/40 text-xs font-semibold tabular-nums">
            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>

          {/* Prev / Next arrows */}
          <div className="ml-auto flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-full border border-white/25 hover:border-brand-orange hover:text-brand-orange text-white/70 flex items-center justify-center transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-9 h-9 rounded-full border border-white/25 hover:border-brand-orange hover:text-brand-orange text-white/70 flex items-center justify-center transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress bar — key resets the animation on each slide change */}
        <div className="mt-4 h-0.5 w-full bg-white/10">
          <div
            key={`${current}-${paused}`}
            className="h-full bg-brand-orange"
            style={
              paused
                ? { width: '0%' }
                : {
                    animation: `hero_progress ${current === 0 ? AYLS_DURATION : DURATION}ms linear forwards`,
                  }
            }
          />
        </div>
      </div>
    </section>
  )
}
