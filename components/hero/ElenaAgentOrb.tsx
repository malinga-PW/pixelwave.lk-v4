"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

interface SpherePoint {
  theta: number; // Polar angle
  phi: number;   // Azimuthal angle
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
      // Store mouse position relative to the center of the canvas
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

    // Initialize 3D particles distributed on a sphere shell using Fibonacci spiral
    const points: SpherePoint[] = [];
    const numPoints = 6000; // Drastically increased particle density for high resolution realistic look

    // Helper to get color based on vertical sphere height
    const getSphereColor = (ratio: number) => {
      if (ratio < 0.5) {
        // Interpolate between Green (0, 255, 151) and Cyan (0, 164, 175)
        const t = ratio * 2;
        const r = 0;
        const g = Math.round(255 * (1 - t) + 164 * t);
        const b = Math.round(151 * (1 - t) + 175 * t);
        return `${r}, ${g}, ${b}`;
      } else {
        // Interpolate between Cyan (0, 164, 175) and Blue (44, 50, 254)
        const t = (ratio - 0.5) * 2;
        const r = Math.round(0 * (1 - t) + 44 * t);
        const g = Math.round(164 * (1 - t) + 50 * t);
        const b = Math.round(175 * (1 - t) + 254 * t);
        return `${r}, ${g}, ${b}`;
      }
    };

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // range: -1 to 1
      const theta = Math.acos(y); // polar angle
      const phi = i * Math.PI * (3 - Math.sqrt(5)); // golden angle spiral
      
      const ratio = (y + 1) / 2; // 0 at bottom pole, 1 at top pole
      const baseColor = getSphereColor(ratio);
      
      points.push({ theta, phi, baseColor });
    }

    // Animation variables
    let time = 0;
    let currentRotY = 0;
    let currentRotX = 0;

    const baseRadius = 124; // Reduced sphere base radius by 20% to prevent cropping
    const focalLength = 320;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Mouse tracking target rotation
      let targetRotX = 0;
      let targetRotY = 0;

      if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
        // Focus on mouse: calculate rotation based on distance from center
        // Using window inner dimensions to make it track smoothly across the whole screen
        targetRotY = (mouseRef.current.x / (window.innerWidth / 2)) * Math.PI * 0.8; 
        targetRotX = -(mouseRef.current.y / (window.innerHeight / 2)) * Math.PI * 0.8;
      } else {
        // Idle ambient rotation when mouse is outside window
        targetRotY = Math.sin(time * 0.5) * 0.2;
        targetRotX = Math.cos(time * 0.3) * 0.1;
      }

      // Smooth Lerp towards target rotation
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;
      
      // Wave progress over time (slow ambient animation)
      time += 0.015;

      // Project points to 3D and store in an array for depth sorting
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
        // 1. WAVE DISPLACEMENT
        // Create organic 3D wave ripples on the sphere radius based on angles and time
        const wave = Math.sin(p.theta * 5.0 + time) * Math.cos(p.phi * 5.0 + time) * 12;
        const radius = baseRadius + wave;

        // 2. CONVERT TO 3D CARTESIAN
        const x3d = radius * Math.sin(p.theta) * Math.cos(p.phi);
        const y3d = radius * Math.sin(p.theta) * Math.sin(p.phi);
        const z3d = radius * Math.cos(p.theta);

        // 3. APPLY ROTATION MATRIX
        // Rotate around Y axis
        let x1 = x3d * Math.cos(currentRotY) - z3d * Math.sin(currentRotY);
        let z1 = x3d * Math.sin(currentRotY) + z3d * Math.cos(currentRotY);
        let y1 = y3d;

        // Rotate around X axis
        let y2 = y1 * Math.cos(currentRotX) - z1 * Math.sin(currentRotX);
        let z2 = y1 * Math.sin(currentRotX) + z1 * Math.cos(currentRotX);
        let x2 = x1;

        // 4. PERSPECTIVE PROJECT TO 2D SCREEN
        const scale = focalLength / (focalLength + z2);
        let screenX = x2 * scale + centerX;
        let screenY = y2 * scale + centerY;

        // 5. DEPTH Normalization & Alpha Fade
        const maxDepth = baseRadius + 15; // Max z range
        const depthRatio = (z2 + maxDepth) / (maxDepth * 2); // 0 (front) to 1 (back)
        const alpha = Math.max(0.08, (1 - depthRatio) * 0.82 + 0.12); // fade back particles
        const size = Math.max(0.4, (1 - depthRatio) * 1.5 + 0.4);   // front particles are slightly larger, but overall smaller for smooth density

        projectedPoints.push({
          x: screenX,
          y: screenY,
          z: z2,
          color: p.baseColor,
          size,
          alpha,
        });
      });

      // 6. DEPTH SORTING (Back to Front)
      // Sort in descending order of z coordinate so back particles render first
      projectedPoints.sort((a, b) => b.z - a.z);

      // 7. RENDER PARTICLES ONLY (Removed laggy neural web lines)
      projectedPoints.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
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
