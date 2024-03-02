import React from 'react'
import "./CallToAction.scss"
import { FaFacebookF } from "react-icons/fa";

function CallToAction() {
    return (
        <div className="cta-bg">
            <head>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6043505553901621" crossorigin="anonymous"></script>
            </head>
            <div className='liner' />
            <div className="overlay"></div>
            <div className="container">
            <div className="cta-text">
                <img src="./logo-preview.png" alt="Logo_web_Thaimassage" />
                <p>Address : <label>415 Park Road, Regents Park NSW 2143</label></p>
                <p>Booking : <label><a className='telCall' href="tel:02-8772-6255">02-8772-6255</a> , <a className='telCall' href="tel:04-6696-3564">04-6696-3564</a></label></p>
                <p>Open 7 Days | Find Us on</p>
                <a href="https://www.facebook.com/profile.php?id=61552383613325&mibextid=LQQJ4d" className="cta-btn" target="_blank"><FaFacebookF /> Amara Remedial Thai Massage</a>
            </div>
            <div className='cta-images'>
                <img src="" alt="" />
            </div>
            </div>
        </div>
    )
}

export default CallToAction
