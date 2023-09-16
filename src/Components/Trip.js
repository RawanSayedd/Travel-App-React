import React from "react";
import "./Trip.css";
import TripData from "./TripData";
import trip1 from "../assets/10.jpg";
import trip2 from "../assets/5.jpg";
import trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className="trip-card">
        <TripData
          cardImg={trip1}
          title="Trip in Indonesia"
          text="Indonesia, Officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the indian and pacific Oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Berneo and New Guinea"
        />
        <TripData
          cardImg={trip2}
          title="Trip in Malaysia"
          text="Malaysia is a southeast asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European culturl influences "
        />
        <TripData
          cardImg={trip3}
          title="Trip in France"
          text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower"
        />
      </div>
    </div>
  );
}

export default Trip;
