import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120, damping: 12 },
  },
};

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden px-4 py-16">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-primary/10 via-light-surface to-light-surface dark:from-primary/10 dark:via-dark-surface dark:to-dark-bg animated-gradient"></div>
      
      {/* Glassmorphic Container */}
      <div className="relative w-full max-w-5xl p-8 sm:p-12 rounded-3xl bg-white/50 dark:bg-dark-surface/50 backdrop-blur-xl border border-white/20 dark:border-dark-border/50 shadow-2xl shadow-black/10">
        <motion.div
          className="w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            variants={itemVariants}
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-light-text-muted dark:text-dark-text-muted max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-accent hover:shadow-lg hover:shadow-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/50">
              {t('hero.cta_events')}
            </button>
            <button className="w-full sm:w-auto font-bold py-3 px-8 rounded-lg text-lg bg-transparent border-2 border-light-text dark:border-dark-text text-light-text dark:text-dark-text transition-colors duration-300 hover:bg-light-text hover:text-light-bg dark:hover:bg-dark-text dark:hover:text-dark-bg">
              {t('hero.cta_join')}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;