import React from 'react'
import '../../sass/_contact.scss'

import ContactForm from '../ContactForm/ContactForm'

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <ContactForm />
        </div>
    )
}

export default Contact