import React, { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import './NavbarComponents.scss';

function NavbarComponents() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMoblieMenu = () => setClick(false);

    return (
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <a href="/">ThaiMassageRegentsParks</a>
                    </div>
                    <ul className={click ? "menu active" : "menu"}>
                        <li className="menu-link" onClick={closeMoblieMenu}>
                            <a href="#">Home</a>
                        </li>
                        <li className="menu-link" onClick={closeMoblieMenu}>
                            <a href="#">Treatment</a>
                        </li>
                        <li className="menu-link" onClick={closeMoblieMenu}>
                            <a href="#">Promotions</a>
                        </li>
                        <li className="menu-link" onClick={closeMoblieMenu}>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    <div className="moblie-menu" onClick={handleClick}>
                        {click ? (
                            <FiX/>
                        ) : (
                            <FiMenu/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarComponents
