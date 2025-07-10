"use client";
import React from 'react';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import Image from "next/image";
import { heroContent } from '../../config/hero';

function HeroSection() {
  return (
    <section id="inicio" className="mb-[100px]">
      <HeroHighlight>
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "backOut" }}
            className="mb-6 md:mb-10"
          >
            <Image
              src={heroContent.imageSrc}
              alt={heroContent.imageAlt}
              width={200}
              height={200}
              className="rounded-full object-cover border-8 border-white shadow-2xl"
              priority
            />
          </motion.div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-xl px-4 md:text-3xl lg:text-4xl font-extrabold uppercase text-neutral-800 max-w-4xl leading-tight text-center mx-auto"
          >
            {heroContent.mainText}{" "}
            <Highlight className="text-black">
              {heroContent.highlightedText}
            </Highlight>
          </motion.h1>
        </div>
      </HeroHighlight>
    </section>
  );
}

export default HeroSection;