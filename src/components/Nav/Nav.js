import React, { useState } from 'react'
import '../../sass/_nav.scss'

import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

const Nav = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ dropdown, setDropdown ] = useState(false)
    return (
        <>
        <div className="nav">
            <div className="nav__logo">
                <Link to="/"><img src={logo} alt="Mission Critical Asset Protection | Logo" /></Link>
            </div>
            <div className="nav__list">
                <ul>
                    <li className="nav-dropdown-target">Systems
                        <ul className="nav-dropdown">
                            <li>Fire Systems</li>
                            <li>Water Systems</li>
                        </ul>
                    </li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className={`hamburger ${isOpen ? "open" : "" }`} onClick={() => setIsOpen(!isOpen)}>
                <div className="hamburger__bar" />
                <div className="hamburger__bar" />
                <div className="hamburger__bar" />
            </div>
            <div className={`overlay ${isOpen ? "show" : ""}`}>
                <div className="overlay__list">
                    <ul>
                        <li className={`overlay-dropdown-trigger ${dropdown ? "active" : ""}`} onClick={() => setDropdown(!dropdown)}>Systems
                            <ul className={`${dropdown ? "overlay-dropdown-visible" : "overlay-dropdown-hidden"}`}>
                                <li>Fire Systems</li>
                                <li>Water Systems</li>
                            </ul>
                        </li>
                        <hr />
                        <li><Link to="/services">Services</Link></li>
                        <hr />
                        <li><Link to="/contact">Contact</Link></li>
                        <hr />
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Nav