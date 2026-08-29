import { Link } from 'react-router-dom'
import { projects } from './projectsData'

const featured = projects.find((p) => p.featured)

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0 text-brand-orange" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function FeaturedProject() {
  if (!featured) return null

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-0.5 bg-brand-orange rounded-full" />
          <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">
            {featured.upcoming ? 'Upcoming Project' : 'Featured Project'}
          </span>
        </div>

        {/* Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          <div className="flex flex-col lg:flex-row min-h-[520px]">

            {/* ── Left: image panel ── */}
            <div className="relative lg:w-1/2 min-h-[300px] lg:min-h-full overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${featured.fallback} bg-cover bg-center transition-transform duration-700 group-hover:scale-105`}
                style={{ backgroundImage: `url('${featured.image}')` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45" />

              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                <span className="bg-brand-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                  {featured.category}
                </span>
                {featured.upcoming && (
                  <span className="bg-white text-brand-navy text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow animate-pulse">
                    Upcoming
                  </span>
                )}
              </div>

              {/* Date pill — bottom of image */}
              {featured.date && (
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-orange flex-shrink-0" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-white font-bold text-sm">{featured.date}</span>
                  </div>
                </div>
              )}
            </div>

            {/* ── Right: content panel ── */}
            <div className="lg:w-1/2 bg-white flex flex-col justify-between p-8 md:p-12">
              <div>
                {/* Title */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy leading-tight mb-4">
                  {featured.title}
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
                  {featured.description}
                </p>

                {/* Activities */}
                {featured.activities?.length > 0 && (
                  <div className="mb-8">
                    <p className="text-brand-navy font-bold text-xs uppercase tracking-widest mb-4">
                      Activities
                    </p>
                    <ul className="space-y-2.5">
                      {featured.activities.map((a) => (
                        <li key={a} className="flex items-center gap-2.5 text-sm text-gray-600 font-medium">
                          <CheckIcon />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Partners */}
                {featured.partners?.length > 0 && (
                  <div className="mb-8">
                    <p className="text-brand-navy font-bold text-xs uppercase tracking-widest mb-3">
                      In Collaboration With
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {featured.partners.map((p) => (
                        <span key={p}
                          className="text-xs font-semibold text-brand-navy bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer: impact + CTA */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-orange" />
                  <span className="text-brand-navy font-bold text-sm">{featured.impact}</span>
                </div>
                <Link
                  to={featured.upcoming ? '/get-involved#donate' : '/gallery/ayls'}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm uppercase tracking-wide transition-colors duration-200 shadow-lg"
                >
                  {featured.upcoming ? 'Support This Project' : 'View Full Gallery'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
