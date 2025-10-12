import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroGraphicMobile from "./HeroGraphic2";
import HeroGraphicWeb from "./HeroGraphic";
import HeroAnimation from "./HeroAnimation";
import Navbar from "./TopNav";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  const [showCountdown, setShowCountdown] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowCountdown(false), 3000);
    return () => clearTimeout(timer);
  }, []);

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

        {/* Globe (always visible) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <HeroAnimation />
        </div>

        {/* Countdown overlay (just timer) */}
        <AnimatePresence>
          {showCountdown && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-20 
                         bg-black/30 backdrop-blur-sm" // lighter, less blur
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: [0.3, 1.1, 1] }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.9, 1],
                  textShadow: [
                    /* Inner red glow for color */
                    "0 0 7px #F64040", 
                    
                    /* Outer white glow for contrast and visibility */
                    "0 0 10px #fff",
                    "0 0 25px #fff",
                    "0 0 45px #F64040" /* A final, wide red glow to tint the white halo */
                    ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <CountdownTimer />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
