import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactImage from "../assets/2.jpg";
import ContactForm from "../Components/ContactForm";

function Contact() {
  return (
    <div className="contact">
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ContactImage}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
    </div>
  );
}

export default Contact;
