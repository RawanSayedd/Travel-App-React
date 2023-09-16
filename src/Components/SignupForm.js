import React from "react";
import "./SignupForm.css";
import SignupImage from "../assets/2.jpg";

function SignupForm() {
  return (
    <div className="signup-container">
      <h1>Sign Up Here</h1>
      <div className="signup-card">
        <div className="left">
          <img src={SignupImage} alt="signup image" />
        </div>
        <div className="right">
          <form>
            <label htmlFor="text">Please Enter Your Name Here</label>
            <input type="text" placeholder="ex. John Smith" />
            <label htmlFor="text">Please Enter Your E-mail Here</label>

            <input type="email" placeholder="ex. John@example.com" />
            <label htmlFor="password">Please Enter Your Password Here</label>
            <input type="password" placeholder="Password" />
            <label htmlFor="password">Please Re-Enter Your Password Here</label>

            <input type="password" placeholder="Password" />
          </form>
          <small>
            Already have an account? <a href="/"> Sign in Here</a>
          </small>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
