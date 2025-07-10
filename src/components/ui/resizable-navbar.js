"use client";
import { cn } from "../../lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

export const Navbar = ({ children, className }) => {
  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-b border-transparent bg-white/80 backdrop-blur-lg",
        className
      )}
    >
      {children}
    </nav>
  );
};

export const NavBody = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative z-50 mx-auto hidden h-16 max-w-7xl flex-row items-center justify-between px-4 lg:flex",
        className
      )}
    >
      {children}
    </div>
  );
};

export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex items-center justify-center space-x-2 text-sm font-medium text-zinc-600",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-neutral-600 hover:text-black transition-colors"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gray-100"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative z-50 flex flex-col items-center justify-between px-4 py-2 lg:hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={cn(
            "flex w-full flex-col items-start justify-start gap-4 overflow-hidden pt-4",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
  return isOpen ? (
    <IconX className="text-black" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black" onClick={onClick} />
  );
};

export const NavbarLogo = ({ children }) => {
  return (
    <div className="relative z-20 flex items-center text-sm font-normal text-black">
      {children}
    </div>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-full text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary: "bg-lime-400 text-black hover:bg-lime-500",
    secondary: "bg-transparent text-black border border-neutral-300 hover:bg-neutral-100",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};