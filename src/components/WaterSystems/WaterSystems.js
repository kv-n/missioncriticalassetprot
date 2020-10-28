import React, { useState } from 'react'
import '../../sass/_water-systems.scss'

const WaterSystems = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ isOpen2, setIsOpen2 ] = useState(false)
    const [ isOpen3, setIsOpen3 ] = useState(false)
    const [ isOpen4, setIsOpen4 ] = useState(false)
    const [ isOpen5, setIsOpen5 ] = useState(false)
    const [ isOpen6, setIsOpen6 ] = useState(false)
    const [ isOpen7, setIsOpen7 ] = useState(false)

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
                <p><strong>Clean Agents:</strong> Clean agent suppression systems, like FM-200® and Sapphire®, utilize fire and/or smoke detection to discharge the agent into the protected area.  These systems are perfect for normally occupied and critical infrastructure areas where asset protection is of the upmost priority.  MCAP has partnered with Ansul to provide the industry’s leading fire suppression agents and systems. Typical Application Areas:</p>
                <ul>
                    <li>Data Centers</li>
                    <li>Telecommunication Rooms</li>
                    <li>Laboratories</li>
                    <li>Medical Facilities</li>
                    <li>Museums</li>
                    <li>Control Rooms</li>
                </ul>
                <div>
                    <button className={`${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>FM-200®: FM-200®</button>
                    <p className={`${isOpen ? "visible" : "hidden"}`}>is a UL and EPA approved clean gaseous fire suppression agent with zero risk of causing ozone depletion.  FM-200® is a colorless, odorless, and rapid firing agent that works in seconds once discharged.  This agent is readily suited for normally occupied areas that require the protection of high-value assets.</p>
                </div>
                <div>
                    <button className={`${isOpen3 ? "active" : ""}`} onClick={() => setIsOpen3(!isOpen3)}>Inert Gasses</button>
                    <div className={`${isOpen3 ? "visible" : "hidden"}`}>
                        <p>Inert gases can be considered some of the most “green” of the fire suppression options.  Inert gases utilize either a single gas or a combination of nitrogen, argon, and/or CO2 to displace the oxygen in the protected area to quickly extinguish fire.  Inert gas systems are typically high pressure extinguishing systems and upon discharge and venting the protected area will quickly return back to its normal atmospheric state.  MCAP can assist in determining if an inert gas system is best suited to your special hazard area.</p>
                        <p><strong>Inergen®:</strong> Inergen is a blend of 52% Nitrogen, 40% Argon, and 8% CO² that poses zero ozone depletion threat as these are gases already found in the natural atmosphere.  Inergen is safe for normally occupied spaces and is approved by both UL and the EPA. Typical Application Areas:</p>
                        <ul>
                            <li>Telecommunication Rooms</li>
                            <li>Data Centers</li>
                            <li>Control Rooms</li>
                            <li>Power Plants</li>
                            <li>Medical Facilities</li>
                            <li>Laboratories</li>
                        </ul>
                        <p><strong>CO²:</strong> CO² systems are highly effective fire suppression systems as CO² quickly fills the space displacing the oxygen and extinguishing the fire.  CO² is colorless, odorless, an asphyxiant and electrically non-conductive; these systems are ideal for areas that have little to no personnel, but contain sensitive equipment.  Upon proper ventilation of the protected space after discharge, personnel can resume work as usual. Typical Application Areas:</p>
                        <ul>
                            <li>Engine Rooms</li>
                            <li>Generators</li>
                            <li>Flammable Liquid Storage</li>
                            <li>Large Industrial Machinery</li>
                        </ul>
                    </div>
                    <p><strong>Water Systems:</strong> Water based systems are the most common fire protection systems today.  These systems are extremely environmentally friendly with no risk of ozone depletion because the extinguishing agent is water.  These systems are very effective means of fire suppression for areas that contain replaceable assets.  Since water is corrosive and highly conductive in nature, these systems should not be used in areas with sensitive equipment or irreplaceable assets.</p>
                    <div>
                        <button className={`${isOpen4 ? "active" : ""}`} onClick={() => setIsOpen4(!isOpen4)}>Pre Action Systems</button>
                        <p className={`${isOpen4 ? "visible" : "hidden"}`}>Pre-Action sprinkler systems are a dry-pipe, water based system; meaning that no water is held in the piping network.  Instead, water is held from the piping network by pressurized air and an electronic valve known as a pre-action valve.  The valve initiates upon flame, smoke, or heat detection in the protected area.  The dual action initiation provides extra protection from inadvertent discharge making it perfect for water sensitive areas containing critical equipment or assets.</p>
                    </div>
                    <div>
                        <button className={`${isOpen5 ? "active" : ""}`} onClick={() => setIsOpen5(!isOpen5)}>Deluge Systems</button>
                        <p className={`${isOpen5 ? "visible" : "hidden"}`}>Like pre-action, Deluge is a dry pipe fire sprinkler system, only the sprinkler heads remain constantly open and the pipe is not pressurized by air.  Upon triggering of the system, water flows through all of the sprinkler heads connected to that system so that the fire is quickly extinguished and the threat of the fire spreading is minimized.  High hazard areas such as power plants and chemical storage facilities are ideal for this type of water based system.</p>
                    </div>
                    <div>
                        <button className={`${isOpen6 ? "active" : ""}`} onClick={() => setIsOpen6(!isOpen6)}>Foam Systems</button>
                        <div className={`${isOpen6 ? "visible" : "hidden"}`}>
                            <ul>
                                <li>Low Expansion - where the bubble expansion ratio is small (less than 20 to 1) and the bubble contains high water content.  Low Expansion Foam Fire Extinguishing Systems are applicable to special hazards, usually involving flammable or combustible liquids, such as storage tanks. These systems discharge foam bubbles over the liquid surface to provide a cooling, smothering blanket which progressively covers the liquid surface and extinguishes the fire. The foam blanket can prevent vapor production for some time.</li><br />
                                <li>Medium and High Expansion - where the expansion ratios are greater from 20 to 1 up to 1,000 to 1. At these expansion ratios, the bubble water content is low and the bubble is relatively light. The foam bubbles are made by mixing a foam concentrate with water to make a foam solution. The foam solution is then mechanically agitated to form bubbles.  High Expansion foam systems are applicable to areas where it might be desirable to fill the space with foam in order to exclude air and smother the fire. Examples of such areas include basements and warehouses.</li><br />
                                <li>Aqueous film-forming foam (AFFF) functions in a similar manner, but with one notable difference: AFFF is capable of producing water solution films which float on the surface of the liquid and help suppress vapor production. However, this beneficial “film” is obtained with some loss of burn-back resistance.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button className={`${isOpen7 ? "active" : ""}`} onClick={() => setIsOpen7(!isOpen7)}>Wet Systems</button>
                        <p className={`${isOpen7 ? "visible" : "hidden"}`}>A wet pipe sprinkler system is a sprinkler system employing automatic sprinkler heads attached to a piping system containing water and connected to a water supply so that water discharges immediately from sprinklers opened by heat from a fire.  A wet system is used in areas that can be maintained above 40° F. Providing immediate water discharge onto a fire will help to control it quickly and will help prevent it from spreading.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WaterSystems