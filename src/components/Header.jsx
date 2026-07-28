import React, { useEffect, useState } from 'react'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { NavLink, useLocation } from 'react-router-dom'
import './Header.scss'
import { SITE, NAV_LINKS } from '../data/site'

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close the drawer whenever the route changes
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Lock the page behind the open drawer, and allow Escape to close it
  useEffect(() => {
    if (!open) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <NavLink to="/" className="brand" aria-label={`${SITE.name} — home`}>
          <img src={SITE.logo} alt="" width="40" height="40" />
          <span className="brand__text">
            <span className="brand__name">Amara</span>
            <span className="brand__sub">Remedial Thai Massage</span>
          </span>
        </NavLink>

        <nav className="nav-desktop" aria-label="Main">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  exact={link.exact}
                  activeClassName="is-active"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <a className="header-call" href={SITE.phones[0].href}>
          <FiPhone aria-hidden="true" />
          <span>{SITE.phones[0].label}</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`nav-scrim${open ? ' is-open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Viewport-sized clipper: keeps the off-canvas drawer from extending
          the page's scroll area while it sits translated off to the right */}
      <div className="nav-clip" aria-hidden={!open}>
        <nav
          id="mobile-nav"
          className={`nav-mobile${open ? ' is-open' : ''}`}
          aria-label="Mobile"
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  exact={link.exact}
                  activeClassName="is-active"
                  tabIndex={open ? 0 : -1}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav-mobile__foot">
            {SITE.phones.map((phone) => (
              <a key={phone.href} href={phone.href} tabIndex={open ? 0 : -1}>
                <FiPhone aria-hidden="true" /> {phone.label}
              </a>
            ))}
            <p>{SITE.hours}</p>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
