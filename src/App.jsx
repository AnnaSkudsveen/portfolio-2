import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Project from "./pages/project";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="project/:id" element={<Project />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </>
  );
}

export default App;
