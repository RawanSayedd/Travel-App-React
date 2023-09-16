import React from "react";
import "./AboutData.css";
function AboutData(props) {
  return (
    <div className="about-data">
      <h2>{props.header}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default AboutData;
