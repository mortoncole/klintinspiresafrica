import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import ProjectsHero from '../components/projects/ProjectsHero'
import FeaturedProject from '../components/projects/FeaturedProject'
import ProjectsGrid from '../components/projects/ProjectsGrid'
import ProjectsCTA from '../components/projects/ProjectsCTA'
import Footer from '../components/Footer'

export default function Projects() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Our Projects"
        description="Explore Klint Inspires Africa's community initiatives, Streetmas, Pad a Girl, Back to School Drive, and health outreach programs changing lives across Ghana."
        path="/projects"
      />
      <Navbar />
      <div className="h-24" />
      <ProjectsHero />
      <FeaturedProject />
      <ProjectsGrid />
      <ProjectsCTA />
      <Footer />
    </div>
  )
}
