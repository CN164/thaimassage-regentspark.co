import React, { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import './Header.scss'
import { Link } from 'react-router-dom'


function Header() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header">
            <head>
            </head>
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <a href="/">
                            <img src="./logo-preview.png" alt="logo_Thaimassage" />
                            <b>Amara Remedial ThaiMassage</b>
                        </a>
                    </div>
                    <ul className={click ? "menu active" : "menu"}>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <Link to="/Treatment">Treatment</Link>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <Link to="/Promotions">Promotions</Link>
                        </li>
                        <li className="menu-link" onClick={closeMobileMenu}>
                            <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="mobile-menu" onClick={handleClick}>
                        {click ? (<FiX />) : (<FiMenu />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
