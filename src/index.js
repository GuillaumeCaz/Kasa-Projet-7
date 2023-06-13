import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./pages/home";
import FicheLogement from "./pages/FicheLogement";
import Error404 from "./pages/Error404";
import APropos from "./pages/APropos";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
