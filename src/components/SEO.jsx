import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Klint Inspires Africa'
const SITE_URL = 'https://klintinspiresafrica.com'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

export default function SEO({ title, description, path = '', image, article = false }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Empowering Communities Across Ghana`
  const url = `${SITE_URL}${path}`
  const ogImage = image || DEFAULT_IMAGE

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:locale" content="en_GH" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Extra */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#f97316" />
    </Helmet>
  )
}
