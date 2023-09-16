import React from "react";

function TripData(props) {
  return (
    <div className="trip-data">
      <div className="trip-img">
        <img src={props.cardImg} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default TripData;
