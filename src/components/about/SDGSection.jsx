const sdgs = [
  {
    number: 1,
    ext: 'jpg',
    name: 'No Poverty',
    color: '#E5243B',
    bg: '#fef2f4',
    description:
      'Through food outreaches and resource donations, we directly address poverty among street-connected and vulnerable youth.',
  },
  {
    number: 2,
    ext: 'png',
    name: 'Zero Hunger',
    color: '#DDA63A',
    bg: '#fffbf0',
    description:
      'Our Streetmas outreaches and feeding drives have distributed 5,000+ meals to homeless and underprivileged communities.',
  },
  {
    number: 3,
    ext: 'jpg',
    name: 'Good Health & Well-being',
    color: '#4C9F38',
    bg: '#f2faf0',
    description:
      'From health screenings to our Pad a Girl initiative, we promote hygiene, awareness, and access to essential health resources.',
  },
  {
    number: 4,
    ext: 'jpg',
    name: 'Quality Education',
    color: '#C5192D',
    bg: '#fef2f3',
    description:
      'We equip students with supplies, mentorship, and empowerment sessions — keeping them in school and preparing them for the future.',
  },
]

export default function SDGSection() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block text-brand-orange text-xs font-bold uppercase tracking-widest mb-3 border border-brand-orange/40 rounded-full px-4 py-1">
            Global Alignment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-3">
            Our UN SDG Commitments
          </h2>
          <p className="text-gray-500 text-base max-w-xl leading-relaxed">
            Every project we run is anchored to the United Nations Sustainable Development Goals — because local action drives global change.
          </p>
        </div>

        {/* SDG Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sdgs.map((sdg) => (
            <div
              key={sdg.number}
              className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              style={{ backgroundColor: sdg.bg }}
            >
              {/* Top accent bar */}
              <div className="h-1.5 w-full" style={{ backgroundColor: sdg.color }} />

              <div className="p-6">
                {/* SDG logo */}
                <div className="w-16 h-16 mb-4">
                  <img
                    src={`/sdg/sdg-${sdg.number}.${sdg.ext}`}
                    alt={`SDG ${sdg.number} – ${sdg.name}`}
                    className="w-full h-full object-contain rounded-lg"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling.style.display = 'flex'
                    }}
                  />
                  {/* Fallback badge shown if image is missing */}
                  <div
                    className="w-16 h-16 rounded-xl items-center justify-center shadow-sm hidden"
                    style={{ backgroundColor: sdg.color }}
                  >
                    <span className="text-white font-extrabold text-xl leading-none">
                      {sdg.number}
                    </span>
                  </div>
                </div>

                {/* Goal label */}
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: sdg.color }}
                >
                  SDG {sdg.number}
                </p>
                <h3 className="text-brand-navy font-extrabold text-base leading-snug mb-3">
                  {sdg.name}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {sdg.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-gray-400 text-xs">
          Aligned with the{' '}
          <span className="font-semibold text-gray-500">
            UN 2030 Agenda for Sustainable Development
          </span>
        </p>
      </div>
    </section>
  )
}
