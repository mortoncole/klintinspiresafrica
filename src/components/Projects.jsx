import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: 'Streetmas 2.0 Outreach',
    description: 'Yearly food donation outreach to the street & homeless youth.',
    image: '/projects/streetmas2.jpg',
    fallback: 'from-gray-700 to-gray-900',
  },
  {
    id: 2,
    title: 'Streetmas 1.0 Outreach',
    description: 'Yearly food donation outreach to the street & homeless youth.',
    image: '/projects/streetmas1.jpg',
    fallback: 'from-amber-800 to-amber-950',
  },
  {
    id: 3,
    title: 'Educational Empowerment',
    description: 'Empowering individuals through quality education, skills development, and learning opportunities to unlock their full potential.',
    image: '/projects/education.jpg',
    fallback: 'from-orange-700 to-orange-950',
  },
  {
    id: 4,
    title: 'African Young Leaders Summit',
    description: 'The inaugural summit empowering 800+ youth with leadership, governance, and personal branding.',
    image: '/main flyer.png',
    fallback: 'from-blue-600 to-blue-950',
  },
]

function ProjectCard({ project }) {
  return (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-[420px] shadow-md">
      {/* Background image with gradient fallback */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${project.fallback} bg-cover bg-center transition-transform duration-500 group-hover:scale-105`}
        style={{ backgroundImage: `url('${project.image}')` }}
      />

      {/* Bottom gradient overlay for text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white font-bold text-xl sm:text-2xl leading-snug mb-2">
          {project.title}
        </h3>
        <p className="text-white/80 text-sm mb-3">
          {project.description}
        </p>
        <div className="flex justify-end">
          <Link
            to="/projects"
            className="text-white font-semibold text-sm hover:text-brand-orange transition-colors duration-200"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy text-center mb-10">
          Our Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/projects"
            className="px-10 py-3 rounded-xl bg-gray-600 hover:bg-gray-700 text-white font-bold text-sm uppercase tracking-wide transition-colors duration-200 shadow"
          >
            Explore All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
