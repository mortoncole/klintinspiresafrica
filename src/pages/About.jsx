import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import FounderStory from '../components/about/FounderStory'
import FullStory from '../components/about/FullStory'
import Purpose from '../components/Purpose'
import SDGSection from '../components/about/SDGSection'
import TeamSection from '../components/about/TeamSection'
import JoinUs from '../components/about/JoinUs'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen">
      <SEO
        title="About Us"
        description="Learn about the mission, story, and team behind Klint Inspires Africa — a foundation transforming lives through education, health, and community outreach in Ghana."
        path="/about"
      />
      <Navbar />
      {/* Spacer for fixed-height navbar */}
      <div className="h-24" />
      <FounderStory />
      <FullStory />
      <Purpose />
      <SDGSection />
      <TeamSection />
      <JoinUs />
      <Footer />
    </div>
  )
}
