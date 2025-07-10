import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getConfirmationMessage } from '../../lib/rsvpData';
import { confirmRsvp } from '../../services/rsvpService';
import { rsvpContent } from '../../config/rsvp';

const RsvpSection = () => {
  const [guestName, setGuestName] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleConfirmAttendance = async (e) => {
    e.preventDefault();
    const name = guestName.trim();

    // Limpiar mensajes anteriores en cada nuevo intento
    setError('');
    setConfirmationMessage('');

    if (!name) {
      setError(rsvpContent.validationError);
      return;
    }
    
    setIsSaving(true);

    // Normalización para que coincida con la lista (ej. "karol" -> "Karol")
    const normalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    // Guardar la confirmación en la API
    try {
      await confirmRsvp(normalizedName);

      // Mostrar mensaje de éxito solo si se guardó correctamente
      const message = getConfirmationMessage(normalizedName);
      setConfirmationMessage(message);
      setGuestName('');
    } catch (apiError) {
      console.error('API Error:', apiError.message);
      // Muestra el error específico de la API si está disponible, si no, un mensaje genérico.
      setError(apiError.message || `¡Ups! Algo salió mal. Inténtalo de nuevo.`);
    } finally {
      setIsSaving(false); // Desactivar estado de carga en cualquier caso
    }
  };

  return (
    <section id="rsvp" className="py-20 bg-black text-white mb-[100px]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 font-display tracking-wider text-white">
          {rsvpContent.title}
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          {rsvpContent.subtitle}
        </p>

        <form onSubmit={handleConfirmAttendance} className="max-w-lg mx-auto">
          <label htmlFor="guestNameInput" className="block text-sm font-medium text-gray-400 mb-2">
            Escribe tu primer nombre para confirmar:
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              id="guestNameInput"
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Escribe tu primer nombre"
              className="flex-grow px-5 py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6862FC] text-white transition-all"
              aria-describedby="guestNameError"
            />
            <button type="submit" disabled={isSaving} className="bg-[#6862FC] text-white px-8 py-3 rounded-full font-bold hover:bg-[#5a54e0] transition-colors transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed whitespace-nowrap">
              {isSaving ? rsvpContent.buttonSavingText : rsvpContent.buttonText}
            </button>
          </div>
          {error && (
            <motion.p id="guestNameError"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 mt-3"
            >{error}</motion.p>
          )}
        </form>

        {confirmationMessage && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-10 p-6 bg-indigo-900/30 rounded-2xl max-w-2xl mx-auto border border-[#6862FC]/50">
            <p className="text-lg leading-relaxed text-gray-200">{confirmationMessage}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default RsvpSection;