import { Link } from 'react-router-dom'

const types = [
  {
    icon: '💰',
    title: 'Financial Partner',
    desc: 'Fund our projects directly — from single outreaches to annual programmes. We provide full transparency reports.',
  },
  {
    icon: '🎁',
    title: 'In-Kind Donor',
    desc: 'Donate goods — food items, stationery, sanitary supplies, clothing — that go straight to beneficiaries.',
  },
  {
    icon: '📢',
    title: 'Media & Awareness',
    desc: 'Help us amplify our message through your platform, network, or publication to reach more supporters.',
  },
  {
    icon: '🤝',
    title: 'Organisational Partner',
    desc: 'Collaborate on joint projects, co-host events, or integrate our mission into your CSR initiatives.',
  },
]

export default function PartnerSection() {
  return (
    <section id="partner" className="bg-white py-20 px-4 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-brand-orange rounded-full" />
          <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">Collaborate</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">Partner With Us</h2>
        <p className="text-gray-500 text-base leading-relaxed max-w-xl mb-12">
          We welcome organisations, businesses, and institutions who share our passion for uplifting African youth. Partnership creates impact at scale.
        </p>

        {/* Partnership type cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {types.map(({ icon, title, desc }) => (
            <div key={title}
              className="group flex gap-5 p-6 rounded-2xl border border-gray-100 bg-gray-50
                         hover:border-brand-orange/40 hover:bg-brand-orange/5 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 group-hover:bg-brand-orange
                              flex items-center justify-center text-2xl flex-shrink-0 shadow-sm
                              transition-colors duration-300">
                {icon}
              </div>
              <div>
                <h3 className="font-extrabold text-brand-navy text-base mb-1 group-hover:text-brand-orange transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 rounded-2xl bg-brand-navy">
          <div className="flex-1">
            <p className="text-white font-extrabold text-lg mb-1">Ready to partner?</p>
            <p className="text-white/55 text-sm leading-relaxed">
              Send us an email with your name, organisation, and how you'd like to collaborate.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a href="mailto:klintinspiresafrica@gmail.com?subject=Partnership Enquiry"
              className="px-6 py-3 rounded-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-sm uppercase tracking-wide transition-colors duration-200 shadow">
              Email Us
            </a>
            <Link to="/contact"
              className="px-6 py-3 rounded-full border-2 border-white/30 hover:border-brand-orange text-white font-bold text-sm uppercase tracking-wide transition-all duration-200">
              Contact Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
