import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="contact-container">
      <h1>Send a Message to Us!</h1>
      <form>
        <input type="text" placeholder="Please Enter Your Name Here" />
        <input type="emial" placeholder="Please Enter Your E-mail Here" />

        <input type="text" placeholder="Please Enter Any Subject Here" />
        <textarea
          rows="5"
          placeholder="Please Enter Your Message Here"
        ></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
