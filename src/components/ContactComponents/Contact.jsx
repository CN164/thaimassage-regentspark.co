import React from 'react'
import './Contact.scss'
import { FaFacebookF } from "react-icons/fa";

function Contact() {
    return (
        <div className='content-contack'>
            <div className='content-con'>
                <div className='con-Map'>
                    <img src="https://images.unsplash.com/photo-1499591934245-40b55745b905?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80" alt="GoogleMap-RegentsParkThaiMassage" />
                </div>
                <div className='con-contact'>
                    <p>Address : <label>415 Park Road, Regents Park NSW 2143</label></p>
                    <p>Booking : <label><a className='telCall' href="tel:02-8772-6255">02-8772-6255</a> , <a className='telCall' href="tel:04-1289-0429">04-1289-0429</a></label></p>
                    <p>Open 7 Days | Find Us on</p>
                    <a href="https://www.facebook.com/Regents-Park-Thai-Massage-111906614275663" className="cta-btn" target="_blank"><FaFacebookF /> Regents Patk Thai Massage</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
