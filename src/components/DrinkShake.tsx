import React from "react";
import { motion } from "framer-motion";
import greenDrink from "../assets/HeroGreenDrink.png"; 
import redDrink from "../assets/HeroRedDrink.png"; 

export function DrinkShake() {
  return (
    <motion.div
      className="relative w-72 h-88 mx-auto cursor-pointer"
      style={{ rotate: 5 }}
      initial={{ rotate: 5, scale: 1 }}
      whileHover={{
        rotate: [5, 15, -10, 15, -10, 5],  // shake rotation keyframes
        scale: 1.2,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
          repeat: 0 // play once per hover
        }
      }}
      animate={{ rotate: 5, scale: 1 }}  // reset to resting pose after animation
    >
      {/* Green Drink (back) */}
      <img
        src={greenDrink}
        alt="Green Drink"
        className="absolute top-8 left-0 w-56 rounded-lg shadow-lg z-10"
        style={{ filter: "drop-shadow(0 0 8px rgba(0, 255, 0, 0.5))" }}
        draggable={false}
      />

      {/* Red Drink (front) */}
      <img
        src={redDrink}
        alt="Red Drink"
        className="absolute top-0 left-24 w-56 rounded-lg shadow-lg z-20"
        style={{ filter: "drop-shadow(0 0 8px rgba(255, 0, 0, 0.5))" }}
        draggable={false}
      />
    </motion.div>
  );
}
