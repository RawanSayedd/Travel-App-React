import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ServiceImage from "../assets/9.jpg";
import Trip from "../Components/Trip";
function Service() {
  return (
    <div className="service">
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={ServiceImage}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </div>
  );
}

export default Service;
