import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Banner.css";
import K from "../assets/Logo/K.png";
import Amaison from "../assets/Logo/Amaison.png";
import S from "../assets/Logo/S.png";
import A from "../assets/Logo/a.png";

const Banner = () => {
  const location = useLocation();

  const isPageActive = (pathname) => {
    return location.pathname === pathname;
  };
  return (
    <div className="banner">
      <div className="brand">
        <img src={K} alt="Logo K" className="logo-image" />
        <img src={Amaison} alt="Logo Amaison" className="logo-image" />
        <img src={S} alt="Logo S" className="logo-image" />
        <img src={A} alt="Logo A" className="logo-image" />
      </div>
      <div className="banner_buttons">
        <Link
          to="/"
          className={`banner_button ${isPageActive("/") ? "active" : ""}`}
        >
          Accueil
        </Link>
        <Link
          to="/APropos"
          className={`banner_button ${
            isPageActive("/APropos") ? "active" : ""
          }`}
        >
          À propos
        </Link>
      </div>
    </div>
  );
};

export default Banner;
