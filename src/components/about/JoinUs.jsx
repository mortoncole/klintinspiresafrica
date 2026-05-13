import { Link } from 'react-router-dom'

export default function JoinUs() {
  return (
    <section className="bg-white border-t border-gray-100 py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-10">
          Join Us In Making Impact
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            to="/get-involved#donate"
            className="px-10 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-base transition-colors duration-200 shadow-md"
          >
            Donate
          </Link>
          <Link
            to="/get-involved#volunteer"
            className="px-10 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-base transition-colors duration-200 shadow-md"
          >
            Volunteer
          </Link>
        </div>
      </div>
    </section>
  )
}
