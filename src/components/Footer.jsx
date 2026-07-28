import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'
import { SITE, NAV_LINKS } from '../data/site'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <nav className="site-footer__nav" aria-label="Footer">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} exact={link.exact}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <p className="site-footer__legal">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
