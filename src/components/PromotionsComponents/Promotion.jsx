import React from 'react'
import './Promotion.scss'
import { Helmet } from 'react-helmet-async';

function Promotion() {
    return (
        <div className='contest-Promotions'>
            <Helmet>
                <title>Promotions | Amara Remedial Thai Massage</title>
                <meta name="description" content="Check out our latest promotions and special offers at Amara Remedial Thai Massage in Regents Park, Sydney." />
            </Helmet>
            <div className='content-center'>
                <img src="https://images.unsplash.com/photo-1541701080588-8f9c226c413a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80" alt="Promotions" />
            </div>
        </div>
    )
}

export default Promotion
