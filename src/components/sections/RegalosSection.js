import React, { useState } from 'react';
import { fetchGiftIdeas } from '../../services/giftService';
import { giftsContent } from '../../config/gifts';
import { MaskContainer } from '../ui/svg-mask-effect';
import { motion } from 'framer-motion';

const RegalosSection = () => {
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generateGiftIdeas = async () => {
    setIsLoading(true);
    setError('');
    setIdeas([]);

    try {
      const ideas = await fetchGiftIdeas();
      setIdeas(ideas);
    } catch (err) {
      console.error("Error detallado:", err.message);
      // Mostramos el error específico que recibimos
      setError(`Uups, la IA está ocupada. Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="regalos" className="py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2 font-display tracking-wide text-gray-900">{giftsContent.title}</h2>
        <p className="text-lg mb-8 text-gray-600">{giftsContent.subtitle}</p>

        <button
          onClick={generateGiftIdeas}
          disabled={isLoading}
          className="bg-gradient-to-r from-[#6862FC] to-[#62EFFC] text-white font-bold py-4 px-8 rounded-full text-xl hover:scale-105 transform transition-transform duration-300 shadow-xl disabled:opacity-50 disabled:cursor-wait"
        >
          ✨ {isLoading ? giftsContent.loadingText : giftsContent.buttonText}
        </button>

        {error && <p className="text-red-500 mt-6">{error}</p>}

        {ideas.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 max-w-3xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Aquí tienes algunas ideas:</h3>
            <ul className="space-y-4 text-left">
              {ideas.map((idea, index) => (
                <li key={`${idea}-${index}`} className="bg-gray-50 p-4 rounded-lg shadow-sm border-l-4 border-[#6862FC]">
                  <p className="text-gray-700">{idea}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default RegalosSection;