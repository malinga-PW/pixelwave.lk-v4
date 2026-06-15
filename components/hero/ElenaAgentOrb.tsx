"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

interface BrainPoint {
  x: number;
  y: number;
  z: number;
  baseColor: string;
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
    let width = 340;
    let height = 340;

    const resizeCanvas = () => {
      const container = containerRef.current;
      if (container) {
        width = container.clientWidth || 340;
        height = container.clientHeight || 340;
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

    // Initialize 3D particles sculpted into a Human Brain Shape
    const points: BrainPoint[] = [];
    const numPoints = 15000; // Drastically increased for high-detail brain folds

    // Helper to get color based on vertical height
    const getSphereColor = (ratio: number) => {
      if (ratio < 0.5) {
        // Green to Cyan
        const t = ratio * 2;
        const g = Math.round(255 * (1 - t) + 164 * t);
        const b = Math.round(151 * (1 - t) + 175 * t);
        return `0, ${g}, ${b}`;
      } else {
        // Cyan to Blue
        const t = (ratio - 0.5) * 2;
        const r = Math.round(0 * (1 - t) + 44 * t);
        const g = Math.round(164 * (1 - t) + 50 * t);
        const b = Math.round(175 * (1 - t) + 254 * t);
        return `${r}, ${g}, ${b}`;
      }
    };

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // -1 to 1
      const theta = Math.acos(y);
      const phi = i * Math.PI * (3 - Math.sqrt(5)); // Golden angle
      
      const ratio = (y + 1) / 2;
      const baseColor = getSphereColor(ratio);
      
      // Unit sphere cartesian
      let x = Math.sin(theta) * Math.cos(phi);
      let yCoord = y;
      let z = Math.sin(theta) * Math.sin(phi);

      // --- BRAIN SCULPTING MATH ---
      
      // 1. Proportions: Elongated front-to-back, slightly wider at the back
      const isBack = z < 0;
      x *= isBack ? 1.05 : 0.85; 
      z *= 1.35; // Elongate
      yCoord *= 0.9; // Flatten slightly

      let rModifier = 1.0;

      // 2. Longitudinal Fissure: Deep indent splitting left/right hemispheres
      // Only applies where x is close to 0, mostly on top and back
      const fissure = Math.exp(-(x * x) / 0.015) * 0.25;
      rModifier -= fissure;

      // 3. Brain Folds (Gyri and Sulci)
      // We use high-frequency sine/cosine waves to create a bumpy surface
      const folds = (Math.sin(theta * 25) * Math.cos(phi * 25)) * 0.035 + 
                    (Math.cos(theta * 15) * Math.sin(phi * 35)) * 0.025;
      rModifier += folds;

      // Lower temporal lobes (bulges on bottom sides)
      if (yCoord < 0 && Math.abs(x) > 0.4) {
        rModifier += 0.05;
      }

      points.push({ 
        x: x * rModifier, 
        y: yCoord * rModifier, 
        z: z * rModifier, 
        baseColor 
      });
    }

    // Animation variables
    let time = 0;
    let currentRotY = 0;
    let currentRotX = 0;

    const baseRadius = 124; // Base size
    const focalLength = 320;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Mouse tracking target rotation
      let targetRotX = 0;
      let targetRotY = 0;

      if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
        // Focus on mouse
        targetRotY = (mouseRef.current.x / (window.innerWidth / 2)) * Math.PI * 0.8; 
        targetRotX = -(mouseRef.current.y / (window.innerHeight / 2)) * Math.PI * 0.8;
      } else {
        // Idle ambient rotation
        targetRotY = Math.sin(time * 0.5) * 0.2;
        targetRotX = Math.cos(time * 0.3) * 0.1;
      }

      // Smooth Lerp
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;
      
      time += 0.015;

      // Projection array
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
        // Gentle "breathing" wave
        const wave = Math.sin(p.y * 5.0 + time) * 0.03;
        const currentRadius = baseRadius * (1 + wave);

        const x3d = p.x * currentRadius;
        const y3d = p.y * currentRadius;
        const z3d = p.z * currentRadius;

        // Rotate Y
        let x1 = x3d * Math.cos(currentRotY) - z3d * Math.sin(currentRotY);
        let z1 = x3d * Math.sin(currentRotY) + z3d * Math.cos(currentRotY);
        let y1 = y3d;

        // Rotate X
        let y2 = y1 * Math.cos(currentRotX) - z1 * Math.sin(currentRotX);
        let z2 = y1 * Math.sin(currentRotX) + z1 * Math.cos(currentRotX);
        let x2 = x1;

        // Perspective Project
        const scale = focalLength / (focalLength + z2);
        let screenX = x2 * scale + centerX;
        let screenY = y2 * scale + centerY;

        // Depth Normalization
        const maxDepth = baseRadius + 15; 
        const depthRatio = (z2 + maxDepth) / (maxDepth * 2); 
        
        // Alpha: Fade out back particles slightly
        const alpha = Math.max(0.05, (1 - depthRatio) * 0.85 + 0.1); 
        
        // Size: Reduced size as requested, smaller for back particles
        const size = Math.max(0.15, (1 - depthRatio) * 0.9 + 0.15);   

        projectedPoints.push({
          x: screenX,
          y: screenY,
          z: z2,
          color: p.baseColor,
          size,
          alpha,
        });
      });

      // Depth Sort (Back to Front)
      projectedPoints.sort((a, b) => b.z - a.z);

      // Render 15,000 particles highly optimized
      projectedPoints.forEach((p) => {
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        // Using fillRect instead of arc for massive performance boost with 15k particles
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
    <Link href="/elena-ai" className="elena-orb-portal-link">
      <div
        ref={containerRef}
        className="elena-orb-container"
      >
        <canvas ref={canvasRef} className="elena-orb-canvas" />
      </div>
    </Link>
  );
}
