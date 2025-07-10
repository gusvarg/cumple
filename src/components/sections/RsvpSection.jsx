import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  femaleGuests,
  maleGuests,
  baseFemaleMessage,
  baseMaleMessage,
  karolMessage,
  blancaMessage,
  unlistedGuestMessage
} from '@/lib/rsvpData';

const RsvpSection = () => {
  const [guestName, setGuestName] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false); // Lo usaremos más adelante

  const handleConfirmAttendance = (e) => {
    e.preventDefault();
    const name = guestName.trim();

    if (!name) {
      setError('Por favor, escribe tu nombre.');
      setConfirmationMessage('');
      return;
    }
    setError('');

    // Normalización básica para que coincida con la lista (ej. "karol" -> "Karol")
    const normalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    let message = '';
    if (normalizedName === 'Karol') {
      message = karolMessage;
    } else if (normalizedName === 'Blanca') {
      message = blancaMessage;
    } else if (femaleGuests[normalizedName]) {
      const nickname = femaleGuests[normalizedName];
      message = `¡Ey ${nickname}, ${baseFemaleMessage}`;
      if (normalizedName === 'Laura' || normalizedName === 'Zully') {
        message += " Además, se ha confirmado tu cupo y el de tu acompañante (2 personas).";
      }
    } else if (maleGuests[normalizedName]) {
      const nickname = maleGuests[normalizedName];
      message = `¡Ey ${nickname}, ${baseMaleMessage}`;
    } else {
      message = unlistedGuestMessage(name);
    }

    setConfirmationMessage(message);
    setGuestName('');
  };

  return (
    <section id="rsvp" className="py-20 bg-elegant-black text-white">
      <div className="container mx-auto px-[15px] text-center">
        <h2 className="text-4xl font-bold mb-4 font-display tracking-wider text-white">
          ¿NOS VEMOS ESTE VIERNES?
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Tu presencia es el mejor regalo. Por favor, confirma tu asistencia para que la tortuga de Gus sepa con cuántos contar este día.
        </p>

        <form onSubmit={handleConfirmAttendance} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Tu nombre completo"
              className="flex-grow px-[15px] py-[7px] rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-vibrant-lime text-white transition-all"
              aria-label="Nombre completo del invitado"
            />
            <button type="submit" disabled={isSaving} className="bg-vibrant-lime text-black px-[15px] py-[7px] rounded-full font-bold hover:bg-lime-500 transition-colors transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed">
              {isSaving ? 'Guardando...' : '¡Yo Confirmo Gus!'}
            </button>
          </div>
          {error && <p className="text-red-400 mt-3">{error}</p>}
        </form>

        {confirmationMessage && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-10 p-6 bg-gray-800/50 rounded-2xl max-w-2xl mx-auto border border-gray-700">
            <p className="text-lg leading-relaxed">{confirmationMessage}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default RsvpSection;
