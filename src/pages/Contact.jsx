import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import ContactHero from '../components/contact/ContactHero'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us"
        description="Get in touch with Klint Inspires Africa. Reach out to partner, donate, volunteer, or learn more about our community impact programs in Ghana."
        path="/contact"
      />
      <Navbar />
      <div className="h-24" />
      <ContactHero />

      {/* Form + Info split */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Form — wider column */}
            <div className="lg:col-span-3 bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
              <div className="mb-8">
                <p className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-2">Send a Message</p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">How Can We Help?</h2>
              </div>
              <ContactForm />
            </div>

            {/* Info — narrower column */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
