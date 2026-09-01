import { useState } from 'react'
import { videoCategories, videos } from './videosData'

function VideoCard({ video }) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      {/* TikTok embed */}
      <div className="relative w-full" style={{ height: '560px' }}>
        <iframe
          src={`https://www.tiktok.com/embed/v2/${video.id}`}
          className="w-full h-full"
          allow="encrypted-media"
          allowFullScreen
          scrolling="no"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-presentation"
          style={{ border: 'none' }}
          title={video.caption}
        />
      </div>

      {/* Caption bar */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
        <p className="text-brand-navy font-semibold text-sm leading-snug">
          {video.caption}
        </p>
        <span className={`text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full flex-shrink-0 ml-3 ${
          video.type === 'video'
            ? 'bg-brand-orange/10 text-brand-orange'
            : 'bg-indigo-50 text-indigo-500'
        }`}>
          {video.type === 'video' ? 'Video' : 'Photos'}
        </span>
      </div>
    </div>
  )
}

export default function VideosSection() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? videos
    : videos.filter((v) => v.category === active)

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-brand-orange rounded-full" />
            <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">
              Watch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy mb-3">
            Impact in Motion
          </h2>
          <p className="text-gray-500 text-base max-w-xl leading-relaxed">
            Clips, snippets, and interviews from our outreaches, straight from the field.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {videoCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide border transition-all duration-200 ${
                active === cat
                  ? 'bg-brand-orange border-brand-orange text-white shadow-md'
                  : 'bg-white border-gray-200 text-gray-500 hover:border-brand-orange hover:text-brand-orange'
              }`}
            >
              {cat}
              {' '}
              <span className="font-normal normal-case tracking-normal opacity-70">
                ({cat === 'All' ? videos.length : videos.filter(v => v.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  )
}
