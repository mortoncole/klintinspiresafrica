import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import GetInvolvedHero from '../components/getinvolved/GetInvolvedHero'
import DonateSection from '../components/getinvolved/DonateSection'
import VolunteerForm from '../components/getinvolved/VolunteerForm'
import PartnerSection from '../components/getinvolved/PartnerSection'
import SpreadSection from '../components/getinvolved/SpreadSection'
import Footer from '../components/Footer'

export default function GetInvolved() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Get Involved, Donate & Volunteer"
        description="Support Klint Inspires Africa by donating, volunteering, or becoming a partner. Every contribution helps empower youth and communities across Ghana."
        path="/get-involved"
      />
      <Navbar />
      <div className="h-24" />
      <GetInvolvedHero />
      <DonateSection />

      {/* Volunteer section */}
      <section id="volunteer" className="bg-gray-50 py-20 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-brand-orange rounded-full" />
            <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">Serve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">Volunteer With Us</h2>
          <p className="text-gray-500 text-base leading-relaxed mb-10">
            Our volunteers are the heartbeat of every project. Sign up and we'll reach out when the next opportunity matches your skills.
          </p>
          <VolunteerForm />
        </div>
      </section>

      <PartnerSection />
      <SpreadSection />

      {/* Bottom CTA, link to Contact */}
      <section className="bg-brand-navy py-16 px-4 text-center">
        <p className="text-white/60 text-base mb-3">Still have questions about getting involved?</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-brand-orange
                     text-brand-orange hover:bg-brand-orange hover:text-white font-bold text-sm uppercase
                     tracking-wide transition-all duration-200"
        >
          Visit Our Contact Page
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>

      <Footer />
    </div>
  )
}
