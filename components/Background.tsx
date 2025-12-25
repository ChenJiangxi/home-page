import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base warm background */}
      <div className="absolute inset-0 bg-stone-50" />
      
      {/* Animated gradient orbs - Updated to Violet/Champagne tones */}
      <motion.div 
        className="absolute -top-20 -left-20 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl mix-blend-multiply"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/2 -right-20 w-[30rem] h-[30rem] bg-champagne-200/50 rounded-full blur-3xl mix-blend-multiply"
        animate={{
          x: [0, -40, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -bottom-20 left-1/3 w-80 h-80 bg-stone-200/60 rounded-full blur-3xl mix-blend-multiply"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default Background;