import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import Settings from "./Settings";
import { Tarea01Funciones } from "./Tareas/Tarea01/Tarea01Funciones";
import Tarea01Clases from "./Tareas/Tarea01/Tarea01Clases";
import { Tarea02 } from "./Tareas/Tarea02/Tarea02";
import { ErrorPage } from "../components/general/ErrorPage";
import { IErrorInfo } from "../models/IErrorInfo";

const errorInfo: IErrorInfo ={
  errorCode: 404,
  errorDescription: "Page Not found"
}

const RouterLinks = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/Tarea01/funciones" element={<Tarea01Funciones />} />
      <Route path="/Tarea01/clases" element={<Tarea01Clases />} />
      <Route path="/Tarea02" element={<Tarea02 />} />
      <Route path="*" element={<ErrorPage errorInfo={errorInfo} />} />

    </Routes>
  </BrowserRouter>
);

export default RouterLinks;
