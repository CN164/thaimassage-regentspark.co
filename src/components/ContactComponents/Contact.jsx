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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.01521467246064!2d151.02327313548506!3d-33.88338382833862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bd384acf4229%3A0x14788145b6232fc0!2sAmara%20Remedial%20Thai%20Massage!5e0!3m2!1sth!2sth!4v1709367674795!5m2!1sth!2sth" allowfullscreen="" loading="lazy"></iframe>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.01521467246064!2d151.02327313548506!3d-33.88338382833862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bd384acf4229%3A0x14788145b6232fc0!2sAmara%20Remedial%20Thai%20Massage!5e0!3m2!1sth!2sth!4v1709367674795!5m2!1sth!2sth" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>
                <div className='con-contact'>
                    <p>Address : <a target="_blank" href="https://maps.app.goo.gl/C9YRgJEhWyMZUocw6"> <label>415 Park Road, Regents Park NSW 2143</label></a></p>
                    <p>Booking : <label><a className='telCall' href="tel:02-8772-6255">02-8772-6255</a> , <a className='telCall' href="tel:04-6696-3564">04-6696-3564</a></label></p> 
                    <p>Open 7 Days | Find Us on</p>
                    <a href="https://www.facebook.com/profile.php?id=61552383613325&mibextid=LQQJ4d" className="cta-btn" target="_blank"><FaFacebookF /> Amara Remedial Thai Massage</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
