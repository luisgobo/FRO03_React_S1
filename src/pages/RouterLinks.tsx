import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import Settings from "./Settings";
import { Tarea01Funciones } from "./Tareas/Tarea01/Tarea01Funciones";
import { Tarea01Clases } from "./Tareas/Tarea01/Tarea01Clases";

const RouterLinks = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Tarea01/funciones" element={<Tarea01Funciones />} />
        <Route path="/Tarea01/clases" element={<Tarea01Clases />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterLinks;