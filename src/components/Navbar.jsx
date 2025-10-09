import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const EventsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = () => {
    if (location.pathname === "/") {
      // Already on homepage
      const section = document.getElementById("contact");
      if (section) section.scrollIntoView();
    } else {
      // Navigate to homepage first
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("contact");
        if (section) section.scrollIntoView();
      }, 100); // small delay to let homepage render
    }
  };

  return (
    <header className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-auto px-2">
      <nav className="flex items-center w-full px-4 py-2 rounded-full border border-neutral-700 bg-black/50 backdrop-blur-lg shadow-lg gap-3 md:gap-4"
           style={{ boxShadow: "0 0 15px rgba(246, 64, 64, 0.5), 0 0 30px rgba(246, 64, 64, 0.3)" }}>
        {/* Logo */}
        <div className="font-['KH Interference'] text-lg md:text-2xl font-bold text-white pr-3 md:pr-4 border-r border-neutral-600 whitespace-nowrap">
          <a href="#">A3K'25</a>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 md:gap-4">
          <a href="/" className="cursor-target cursor-none text-neutral-300 hover:text-red-500 transition-colors"><HomeIcon /></a>
          <a href="/eventdetails" className="cursor-target cursor-none text-neutral-300 hover:text-red-500 transition-colors"><EventsIcon /></a>
        </div>

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="cursor-target cursor-none bg-red-600 text-white font-bold py-1.5 md:py-2 px-4 md:px-5 rounded-full border-2 border-transparent hover:bg-transparent hover:border-red-600 transition-all duration-300 uppercase tracking-widest text-[0.7rem] md:text-sm whitespace-nowrap"
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
