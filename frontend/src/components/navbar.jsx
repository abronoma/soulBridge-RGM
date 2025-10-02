// File: src/components/Navbar.jsx
import React, { useState } from "react";
import { Heart, Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-4 sm:px-6 py-5 fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-[#D946EF] to-[#9333EA] flex items-center justify-center">
            <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
          </div>
          <span className="text-lg sm:text-xl font-bold text-white">SoulBridge</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          <a href="/" className="text-[#9999B5] hover:text-white font-medium transition-colors">Home</a>
          <a href="/about" className="text-[#9999B5] hover:text-white font-medium transition-colors">About</a>
          <button 
            onClick={() => setFormOpen(true)}
            className="text-[#9999B5] hover:text-white font-medium transition-colors"
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
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col p-6 sm:p-8 space-y-6 sm:space-y-8 mt-16 sm:mt-20">
          <a 
            href="/" 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-[#9999B5] hover:text-white text-lg flex items-center transition-colors"
          >
            <ArrowRight className="mr-3 w-4 h-4" /> Home
          </a>
          <a 
            href="/about" 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-[#9999B5] hover:text-white text-lg flex items-center transition-colors"
          >
            <ArrowRight className="mr-3 w-4 h-4" /> About
          </a>
          <button 
            onClick={() => { setMobileMenuOpen(false); setFormOpen(true); }}
            className="text-[#9999B5] hover:text-white text-lg flex items-center transition-colors"
          >
            <ArrowRight className="mr-3 w-4 h-4" /> Contact
          </button>
        </div>
      </div>

      {/* Google Form Modal - FIXED VERSION */}
      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-[#1e1b29] w-full max-w-3xl h-[90vh] rounded-2xl shadow-xl overflow-hidden relative flex flex-col">
            {/* Header with Close Button */}
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <h2 className="text-white text-xl font-bold">Contact Us</h2>
              <button
                className="text-white hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-white/10"
                onClick={() => setFormOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Form Container */}
            <div className="flex-1 overflow-y-auto">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeH36IflDek46-cksfl8XZpFR0QnK8ABb2Fi9WetH4HR0JCLg/viewform?embedded=true"
                width="100%"
                height="1400"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Contact Form"
                className="w-full"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;