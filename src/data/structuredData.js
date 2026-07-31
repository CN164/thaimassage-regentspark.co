import { SITE, SITE_URL } from './site'
import { TREATMENTS } from './treatments'

/* schema.org LocalBusiness node — rendered on the home page. */
export const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'MassageTherapist',
  '@id': `${SITE_URL}/#business`,
  name: SITE.name,
  url: SITE_URL,
  telephone: ['+61287726255', '+61466963564'],
  email: SITE.email,
  image: `${SITE_URL}/logo-preview.png`,
  logo: `${SITE_URL}/logo-preview.png`,
  priceRange: '$$',
  currenciesAccepted: 'AUD',
  paymentAccepted: 'Cash, EFTPOS, Credit Card, HICAPS',
  description:
    'Professional Thai massage, remedial therapy, relaxing oil massage, deep tissue and hot stone massage in Regents Park NSW. HICAPS health fund rebates available. Open 7 days.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '415 Park Road',
    addressLocality: 'Regents Park',
    addressRegion: 'NSW',
    postalCode: '2143',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.88338,
    longitude: 151.02327,
  },
  hasMap: SITE.mapsUrl,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:00',
      closes: '21:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Regents Park' },
    { '@type': 'City', name: 'Berala' },
    { '@type': 'City', name: 'Lidcombe' },
    { '@type': 'City', name: 'Auburn' },
    { '@type': 'City', name: 'Sydney' },
  ],
  sameAs: [SITE.facebook],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Massage treatments',
    itemListElement: TREATMENTS.map((treatment) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: treatment.title,
        description: treatment.summary,
      },
    })),
  },
}

/* Sitelinks search box / site identity for the home page. */
export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE.name,
  inLanguage: 'en-AU',
  publisher: { '@id': `${SITE_URL}/#business` },
}

/* Service list for the Treatment page. */
export const treatmentItemListLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Massage treatments at Amara Remedial Thai Massage',
  itemListElement: TREATMENTS.map((treatment, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: treatment.title,
      description: treatment.description,
      image: treatment.image.startsWith('http')
        ? treatment.image
        : `${SITE_URL}${treatment.image}`,
      serviceType: 'Massage therapy',
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: { '@type': 'City', name: 'Regents Park' },
    },
  })),
}
