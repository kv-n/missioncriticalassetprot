import React from 'react'
import '../../sass/_services.scss'

const Services = () => {
    return (
        <div className="services">
            <div className="services__banner">
                <div className="services__banner-text">
                    <h1>Our Services</h1>
                </div>
            </div>
            <div className="services__body">
                <p><strong>Maintenance:</strong> MCAP has the knowledge and expertise to provide you with valuable inspections to keep all fire and life safety systems in peak operating condition. Here is a sample of the offering that MCAP can provide. If you have any additional needs, please contact us and we can will provide solutions to meet all of your fire and life safety needs.</p>
                <ul>
                    <li>Quarterly and Annual Fire Sprinkler Inspections</li>
                    <li>Five-Year Wet Fire Sprinkler Certification</li>
                    <li>Semi-Annual and Annual Waterless Fire Suppression Inspections</li>
                    <li>Semi-Annual and Annual Fire Alarm Inspections</li>
                </ul>
                <p><strong>24/7 Emergency Service:</strong> At MCAP our main focus is to provide your team with peace-of-mind that your assets are protected should an emergency situation arise. Should an emergency situation arise, our MCAP team will respond no matter the time; 24 hours a day , 7 days a week, and 365 days year.</p>
                <p><strong>Installation:</strong> From a ground-up build to a tenant improvement on an existing system, MCAP can manage your project from design through system commissioning. Our team will work with you to create a fire and life safety system that will provide the highest level of protection that meets the needs of your critical needs.</p>
            </div>
        </div>
    )
}

export default Services