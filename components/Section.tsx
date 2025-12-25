import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, delay = 0, className = "" }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`mb-12 ${className}`}
    >
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-serif font-bold text-stone-800 relative z-10 pl-2">
          {title}
          <span className="absolute -bottom-1 left-2 w-full h-3 bg-primary-100/60 -z-10 rounded-sm"></span>
        </h2>
        <div className="h-px flex-grow bg-gradient-to-r from-primary-200/50 to-transparent ml-6"></div>
      </div>
      <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-sm border border-white/60">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;