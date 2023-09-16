import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AboutImage from "../assets/night.jpg";
import AboutData from "../Components/AboutData";
function About() {
  return (
    <div className="about">
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImage}
        title="About"
        btnClass="hide"
      />
      <AboutData
        header="Our History"
        text="Trippy is owned and managed by Trippy .In Pvt. Ltd., a leading brand in web designing services and e-commerce solutions. Trippy is counted for its expertise in web solutions and its top ranking business portals. Our invincible expertise and rich experience has raised our spirit to reach ahead from our client's expectation. Commendable success rate of other portals managed by Trippy is a live paradigm of our work excellence."
      />
      <AboutData
        header="Our Mission"
        text="Our Mission is to touch the horizon where our capabilities may successfuly meet with the requirements of our clients, that too with ultimate transparency and cost-effectiveness"
      />
      <AboutData
        header="Our Vision"
        text="To saw the seeds of par-excellenxe services with customers centric approach and reap the trust of worldwide clients "
      />
    </div>
  );
}

export default About;
