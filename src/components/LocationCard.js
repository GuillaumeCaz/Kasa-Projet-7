import React from "react";
import { Link } from "react-router-dom";
import "../styles/LocationCard.css";
import locationData from "../datas/datas.json";

const LocationCard = ({ id }) => {
  const location = locationData.find((item) => item.id === id);

  if (!location) {
    return <div>Location not found</div>;
  }

  const ficheLogementLink = `/fiche-logement/${location.id}`; // Lien vers la fiche de logement

  return (
    <Link to={ficheLogementLink} className="location-card">
      <div
        className="location-image"
        style={{ backgroundImage: `url(${location.pictures[0]})` }}
      ></div>
      <h3 className="location-title">{location.title}</h3>
    </Link>
  );
};

export default LocationCard;
