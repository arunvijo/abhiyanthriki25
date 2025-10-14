import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroGraphicMobile from "./HeroGraphic2";
import HeroGraphicWeb from "./HeroGraphic";
import HeroAnimation from "./HeroAnimation";
import Navbar from "./TopNav";

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShowPopup(false);

  return (
    <section id="home" className="relative w-screen h-screen overflow-hidden">
      <Navbar />
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Background graphics */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="block md:hidden w-full h-full">
            <HeroGraphicMobile />
          </div>
          <div className="hidden md:block w-full h-full">
            <HeroGraphicWeb />
          </div>
        </motion.div>

        {/* Globe animation */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <HeroAnimation />
        </div>

        {/* Image Popup */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative flex justify-center items-center">
                {/* Image container */}
                <div className="cursor-target cursor-none  relative group inline-block">
                  <a
                    href="https://konfhub.com/lucky-draw" // replace with your actual link
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* Image */}
                    <img
                      src="/NonTechEvents/LuckyDraw.jpg"
                      alt="Popup"
                      className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-xl transition-all duration-500 group-hover:brightness-[50%]"
                    />

                    {/* REGISTER text overlay (appears only on hover) */}
                    <span className="absolute inset-0 flex items-center justify-center 
                    text-white text-3xl font-semibold tracking-wide 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    bg-black/60 rounded-lg">
                  REGISTER
                </span>

                  </a>

                  {/* Close button (top-right, near image) */}
                  <button
                    onClick={handleClose}
                    className="cursor-target absolute -top-4 -right-4 bg-black/60 p-2 rounded-full text-neutral-300 hover:text-white hover:bg-black transition-colors cursor-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;

