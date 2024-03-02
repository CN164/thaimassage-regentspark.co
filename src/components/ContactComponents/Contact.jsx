import React from 'react'
import './Contact.scss'
import { FaFacebookF } from "react-icons/fa";

function Contact() {
    return (
        <div className='content-contack'>
            <head>
            </head>
            <div className='content-con'>
                <div className='con-Map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.245315598005!2d151.0210796152106!3d-33.883335380652255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bc5fe5248fdd%3A0x4f1bf24a365801b7!2zNDE1IFBhcmsgUmQsIFJlZ2VudHMgUGFyayBOU1cgMjE0MyDguK3guK3guKrguYDguJXguKPguYDguKXguLXguKI!5e0!3m2!1sth!2sth!4v1633767041707!5m2!1sth!2sth" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className='con-contact'>
                    <p>Address : <label>415 Park Road, Regents Park NSW 2143</label></p>
                    <p>Booking : <label><a className='telCall' href="tel:02-8772-6255">02-8772-6255</a> , <a className='telCall' href="tel:04-6696-3564">04-6696-3564</a></label></p> 
                    <p>Open 7 Days | Find Us on</p>
                    <a href="https://www.facebook.com/profile.php?id=61552383613325&mibextid=LQQJ4d" className="cta-btn" target="_blank"><FaFacebookF /> Amara Remedial Thai Massage</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
