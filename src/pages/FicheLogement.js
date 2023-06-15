import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Carrousel from "../components/Carrousel";
import DropDown from "../components/DropDown";
import data from "../datas/datas.json";
import "../styles/FicheLogement.css";
import CadreInfos from "../components/CadreInfos";
import Error404 from "./Error404"; 

const FicheLogement = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = data.find((log) => log.id === id);
  const dropdown1Content = logement?.description;
  const dropdown2Content = logement?.equipments;

  if (!logement) {
    navigate("/404");
    return <Error404 />;
  } else {
    return (
      <Layout>
        <Carrousel />
        <CadreInfos />
        <div className="doubleDropDown">
          <DropDown
            title="Description"
            content={dropdown1Content}
            className="dropdown"
          />
          <div className="separation"></div>
          <DropDown
            title="Équipements"
            content={dropdown2Content}
            className="dropdown"
          />
        </div>
      </Layout>
    );
  }
};

export default FicheLogement;
