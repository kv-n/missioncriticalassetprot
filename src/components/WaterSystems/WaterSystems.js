import React, { useState } from 'react'
import '../../sass/_water-systems.scss'

const WaterSystems = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    return (
        <div className="water-system">
            <div className="water-system__banner">
                <div className="water-system__banner-text">
                    <h1>Water System</h1>
                </div>
            </div>
            <div className="water-system__body">
                <h1>Waterless Supression Systems</h1>
                <p>Using water to extinguish a fire is not always the ideal choice. While sprinklers can often save buildings, they will also likely permanently damage high-value electronic, computer, and IT equipment. For that reason, MCAP designs, installs, and services some of the industry’s highest quality and most reliable waterless fire protection systems on the market.</p>
                <div className={isOpen ? "water-system-show" : "water-system-hidden"}>

                </div>
            </div>
        </div>
    )
}

export default WaterSystems