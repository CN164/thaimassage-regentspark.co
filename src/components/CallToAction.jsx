import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FiNavigation, FiPhone } from 'react-icons/fi'
import './CallToAction.scss'
import { SITE } from '../data/site'

const CTA_BACKGROUND = '/images/CTA_Background.jpg'

function CallToAction() {
  return (
    <section
      className="cta"
      aria-labelledby="cta-heading"
      style={{ backgroundImage: `url(${CTA_BACKGROUND})` }}
    >
      <div className="cta__veil" />
      <div className="shell cta__inner">
        <div className="cta__lead">
          <span className="eyebrow">Book a session</span>
          <h2 id="cta-heading">
            Come in for a treatment, <span>leave lighter.</span>
          </h2>
          <p>{SITE.hours}</p>
        </div>

        <div className="cta__details">
          <a
            className="cta__row"
            href={SITE.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            <FiNavigation aria-hidden="true" />
            <span>{SITE.address}</span>
          </a>
          {SITE.phones.map((phone) => (
            <a className="cta__row" key={phone.href} href={phone.href}>
              <FiPhone aria-hidden="true" />
              <span>{phone.label}</span>
            </a>
          ))}
        </div>

        <a
          className="btn btn--primary cta__facebook"
          href={SITE.facebook}
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF aria-hidden="true" /> Facebook
        </a>
      </div>
    </section>
  )
}

export default CallToAction
