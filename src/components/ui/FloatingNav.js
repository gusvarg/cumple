"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const FloatingNav = ({
  navItems,
  className
}) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.link.substring(1)));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // Activa cuando la sección está en el medio
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => sections.forEach(section => { if (section) observer.unobserve(section) });
  }, [navItems]);

  const handleScroll = (e, link) => {
    e.preventDefault();
    const targetId = link.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className={cn(
        "flex max-w-fit fixed top-4 inset-x-0 mx-auto border border-black/[0.1] rounded-full bg-white/80 backdrop-blur-sm shadow-lg z-50 px-[15px] py-[7px] items-center justify-center space-x-2 sm:space-x-4",
        className
      )}>
      {navItems.map((navItem) => (
        <a
          key={navItem.link}
          href={navItem.link}
          onClick={(e) => handleScroll(e, navItem.link)}
          aria-label={navItem.ariaLabel || navItem.name}
          className={cn(
            "relative text-neutral-600 items-center flex space-x-1 hover:text-black transition-colors",
            activeSection === navItem.link && "text-black font-semibold"
          )}>
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
        </a>
      ))}
      <a href="#rsvp" onClick={(e) => handleScroll(e, '#rsvp')} className="border text-sm font-bold relative border-transparent text-white px-[15px] py-[7px] rounded-full bg-[#6862FC] hover:bg-[#5a54e0] transition-colors">
        <span>Confirmar Asistencia</span>
      </a>
    </motion.div>
  );
};