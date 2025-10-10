// File: src/components/Navbar.jsx
import React, { useState } from "react";
import { Heart, Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-4 sm:px-6 py-5 fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
       <a href="/" className="flex items-center gap-3">
  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
    <img
      src="/logo.jpg"
      alt="RGM"
      className="w-8 h-8 object-contain"
    />
  </div>
  {/* <span className="font-bold text-white tracking-tight text-lg">
    Rohi Global Ministries
  </span> */}
</a>


        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <a
            href="/"
            className="text-white hover:text-white font-xl transition-colors"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white hover:text-white font-bold transition-colors"
          >
            About
          </a>
          <button
            onClick={() => setFormOpen(true)}
            className="text-white hover:text-white font-xl transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-black/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-6 sm:p-8 space-y-6 sm:space-y-8 mt-16 sm:mt-20 items-center">
          {/* Home Button */}
          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-[#1d0022] text-white text-xl sm:text-2xl font-bold px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center gap-3 w-3/4 justify-center"
          >
            <ArrowRight className="w-5 h-5" />
            HOME
          </a>

          {/* About Button */}
          <a
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-[#1d0022] text-white text-xl sm:text-2xl font-bold px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center gap-3 w-3/4 justify-center"
          >
            <ArrowRight className="w-5 h-5" />
            ABOUT RGM
          </a>

          {/* Contact Button */}
          <a
            href="/contact"
            onClick={() => {
              setMobileMenuOpen(false);
              setFormOpen(true);
            }}
            className="bg-[#1d0022] text-white text-xl sm:text-2xl font-bold px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center gap-3 w-3/4 justify-center"
          >
            <ArrowRight className="w-5 h-5" />
            CONNECT
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
