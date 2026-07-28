/* Single source of truth for the business details repeated across pages. */

/* Canonical origin, no trailing slash. Change this one line if the site
   moves to a custom domain — every canonical/OG URL follows it. */
export const SITE_URL = 'https://amara-remedial-thaimassage.web.app'

export const SITE = {
  name: 'Amara Remedial Thai Massage',
  shortName: 'Amara',
  suburb: 'Regents Park, Sydney',
  address: '415 Park Road, Regents Park NSW 2143',
  mapsUrl: 'https://maps.app.goo.gl/C9YRgJEhWyMZUocw6',
  phones: [
    { label: '02 8772 6255', href: 'tel:0287726255' },
    { label: '04 6696 3564', href: 'tel:0466963564' },
  ],
  email: 'amararemedialthaimassage@gmail.com',
  hours: 'Open 7 days · 9:00 – 21:00',
  facebook:
    'https://www.facebook.com/profile.php?id=61552383613325&mibextid=LQQJ4d',
  logo: '/logo-preview.png',
}

export const NAV_LINKS = [
  { to: '/', label: 'Home', exact: true },
  { to: '/Treatment', label: 'Treatment' },
  { to: '/Promotions', label: 'Promotions' },
  { to: '/Contact', label: 'Contact' },
]
