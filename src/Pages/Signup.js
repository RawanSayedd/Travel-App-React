import React from "react";
import SignupForm from "../Components/SignupForm";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SignupImage from "../assets/1.jpg";

function Signup() {
  return (
    <div className="signup">
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={SignupImage}
        title="Sign Up"
        btnClass="hide"
      />
      <SignupForm />
      <Footer />
    </div>
  );
}

export default Signup;
