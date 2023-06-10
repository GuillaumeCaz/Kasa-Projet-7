import React from 'react';
import Layout from '../components/Layout';
import DropDown from '../components/DropDown';
import image from '../assets/WallPaper/WallpaperApropos.png'; // Importez votre image
import "../styles/Apropos.css"

const Apropos = () => {
  const dropdown1Content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes";
  const dropdown2Content="La bienveillance fait partie des valeurs fondatrices de Kasa. tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
  const dropdown3Content="Nos équipes se tiennent à votre dispodition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
  const dropdown4Content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
  return (
    <Layout>
      <div className='apropos'>     
        <img className="montagne" src={image} alt="Image" />
        <DropDown title="Fiabilité" content={dropdown1Content} className="dropdownAPropos" />
        <DropDown title="Respect" content={dropdown2Content} className="dropdownAPropos" />
        <DropDown title="Service" content={dropdown3Content} className="dropdownAPropos" />
        <DropDown title="Sécurité" content={dropdown4Content} className="dropdownAPropos" />
      </div> 
    </Layout>
  );
};

export default Apropos;