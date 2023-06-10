import React from 'react';
import { useParams } from 'react-router-dom'; // Importez le hook useParams
import Layout from '../components/Layout';
import Carrousel from '../components/Carrousel';
import DropDown from '../components/DropDown';
import data from '../datas/datas.json'; // Importez les données JSON
import "../styles/FicheLogement.css"
import CadreInfos from '../components/CadreInfos';

const FicheLogement = () => {
 
  const { id } = useParams(); 

  const logement = data.find((log) => log.id === id);

  
  const dropdown1Content = logement.description;
  const dropdown2Content = logement.equipments;

  return (
    <Layout>
      <Carrousel />
        <CadreInfos/>
      <div class="doubleDropDown">
      <DropDown title="Description" content={dropdown1Content} className="dropdown" />
      <DropDown title="Équipements" content={dropdown2Content} className="dropdown" />
      </div>
    </Layout>
  );
};

export default FicheLogement;


