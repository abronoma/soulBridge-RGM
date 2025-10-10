import React, { useState } from "react";
import { Play, ArrowRight } from "lucide-react";
import Navbar from "../components/navbar";

const PARTICLES_COUNT = 15;
const PARTICLE_COLORS = ["#D946EF", "#F59E0B", "#60A5FA"];

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT RGM" },
  { href: "/contact", label: "CONNECT WITH US" },
];
const CTA_BUTTONS = [
  {
    label: "Journey Here",
    icon: Play,
    variant: "outline", // changed from "filled"
    href: null,
  },
  {
    label: "About Rohi",
    icon: null,
    variant: "outline",
    href: "/about",
  },
  {
    label: "Connect With Us",
    icon: null,
    variant: "outline",
    href: "/contact",
  },
];


// ✨ Floating Particle Component
const FloatingParticle = ({ index }) => {
  const size = Math.random() * 20 + 5;
  const color = PARTICLE_COLORS[index % 3];
  const delay = index * 0.7;
  const duration = Math.random() * 10 + 15;

  return (
    <div
      className="absolute rounded-full animate-float"
      style={{
        width: size,
        height: size,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        backgroundColor: color,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
      aria-hidden="true"
    />
  );
};

const MobileNavLink = ({ href, label, onClose }) => (
  <a
    href={href}
    className="text-[#9999B5] hover:text-white transition-colors font-medium py-3 text-lg sm:text-xl flex items-center"
    onClick={onClose}
  >
    <ArrowRight className="mr-3 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
    {label}
  </a>
);

const CTAButton = ({ label, icon: Icon, variant, href, onClick }) => {
  const baseClasses =
    "w-48 h-14 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2";

  const variantClasses = {
  filled: "bg-[#9b2cff] hover:bg-[#7b23cc] text-white shadow-[0_0_15px_rgba(155,44,255,0.6)]",
  outline:
    "bg-transparent border-2 border-[#9b2cff] text-white hover:bg-[#9b2cff] hover:text-white",
  transparent:
    "bg-transparent text-white hover:bg-white/10 shadow-none border-none",
};



  const content = (
    <>
      {Icon && <Icon className="w-5 h-5" aria-hidden="true" />}
      <span>{label}</span>
    </>
  );

  const buttonClasses = `${baseClasses} ${variantClasses[variant]}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {content}
    </button>
  );
};

const MobileMenu = ({ isOpen, onClose }) => (
  <div
    className={`fixed top-0 right-0 w-full h-full bg-black/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${
      isOpen ? "translate-x-0" : "translate-x-full"
    } md:hidden`}
    role="dialog"
    aria-modal="true"
    aria-hidden={!isOpen}
  >
    <nav className="flex flex-col p-6 sm:p-8 space-y-6 sm:space-y-8 mt-16 sm:mt-20">
      {NAV_LINKS.map(({ href, label }) => (
        <MobileNavLink key={href} href={href} label={label} onClose={onClose} />
      ))}
    </nav>
  </div>
);

const VideoModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl max-w-[90vw] max-h-[90vh]">
        <iframe
          src="https://www.youtube.com/embed/zBE9atXSF_U?autoplay=1&rel=0"
          title="Win Souls Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-[80vw] h-[45vw] max-w-[900px] max-h-[506px] rounded-2xl"
        ></iframe>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-[#9b2cff] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl hover:bg-[#7b23cc] transition"
        >
          ×
        </button>
      </div>
    </div>
  );
};



// ✨ Hero Section with Text Animation
const HeroSection = ({ onMenuClose, onJourneyClick }) => (
  <section
    className="bg-gradient-to-r from-[#1A1A2C] to-[#0E0E17] relative px-4 sm:px-6 pt-28 pb-16 sm:pt-32 sm:pb-20 text-center min-h-screen flex items-center justify-center overflow-hidden"
    aria-labelledby="hero-heading"
  >
    <div
      className="absolute inset-0 bg-center"
      style={{
        backgroundImage: "url('/Home-Page.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#0E0E17",
        opacity: 0.3,
      }}
      aria-hidden="true"
    />

<div
  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"
  aria-hidden="true"
/>


    <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
      {[...Array(PARTICLES_COUNT)].map((_, i) => (
        <FloatingParticle key={i} index={i} />
      ))}
    </div>

   <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-end text-center min-h-[60vh] gap-15 px-4 pb-20">

      {/* ✨ Animated Heading */}
      <h1
        id="hero-heading"
        className="text-3xl sm:text-3xl md:text-4xl lg:text-4.5xl font-extrabold leading-tight animate-fadeInUp"
      >
        Welcome to a{" "}
        <span className="text-white px-2 py-1 rounded-md">New</span>
        <div className="mt-2">Beginning!!!</div>
      </h1>

      {/* ✨ Animated Subtitle */}
      <p className="text-sm sm:text-2xl md:text-2xl max-w-3xl leading-relaxed text-[#CCCCEE] animate-fadeInUp delay-300">
        Rohi is a young and vibrant ministry. United by one passion, we nurture,
        support, and inspire one another as we pursue our divine destinies.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp delay-500">
        {CTA_BUTTONS.map(({ label, icon, variant, href }) => (
          <CTAButton
            key={label}
            label={label}
            icon={icon}
            variant={variant}
            href={href}
            onClick={
              label === "Journey Here"
                ? onJourneyClick
                : href
                ? onMenuClose
                : undefined
            }
          />
        ))}
      </div>
    </div>
  </section>
);

export const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <Navbar />
      <div className="min-h-screen text-white relative overflow-hidden">
        <MobileMenu isOpen={mobileMenuOpen} onClose={closeMobileMenu} />
        <HeroSection
          onMenuClose={closeMobileMenu}
          onJourneyClick={() => setShowVideo(true)}
        />
        <VideoModal show={showVideo} onClose={() => setShowVideo(false)} />
      </div>
    </>
  );
};

export default LandingPage;
