import { Helmet } from 'react-helmet-async'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Projects from '../components/Projects'
import Purpose from '../components/Purpose'
import ImpactStory from '../components/ImpactStory'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEO
        description="Klint Inspires Africa is a foundation empowering youth and communities through education, health, and street outreach programs across Ghana."
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          "name": "Klint Inspires Africa",
          "url": "https://klintinspiresafrica.com",
          "logo": "https://klintinspiresafrica.com/logo.png",
          "description": "A foundation empowering youth and communities through education, health, and outreach programs across Ghana.",
          "foundingDate": "2023",
          "areaServed": "Ghana",
          "sameAs": [
            "https://www.tiktok.com/@clinton_klint"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "general",
            "email": "morrisnafeehi@gmail.com"
          }
        })}</script>
      </Helmet>
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <Purpose />
      <ImpactStory />
      <Footer />
    </div>
  )
}
