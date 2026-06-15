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

    // Initialize 3D particles distributed on a sphere shell using Fibonacci spiral
    const points: SpherePoint[] = [];
    const numPoints = 8000; // INCREASED DENSITY

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

    // --- TEXT PARTICLES SETUP ---
    const textParticles: { baseX: number, baseY: number }[] = [];
    const textCanvas = document.createElement("canvas");
    textCanvas.width = 120;
    textCanvas.height = 40;
    const textCtx = textCanvas.getContext("2d");
    if (textCtx) {
      textCtx.fillStyle = "#ffffff";
      textCtx.font = "bold 12px monospace";
      textCtx.textAlign = "center";
      textCtx.textBaseline = "middle";
      textCtx.fillText("ELENA.AI", 60, 20);
      
      const imgData = textCtx.getImageData(0, 0, 120, 40);
      const data = imgData.data;
      
      for (let y = 0; y < 40; y += 1) {
        for (let x = 0; x < 120; x += 1) {
          const idx = (y * 120 + x) * 4;
          if (data[idx + 3] > 128) {
            textParticles.push({
              baseX: x - 60,
              baseY: y - 20
            });
          }
        }
      }
    }

    // Animation variables
    let time = 0;
    let rotY = 0;
    let rotX = 0;

    // Reduced base radius mathematically guarantees it never exceeds the 340x340 bounds (no cropping)
    const baseRadius = 90; 
    const focalLength = 280; // Decreased focal length for enhanced 3D perspective

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Slowly increment rotation angles (slow, majestic motion)
      rotY += isHoveredRef.current ? 0.005 : 0.003;
      rotX += isHoveredRef.current ? 0.004 : 0.002;
      
      // Wave progress over time (slow animation)
      time += isHoveredRef.current ? 0.03 : 0.015;

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
        // Strong 3D surface waves
        const wave = Math.sin(p.theta * 5.0 + time) * Math.cos(p.phi * 5.0 + time) * 12;
        const radius = baseRadius + wave;

        // 2. CONVERT TO 3D CARTESIAN
        const x3d = radius * Math.sin(p.theta) * Math.cos(p.phi);
        const y3d = radius * Math.sin(p.theta) * Math.sin(p.phi);
        const z3d = radius * Math.cos(p.theta);

        // 3. APPLY ROTATION MATRIX
        // Rotate around Y axis
        let x1 = x3d * Math.cos(rotY) - z3d * Math.sin(rotY);
        let z1 = x3d * Math.sin(rotY) + z3d * Math.cos(rotY);
        let y1 = y3d;

        // Rotate around X axis
        let y2 = y1 * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = y1 * Math.sin(rotX) + z1 * Math.cos(rotX);
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
          
          if (dist < 85) {
            // Push particles away relative to distance
            const force = (85 - dist) / 85;
            const angle = Math.atan2(dy, dx);
            
            // Warp coordinates
            screenX += Math.cos(angle) * force * 20;
            screenY += Math.sin(angle) * force * 20;
          }
        }

        // 6. DEPTH Normalization & Alpha Fade
        const maxDepth = baseRadius + 20; // Max z range
        const depthRatio = (z2 + maxDepth) / (maxDepth * 2); // 0 (front) to 1 (back)
        
        // ENHANCED 3D: High contrast in alpha and size
        const alpha = Math.max(0.02, (1 - depthRatio) * 0.9 + 0.1); 
        const size = Math.max(0.2, (1 - depthRatio) * 2.5 + 0.2);   

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
      // Sort in descending order of z coordinate so back particles render first
      projectedPoints.sort((a, b) => b.z - a.z);

      // 8. RENDER PARTICLES AND DYNAMIC NEURAL NEIGHBOR LINES
      projectedPoints.forEach((p, idx) => {
        // Render neural web connection lines when mouse is active and near particles
        // ONLY render lines for front particles to preserve performance with 8k density
        if (mouseRef.current.x !== null && mouseRef.current.y !== null && p.alpha > 0.4) {
          const mDist = Math.hypot(p.x - mouseRef.current.x, p.y - mouseRef.current.y);
          if (mDist < 70) {
            // Check nearest neighbor particles to draw lines
            // Limit checks to prevent lag
            const maxChecks = Math.min(idx + 15, projectedPoints.length);
            for (let j = idx + 1; j < maxChecks; j++) {
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

        // Use fillRect instead of arc for massive performance boost with 8000 particles
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
      });

      // 9. DRAW CENTRAL LABEL AS WAVING PIXEL PARTICLES
      ctx.fillStyle = "#00e5ff"; // Cyan pixel color
      ctx.globalAlpha = 0.85;
      
      textParticles.forEach(tp => {
        // Apply a wave effect based on position and time
        const waveX = Math.sin(tp.baseY * 0.4 + time * 3) * 1.5;
        const waveY = Math.cos(tp.baseX * 0.2 + time * 2.5) * 1.5;
        
        const px = centerX + tp.baseX + waveX;
        const py = centerY + tp.baseY + waveY;
        
        // Pixel appearance (squares)
        ctx.fillRect(px, py, 1.2, 1.2);
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
    <Link href="/elena-ai" className="elena-orb-portal-link">
      <div
        ref={containerRef}
        className="elena-orb-container"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <canvas ref={canvasRef} className="elena-orb-canvas" />
      </div>
    </Link>
  );
}
