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
  const [mouse, setMouse] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMouse({ x: null, y: null });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

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

    // Initialize 3D particles distributed on a sphere shell using Fibonacci spiral
    const points: SpherePoint[] = [];
    const numPoints = 400; // Dense colorful shell

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
    let rotY = 0;
    let rotX = 0;

    const baseRadius = 80;
    const focalLength = 320;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Slowly increment rotation angles
      rotY += isHovered ? 0.006 : 0.003;
      rotX += isHovered ? 0.004 : 0.002;
      
      // Wave progress over time (slow animation)
      time += isHovered ? 0.04 : 0.015;

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
        // Create organic 3D wave ripples on the sphere radius based on angles and time
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
        if (mouse.x !== null && mouse.y !== null) {
          const dx = screenX - mouse.x;
          const dy = screenY - mouse.y;
          const dist = Math.hypot(dx, dy);
          
          if (dist < 90) {
            // Push particles away relative to distance
            const force = (90 - dist) / 90;
            const angle = Math.atan2(dy, dx);
            
            // Warp coordinates
            screenX += Math.cos(angle) * force * 24;
            screenY += Math.sin(angle) * force * 24;
          }
        }

        // 6. DEPTH Normalization & Alpha Fade
        const maxDepth = baseRadius + 15; // Max z range
        const depthRatio = (z2 + maxDepth) / (maxDepth * 2); // 0 (front) to 1 (back)
        const alpha = Math.max(0.1, (1 - depthRatio) * 0.85 + 0.15); // fade back particles
        const size = Math.max(0.7, (1 - depthRatio) * 2.8 + 0.6);   // front particles are larger

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
        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        
        // Front particles get slight neon shadow glows
        if (p.rawZ < -20 && isHovered) {
          ctx.shadowColor = `rgb(${p.color})`;
          ctx.shadowBlur = 8;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.shadowBlur = 0; // Reset

        // Render neural web connection lines when mouse is active and near particles
        if (mouse.x !== null && mouse.y !== null) {
          const mDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (mDist < 75) {
            // Check nearest neighbor particles to draw lines
            for (let j = idx + 1; j < projectedPoints.length; j++) {
              const other = projectedPoints[j];
              const otherDistToMouse = Math.hypot(other.x - mouse.x, other.y - mouse.y);
              
              if (otherDistToMouse < 75) {
                const linkDist = Math.hypot(p.x - other.x, p.y - other.y);
                if (linkDist < 35) {
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(other.x, other.y);
                  ctx.strokeStyle = `rgba(${p.color}, ${(1 - linkDist / 35) * 0.35})`;
                  ctx.lineWidth = 0.5;
                  ctx.stroke();
                }
              }
            }
          }
        }
      });

      // 9. DRAW TECH CENTRAL LABEL FADEOUT
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 9px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.globalAlpha = isHovered ? 0.3 : 0.8;
      ctx.fillText("ELENA.AI", centerX, centerY);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [mouse, isHovered]);

  return (
    <Link href="/elena-ai" className="elena-orb-portal-link">
      <div
        ref={containerRef}
        className={`elena-orb-container ${isHovered ? "hovered" : ""}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <canvas ref={canvasRef} className="elena-orb-canvas" />
      </div>
    </Link>
  );
}
