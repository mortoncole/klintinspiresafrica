import { Link } from 'react-router-dom'

export default function ProjectsCTA() {
  return (
    <section className="bg-brand-navy py-20 px-4 relative overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-brand-orange/10" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-white/5" />

      <div className="relative max-w-3xl mx-auto text-center">
        <span className="inline-block text-brand-orange text-xs font-bold uppercase tracking-widest mb-4 border border-brand-orange/40 rounded-full px-4 py-1">
          Get Involved
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
          Want to Support a Project?
        </h2>
        <p className="text-white/55 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Your contribution — whether financial, voluntary, or in-kind — directly fuels our next outreach and changes real lives on the ground.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/get-involved#donate"
            className="px-8 py-3 rounded-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm uppercase tracking-wide transition-colors duration-200 shadow-lg animate-pulse_cta"
          >
            Donate Now
          </Link>
          <Link
            to="/get-involved#volunteer"
            className="px-8 py-3 rounded-full bg-transparent border-2 border-white/30 hover:border-brand-orange hover:text-brand-orange text-white font-bold text-sm uppercase tracking-wide transition-all duration-200"
          >
            Volunteer
          </Link>
        </div>
      </div>
    </section>
  )
}
