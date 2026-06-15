"use client";

import React, { useRef, useEffect, useState } from "react";
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
  const isHoveredRef = useRef(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: null, y: null };
    isHoveredRef.current = false;
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 500;
    let height = 500;

    // Mathematical parameters mapped to viewport size for perfect responsiveness without clipping
    let baseRadius = 120;
    let waveAmplitude = 20;
    let focalLength = 375;

    const resizeCanvas = () => {
      const container = containerRef.current;
      if (container) {
        // Use client width to make it perfectly responsive
        width = container.clientWidth || 500;
        height = container.clientHeight || 500;
      }
      
      canvas.width = width;
      canvas.height = height;

      // Recalculate 3D bounds to guarantee it fits 90% of the canvas width
      // R_max = baseRadius + waveAmplitude = 0.28 * width
      // Focal length = 0.75 * width
      // This results in an apparent projected radius of ~0.45 * width, safely inside the 0.5 * width boundary.
      const sizeRef = Math.min(width, height);
      baseRadius = 0.24 * sizeRef;
      waveAmplitude = 0.04 * sizeRef;
      focalLength = 0.75 * sizeRef;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize 3D particles distributed on a sphere shell using Fibonacci spiral
    const points: SpherePoint[] = [];
    const numPoints = 8000; // High Density

    // Helper to get color based on vertical sphere height
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
      const y = 1 - (i / (numPoints - 1)) * 2; 
      const theta = Math.acos(y); 
      const phi = i * Math.PI * (3 - Math.sqrt(5)); 
      
      const ratio = (y + 1) / 2; 
      const baseColor = getSphereColor(ratio);
      
      points.push({ theta, phi, baseColor });
    }

    // Animation variables
    let time = 0;
    let rotY = 0;
    let rotX = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Slowly increment rotation angles
      rotY += isHoveredRef.current ? 0.005 : 0.003;
      rotX += isHoveredRef.current ? 0.004 : 0.002;
      
      // Wave progress over time
      time += isHoveredRef.current ? 0.03 : 0.015;

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
        const wave = Math.sin(p.theta * 5.0 + time) * Math.cos(p.phi * 5.0 + time) * waveAmplitude;
        const radius = baseRadius + wave;

        // 2. CONVERT TO 3D CARTESIAN
        const x3d = radius * Math.sin(p.theta) * Math.cos(p.phi);
        const y3d = radius * Math.sin(p.theta) * Math.sin(p.phi);
        const z3d = radius * Math.cos(p.theta);

        // 3. APPLY ROTATION MATRIX
        let x1 = x3d * Math.cos(rotY) - z3d * Math.sin(rotY);
        let z1 = x3d * Math.sin(rotY) + z3d * Math.cos(rotY);
        let y1 = y3d;

        let y2 = y1 * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = y1 * Math.sin(rotX) + z1 * Math.cos(rotX);
        let x2 = x1;

        // 4. PERSPECTIVE PROJECT TO 2D SCREEN
        const scale = focalLength / (focalLength + z2);
        let screenX = x2 * scale + centerX;
        let screenY = y2 * scale + centerY;

        // 5. MOUSE INTERACTION
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dx = screenX - mouseRef.current.x;
          const dy = screenY - mouseRef.current.y;
          const dist = Math.hypot(dx, dy);
          
          const interactionRadius = width * 0.15; // responsive interaction radius
          if (dist < interactionRadius) {
            const force = (interactionRadius - dist) / interactionRadius;
            const angle = Math.atan2(dy, dx);
            
            screenX += Math.cos(angle) * force * (width * 0.04);
            screenY += Math.sin(angle) * force * (width * 0.04);
          }
        }

        // 6. DEPTH Normalization & Alpha Fade
        const maxDepth = baseRadius + waveAmplitude; 
        const depthRatio = (z2 + maxDepth) / (maxDepth * 2); // 0 (front) to 1 (back)
        
        // Dynamic sizing based on canvas width to keep particles relative
        const baseParticleSize = width * 0.001;
        
        // High contrast in alpha and size
        const alpha = Math.max(0.02, (1 - depthRatio) * 0.9 + 0.1); 
        const size = Math.max(baseParticleSize, (1 - depthRatio) * (baseParticleSize * 10) + baseParticleSize);   

        projectedPoints.push({
          x: screenX,
          y: screenY,
          z: z2,
          color: p.baseColor,
          size,
          alpha,
        });
      });

      // 7. DEPTH SORTING (Back to Front)
      projectedPoints.sort((a, b) => b.z - a.z);

      // 8. RENDER PARTICLES AND DYNAMIC NEURAL NEIGHBOR LINES
      const lineConnectionDist = width * 0.12;
      const lineRenderLimit = width * 0.04;
      
      projectedPoints.forEach((p, idx) => {
        if (mouseRef.current.x !== null && mouseRef.current.y !== null && p.alpha > 0.4) {
          const mDist = Math.hypot(p.x - mouseRef.current.x, p.y - mouseRef.current.y);
          if (mDist < lineConnectionDist) {
            const maxChecks = Math.min(idx + 15, projectedPoints.length);
            for (let j = idx + 1; j < maxChecks; j++) {
              const other = projectedPoints[j];
              const otherDistToMouse = Math.hypot(other.x - mouseRef.current.x, other.y - mouseRef.current.y);
              
              if (otherDistToMouse < lineConnectionDist) {
                const linkDist = Math.hypot(p.x - other.x, p.y - other.y);
                if (linkDist < lineRenderLimit) {
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(other.x, other.y);
                  ctx.strokeStyle = `rgba(${p.color}, ${(1 - linkDist / lineRenderLimit) * 0.25})`;
                  ctx.lineWidth = 0.4;
                  ctx.stroke();
                }
              }
            }
          }
        }

        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <Link href="/elena-ai" className="elena-orb-portal-link relative w-full aspect-square max-w-[600px]">
        <div
          ref={containerRef}
          className="elena-orb-container w-full h-full absolute inset-0 overflow-visible"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <canvas ref={canvasRef} className="elena-orb-canvas w-full h-full block" />
        </div>
      </Link>
    </div>
  );
}
