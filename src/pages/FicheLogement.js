import React from 'react';
import Layout from '../components/Layout';
import Carrousel from '../components/Carrousel';

const FicheLogement = () => {
  return (
    <Layout>
      <Carrousel /> {/* Affiche le carrousel des images */}
      {/* Autres contenus de la page Fiche logement */}
    </Layout>
  );
};

export default FicheLogement;