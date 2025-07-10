import React from 'react';
import { motion } from 'framer-motion';

const DetailCard = ({ icon, title, text }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div variants={cardVariants} className="group bg-white rounded-2xl p-[15px] border border-gray-200 hover:border-elegant-black/30 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
      <div className="text-center">
        <div className="w-[96px] h-[96px] mx-auto mb-5 bg-gradient-to-br from-gray-50 to-gray-200 rounded-full flex items-center justify-center border border-gray-200/50 shadow-inner group-hover:shadow-md transition-shadow duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-elegant-black mb-2 font-display tracking-wide">
          {title}
        </h3>
        <p className="text-gray-600 font-sans">{text}</p>
      </div>
    </motion.div>
  );
};

export default DetailCard;
