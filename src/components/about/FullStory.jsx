const paragraphs = [
  `Coming from a background where hope was scarce, raised by a single parent, life was never handed to us easily. Every step forward came through struggle, resilience, and the determination to rise above our circumstances.`,
  `Looking back today, we recognize that our journey is not just ours to celebrate, it is a responsibility to give back. We see many young people walking the same difficult path we once walked. And we believe the greatest way to make an impact is not just to succeed, but to reach back and pull others along.`,
  `What began as a personal journey has grown into a shared mission to ignite hope, inspire belief, and empower young people to see that their story can be different.`,
  `At Klint Inspires Africa Foundation, we are driven by a simple but powerful vision, reaching one person at a time, and reminding them of what is possible.`,
  `We want every young person we encounter to believe:`,
]

const bullets = [
  'There is more I can do.',
  'I am made for more.',
  'My circumstances do not define my future.',
]

export default function FullStory() {
  return (
    <section id="full-story" className="bg-gray-100 py-20 px-4 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold italic text-brand-orange">
            Why this foundation exists.
          </h2>
          <div className="flex items-center justify-center gap-1 mt-2">
            <div className="h-0.5 w-20 bg-brand-navy" />
            <div className="w-2 h-2 rounded-full bg-brand-orange" />
          </div>
        </div>

        {/* Story paragraphs */}
        <div className="space-y-6 text-brand-navy text-base sm:text-lg leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <ul className="space-y-1 pl-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="text-brand-orange font-bold mt-0.5">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <p className="font-bold italic text-brand-navy border-l-4 border-brand-orange pl-4 py-1">
            &ldquo;Because sometimes, all it takes is a single spark of hope to
            change a life forever.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
