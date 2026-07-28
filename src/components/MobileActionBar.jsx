import React from 'react'
import { FiNavigation, FiPhone } from 'react-icons/fi'
import './MobileActionBar.scss'
import { SITE } from '../data/site'

/* Thumb-reachable call / directions bar, phones and small tablets only. */
function MobileActionBar() {
  return (
    <div className="action-bar" role="group" aria-label="Quick actions">
      <a className="action-bar__btn is-primary" href={SITE.phones[0].href}>
        <FiPhone aria-hidden="true" />
        Call now
      </a>
      <a
        className="action-bar__btn"
        href={SITE.mapsUrl}
        target="_blank"
        rel="noreferrer"
      >
        <FiNavigation aria-hidden="true" />
        Directions
      </a>
    </div>
  )
}

export default MobileActionBar
