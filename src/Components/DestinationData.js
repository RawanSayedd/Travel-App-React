import React from "react";
import "./Destination.css";
import mountain1 from "../assets/1.jpg";
import mountain2 from "../assets/2.jpg";
import mountain3 from "../assets/3.jpg";
import mountain4 from "../assets/4.jpg";

function DestinationData(props) {
  return (
    <div className={props.cName}>
      <div className="dest-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="dest-img">
        <img alt="mountain1" src={props.img1} />
        <img alt="mountain2" src={props.img2} />
      </div>
    </div>
  );
}

export default DestinationData;
