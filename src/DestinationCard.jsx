import React from "react";
import "./DestinationCard.css"

function DestinationCard({ destination }) {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} />
      <h3>{destination.name}</h3>
      <p className="location">{destination.location}</p>
      <p className="description">{destination.description}</p>
      <p className="price"><strong>{destination.price}</strong></p>
    </div>
  );
}

export default DestinationCard;