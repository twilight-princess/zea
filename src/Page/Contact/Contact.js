import React from 'react';
import logo from './contact.png';
import './Contact.css'

function Contact() {
  return (
    <div className="Contact">
      <img src={logo} className="Contact-logo" alt="logo" />
      <form
        action="mailto:zeaevans@gmail.com"
        method="POST"
        enctype="multipart/form-data"
        name="email-me">

        Your Name:<br />
        <input type="text" size="20" name="VisitorName" /><br /><br />

        Your Comment:<br />
        <textarea name="VisitorComment" rows="4" cols="20">
        </textarea><br />

        <input type="submit" value="Email This Form" />


      </form>
    </div>
  )
};

export default Contact;