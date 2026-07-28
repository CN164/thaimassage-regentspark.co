import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './NotFound.scss'

function NotFound() {
  return (
    <div className="notfound">
      <Helmet prioritizeSeoTags>
        <html lang="en-AU" />
        <title>404 — Page not found | Amara Remedial Thai Massage</title>
        <meta
          name="description"
          content="The page you were looking for does not exist. Browse our Thai and remedial massage treatments in Regents Park, Sydney."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="shell">
        <span className="eyebrow">Error 404</span>
        <h1>That page has moved on.</h1>
        <p>
          The link you followed no longer exists. Head back to the start, or
          browse our treatments.
        </p>
        <div className="notfound__actions">
          <Link className="btn btn--primary" to="/">
            Back to home
          </Link>
          <Link className="btn btn--ghost" to="/Treatment">
            View treatments
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
