import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '3000+', label: 'Students\nSupported' },
  { value: '5000+', label: 'Meals\nShared' },
  { value: '5+', label: 'Schools\nReached' },
  { value: '8+', label: 'Projects\nCompleted' },
]

function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const numeric = parseInt(target.replace(/\D/g, ''), 10)
          const suffix = target.replace(/[0-9]/g, '')
          const steps = 40
          const increment = numeric / steps
          let current = 0
          const interval = setInterval(() => {
            current += increment
            if (current >= numeric) {
              setCount(target)
              clearInterval(interval)
            } else {
              setCount(Math.floor(current) + suffix)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count || '0'}</span>
}

export default function Stats() {
  return (
    <section className="bg-gray-100 py-14 px-4">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">
        The Act
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <span className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-none">
              <CountUp target={value} />
            </span>
            <span className="text-sm sm:text-base font-semibold text-gray-600 whitespace-pre-line">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
