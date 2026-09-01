function TargetIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5 flex-shrink-0">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="w-5 h-5 flex-shrink-0">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

export default function Purpose() {
  return (
    <section className="bg-gray-200 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold italic text-brand-navy text-center mb-12">
          Our Purpose
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-5">
            <div className="flex items-center gap-2 text-brand-navy font-bold text-xl">
              <TargetIcon />
              <span>Mission</span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              To inspire, empower, and equip African youth through mindset
              development, health awareness, and personal growth, helping them
              discover themselves and become their best.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-5">
            <div className="flex items-center gap-2 text-brand-navy font-bold text-xl">
              <GlobeIcon />
              <span>Vision</span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              To raise a generation of self-aware, purpose-driven African youth
              who maximize their potential and create lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
