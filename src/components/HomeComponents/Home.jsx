import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiAward, FiClock, FiMapPin } from 'react-icons/fi'
import './Home.scss'
import Seo from '../Seo'
import { SITE } from '../../data/site'
import { TREATMENTS } from '../../data/treatments'
import { localBusinessLd, websiteLd } from '../../data/structuredData'

const HERO_SLIDES = [
  '/new_01.jpg',
  '/new_02.jpg',
  '/s2.jpg',
  '/s3.jpg',
  '/s4.jpg',
  '/s5.jpg',
]
const SLIDE_INTERVAL = 5000

const HIGHLIGHTS = [
  {
    icon: FiClock,
    title: 'Open 7 days',
    text: 'Walk in or call ahead — we take bookings every day of the week.',
  },
  {
    icon: FiAward,
    title: 'Experienced therapists',
    text: 'Trained in traditional Thai technique and remedial bodywork.',
  },
  {
    icon: FiMapPin,
    title: 'Regents Park',
    text: '415 Park Road — a short walk from Regents Park station.',
  },
]

/* Cross-fading gallery card. Holds on the first frame when the visitor has
   asked for reduced motion, or while the tab is in the background. */
function HeroSlideshow() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduced.matches) return undefined

    const timer = setInterval(() => {
      if (document.hidden) return
      setIndex((current) => (current + 1) % HERO_SLIDES.length)
    }, SLIDE_INTERVAL)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hero__figure">
      <div className="hero__frame">
        {HERO_SLIDES.map((src, slideIndex) => (
          <img
            key={src}
            src={src}
            alt={
              slideIndex === 0
                ? `${SITE.name} in ${SITE.suburb}`
                : `Inside ${SITE.name}`
            }
            className={slideIndex === index ? 'is-active' : ''}
            loading={slideIndex === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
      </div>
      <div className="hero__dots">
        {HERO_SLIDES.map((src, slideIndex) => (
          <button
            key={src}
            type="button"
            className={slideIndex === index ? 'is-active' : ''}
            aria-label={`Show photo ${slideIndex + 1}`}
            aria-current={slideIndex === index}
            onClick={() => setIndex(slideIndex)}
          />
        ))}
      </div>
    </div>
  )
}

function Home() {
  return (
    <>
      <Seo
        title="Amara Remedial Thai Massage | Regents Park, Sydney"
        description="Thai massage, remedial therapy, deep tissue and hot stone massage at 415 Park Road, Regents Park NSW. Open 7 days, HICAPS rebates."
        path="/"
        image="/new_01.jpg"
        jsonLd={[localBusinessLd, websiteLd]}
      />

      <section className="hero">
        <div className="shell hero__inner">
          <div className="hero__copy">
            <span className="eyebrow">{SITE.suburb}</span>
            <h1 className="hero__title">
              Traditional Thai hands,
              <span>remedial results.</span>
            </h1>
            <p className="hero__lead">
              Thai, remedial and deep tissue massage by experienced therapists —
              in a quiet room on Park Road, open every day of the week.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href={SITE.phones[0].href}>
                Book by phone
              </a>
              <Link className="btn btn--ghost" to="/Treatment">
                View treatments
              </Link>
            </div>
            <ul className="hero__badges">
              <li>Open 7 days</li>
              <li>Walk-ins welcome</li>
              <li>Street parking</li>
            </ul>
          </div>
          <HeroSlideshow />
        </div>
      </section>

      <section className="section highlights">
        <div className="shell highlights__grid">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <article className="highlight" key={title}>
              <Icon className="highlight__icon" aria-hidden="true" />
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <hr className="rule" />

      <section className="section treatments-preview">
        <div className="shell">
          <header className="section-head">
            <div>
              <span className="eyebrow">What we do</span>
              <h2 className="section-title">Treatments</h2>
              <p className="section-lead">
                Four signature treatments, each tailored on the day to what your
                body actually needs.
              </p>
            </div>
            <Link className="text-link" to="/Treatment">
              All treatments <FiArrowRight aria-hidden="true" />
            </Link>
          </header>

          <ul className="treatment-grid">
            {TREATMENTS.map((treatment) => (
              <li key={treatment.id}>
                <Link className="treatment-card" to="/Treatment">
                  <div className="treatment-card__media">
                    <img
                      src={treatment.image}
                      alt={`${treatment.title} at ${SITE.name}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="treatment-card__body">
                    <h3>{treatment.title}</h3>
                    <p>{treatment.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section promo-band">
        <div className="shell promo-band__inner">
          <div className="promo-band__text">
            <span className="eyebrow">Gift vouchers</span>
            <h2 className="section-title">Give someone an hour off.</h2>
            <p className="section-lead">
              Vouchers are available in store for any treatment — we fill in the
              details while you wait.
            </p>
            <Link className="btn btn--ghost" to="/Promotions">
              See promotions
            </Link>
          </div>
          <div className="promo-band__media">
            <img
              src="/gif-banner.jpg"
              alt={`Gift voucher from ${SITE.name}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
