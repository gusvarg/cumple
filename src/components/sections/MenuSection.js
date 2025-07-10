import React from 'react';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { menuContent, foodTags } from '../../config/menu';

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-white text-black mb-[100px]">
      <div className="container mx-auto px-4 text-center">
        <TextGenerateEffect words={menuContent.title} className="text-3xl md:text-4xl mb-4 font-display tracking-wider" />
        <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">{menuContent.subtitle}</p>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-6 mb-12">
          {foodTags.map(tag => (
            <div
              key={tag}
              className="cursor-default px-5 py-2 border-2 border-black bg-white text-black font-semibold transition-all duration-200 text-sm shadow-[4px_4px_0px_black] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
            >
              {tag}
            </div>
          ))}
        </div>

        <a href={menuContent.url} target="_blank" rel="noopener noreferrer" className="inline-block p-[2px] relative rounded-full font-bold text-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6862FC] to-[#62EFFC] rounded-full" />
          <div className="px-8 py-3 bg-black rounded-full relative group transition duration-200 text-white hover:bg-transparent">
            🔥 Chismea la carta aquí
          </div>
        </a>

        <div className="mt-12 bg-indigo-50 border-l-4 border-[#6862FC] p-4 max-w-md mx-auto text-left">
          <p className="font-semibold text-indigo-800">{menuContent.paymentNote}</p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;