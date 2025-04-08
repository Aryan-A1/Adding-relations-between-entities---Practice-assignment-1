import React from "react";
import "./DestinationCard.css"

function DestinationCard({ destination }) {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} />
      <h3>{destination.name}</h3>
      <p>{destination.location}</p>
      <p>{destination.description}</p>
      <p><strong>{destination.price}</strong></p>
    </div>
  );
}

export default DestinationCard;