import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="flex justify-between items-center px-4 sm:px-6 py-5 fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-transparent border-b border-white/10">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
            <img
              src="/logo.jpg"
              alt="RGM"
              className="w-8 h-8 object-contain"
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <a
            href="/"
            className="text-white hover:text-[#ffb6f9] font-medium text-lg transition-colors"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white hover:text-[#ffb6f9] font-bold text-lg transition-colors"
          >
            About
          </a>
          <button
            onClick={() => setFormOpen(true)}
            className="text-white hover:text-[#ffb6f9] font-medium text-lg transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-white p-2 rounded-lg bg-[#7b23cc]/80 hover:bg-[#9b2cff] transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-[#7b23cc]/30 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-6 sm:p-8 space-y-5 mt-20 items-center">
          {/* Home Button */}
          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-base sm:text-lg font-semibold px-1 py-5 rounded-full bg-[#9b2cff] hover:bg-[#a84aff] hover:scale-105 transition-all w-2/3 text-center"
          >
           Home
          </a>

          {/* About Button */}
          <a
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-base sm:text-lg font-semibold px-1 py-5 rounded-full bg-[#9b2cff] hover:bg-[#a84aff] hover:scale-105 transition-all w-2/3 text-center"
          >
            About RGM
          </a>

          {/* Contact Button */}
          <a
            href="/contact"
            onClick={() => {
              setMobileMenuOpen(false);
              setFormOpen(true);
            }}
            className="text-white text-base sm:text-lg font-semibold px-1 py-5 rounded-full bg-[#9b2cff] hover:bg-[#a84aff] hover:scale-105 transition-all w-2/3 text-center"
          >
            Connect With Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
