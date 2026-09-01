const shareText = encodeURIComponent('Klint Inspires Africa Foundation is changing lives through education, outreach & community work. Support them here:')
const shareUrl  = encodeURIComponent('https://klintinspiresafrica.com')

const platforms = [
  {
    label: 'Facebook',
    color: 'bg-blue-600 hover:bg-blue-700',
    href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    color: 'bg-black hover:bg-gray-800',
    href: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    color: 'bg-green-500 hover:bg-green-600',
    href: `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    color: 'bg-blue-700 hover:bg-blue-800',
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

const actions = [
  { text: 'Tag us in your posts, @klintinspiresafrica' },
  { text: 'Tell friends and family about our work' },
  { text: 'Share our content on your stories and feed' },
  { text: 'Advocate for youth empowerment in your community' },
]

export default function SpreadSection() {
  return (
    <section id="spread" className="bg-gray-50 py-20 px-4 scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-brand-orange rounded-full" />
          <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">Amplify</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-4">Spread the Word</h2>
        <p className="text-gray-500 text-base leading-relaxed max-w-xl mb-12">
          You don't need money to make a difference. A single share can bring in a donor, a volunteer, or a partner. Your voice is powerful.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Share buttons */}
          <div>
            <p className="text-brand-navy font-bold text-sm uppercase tracking-widest mb-5">Share On</p>
            <div className="flex flex-wrap gap-3">
              {platforms.map(({ label, color, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-bold
                               transition-all duration-200 shadow hover:scale-105 ${color}`}>
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Simple actions */}
          <div>
            <p className="text-brand-navy font-bold text-sm uppercase tracking-widest mb-5">Other Ways to Help</p>
            <ul className="space-y-4">
              {actions.map(({ text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0" />
                  <span className="text-gray-600 text-sm leading-relaxed font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
