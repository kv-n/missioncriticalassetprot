import React from 'react'
import '../../sass/_home.scss'

import { Link } from 'react-router-dom'

import homeAbout from '../../assets/images/home-about/home-about.jpg'

const Home = () => {
    return (
        <div className="home">
            <div className="home__banner">
                <div className="home_banner-text">
                    <h1>Mission Critical Asset Protection, Inc</h1>
                </div>
            </div>
            <div className="home__services">
                <h1 className="home__header">Our Services</h1>
                <div className="home__services-inner">
                    <div className="home__services-category">
                        <h1>Maintenance</h1>
                        <p>MCAP has the knowledge and expertise to provide our clients with valuable inspections to keep their fire and life safety systems in peak condition.</p>
                    </div>
                    <div className="home__services-category">
                        <h1>24/7 Emergency Service</h1>
                        <p>MCAP provides our clients with peace of mind should any emergency situation arise; 24 hours a day, 365 days a year.</p>
                    </div>
                    <div className="home__services-category">
                        <h1>Installation</h1>
                        <p>From retrofitting an existing system, to building from the ground up, MCAP can provide options for all of your fire alarm and fire suppression needs.</p>
                    </div>
                </div>
                <button><Link to="/services">Learn More</Link></button>
            </div>
            <div className="home__about">
                <h1 className="home__header">About Us</h1>
                <div className="home__about-inner">
                    <div className="home__about-image">
                        <img src={homeAbout} alt="Mission Critical Asset Protection | About" />
                    </div>
                    <div className="home__about-text">
                        <p>After spending years working at other companies in the industry, Eric Behar decided to take all of his knowledge and expertise gained to found his own company with a client first attitude.</p>
                        <p>MCAP, Inc., A veteran owned company, is quickly becoming an industry leader in Southern California; specializing in Critical Infrastructure special hazard protection. From design, to installation, to maintenance; allow MCAP to become your trusted partner for all of your fire and life safety needs.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home