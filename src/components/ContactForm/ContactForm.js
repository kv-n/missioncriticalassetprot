import React from 'react';
import '../../sass/_contact-form.scss'

export default function ContactUs() {

  return (
    <form className="contact-form">
      <input type="text" name="user_name" placeholder="NAME" />
      <input type="email" name="user_email" placeholder="EMAIL" />
      <input type="number" name="number" placeholder="PHONE NUMBER" />
      <select>
          <option>--Subject--</option>
          <option>Service</option>
          <option>Sales</option>
          <option>Installation</option>
          <option>Other</option>
      </select>
      <textarea rows="10" name="message" placeholder="How can we assist your team? We look forward to being a part of your Fire and Safety Team."/>
      <input className="btn" type="submit" value="Send" />
    </form>
  );
}