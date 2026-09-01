import { Link } from 'react-router-dom'

export default function ProjectsHero() {
  return (
    <section className="relative bg-brand-navy overflow-hidden">
      {/* Decorative background rings */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full border border-white/5" />
      <div className="absolute -top-12 -left-12 w-72 h-72 rounded-full border border-white/5" />
      <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full border border-brand-orange/10" />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full border border-brand-orange/10" />

      {/* Orange accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-orange-400 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-white/40 text-sm mb-8">
          <Link to="/" className="hover:text-white transition-colors duration-200">Home</Link>
          <span>/</span>
          <span className="text-brand-orange font-medium">Projects</span>
        </div>

        {/* Heading */}
        <div className="max-w-3xl">
          <span className="inline-block text-brand-orange text-xs font-bold uppercase tracking-widest mb-4 border border-brand-orange/40 rounded-full px-4 py-1">
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Projects That{' '}
            <span className="relative inline-block">
              <span className="text-brand-orange">Change Lives</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0 6 Q50 0 100 4 Q150 8 200 2" stroke="#F97316" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl">
            From feeding the homeless to empowering students, every project is a deliberate act of love for African youth and communities.
          </p>
        </div>

        {/* Quick stats strip */}
        <div className="mt-14 flex flex-wrap gap-8">
          {[
            { value: '8+', label: 'Projects Completed'},
            { value: '5000+', label: 'Meals Distributed'},
            { value: '3000+', label: 'Youth Impacted'},
            { value: '5+', label: 'Schools Reached'},
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-extrabold text-brand-orange">{value}</span>
              <span className="text-white/50 text-xs sm:text-sm font-medium mt-0.5">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
