"use client";
import { cn } from "../../lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";

export const CardSpotlight = ({
  children,
  className,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative h-full w-full overflow-hidden rounded-xl bg-neutral-950 p-8",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.2),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};