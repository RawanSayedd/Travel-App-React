import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Trip from "../Components/Trip";
import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import "../App.css";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        title="Your Journey Your Story"
        text="Choose Your Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
