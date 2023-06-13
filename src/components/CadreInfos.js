import React from "react";
import { useParams } from "react-router-dom";
import data from "../datas/datas.json";
import starImage from "../assets/Stars/Star.png";
import emptyStarImage from "../assets/Stars/EmptyStar.png";
import "../styles/CadreInfos.css";

const CadreInfos = () => {
  const { id } = useParams(); // Récupère l'ID de l'URL

  // Recherche l'objet correspondant dans le fichier JSON
  const logement = data.find((item) => item.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const tags = logement.tags; // Récupère les tags du logement

  const rating = logement.rating; // Récupère le rating du logement
  const maxRating = 5; // Note maximale

  // Génère un tableau d'images d'étoiles en fonction du rating
  const stars = Array.from({ length: rating }, (_, index) => (
    <img key={index} src={starImage} className="star" alt="Étoile pleine" />
  ));
  const emptyStars = Array.from({ length: maxRating - rating }, (_, index) => (
    <img key={index} src={emptyStarImage} className="star" alt="Étoile vide" />
  ));

  return (
    <div className="cadreInfos">
      <div className="title_logement">
        <p className="enonce_logement">{logement.title}</p>
        <p className="adresse">{logement.location}</p>
      </div>
      <div className="owner">
        <p className="name_owner">{logement.host.name}</p>
        <img src={logement.host.picture} className="id_owner" alt="id_owner" />
      </div>
      <div className="attributs">
        {tags.map((tag, index) => (
          <div key={index} className="tag">
            {tag}
          </div>
        ))}
      </div>
      <div className="note">
        {stars}
        {emptyStars}
      </div>
    </div>
  );
};

export default CadreInfos;
