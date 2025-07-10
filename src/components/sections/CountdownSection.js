import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownSection = () => {
  const calculateTimeLeft = () => {
    // OJO: ¡Configura la fecha de tu fiesta aquí!
    // Formato: AÑO, MES (0-11), DÍA, HORA, MINUTO, SEGUNDO
    const difference = +new Date(2024, 6, 18, 17, 30, 0) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    // Se calcula el tiempo inicial en el cliente para evitar errores de hidratación.
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="text-center">
        <motion.div
          className="text-5xl md:text-7xl font-bold text-white"
          key={timeLeft[interval]}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        >
          {String(timeLeft[interval]).padStart(2, '0')}
        </motion.div>
        <span className="text-sm md:text-base uppercase text-gray-400 tracking-wider">{interval}</span>
      </div>
    );
  });

  return (
    <section id="countdown" className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-display tracking-wider text-white">
          ¡La cuenta regresiva ha comenzado!
        </h2>
        <div className="flex justify-center gap-4 md:gap-8">
          {timerComponents.length ? timerComponents : <span className="text-2xl text-white">¡Llegó el día de la fiesta!</span>}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;