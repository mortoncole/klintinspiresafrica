import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories, projects } from './projectsData'

function ProjectCard({ project }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-md bg-gray-900 flex flex-col cursor-pointer">
      {/* Image */}
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.fallback} bg-cover bg-center transition-transform duration-500 group-hover:scale-110`}
          style={{ backgroundImage: `url('${project.image}')` }}
        />
        {/* Dark overlay lifts on hover */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-400" />

        {/* Category pill */}
        <span className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
          {project.category}
        </span>

        {/* Year / Coming Soon badge */}
        <span className={`absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${
          project.upcoming
            ? 'bg-white text-brand-navy animate-pulse'
            : 'bg-black/50 text-white/80'
        }`}>
          {project.year}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 bg-white">
        <h3 className="text-brand-navy font-extrabold text-lg leading-snug mb-3 group-hover:text-brand-orange transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            <span className="text-brand-navy font-bold text-xs">{project.impact}</span>
          </div>
          <Link
            to="/get-involved"
            className="flex items-center gap-1 text-brand-orange font-bold text-xs uppercase tracking-wide hover:gap-2 transition-all duration-200"
          >
            Get Involved
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsGrid() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects.filter((p) => !p.featured)
    : projects.filter((p) => p.category === active && !p.featured)

  return (
    <section className="bg-gray-100 pb-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide border transition-all duration-200 ${
                active === cat
                  ? 'bg-brand-orange border-brand-orange text-white shadow-md'
                  : 'bg-white border-gray-200 text-gray-500 hover:border-brand-orange hover:text-brand-orange'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400 font-medium">
            No projects in this category yet. Check back soon!
          </div>
        )}
      </div>
    </section>
  )
}
