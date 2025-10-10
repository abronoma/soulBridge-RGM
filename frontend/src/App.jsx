import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage  from "./pages/landingPage";
import About from "./pages/about"
import ConnectWithUs from "./pages/contact"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ConnectWithUs />} />
    </Routes>
  );
}
