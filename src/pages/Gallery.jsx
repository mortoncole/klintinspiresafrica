import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import GalleryHero from '../components/gallery/GalleryHero'
import GalleryGrid from '../components/gallery/GalleryGrid'
import VideosSection from '../components/gallery/VideosSection'
import Footer from '../components/Footer'

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Gallery"
        description="Photos and videos from Klint Inspires Africa's outreach events — Streetmas, orphanage visits, education empowerment drives, and health campaigns across Ghana."
        path="/gallery"
      />
      <Navbar />
      <div className="h-24" />
      <GalleryHero />
      <GalleryGrid />
      <VideosSection />
      <Footer />
    </div>
  )
}
