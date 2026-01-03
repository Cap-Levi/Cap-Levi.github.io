"use client";

import { useEffect, useRef } from "react";

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Matrix characters
    const chars =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
    const charArray = chars.split("");

    // Column setup
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(0);

    // Animation loop
    const animate = () => {
      // Create semi-transparent fade effect
      ctx.fillStyle = "rgba(10, 14, 39, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw characters
      ctx.fillStyle = "rgba(16, 185, 129, 0.3)";
      ctx.font = `${fontSize}px "Courier New"`;

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        // Reset or continue drop
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 opacity-20 pointer-events-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
