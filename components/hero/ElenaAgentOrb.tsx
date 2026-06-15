"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

interface GalaxyPoint {
  x: number;
  y: number;
  z: number;
  color: string;
  baseRadius: number;
  angle: number;
  speedOffset: number;
}

export default function ElenaAgentOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 400; // Increased base canvas size to hold the galaxy
    let height = 400;

    const resizeCanvas = () => {
      const container = containerRef.current;
      if (container) {
        width = container.clientWidth || 400;
        height = container.clientHeight || 400;
      }
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Global Mouse Listener to track anywhere in the window
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - (rect.left + rect.width / 2),
        y: e.clientY - (rect.top + rect.height / 2),
      };
    };

    const handleGlobalMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("mouseleave", handleGlobalMouseLeave);

    // Initialize Swirling Galaxy / Nebula
    const points: GalaxyPoint[] = [];
    const numPoints = 15000;

    for (let i = 0; i < numPoints; i++) {
      // Gaussian-like distribution heavily clustered at the center
      const distance = Math.pow(Math.random(), 5); 
      const radius = distance * 220; // Spread out to 220px
      
      const angle = Math.random() * Math.PI * 2;
      
      // Vertical scatter (y axis). Tapers off at the edges to form a disc
      const yScatter = (Math.random() - 0.5) * 45 * (1 - distance * 0.8);

      // Color mapping based on distance from the supermassive core
      let color;
      if (distance < 0.05) {
        color = "200, 255, 255"; // Core: Blinding cyan/white
      } else if (distance < 0.15) {
        color = "0, 200, 255";   // Inner: Bright cyan
      } else if (distance < 0.4) {
        color = "0, 100, 255";   // Mid: Deep blue
      } else {
        color = "10, 20, 150";   // Outer: Dark space blue/purple
      }
      
      points.push({ 
        x: 0, 
        y: yScatter, 
        z: 0, 
        color, 
        baseRadius: radius, 
        angle,
        speedOffset: Math.random() * 0.5 + 0.5 // Randomize orbital speeds slightly
      });
    }

    // Animation variables
    let time = 0;
    
    // Start with an angled tilt so we can see the disc
    let currentRotX = Math.PI / 4; 
    let currentRotY = 0;

    const focalLength = 350;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Mouse tracking target rotation
      // Base tilt is Math.PI / 5 (36 degrees). Mouse modifies it slightly.
      let targetRotX = Math.PI / 5;
      let targetRotY = 0;

      if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
        // Parallax tilt based on mouse
        targetRotY = (mouseRef.current.x / (window.innerWidth / 2)) * Math.PI * 0.4; 
        targetRotX = Math.PI / 5 - (mouseRef.current.y / (window.innerHeight / 2)) * Math.PI * 0.3;
      } else {
        // Idle breathing tilt
        targetRotY = Math.sin(time * 0.5) * 0.15;
        targetRotX = Math.PI / 5 + Math.cos(time * 0.3) * 0.1;
      }

      // Smooth Lerp
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;
      
      time += 0.01;

      interface ProjectedPoint {
        x: number;
        y: number;
        z: number;
        color: string;
        size: number;
        alpha: number;
      }

      const projectedPoints: ProjectedPoint[] = [];

      points.forEach((p) => {
        // Orbital mechanics: closer particles orbit faster
        const orbitSpeed = 0.02 / (1 + p.baseRadius * 0.02) * p.speedOffset;
        const currentAngle = p.angle - time * orbitSpeed * 100;
        
        // Calculate raw 3D position in the galaxy disc
        // Add a slight spiral arm twist based on radius
        const spiralTwist = p.baseRadius * 0.015;
        const finalAngle = currentAngle + spiralTwist;

        const x3d = Math.cos(finalAngle) * p.baseRadius;
        const z3d = Math.sin(finalAngle) * p.baseRadius;
        const y3d = p.y; // Height above/below the disc

        // Rotate entire galaxy around Y axis
        let x1 = x3d * Math.cos(currentRotY) - z3d * Math.sin(currentRotY);
        let z1 = x3d * Math.sin(currentRotY) + z3d * Math.cos(currentRotY);
        let y1 = y3d;

        // Rotate entire galaxy around X axis
        let y2 = y1 * Math.cos(currentRotX) - z1 * Math.sin(currentRotX);
        let z2 = y1 * Math.sin(currentRotX) + z1 * Math.cos(currentRotX);
        let x2 = x1;

        // Perspective Project
        const scale = focalLength / (focalLength + z2 + 200); // push back slightly
        let screenX = x2 * scale + centerX;
        let screenY = y2 * scale + centerY;

        // Depth Normalization
        const maxDepth = 250; 
        const depthRatio = (z2 + maxDepth) / (maxDepth * 2); 
        
        // Alpha: Core is bright, edges fade
        const alpha = Math.max(0.05, (1 - depthRatio) * 0.9 + 0.1); 
        
        // Size: Tiny dust particles, closer = bigger
        const size = Math.max(0.2, (1 - depthRatio) * 1.5 + 0.2);   

        // Frustum culling (don't draw if completely behind camera or invisible)
        if (z2 > -focalLength + 50 && alpha > 0.05) {
          projectedPoints.push({
            x: screenX,
            y: screenY,
            z: z2,
            color: p.color,
            size,
            alpha,
          });
        }
      });

      // Depth Sort (Back to Front)
      projectedPoints.sort((a, b) => b.z - a.z);

      // Render 15,000 particles highly optimized
      projectedPoints.forEach((p) => {
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseleave", handleGlobalMouseLeave);
    };
  }, []);

  return (
    <Link href="/elena-ai" className="elena-orb-portal-link block w-full h-full relative" style={{ minHeight: '340px' }}>
      <div
        ref={containerRef}
        className="elena-orb-container w-full h-full flex items-center justify-center relative overflow-visible"
        style={{ scale: 1.2 }}
      >
        <canvas ref={canvasRef} className="elena-orb-canvas absolute z-10 w-full h-full object-contain" style={{ pointerEvents: 'none' }} />
        {/* Glow effect behind the galaxy core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl z-0 pointer-events-none" />
      </div>
    </Link>
  );
}
