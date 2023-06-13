import React from "react";
import "../styles/Footer.css";
import K from "../assets/Logo/K.png";
import Amaison from "../assets/Logo/Amaison.png";
import S from "../assets/Logo/S.png";
import A from "../assets/Logo/a.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_logo">
        <img src={K} alt="Logo K" />
        <img src={Amaison} alt="Logo Amaison" />
        <img src={S} alt="Logo S" />
        <img src={A} alt="Logo A" />
      </div>
      <p className="footer_text">
        © 2023 Votre entreprise. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
