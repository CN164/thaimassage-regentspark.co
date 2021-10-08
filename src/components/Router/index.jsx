import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomeIndex from '../HomeComponents/Home'
import TreatmentIndex from '../TreatmentComponents/Treatment'
import PromotionIndex from '../PromotionsComponents/Promotion'
import ContactIndex from '../ContactComponents/Contact'

function Routers() {
    return (
        <div>
            <Switch>
                <Route exact path="/"><HomeIndex/></Route>
                <Route exact path="/Treatment"><TreatmentIndex/></Route>
                <Route exact path="/Promotions"><PromotionIndex/></Route>
                <Route exact path="/Contact"><ContactIndex/></Route>
            </Switch>
        </div>
    )
}

export default Routers