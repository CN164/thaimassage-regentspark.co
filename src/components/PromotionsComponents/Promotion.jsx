import React from 'react'
import { Link } from 'react-router-dom'
import { FiPhone } from 'react-icons/fi'
import './Promotion.scss'
import Seo, { breadcrumbLd } from '../Seo'
import { SITE } from '../../data/site'

function Promotion() {
  return (
    <div className="promotion-page">
      <Seo
        title="Gift Vouchers & Promotions"
        description="Massage gift vouchers and current offers at Amara Remedial Thai Massage, 415 Park Road, Regents Park NSW. Available in store, open 7 days."
        path="/Promotions"
        image="/gif-banner.jpg"
        jsonLd={breadcrumbLd([{ name: 'Promotions', path: '/Promotions' }])}
      />

      <header className="page-hero">
        <div className="shell">
          <span className="eyebrow">In store</span>
          <h1>Gift Vouchers</h1>
          <p>
            A voucher for any treatment, made out on the spot. Ask at reception
            or call ahead and we will have one ready.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="shell promotion-layout">
          <figure className="promotion-figure">
            <img
              src="/gif-banner.jpg"
              alt={`Gift voucher certificate from ${SITE.name}, Regents Park`}
              decoding="async"
            />
          </figure>

          <aside className="promotion-aside">
            <h2>How it works</h2>
            <ul className="promotion-notes">
              <li>Walk in or call ahead — bookings are recommended weekends.</li>
              <li>Vouchers are non-refundable and not redeemable for cash.</li>
            </ul>
            <div className="promotion-actions">
              <a className="btn btn--primary" href={SITE.phones[0].href}>
                <FiPhone aria-hidden="true" /> Call to book
              </a>
              <Link className="btn btn--ghost" to="/Treatment">
                See treatments
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default Promotion
