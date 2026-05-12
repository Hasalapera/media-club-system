import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

const EventCard = ({ event }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg shadow-black/10"
    >
      {/* Glassmorphic background */}
      <div className="absolute inset-0 bg-white/50 dark:bg-dark-bg/50 backdrop-blur-lg border border-white/20 dark:border-dark-border"></div>
      
      <div className="relative p-6 flex flex-col h-full min-h-[200px]">
        <div className="flex justify-between items-start mb-4">
          <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
            {event.category}
          </span>
          <div className="text-right">
            <p className="font-bold text-2xl text-light-text dark:text-dark-text">{event.date.split(' ')[1]}</p>
            <p className="text-xs text-light-text-muted dark:text-dark-text-muted">{event.date.split(' ')[0]}</p>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mt-auto">
          {event.title}
        </h3>
      </div>
    </motion.div>
  );
};

export default EventCard;