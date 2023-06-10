import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import FicheLogement from './pages/FicheLogement';
import Error404 from './pages/Error404';
import APropos from './pages/APropos';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} /> {/* Utilisez le chemin en minuscules et sans majuscules */}
        <Route path="/error404" element={<Error404 />} /> {/* Utilisez un chemin en minuscules */}
        <Route path="/a-propos" element={<APropos />} /> {/* Utilisez un chemin en minuscules et des tirets */}
        <Route path="*" element={<Error404 />} /> {/* Cette route sert de gestionnaire d'erreur pour toutes les autres routes */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);




