import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import Settings from "./Settings";
import { Tarea01 } from "./Tarea01";


// import SettingsPage from "./settings";
// import ProjectsPage from "./projects";
// import MembersPage from "./members";
// import AboutPage from "./about";
// import TeamsPage from "./teams";
// import HomePage from "./home";

const RouterLinks = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/about/members">
          <MembersPage />
        </Route>
        <Route path="/about/projects">
          <ProjectsPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/another/teams">
          <TeamsPage />
        </Route> */}
        {/* <Route path="/settings">
          <Tarea01 />
        </Route> */}
        {/* <Route path="/">
          <HomePage />
        </Route> */}

        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/tarea01" element={<Tarea01 />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RouterLinks;
