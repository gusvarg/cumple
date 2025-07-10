"use client";
import { cn } from "../../lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 5,
  speed = "fast",
  waveOpacity = 0.2,
  ...props
}) => {
  const canvasRef = useRef(null);
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // Check if running in Safari
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (ctx.canvas.width = window.innerWidth);
    let h = (ctx.canvas.height = window.innerHeight);
    if (!isSafari) {
      ctx.filter = `blur(${blur}px)`;
    }

    const waveColors = colors || [
      "#38bdf8",
      "#818cf8",
      "#c084fc",
      "#e879f9",
      "#22d3ee",
    ];
    const y = h * 0.5;
    const waveWidthValue = waveWidth || 50;
    const backgroundFillValue = backgroundFill || "black";
    let animationId;

    const waves = [];
    for (let i = 0; i < waveColors.length; i++) {
      const wave = {
        y: y,
        x: 0,
        color: waveColors[i],
        width: w + 200,
        height: 200,
        speed: getSpeed(),
        amplitude: 50 + i * 20,
        frequency: 0.01 + i * 0.005,
        phase: i * 0.5,
      };
      waves.push(wave);
    }

    const render = () => {
      ctx.fillStyle = backgroundFillValue;
      ctx.fillRect(0, 0, w, h);
      waves.forEach((wave, i) => {
        wave.phase += wave.speed;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.strokeStyle = wave.color;
        ctx.globalAlpha = waveOpacity;
        for (let x = 0; x < wave.width; x++) {
          const y_ =
            wave.y +
            wave.amplitude * Math.sin(x * wave.frequency + wave.phase);
          ctx.lineTo(x, y_);
        }
        ctx.stroke();
      });
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  };

  useEffect(() => {
    const cleanup = init();
    return cleanup;
  }, []);

  return (
    <div
      className={cn(
        "h-full flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};