import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden bg-elegant-black">
      <div className="absolute inset-0">
        <img
          src="/images/tortuga-con-gafas.jpg"
          alt="Fondo de la fiesta"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-elegant-black via-transparent to-elegant-black/50"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 p-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-wider mb-4">
          La Tortuga Anfitriona
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          ¡Prepárate para celebrar! Gustavo cumple 40 y la fiesta va a estar legendaria.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
