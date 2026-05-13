export default function FounderStory() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">

        {/* Left — founder photo + name */}
        <div className="w-full lg:w-5/12 flex-shrink-0">
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-200 aspect-[3/4]">
            <img
              src="/about/founder.jpg"
              alt="Clinton Osei Addo"
              className="w-full h-full object-cover object-top"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
          {/* Name tag */}
          <div className="mt-5 pl-1">
            <div className="w-16 h-0.5 bg-brand-navy mb-3" />
            <p className="text-brand-navy font-bold text-base">Clinton Osei Addo</p>
            <p className="text-gray-500 text-sm">Founder, Klint Inspires Africa Foundation</p>
          </div>
        </div>

        {/* Right — quote + CTA */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center pt-4 lg:pt-12">
          {/* Section heading */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold italic text-brand-orange">
              Why this foundation exists.
            </h2>
            <div className="flex items-center gap-1 mt-1">
              <div className="h-0.5 w-20 bg-brand-navy" />
              <div className="w-2 h-2 rounded-full bg-brand-orange" />
            </div>
          </div>

          {/* Blockquote */}
          <div className="relative">
            <span className="text-brand-navy text-6xl font-serif leading-none select-none">&ldquo;</span>
            <blockquote className="text-brand-navy text-base sm:text-lg leading-relaxed font-medium mt-2 mb-4">
              Coming from a background where hope was scarce, every step forward
              was earned through resilience and determination. Today, that journey
              has become a responsibility to give back and uplift others walking
              the same path.{' '}
              <strong>Klint Inspires Africa Foundation</strong> exists to ignite
              hope, inspire belief, and empower young people to see that their
              story can be different.
            </blockquote>
            <span className="text-brand-navy text-6xl font-serif leading-none select-none float-right">&rdquo;</span>
          </div>

          <div className="mt-8 clear-both">
            <a
              href="#full-story"
              className="inline-block px-8 py-3 rounded-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold italic text-sm sm:text-base transition-colors duration-200 shadow-lg"
            >
              Read Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
