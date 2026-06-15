"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

interface Particle {
  angle: number;
  speed: number;
  radiusX: number;
  radiusY: number;
  tilt: number;
  color: string;
  size: number;
}

export default function ElenaAgentOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 300;
    let height = 300;

    const resizeCanvas = () => {
      const container = containerRef.current;
      if (container) {
        width = container.clientWidth || 300;
        height = container.clientHeight || 300;
      }
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles for orbits
    const particles: Particle[] = [];
    
    // Ring 1 (Neon Green)
    for (let i = 0; i < 15; i++) {
      particles.push({
        angle: (i / 15) * Math.PI * 2,
        speed: 0.012,
        radiusX: 95,
        radiusY: 30,
        tilt: Math.PI / 6, // 30 degrees
        color: "#00ff97",
        size: 2 + Math.random() * 1.5,
      });
    }

    // Ring 2 (Electric Blue)
    for (let i = 0; i < 12; i++) {
      particles.push({
        angle: (i / 12) * Math.PI * 2 + Math.PI / 4,
        speed: -0.015,
        radiusX: 85,
        radiusY: 25,
        tilt: -Math.PI / 4, // -45 degrees
        color: "#2c32fe",
        size: 1.5 + Math.random() * 1.5,
      });
    }

    // Ring 3 (Cyber Cyan)
    for (let i = 0; i < 18; i++) {
      particles.push({
        angle: (i / 18) * Math.PI * 2 + Math.PI / 6,
        speed: 0.008,
        radiusX: 110,
        radiusY: 20,
        tilt: Math.PI / 2.5, // 72 degrees
        color: "#00a4af",
        size: 1.8 + Math.random() * 1.2,
      });
    }

    let corePulse = 0;
    let hudRotation = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const speedMultiplier = isHovered ? 2.5 : 1.0;

      // Pulse calculations
      corePulse += 0.03 * speedMultiplier;
      hudRotation += 0.005 * speedMultiplier;

      const pulseScale = 1 + Math.sin(corePulse) * 0.08;

      // 1. DRAW OUTER GLOWING ORBIT LINES & HUD RINGS
      ctx.lineWidth = 1;
      
      const drawOrbitLine = (rx: number, ry: number, tilt: number, color: string, alpha: number) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(tilt);
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = color;
        ctx.globalAlpha = alpha;
        ctx.stroke();
        ctx.restore();
      };

      // Draw standard orbit pathways
      drawOrbitLine(95, 30, Math.PI / 6, "#00ff97", isHovered ? 0.25 : 0.12);
      drawOrbitLine(85, 25, -Math.PI / 4, "#2c32fe", isHovered ? 0.25 : 0.12);
      drawOrbitLine(110, 20, Math.PI / 2.5, "#00a4af", isHovered ? 0.25 : 0.12);

      // Draw Rotating Tech HUD Rings (Jarvis style)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(hudRotation);
      
      // Dashed outer ring
      ctx.beginPath();
      ctx.arc(0, 0, 125, 0, Math.PI * 2);
      ctx.strokeStyle = "#00a4af";
      ctx.setLineDash([6, 15]);
      ctx.globalAlpha = isHovered ? 0.4 : 0.2;
      ctx.stroke();

      // Dotted inner ring
      ctx.beginPath();
      ctx.arc(0, 0, 65, 0, Math.PI * 2);
      ctx.strokeStyle = "#00ff97";
      ctx.setLineDash([2, 8]);
      ctx.globalAlpha = isHovered ? 0.5 : 0.3;
      ctx.stroke();

      ctx.restore();

      // 2. DRAW CENTRAL CORE (ELENA.AI PORTAL)
      const coreRadius = 45 * pulseScale;
      const coreGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        coreRadius * 0.2,
        centerX,
        centerY,
        coreRadius * 1.5
      );
      
      const primaryColor = isHovered ? "rgba(0, 255, 151, 0.85)" : "rgba(44, 50, 254, 0.75)";
      const glowColor = isHovered ? "rgba(0, 255, 151, 0)" : "rgba(44, 50, 254, 0)";

      coreGlow.addColorStop(0, "rgba(12, 15, 36, 0.95)");
      coreGlow.addColorStop(0.4, primaryColor);
      coreGlow.addColorStop(1, glowColor);

      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = coreGlow;
      ctx.fill();

      // Draw solid core border
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
      ctx.strokeStyle = isHovered ? "#00ff97" : "#2c32fe";
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.8;
      ctx.stroke();

      // Core text
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 10px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.globalAlpha = 0.9;
      ctx.fillText("ELENA.AI", centerX, centerY - 6);

      ctx.font = "7px monospace";
      ctx.fillStyle = isHovered ? "#00ff97" : "#00a4af";
      ctx.fillText("AGENT ACTIVE", centerX, centerY + 8);

      // 3. UPDATE & DRAW ORBITING PARTICLES
      particles.forEach((p) => {
        p.angle += p.speed * speedMultiplier;

        // Calculate 3D orbit position with tilt rotation
        const rawX = Math.cos(p.angle) * p.radiusX;
        const rawY = Math.sin(p.angle) * p.radiusY;

        const x = rawX * Math.cos(p.tilt) - rawY * Math.sin(p.tilt) + centerX;
        const y = rawX * Math.sin(p.tilt) + rawY * Math.cos(p.tilt) + centerY;

        // Draw particle glow
        ctx.beginPath();
        ctx.arc(x, y, p.size * (isHovered ? 1.5 : 1.0), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = isHovered ? 0.9 : 0.65;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = isHovered ? 12 : 6;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow

        // Draw connection lines to nearby particles on same orbit to create constellation/grid effect
        particles.forEach((other) => {
          if (other !== p && other.color === p.color) {
            const oRawX = Math.cos(other.angle) * other.radiusX;
            const oRawY = Math.sin(other.angle) * other.radiusY;
            const ox = oRawX * Math.cos(other.tilt) - oRawY * Math.sin(other.tilt) + centerX;
            const oy = oRawX * Math.sin(other.tilt) + oRawY * Math.cos(other.tilt) + centerY;

            const dist = Math.hypot(x - ox, y - oy);
            if (dist < 45) {
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(ox, oy);
              ctx.strokeStyle = p.color;
              ctx.lineWidth = 0.5;
              ctx.globalAlpha = (1 - dist / 45) * (isHovered ? 0.45 : 0.25);
              ctx.stroke();
            }
          }
        });
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isHovered]);

  return (
    <Link href="/elena-ai" className="elena-orb-portal-link">
      <div
        ref={containerRef}
        className={`elena-orb-container ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <canvas ref={canvasRef} className="elena-orb-canvas" />
      </div>
    </Link>
  );
}
