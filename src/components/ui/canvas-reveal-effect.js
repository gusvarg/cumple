"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const CanvasRevealEffect = ({
  animationSpeed = 1.5,
  containerClassName,
  colors = [[0, 0, 0]],
  dotSize,
  opacities = [0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1],
  showGradient = true,
}) => {
  const canvasRef = React.useRef(null);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [firstFrame, setFirstFrame] = React.useState(true);

  const ctx = React.useRef(null);
  const buffer = React.useRef(null);
  const lastRender = React.useRef(null);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - left, y: e.clientY - top });
  };

  const addColor = (color) => {
    if (!ctx.current) return;
    ctx.current.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1)`;
    ctx.current.fillRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height);
  };

  const addGradient = (color) => {
    if (!ctx.current) return;
    const gradient = ctx.current.createLinearGradient(
      0,
      0,
      ctx.current.canvas.width,
      ctx.current.canvas.height
    );
    gradient.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)`);
    gradient.addColorStop(1, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1)`);
    ctx.current.fillStyle = gradient;
    ctx.current.fillRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height);
  };

  const animate = React.useCallback(() => {
    if (!ctx.current) return;
    const now = Date.now();
    if (lastRender.current && now - lastRender.current < 1000 / 60) {
      requestAnimationFrame(animate);
      return;
    }

    lastRender.current = now;
    ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height);

    let reduced = false;
    opacities.forEach((opacity, i) => {
      // Calculate the radius of the circle based on the canvas size
      const radius =
        (ctx.current.canvas.width > ctx.current.canvas.height
          ? ctx.current.canvas.width
          : ctx.current.canvas.height) * 0.1;
      // Animate the radius of the circle based on the mouse position
      const newRadius = radius * ((i + 2) * 0.1) * (1 - mousePosition.x / ctx.current.canvas.width);
      // Animate the opacity of the circle based on the mouse position
      const newOpacity = opacity * (1 - mousePosition.y / ctx.current.canvas.height);

      ctx.current.beginPath();
      ctx.current.arc(mousePosition.x, mousePosition.y, newRadius, 0, 2 * Math.PI);

      const color = colors[i % colors.length];
      ctx.current.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${newOpacity})`;
      ctx.current.fill();
    });

    if (firstFrame) {
      setFirstFrame(false);
    }
    requestAnimationFrame(animate);
  }, [mousePosition.x, mousePosition.y]);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const context = canvas.getContext("2d");
      if (context) {
        context.scale(dpr, dpr);
        ctx.current = context;
      }
    }
  }, []);

  React.useEffect(() => {
    if (isAnimating) {
      animate();
    }
  }, [isAnimating, animate]);

  const handleMouseEnter = () => {
    setIsAnimating(true);
  };

  const handleMouseLeave = () => {
    setIsAnimating(false);
  };

  return (
    <div
      className={cn(
        "h-full w-full bg-white relative",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};