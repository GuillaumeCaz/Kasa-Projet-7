import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "../components/Layout.js"
import "../styles/Error404.css"
import error404 from "../assets/404.png"
const Error404 = () => {

  return (
    <Layout>
    <div className='corps'>
      <img src={error404} className='error404' alt='error404' />
      <p className='errortxt'>Oups, la page que vous avez demandée n'existe pas.</p>
      <Link className="Lien" to="/">Retour à la page d'accueil</Link>
    </div> 
    </Layout>
  );

};

export default Error404;