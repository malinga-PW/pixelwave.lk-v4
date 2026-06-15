"use client";

import React, { useRef, useEffect } from "react";

interface SpherePoint {
  x: number;
  y: number;
  z: number;
  baseColor: string;
  originalR: number;
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

    // Initialize 3D particles distributed on a sculpted face structure
    const points: SpherePoint[] = [];
    const numPoints = 2700; // Dense particle cloud

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
      const radiusAtY = Math.sqrt(1 - y * y);
      const phi = i * Math.PI * (3 - Math.sqrt(5)); // golden angle spiral
      
      const x = Math.cos(phi) * radiusAtY;
      const z = Math.sin(phi) * radiusAtY;
      
      let rModifier = 1.0;
      // Let the face point towards +Z axis (z > 0)
      if (z > 0) {
        // Sculpting facial features using Gaussian-like displacements
        const nose = Math.exp(-((x * x) / 0.02 + ((y - 0.1) * (y - 0.1)) / 0.05)) * 0.25;
        const leftEye = Math.exp(-(((x + 0.3) * (x + 0.3)) / 0.04 + ((y - 0.25) * (y - 0.25)) / 0.02)) * -0.15;
        const rightEye = Math.exp(-(((x - 0.3) * (x - 0.3)) / 0.04 + ((y - 0.25) * (y - 0.25)) / 0.02)) * -0.15;
        const mouth = Math.exp(-((x * x) / 0.08 + ((y + 0.25) * (y + 0.25)) / 0.01)) * -0.08;
        const chin = Math.exp(-((x * x) / 0.05 + ((y + 0.45) * (y + 0.45)) / 0.03)) * 0.1;
        const leftCheek = Math.exp(-(((x + 0.4) * (x + 0.4)) / 0.05 + ((y + 0.05) * (y + 0.05)) / 0.05)) * 0.08;
        const rightCheek = Math.exp(-(((x - 0.4) * (x - 0.4)) / 0.05 + ((y + 0.05) * (y + 0.05)) / 0.05)) * 0.08;

        rModifier += nose + leftEye + rightEye + mouth + chin + leftCheek + rightCheek;
      }
      
      // Elongate face vertically for a more natural head shape
      rModifier *= (1.0 + Math.abs(y) * 0.15);

      const finalX = x * rModifier;
      const finalY = y * rModifier;
      const finalZ = z * rModifier;
      
      const ratio = (y + 1) / 2; // 0 at bottom pole, 1 at top pole
      const baseColor = getSphereColor(ratio);
      
      points.push({ x: finalX, y: finalY, z: finalZ, baseColor, originalR: rModifier });
    }

    // Animation variables
    let time = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const baseRadius = 124; // 80% of original 155
    const focalLength = 320;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Mouse tracking rotation (smooth lerp)
      let targetRotX = 0;
      let targetRotY = 0;
      if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dx = mouseRef.current.x - centerX;
          const dy = mouseRef.current.y - centerY;
          // Look at mouse, max rotation ~45 degrees
          targetRotY = (dx / width) * Math.PI * 0.6; 
          targetRotX = -(dy / height) * Math.PI * 0.6;
      } else {
          // Default gentle idle rotation
          targetRotY = Math.sin(time * 0.5) * 0.2;
          targetRotX = Math.cos(time * 0.4) * 0.1;
      }

      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;
      
      time += 0.015; // smooth idle wave time

      // Project points to 3D and store in an array for depth sorting
      interface ProjectedPoint {
        x: number;
        y: number;
        z: number;
        color: string;
        size: number;
        alpha: number;
        rawZ: number;
      }

      const projectedPoints: ProjectedPoint[] = [];

      points.forEach((p) => {
        // 1. WAVE DISPLACEMENT
        // Small organic wave to keep the neural particles feeling alive
        const wave = Math.sin(p.originalR * 10 + time) * 0.03;
        const currentRadius = baseRadius * (1 + wave);

        // 2. USE PRECALCULATED 3D CARTESIAN
        const x3d = p.x * currentRadius;
        const y3d = p.y * currentRadius;
        const z3d = p.z * currentRadius;

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

        // 5. MOUSE INTERACTION (FLUID REPULSION VECTORS)
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dx = screenX - mouseRef.current.x;
          const dy = screenY - mouseRef.current.y;
          const dist = Math.hypot(dx, dy);
          
          if (dist < 60) {
            // Push particles away relative to distance gently
            const force = (60 - dist) / 60;
            const angle = Math.atan2(dy, dx);
            
            // Warp coordinates
            screenX += Math.cos(angle) * force * 15;
            screenY += Math.sin(angle) * force * 15;
          }
        }

        // 6. DEPTH Normalization & Alpha Fade
        const maxDepth = baseRadius + 15; // Max z range
        const depthRatio = (z2 + maxDepth) / (maxDepth * 2); // 0 (front) to 1 (back)
        const alpha = Math.max(0.08, (1 - depthRatio) * 0.82 + 0.12); // fade back particles
        const size = Math.max(0.4, (1 - depthRatio) * 1.5 + 0.4);   // front particles are slightly larger

        projectedPoints.push({
          x: screenX,
          y: screenY,
          z: z2,
          color: p.baseColor,
          size,
          alpha,
          rawZ: z2,
        });
      });

      // 7. DEPTH SORTING (Back to Front)
      projectedPoints.sort((a, b) => b.z - a.z);

      // 8. RENDER PARTICLES AND DYNAMIC NEURAL NEIGHBOR LINES
      projectedPoints.forEach((p, idx) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.shadowBlur = 0; 
        ctx.fill();

        // Render neural web connection lines when mouse is active and near particles
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const mDist = Math.hypot(p.x - mouseRef.current.x, p.y - mouseRef.current.y);
          if (mDist < 70) {
            for (let j = idx + 1; j < projectedPoints.length; j++) {
              const other = projectedPoints[j];
              const otherDistToMouse = Math.hypot(other.x - mouseRef.current.x, other.y - mouseRef.current.y);
              
              if (otherDistToMouse < 70) {
                const linkDist = Math.hypot(p.x - other.x, p.y - other.y);
                if (linkDist < 25) {
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(other.x, other.y);
                  ctx.strokeStyle = `rgba(${p.color}, ${(1 - linkDist / 25) * 0.25})`;
                  ctx.lineWidth = 0.4;
                  ctx.stroke();
                }
              }
            }
          }
        }
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
    <div className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto">
      <div
        ref={containerRef}
        className="elena-orb-container w-full aspect-square relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <canvas ref={canvasRef} className="elena-orb-canvas w-full h-full" />
      </div>
      <div className="flex w-full max-w-[340px] items-center gap-2 z-10 relative">
        <input 
          type="text" 
          placeholder="Ask Elena..." 
          className="flex-1 rounded-full border border-white/20 bg-black/50 px-5 py-3 text-sm text-white placeholder-white/50 backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-cyan-500" 
        />
        <button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] hover:scale-105 active:scale-95">
          Ask
        </button>
      </div>
    </div>
  );
}
