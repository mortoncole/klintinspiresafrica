import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
  { label: 'Get Involved', to: '/get-involved' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Klint Inspires Foundation"
            className="h-20 w-56 object-contain"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-brand-orange' : 'text-gray-700 hover:text-brand-orange'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/get-involved#donate"
            className="ml-2 px-5 py-2 rounded-full bg-brand-orange text-white text-sm font-bold uppercase tracking-wide hover:bg-brand-orange-dark transition-colors duration-200 shadow"
          >
            Donate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col px-4 pb-4 gap-3 bg-white border-t border-gray-100">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className="text-sm font-semibold uppercase tracking-wide text-gray-700 hover:text-brand-orange py-1"
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/get-involved#donate"
            className="mt-1 px-5 py-2 rounded-full bg-brand-orange text-white text-sm font-bold uppercase text-center"
            onClick={() => setOpen(false)}
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  )
}
