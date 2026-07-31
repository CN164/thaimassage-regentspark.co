import React from 'react'
import { FiPhone } from 'react-icons/fi'
import './Treatment.scss'
import Seo, { breadcrumbLd } from '../Seo'
import { SITE } from '../../data/site'
import { TREATMENTS } from '../../data/treatments'
import { treatmentItemListLd } from '../../data/structuredData'

function Treatment() {
  return (
    <div className="treatment-page">
      <Seo
        title="Our Treatments"
        description="Traditional Thai massage, relaxing oil massage, deep tissue and hot stone massage in Regents Park NSW. Experienced therapists, open 7 days."
        path="/Treatment"
        image={TREATMENTS[0].image}
        jsonLd={[
          treatmentItemListLd,
          breadcrumbLd([{ name: 'Treatments', path: '/Treatment' }]),
        ]}
      />

      <header className="page-hero">
        <div className="shell">
          <span className="eyebrow">{SITE.suburb}</span>
          <h1>Our Treatments</h1>
          <p>
            Four ways to unwind or recover — every session is adjusted to the
            pressure and the problem areas you tell us about.
          </p>
        </div>
      </header>

      <div className="shell">
        {TREATMENTS.map((treatment, index) => (
          <section
            key={treatment.id}
            className={`treatment-row${index % 2 === 1 ? ' is-reversed' : ''}`}
            aria-labelledby={`treatment-${treatment.id}`}
          >
            <div className="treatment-row__media">
              <img
                src={treatment.image}
                alt={`${treatment.title} at ${SITE.name}, Regents Park`}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
            <div className="treatment-row__text">
              <span className="treatment-row__index">
                {String(treatment.id).padStart(2, '0')}
              </span>
              <h2 id={`treatment-${treatment.id}`}>{treatment.title}</h2>
              <p>{treatment.description}</p>
            </div>
          </section>
        ))}
      </div>

      <section className="treatment-footnote">
        <div className="shell">
          <p>
            Not sure which one suits you? Tell us where it hurts and we will
            recommend the right treatment.
          </p>
          <a className="btn btn--primary" href={SITE.phones[0].href}>
            <FiPhone aria-hidden="true" /> {SITE.phones[0].label}
          </a>
        </div>
      </section>
    </div>
  )
}

export default Treatment
