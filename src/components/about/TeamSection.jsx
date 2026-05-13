// To add or edit a team member, update this array.
// image: place the photo in /public/team/ and reference it here.
// fallback: gradient shown while image is loading or missing.
// zoom: background-size (default '150%') — increase to zoom in more
// position: background-position (default 'top center') — shift to reframe the face
const team = [
  {
    name: 'Clinton Osei Addo',
    role: 'Founder & President',
    image: '/team/clinton.jpg',
    fallback: 'from-lime-500 to-lime-800',
  },
  {
    name: 'George Asante',
    role: 'Vice President',
    image: '/team/george.jpg',
    fallback: 'from-indigo-400 to-indigo-700',
  },
  {
    name: 'Mary Asante Mirekua',
    role: 'General Secretary',
    image: '/team/mary.jpg',
    fallback: 'from-amber-400 to-amber-700',
  },
  {
    name: 'Annabel Emefa',
    role: 'Communication & Public Relations Officer',
    image: '/team/annabel.jpg',
    fallback: 'from-rose-400 to-rose-700',
    position: 'center 15%',
  },
  {
    name: 'Valerie Nunekpeku',
    role: 'Asst.Communications & Public Relations Officer',
    image: '/team/valerie.jpg',
    fallback: 'from-slate-400 to-slate-700',
  },
  {
    name: 'Morris Nii Ayitey Feehi',
    role: 'IT Head',
    image: '/team/morris.jpg',
    fallback: 'from-violet-400 to-violet-700',
  },
  {
    name: 'Joshua Odumja',
    role: 'Community Health Leader',
    image: '/team/joshua.jpg',
    fallback: 'from-green-400 to-green-700',
    zoom: 'cover',
    position: 'center 60%',
  },
  {
    name: 'Seth Amoah',
    role: 'Media Head',
    image: '/team/seth.jpg',
    fallback: 'from-pink-400 to-pink-700',
  },
  {
    name: 'Sobo Moses Kwabena',
    role: 'Health Officer-Main',
    image: '/team/sobo.jpg',
    fallback: 'from-cyan-400 to-cyan-700',
  },
  {
    name: 'Basil Darko',
    role: 'Programs Officer',
    image: '/team/basil.jpg',
    fallback: 'from-teal-500 to-teal-800',
    position: 'center 15%',
  },
  {
    name: 'Vanessa Konadu Sarfo',
    role: 'Asst.Project & Program Officer',
    image: '/team/vanessa.jpg',
    fallback: 'from-orange-400 to-orange-700',
  },
  {
    name: 'Doreen Adu-Gyamfi',
    role: 'Asst.Health Leader',
    image: '/team/doreen.jpg',
    fallback: 'from-sky-400 to-sky-700',
  },
  {
    name: 'Jesse Sackey',
    role: 'Videographer',
    image: '/team/jesse.jpg',
    fallback: 'from-red-400 to-red-700',
  },
]

function TeamCard({ member }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-md aspect-[3/4] cursor-pointer">
      {/* Photo with gradient fallback */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${member.fallback} bg-no-repeat transition-transform duration-500 group-hover:scale-105`}
        style={{
          backgroundImage: `url('${member.image}')`,
          backgroundSize: member.zoom ?? '150%',
          backgroundPosition: member.position ?? 'top center',
        }}
      />

      {/* Permanent soft gradient at bottom for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* Name always visible; role + accent animate in on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white font-bold text-sm sm:text-base leading-tight">
          {member.name}
        </p>
        <p className="text-white/0 group-hover:text-white/90 text-xs mt-1 leading-snug
                       max-h-0 group-hover:max-h-10 overflow-hidden
                       transition-all duration-300">
          {member.role}
        </p>
        <div className="mt-2 h-0.5 w-0 group-hover:w-8 bg-brand-orange
                        transition-all duration-500 rounded-full" />
      </div>

      {/* Orange corner glow on hover */}
      <div className="absolute top-0 left-0 w-0 h-0
                      group-hover:w-10 group-hover:h-10
                      bg-brand-orange/25 rounded-br-full
                      transition-all duration-500" />
    </div>
  )
}

export default function TeamSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy text-center mb-3">
          Meet the Team
        </h2>
        <p className="text-center text-gray-400 text-sm italic mb-10">
          Hover over a card to learn more
        </p>

        {/* 1 col → 2 col → 3 col → 4 col */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
