import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, filter: 'blur(8px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden px-4">
      {/* Glassmorphic background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[60%] bg-white/30 dark:bg-dark-surface/30 rounded-3xl backdrop-blur-xl border border-white/20 dark:border-dark-border/50 -z-10"></div>
      
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-8xl font-bold text-light-text dark:text-dark-text tracking-tighter"
          variants={itemVariants}
        >
          Capturing Moments, Creating History
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl text-light-text-muted dark:text-dark-text-muted max-w-3xl mx-auto"
          variants={itemVariants}
        >
          The Official Media Unit of the University of Ruhuna, Faculty of Technology.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/50">
            Upcoming Events
          </button>
          <button className="w-full sm:w-auto font-bold py-3 px-8 rounded-lg text-lg bg-transparent border-2 border-light-text dark:border-dark-text text-light-text dark:text-dark-text transition-colors duration-300 hover:bg-light-text hover:text-light-bg dark:hover:bg-dark-text dark:hover:text-dark-bg">
            Join the Crew
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;