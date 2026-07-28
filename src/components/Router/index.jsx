import React, { useEffect } from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'

import HomeIndex from '../HomeComponents/Home'
import TreatmentIndex from '../TreatmentComponents/Treatment'
import PromotionIndex from '../PromotionsComponents/Promotion'
import ContactIndex from '../ContactComponents/Contact'
import NotFound from '../NotFound'

/* Every route change should start at the top of the new page. */
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function Routers() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <HomeIndex />
        </Route>
        <Route exact path="/Treatment">
          <TreatmentIndex />
        </Route>
        <Route exact path="/Promotions">
          <PromotionIndex />
        </Route>
        <Route exact path="/Contact">
          <ContactIndex />
        </Route>

        {/* Lowercase links land on the canonical, capitalised URL */}
        <Redirect exact from="/treatment" to="/Treatment" />
        <Redirect exact from="/treatments" to="/Treatment" />
        <Redirect exact from="/promotions" to="/Promotions" />
        <Redirect exact from="/promotion" to="/Promotions" />
        <Redirect exact from="/contact" to="/Contact" />

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  )
}

export default Routers
