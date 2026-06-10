import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Gallery', to: '/gallery' },
]

const getInvolvedLinks = [
  { label: 'Donate', to: '/get-involved#donate' },
  { label: 'Volunteer', to: '/get-involved#volunteer' },
  { label: 'Partner', to: '/get-involved#partner' },
]

const contactLinks = [
  { label: 'Phone', href: 'tel:+233544411364' },
  { label: 'Email', href: 'mailto:klintinspiresafrica@gmail.com' },
  { label: 'Location', to: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
]

function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <h4 className="text-white font-bold text-lg">{title}</h4>
        <div className="w-14 h-0.5 bg-white/40 rounded-full" />
      </div>
      <ul className="flex flex-col items-center gap-3">
        {links.map((link) => (
          <li key={link.label}>
            {link.to ? (
              <Link
                to={link.to}
                className="text-white font-semibold text-base hover:text-brand-orange transition-colors duration-200"
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                className="text-white font-semibold text-base hover:text-brand-orange transition-colors duration-200"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-navy py-14 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Brand + tagline */}
        <div className="mb-12">
          <h3 className="text-white font-bold text-2xl mb-4">Klint Inspires</h3>
          <div className="flex items-start gap-2 max-w-2xl">
            <span className="text-white/60 text-3xl font-serif leading-none mt-1">&ldquo;</span>
            <p className="text-white/80 italic font-semibold text-sm sm:text-base">
              Inspiring and empowering African youth to discover their purpose and create lasting impact.
            </p>
            <span className="text-white/60 text-3xl font-serif leading-none mt-1">&rdquo;</span>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 mb-14">
          <FooterColumn title="Quick Links" links={quickLinks} />
          <FooterColumn title="Get Involved" links={getInvolvedLinks} />
          <FooterColumn title="Contact" links={contactLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/50 text-sm">
            &copy; 2026 Klint Inspires. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
