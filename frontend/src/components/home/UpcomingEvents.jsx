import React from 'react';
import { motion } from 'framer-motion';
import EventCard from '../EventCard';

const mockEvents = [
  { id: 1, title: 'Premiere Pro Masterclass', date: 'OCT 28', category: 'Workshop' },
  { id: 2, title: 'Annual Media Gala 2024', date: 'NOV 05', category: 'Gala' },
  { id: 3, title: 'Photography Field Trip', date: 'NOV 12', category: 'Excursion' },
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const UpcomingEvents = () => {
  return (
    <section className="py-24 px-4 bg-light-surface dark:bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-light-text dark:text-dark-text">
          Featured Events
        </h2>
        <p className="text-center text-light-text-muted dark:text-dark-text-muted mb-16">Exclusive workshops, screenings, and networking opportunities.</p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {mockEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEvents;