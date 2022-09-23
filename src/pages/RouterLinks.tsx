import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import Settings from "./Settings";
import { Tarea01 } from "./Tarea01";

const RouterLinks = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/tarea01" element={<Tarea01 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterLinks;
