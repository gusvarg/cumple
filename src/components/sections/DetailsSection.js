"use client";
import React from 'react';
import { TypewriterEffectSmooth } from '../ui/typewriter-effect';
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import { detailsContent } from '../../config/details';

const Card = ({ title, subtitle, icon, button, children }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center p-4 relative text-center h-[25rem] md:h-[30rem] overflow-hidden"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center text-black">
          {icon}
        </div>
        <div className="opacity-0 group-hover/canvas-card:opacity-100 relative z-10 group-hover/canvas-card:-translate-y-2 transition duration-200">
          <h2 className="text-2xl text-white mt-4 font-bold">
            {title}
          </h2>
          <p className="text-base text-neutral-300 mt-2">
            {subtitle}
          </p>
          {button && (
            <a
              href={button.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-full bg-[#6862FC] text-white text-sm font-bold hover:bg-[#5a54e0] transition-colors"
            >{button.text}</a>
          )}
        </div>
      </div>
    </div>
  );
};

const Icon = ({ className, ...rest }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className} {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

const DetailsSection = () => {
  return (
    <section id="detalles" className="py-20 bg-white text-black mb-[100px]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2 font-display tracking-wider">{detailsContent.title}</h2>
        <TypewriterEffectSmooth words={detailsContent.subtitleWords} className="justify-center" />

        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto px-4">
          {detailsContent.cards.map((item) => (
            <Card key={item.title} title={item.title} subtitle={item.subtitle} icon={item.icon} button={item.button}>
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                colors={[[104, 98, 252]]} // This is #6862FC
                dotSize={2}
              />
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;