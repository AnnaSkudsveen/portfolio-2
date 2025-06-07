import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Project from "./pages/project.jsx";
import AllProjects from "./pages/AllProjects";
import projects from "./json/projects.json";
import RouteNotFound from "./RouteNotFound";
import Layout from "./pages/layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<AllProjects projects={projects.projects} />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="*" element={<RouteNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
