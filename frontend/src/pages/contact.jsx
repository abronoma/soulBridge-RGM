// File: src/pages/ConnectWithUs.jsx
import React, { useState, useEffect } from "react";
import { ChevronDown, UserPlus, Users, Heart } from "lucide-react";
import Navbar from "../components/navbar";

export default function ConnectWithUs() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formType, setFormType] = useState(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "auto";
  }, [modalOpen]);

  // Google Form URLs
  const forms = {
    member:
      "https://docs.google.com/forms/d/e/1FAIpQLSeH36IflDek46-cksfl8XZpFR0QnK8ABb2Fi9WetH4HR0JCLg/viewform?embedded=true",
    affiliate:
      "https://docs.google.com/forms/d/e/1FAIpQLSd1WtOeBqdMF9JfO3kVCnc6Rn3vFB8NMk7lWU4Yon1ZLcv3Cg/viewform?embedded=true",
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
    setFormType(null);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col text-white relative overflow-hidden">
        {/* Background Layers */}
       {/* Background Layers */}
<div className="absolute inset-0 -z-10">
  {/* Base image */}
  <div
    className="absolute inset-0 bg-fixed bg-center bg-repeat opacity-30"
    style={{
      backgroundImage: "url('/connect-with-us.jpg')",
      backgroundSize: "contain",
      backgroundRepeat: "repeat"
    }}
  ></div>

  {/* #1d0022 Overlay (lighter) */}
  <div className="absolute inset-0 bg-purple-500 opacity-75"></div>

  {/* Glowing gradient accents (lighter) */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,150,0.08),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(155,44,255,0.1),transparent_60%)] mix-blend-overlay"></div>
</div>


        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center">
            Congratulations!!! You Made The Right Decision.
          </h1>

          {/* Dropdown Button */}
          <div className="relative inline-block text-left">
          <button
  onClick={() => setDropdownOpen(!dropdownOpen)}
  className="bg-[#1d0022] backdrop-blur-md border border-white/20 px-8 py-4 rounded-2xl text-xl sm:text-2xl font-semibold shadow-lg hover:scale-105 hover:bg-[#2a0033] transition-transform flex items-center gap-3"
>
  Connect With Us
  <ChevronDown
    className={`w-5 h-5 transition-transform ${
      dropdownOpen ? "rotate-180" : ""
    }`}
  />
</button>


            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute mt-3 w-56 bg-white text-gray-900 rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
                <button
                  onClick={() => {
                    setFormType("member");
                    setModalOpen(true);
                    setDropdownOpen(false);
                  }}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 w-full text-left"
                >
                  <UserPlus className="w-5 h-5 text-purple-600" />
                  Core Member
                </button>
                <button
                  onClick={() => {
                    setFormType("affiliate");
                    setModalOpen(true);
                    setDropdownOpen(false);
                  }}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-gray-100 w-full text-left"
                >
                  <Users className="w-5 h-5 text-purple-600" />
                  Affiliate Member
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="relative bg-white/95 rounded-2xl shadow-2xl w-full max-w-3xl h-[90vh] flex flex-col overflow-hidden">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full w-10 h-10 text-2xl flex items-center justify-center z-10"
              >
                &times;
              </button>

              <div className="flex-1 overflow-y-auto hide-scrollbar">
                <iframe
                  src={forms[formType]}
                  title="Connect Form"
                  className="w-full h-[90vh] border-0"
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="w-full py-12 relative border-t border-white/10 bg-[#0A0A12]/90 flex flex-col items-center z-10">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">
 <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">
  {/* Logo + Text */}
  <div className="flex items-center space-x-2 sm:space-x-3">
    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-[#eaeaeb] to-[#f7f7f8] flex items-center justify-center">
      <img
        src="/logo.jpg"
        alt="Rhohi Logo"
        className="w-5 h-5 sm:w-6 sm:h-6"
      />
    </div>
    <span className="text-lg sm:text-xl font-bold text-white">
      Rohi Global Ministries
    </span>
  </div>

  {/* Social Links below */}
  <div className="flex space-x-4 sm:space-x-6 mt-4">
    {/* Phone */}
    <a
      href="tel:0592037949"
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-600 flex items-center justify-center hover:bg-[#2a0033] transition-all duration-300"
    >
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </a>

    {/* YouTube */}
    <a
      href="https://www.youtube.com/channel/UCoJOa8wanvR_ADRPCYi2NaQ"
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-600 flex items-center justify-center hover:bg-[#2a0033] transition-all duration-300"
    >
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/233206828759"
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-600 flex items-center justify-center hover:bg-[#2a0033] transition-all duration-300"
    >
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
      </svg>
    </a>
  </div>

  {/* Footer text */}
  <div className="pt-8 border-t border-white/10 text-center w-full mt-6">
    <p className="text-[#9999B5] text-sm sm:text-base">
      &copy; {new Date().getFullYear()} Rohi Global Ministries. All rights reserved.
    </p>
  </div>
</div>
</div>

        </footer>

        {/* Hide scrollbar but keep scroll functionality */}
        <style>
          {`
            .hide-scrollbar {
              scrollbar-width: none; /* Firefox */
              -ms-overflow-style: none; /* IE and Edge */
            }
            .hide-scrollbar::-webkit-scrollbar {
              display: none; /* Chrome, Safari, Opera */
            }
          `}
        </style>
      </div>
    </>
  );
}
