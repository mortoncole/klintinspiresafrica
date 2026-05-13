const info = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+233 54 441 1364',
    href: 'tel:+233544411364',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    label: 'Email',
    value: 'klintinspiresafrica@gmail.com',
    href: 'mailto:klintinspiresafrica@gmail.com',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    label: 'Location',
    value: 'Obuasi, Ashanti Region, Ghana',
    href: 'https://maps.google.com/?q=Obuasi,Ghana',
  },
]

const socials = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/klintinspiresafrica',
    color: 'hover:bg-blue-600',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/klintinspiresafrica',
    color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@clinton_klint',
    color: 'hover:bg-black',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: 'https://twitter.com/klintinspires',
    color: 'hover:bg-black',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

function InfoCard({ icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="group flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100
                 shadow-sm hover:shadow-md hover:border-brand-orange/30 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl bg-brand-orange/10 group-hover:bg-brand-orange
                      flex items-center justify-center text-brand-orange group-hover:text-white
                      transition-all duration-300 flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-brand-navy font-bold text-sm leading-snug">{value}</p>
      </div>
    </a>
  )
}

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      {/* Heading */}
      <div>
        <p className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-2">Find Us</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy leading-tight">
          We&apos;re Always Happy<br />to Connect
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mt-3">
          Reach us through any of the channels below. We typically respond within 24 hours.
        </p>
      </div>

      {/* Info cards */}
      <div className="flex flex-col gap-4">
        {info.map((item) => (
          <InfoCard key={item.label} {...item} />
        ))}
      </div>

      {/* Social links */}
      <div>
        <p className="text-brand-navy font-bold text-xs uppercase tracking-widest mb-4">Follow Us</p>
        <div className="flex flex-wrap gap-3">
          {socials.map(({ label, href, icon, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`w-10 h-10 rounded-xl bg-gray-100 ${color} text-gray-500 hover:text-white
                         flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110`}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Office hours */}
      <div className="bg-brand-navy rounded-2xl p-6 text-white">
        <p className="font-bold text-sm uppercase tracking-widest text-brand-orange mb-3">Response Hours</p>
        <div className="space-y-2 text-sm text-white/70">
          <div className="flex justify-between">
            <span>Monday – Friday</span>
            <span className="font-semibold text-white">9:00 AM – 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span className="font-semibold text-white">10:00 AM – 3:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span className="font-semibold text-white/40">Closed</span>
          </div>
        </div>
      </div>
    </div>
  )
}
