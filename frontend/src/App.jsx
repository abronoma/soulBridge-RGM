import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage  from "./pages/landingPage";
import About from "./pages/about"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
