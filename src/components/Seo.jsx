import React from 'react'
import { Helmet } from 'react-helmet-async'
import { SITE, SITE_URL } from '../data/site'

/**
 * Per-page SEO head: title, description, canonical, Open Graph, Twitter card
 * and optional JSON-LD structured data.
 *
 * @param {string} title        Page title (the site name is appended)
 * @param {string} description  Meta description, aim for 120-160 characters
 * @param {string} path         Route path, e.g. "/Treatment"
 * @param {string} [image]      Absolute or root-relative share image
 * @param {object|object[]} [jsonLd] Structured data to embed
 */
function Seo({ title, description, path, image = SITE.logo, jsonLd }) {
  const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-AU" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow, max-image-preview:large" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <meta name="geo.region" content="AU-NSW" />
      <meta name="geo.placename" content="Regents Park" />

      {blocks.map((block, index) => (
        <script type="application/ld+json" key={index}>
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  )
}

/** Breadcrumb trail for inner pages. `crumbs` is [{ name, path }, ...]. */
export function breadcrumbLd(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...crumbs].map(
      (crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${crumb.path}`,
      })
    ),
  }
}

export default Seo
