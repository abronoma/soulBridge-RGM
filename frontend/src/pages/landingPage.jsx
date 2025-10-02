// File: src/pages/LandingPage.jsx
import React, { useState } from "react";
import { ChevronRight, Heart, Menu, X,  ArrowRight } from "lucide-react";
import Navbar from "../components/navbar";

export const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Navbar />

      <div className="min-h-screen text-white relative overflow-hidden">
        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 w-full h-full bg-black/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex flex-col p-6 sm:p-8 space-y-6 sm:space-y-8 mt-16 sm:mt-20">
            <a 
              href="/" 
              className="text-[#9999B5] hover:text-white transition-colors font-medium py-3 text-lg sm:text-xl flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ArrowRight className="mr-3 w-4 h-4 sm:w-5 sm:h-5" /> Home
            </a>
            <a 
              href="/about" 
              className="text-[#9999B5] hover:text-white transition-colors font-medium py-3 text-lg sm:text-xl flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ArrowRight className="mr-3 w-4 h-4 sm:w-5 sm:h-5" /> About
            </a>
            <a 
              href="#contact" 
              className="text-[#9999B5] hover:text-white transition-colors font-medium py-3 text-lg sm:text-xl flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ArrowRight className="mr-3 w-4 h-4 sm:w-5 sm:h-5" /> Contact
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#1A1A2C] to-[#0E0E17] relative px-4 sm:px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 text-center min-h-screen flex items-center justify-center">
          
          {/* Background Image */}
          {/* <div 
            className="absolute inset-0 bg-fixed bg-center"
            style={{ 
              backgroundImage: "url('rgm1.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: 0.3
            }}
          ></div> */}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 z-0"></div>

          {/* Animated particles */}
          <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-float"
                style={{
                  width: Math.random() * 20 + 5,
                  height: Math.random() * 20 + 5,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  backgroundColor: i % 3 === 0 ? '#D946EF' : i % 3 === 1 ? '#F59E0B' : '#60A5FA',
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: `${Math.random() * 10 + 15}s`
                }}
              />
            ))}
          </div>

          {/* Hero Content */}
<div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center text-center min-h-[60vh] gap-10 px-4">
  <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
    Welcome To A{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] to-[#9333EA]">
      New
    </span>
    <div className="mt-2">Beginning!!!</div>
  </h1>

  <p className="text-sm sm:text-2xl md:text-2xl max-w-3xl leading-relaxed text-[#CCCCEE]">
    Unlock the life God created uniquely for you. Grow in Faith, Find Guidance. Stay Connected
  </p>

  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
    <button className="bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-800 hover:to-purple-600 px-10 py-4 rounded-xl text-xl sm:text-2xl font-bold text-white shadow-lg shadow-purple-700/50 transition-transform duration-300 transform hover:scale-105 flex items-center gap-3">
      <Play className="w-5 h-5 sm:w-6 sm:h-6" />
      journey here
    </button>
  </div>
</div>

        </section>
      </div>
    </>
  );
};

// Play Icon
const Play = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default LandingPage;
