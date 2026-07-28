import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FiClock, FiMapPin, FiNavigation, FiPhone } from 'react-icons/fi'
import './Contact.scss'
import Seo, { breadcrumbLd } from '../Seo'
import { SITE } from '../../data/site'

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.01521467246064!2d151.02327313548506!3d-33.88338382833862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bd384acf4229%3A0x14788145b6232fc0!2sAmara%20Remedial%20Thai%20Massage!5e0!3m2!1sen!2sau!4v1709367674795!5m2!1sen!2sau'

function Contact() {
  return (
    <div className="contact-page">
      <Seo
        title="Contact & Location"
        description="Amara Remedial Thai Massage, 415 Park Road, Regents Park NSW 2143. Call 02 8772 6255 or 04 6696 3564. Open 7 days, HICAPS health fund rebates available."
        path="/Contact"
        jsonLd={breadcrumbLd([{ name: 'Contact', path: '/Contact' }])}
      />

      <header className="page-hero">
        <div className="shell">
          <span className="eyebrow">Find us</span>
          <h1>Contact</h1>
          <p>
            A few minutes from Regents Park station, with street parking on Park
            Road. Call ahead or simply walk in.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="shell contact-layout">
          <div className="contact-details">
            <div className="contact-item">
              <FiMapPin className="contact-item__icon" aria-hidden="true" />
              <div>
                <h2>Address</h2>
                <a href={SITE.mapsUrl} target="_blank" rel="noreferrer">
                  {SITE.address}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FiPhone className="contact-item__icon" aria-hidden="true" />
              <div>
                <h2>Bookings</h2>
                {SITE.phones.map((phone) => (
                  <a key={phone.href} href={phone.href}>
                    {phone.label}
                  </a>
                ))}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
            </div>

            <div className="contact-item">
              <FiClock className="contact-item__icon" aria-hidden="true" />
              <div>
                <h2>Opening hours</h2>
                <p>{SITE.hours}</p>
              </div>
            </div>

            <div className="contact-actions">
              <a
                className="btn btn--primary"
                href={SITE.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FiNavigation aria-hidden="true" /> Get directions
              </a>
              <a
                className="btn btn--ghost"
                href={SITE.facebook}
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF aria-hidden="true" /> Facebook
              </a>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title={`Map showing ${SITE.name} at ${SITE.address}`}
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
