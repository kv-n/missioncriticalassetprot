import React, { useState } from 'react'
import '../../sass/_nav.scss'

import logo from '../../assets/images/logo.png'

const Nav = () => {
    return (
        <>
        <div className="nav">
            <div className="nav__logo">
                <img src={logo} alt="Mission Critical Asset Protection | Logo" />
            </div>
            <div className="nav__list">
                <ul>
                    <li className="nav-dropdown-target">Systems
                        <ul className="nav-dropdown">
                            <li>Fire Systems</li>
                            <li>Water Systems</li>
                        </ul>
                    </li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="hamburger">
                <div className="hamburger__bar" />
                <div className="hamburger__bar" />
                <div className="hamburger__bar" />
            </div>
        </div>
        <div className="overlay">
        <div className="overlay__list">
                <ul>
                    <li>Systems
                        <ul>
                            <li>Fire Systems</li>
                            <li>Water Systems</li>
                        </ul>
                    </li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Nav