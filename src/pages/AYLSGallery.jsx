import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const speakers = [
  {
    name: 'Ing. Sam Pobee',
    title: 'Managing Director',
    organization: 'Anglogold Ashanti - Obuasi Mine',
    role: 'Keynote Speaker',
    image: '/gallery/AYLS/keynote-speakers/sam-pobee.jpg',
  },
  {
    name: 'Hon. Yaw Boampong Adu-Boampong ESQ.',
    title: 'Barrister and Solicitor of the Supreme Court of Ghana',
    organization: 'Ghana',
    role: 'Panel Speaker',
    image: '/gallery/AYLS/keynote-speakers/yaw-boampong.jpg',
  },
  {
    name: 'Hon. Prince Owusu Bonnah',
    title: 'UN, USA Human Rights Advocate',
    organization: 'United Nations',
    role: 'Panel Speaker',
    image: '/gallery/AYLS/keynote-speakers/prince-owusu.jpg',
  },
  {
    name: 'Dr. Ernest A. Akey',
    title: 'Research Support Fellow',
    organization: 'KNUST Kumasi',
    role: 'Panel Speaker',
    image: '/gallery/AYLS/keynote-speakers/ernest-akey.jpg',
  },
  {
    name: 'Mr. Daniel Bentum Arthur',
    title: 'Sustainability Superintendent Economic',
    organization: 'Anglogold Ashanti & Arthur Bentum Foundation',
    role: 'Panel Speaker',
    image: '/gallery/AYLS/keynote-speakers/daniel-bentum.jpg',
  },
  {
    name: 'Mr. Godfred Acheampong',
    title: 'Project Director',
    organization: 'Rotary Ghana - Godfred Acheampong Foundation',
    role: 'Panel Speaker',
    image: '/gallery/AYLS/keynote-speakers/godfred-acheampong.jpg',
  },
  {
    name: 'Mrs. Nana Afia Boachie-Tsikata',
    title: 'Chief Executive Officer',
    organization: 'BACNOF Schools',
    role: 'Panel Speaker',
    image: '/gallery/AYLS/keynote-speakers/nana-afia.jpg',
  },
  {
    name: 'Portia A.A. Owusu',
    title: 'Mining Engineer',
    organization: 'A.A Foundation',
    role: 'Panel Speaker',
    image: '/gallery/AYLS/keynote-speakers/portia-owusu.jpg',
  },
]

const guests = [
  {
    name: 'Hon. Dr. Stephen Amoah',
    title: 'Member of Parliament',
    subtitle: 'Nhyiaeso Constituency, Former Dep. Ranking Member Finance Committee',
    image: '/gallery/AYLS/guest-speakers/stephen-amoah.jpg',
  },
  {
    name: 'Nana Abu Bonsrah I (Bossman Odikro)',
    title: 'Project General Manager',
    subtitle: 'GTS Drilling, Ghana',
    image: '/gallery/AYLS/guest-speakers/abu-bonsrah.jpg',
  },
  {
    name: 'Hon. Faustilove Appiah Kanin',
    title: 'Municipal Chief Executive',
    subtitle: 'Obuasi West',
    image: '/gallery/AYLS/guest-speakers/faustilove-appiah.jpg',
  },
  {
    name: 'Nana Amoanimaa Dede II (Adanasihemaa)',
    title: 'Paramount Queen Mother',
    subtitle: 'Adansi Traditional Council',
    image: '/gallery/AYLS/guest-speakers/nana-amoanimaa.jpg',
  },
]

const galleryCategories = [
  {
    id: 'keynotes',
    title: 'Keynote Speakers',
    description: 'Powerful addresses from industry leaders and policymakers',
    folder: 'keynote-speakers',
  },
  {
    id: 'guests',
    title: 'Guest Speakers & Officials',
    description: 'Distinguished guests sharing their wisdom and insights',
    folder: 'guest-speakers',
  },
  {
    id: 'crowd',
    title: 'The Youth - Our Future',
    description: 'Over 800 young minds engaged and inspired',
    folder: 'crowd',
  },
  {
    id: 'performances',
    title: 'Performances & Cultural Moments',
    description: 'Drama and spoken word celebrating Africa\'s journey',
    folder: 'performances',
  },
  {
    id: 'founder',
    title: 'Behind the Vision',
    description: 'Klint Inspires Africa leadership in action',
    folder: 'founder',
  },
]

const highlights = [
  {
    id: 'opening-keynote',
    title: 'Opening Keynote Address',
    image: '/gallery/AYLS/keynote-speakers/sam-pobee.jpg',
    content: (
      <p>
        Ing. Sam Pobee, Managing Director of Anglogold Ashanti - Obuasi Mine,
        delivered a powerful keynote that set the tone for the entire summit,
        speaking to the importance of youth involvement in industry and
        nation-building.
      </p>
    ),
  },
  {
    id: 'inspiring-opening',
    title: 'Inspiring Opening',
    image: null,
    content: (
      <p>
        The summit was beautifully opened with an engaging rendition of{' '}
        <em>"We are the chosen generation"</em> by Sinach, setting a spiritual
        and motivational tone for the youth.
      </p>
    ),
  },
  {
    id: 'panel-discussions',
    title: 'Three Transformative Panel Discussions',
    image: null,
    content: (
      <ul className="space-y-2 ml-4">
        <li>
          <strong>Personal Branding & Agribusiness:</strong> Youth learned how
          to brand themselves and leverage opportunities in Africa's growing
          agricultural sector.
        </li>
        <li>
          <strong>Leadership & Youth Development:</strong> Leading voices
          discussed how young people can develop as leaders and contribute
          meaningfully to their communities.
        </li>
        <li>
          <strong>Governance & Public Policy:</strong> Policymakers shared
          insights on how youth can engage with governance and shape public
          policy.
        </li>
      </ul>
    ),
  },
  {
    id: 'faustilove',
    title: 'Message from Hon. Faustilove Appiah Kanin',
    image: '/gallery/AYLS/guest-speakers/faustilove-appiah.jpg',
    content: (
      <p>
        The Municipal Chief Executive of Obuasi West delivered a moving speech
        that emphasized:{' '}
        <em>
          "Leadership is not only about holding office, it is about service,
          understanding the needs of people, solving problems, and taking
          responsibility."
        </em>{' '}
        She challenged youth to make a difference through various channels
        without waiting for formal positions.
      </p>
    ),
  },
  {
    id: 'cultural-performances',
    title: 'Cultural Performances',
    image: null,
    content: (
      <p>
        Moving drama and spoken word performances captured Africa's journey,
        from colonialism to freedom, leaving audiences inspired and reflective
        about the continent's past and bright future.
      </p>
    ),
  },
  {
    id: 'networking',
    title: 'Networking & Connection',
    image: null,
    content: (
      <p>
        Beyond speeches, the summit featured connection sessions, business
        stands, and art displays outside the auditorium, allowing youth to
        network with speakers, entrepreneurs, and each other.
      </p>
    ),
  },
]

function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.42 0-8 2.24-8 5v1a1 1 0 001 1h14a1 1 0 001-1v-1c0-2.76-3.58-5-8-5z" />
    </svg>
  )
}

function HighlightCard({ highlight }) {
  return (
    <div className="relative group bg-white border-l-4 border-brand-orange p-6 rounded shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Left avatar "text bubble" anchored on the orange edge */}
      <div className="absolute -left-7 top-1/2 -translate-y-1/2 z-10">
        {/* Bubble tail pointing right */}
        <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[8px] border-l-white absolute left-[calc(100%-1px)] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        <div
          className="relative w-14 h-14 rounded-full border-2 border-brand-orange bg-brand-navy text-brand-orange flex items-center justify-center shadow-lg overflow-hidden opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 group-hover:animate-bubble_pop transition-all duration-300 origin-left"
        >
          {highlight.image ? (
            <img
              src={highlight.image}
              alt={highlight.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          ) : (
            <span className="w-6 h-6">
              <UserIcon />
            </span>
          )}
        </div>
      </div>

      <h4 className="font-bold text-brand-navy mb-2 pl-3">{highlight.title}</h4>
      <div className="pl-3">{highlight.content}</div>
    </div>
  )
}

export default function AYLSGallery() {
  return (
    <div className="min-h-screen">
      <SEO
        title="African Young Leaders Summit - AYLS 2026"
        description="Explore the inaugural African Young Leaders Summit in Obuasi: 800+ youth, powerful keynotes, panel discussions on leadership, governance, and personal branding. The future is now."
        path="/gallery/ayls"
      />
      <Navbar />
      <div className="h-24" />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-brand-navy overflow-hidden">
        {/* Orange top bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-orange-400 to-transparent" />

        {/* Decorative rings */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-brand-orange/10" />
        <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full border border-brand-orange/10" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-white/5" />

        <div className="relative max-w-6xl mx-auto text-center text-white">
          <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-widest mb-4 border border-brand-orange/40 rounded-full px-4 py-2">
            Event Gallery, August 22, 2026
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            African Young Leaders Summit
          </h1>
          <p className="text-xl md:text-2xl font-bold text-white/80 mb-2">
            "The Future is Now: Developing Africa's Next Generation of Leaders and Policymakers"
          </p>
          <p className="text-lg text-white/60 mb-8 max-w-3xl mx-auto">
            The inaugural empowerment summit held at St. Thomas Social Center, Obuasi, bringing together 800+ youth, 12+ speakers, government officials, and changemakers to inspire the next generation of African leaders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl px-6 py-4">
              <p className="text-white/60 text-sm uppercase tracking-wide">Youth Attended</p>
              <p className="text-4xl font-extrabold text-brand-orange">800+</p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl px-6 py-4">
              <p className="text-white/60 text-sm uppercase tracking-wide">Speakers</p>
              <p className="text-4xl font-extrabold text-brand-orange">12+</p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl px-6 py-4">
              <p className="text-white/60 text-sm uppercase tracking-wide">Panel Sessions</p>
              <p className="text-4xl font-extrabold text-brand-orange">3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Story */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-brand-navy mb-8">The Summit Story</h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              On August 22, 2026, Obuasi witnessed history as Klint Inspires Africa hosted the inaugural African Young Leaders Summit, a groundbreaking empowerment event that brought together over 800 young minds, influential speakers, government officials, and changemakers under one roof.
            </p>

            <p className="text-lg">
              <span className="font-bold text-brand-navy">The theme,</span> <em>"The Future is Now: Developing Africa's Next Generation of Leaders and Policymakers,"</em> resonated deeply throughout the day, inspiring youth to realize that they don't have to wait until they're ministers or parliamentarians to make a difference. They can contribute now through youth organizations, community initiatives, civil society, entrepreneurship, research, and technology.
            </p>

            <h3 className="text-2xl font-bold text-brand-navy mt-10 mb-4">Highlights of the Day</h3>

            <div className="space-y-6">
              {highlights.map((highlight) => (
                <HighlightCard key={highlight.id} highlight={highlight} />
              ))}
            </div>

            <p className="text-lg mt-10 italic text-gray-600">
              The entire day was magical and magnificent, a testament to the power of bringing together passionate youth and dedicated leaders around a shared vision of African excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Keynote Speakers */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-brand-navy mb-12 text-center">
            Keynote & Panel Speakers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-brand-navy to-slate-800 overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">
                    {speaker.role}
                  </p>
                  <h3 className="text-lg font-bold text-brand-navy mb-1 group-hover:text-brand-orange transition-colors duration-200">
                    {speaker.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium mb-2">
                    {speaker.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {speaker.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Speakers */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-brand-navy mb-12 text-center">
            Distinguished Guests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guests.map((guest, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-brand-orange to-orange-700 overflow-hidden">
                  <img
                    src={guest.image}
                    alt={guest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">
                    Guest of Honour
                  </p>
                  <h3 className="text-lg font-bold text-brand-navy mb-1 group-hover:text-brand-orange transition-colors duration-200">
                    {guest.name}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium mb-2">
                    {guest.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {guest.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Sections */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-brand-navy mb-12 text-center">
            Event Gallery
          </h2>

          {galleryCategories.map((category) => (
            <div key={category.id} className="mb-20">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-brand-navy mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {category.description}
                </p>
              </div>

              {/* Image grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="group aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={`/gallery/AYLS/${category.folder}/image-${i + 1}.jpg`}
                      alt={`${category.title} - Image ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.parentElement.innerHTML =
                          '<div class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">Image not found</div>'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-brand-navy">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-extrabold mb-4">
            Be Part of the Movement
          </h2>
          <p className="text-xl text-white/60 mb-8">
            The African Young Leaders Summit proved that when youth are empowered and given a platform, they rise to the occasion. Join us as we continue building the next generation of African leaders.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/get-involved#donate"
              className="px-8 py-4 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold rounded-full transition-colors duration-200 shadow-lg"
            >
              Support Our Mission
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 border-2 border-white hover:border-brand-orange hover:text-brand-orange text-white font-bold rounded-full transition-colors duration-200"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}