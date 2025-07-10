import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin, FiUser } from 'react-icons/fi';
import DetailCard from '../ui/DetailCard';

const eventDetails = [
	{
		icon: <FiCalendar className="w-full h-full text-elegant-black/80" strokeWidth={3} />,
		title: 'Fecha',
		text: 'Sábado, 28 de Septiembre',
	},
	{
		icon: <FiClock className="w-full h-full text-elegant-black/80" strokeWidth={3} />,
		title: 'Hora',
		text: 'Desde las 7:00 PM',
	},
	{
		icon: <FiMapPin className="w-full h-full text-elegant-black/80" strokeWidth={3} />,
		title: 'Lugar',
		text: 'Sky 15 Rooftop',
	},
	{
		icon: <FiUser className="w-full h-full text-elegant-black/80" strokeWidth={3} />,
		title: 'Dress Code',
		text: 'Elegante Casual',
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const DetailsSection = () => {
	return (
		<section id="detalles" className="py-20 bg-soft-gray relative">
			<div className="container mx-auto px-4 z-10">
				<motion.h2
					className="text-4xl font-bold text-center mb-12 font-display tracking-wider text-elegant-black"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					viewport={{ once: true, amount: 0.5 }}
				>
					Aquí están los detalles para que no te pierdas. ¡Agéndate, pues!
				</motion.h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
					{eventDetails.map((detail, index) => (
						<DetailCard key={index} icon={detail.icon} title={detail.title} text={detail.text} />
					))}
				</div>
			</div>
		</section>
	);
};

export default DetailsSection;
