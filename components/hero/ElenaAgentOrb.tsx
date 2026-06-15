"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo/logo.svg";

interface SpherePoint {
  theta: number; // Polar angle
  phi: number;   // Azimuthal angle
  baseColor: string;
  layer: number; // 0: Outer, 1: Middle, 2: Core
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
    let width = 500;
    let height = 500;

    let baseRadius = 120;
    let focalLength = 375;

    const resizeCanvas = () => {
      const container = containerRef.current;
      if (container) {
        width = container.clientWidth || 500;
        height = container.clientHeight || 500;
      }
      
      canvas.width = width;
      canvas.height = height;

      // Perfectly symmetrical geometry bounds
      const sizeRef = Math.min(width, height);
      baseRadius = 0.35 * sizeRef; // Large orbit
      focalLength = 1.5 * sizeRef; // Long focal length to maintain clean perspective
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Global Mouse Listener to track anywhere in the window
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleGlobalMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    window.addEventListener("mousemove", handleGlobalMouseMove);
    window.addEventListener("mouseleave", handleGlobalMouseLeave);

    // Initialize 3D particles distributed on a sphere shell using Fibonacci spiral
    const points: SpherePoint[] = [];
    const numPoints = 8000; // High Density

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
      
      // Assign particles to 3 distinct concentric layers for perfect geometric symmetry
      let layer = 0;
      if (i % 6 === 0) {
        layer = 2; // Core sphere
      } else if (i % 6 === 1 || i % 6 === 2) {
        layer = 1; // Middle sphere
      } else {
        layer = 0; // Outer sphere
      }
      
      points.push({ theta, phi, baseColor, layer });
    }

    // Animation variables
    let time = 0;
    let currentRotY = 0;
    let currentRotX = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Mouse tracking target rotation
      let targetRotX = 0;
      let targetRotY = 0;

      if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
        const globalDx = mouseRef.current.x - centerX;
        const globalDy = mouseRef.current.y - centerY;
        
        targetRotY = (globalDx / (window.innerWidth / 2)) * Math.PI * 0.8; 
        targetRotX = -(globalDy / (window.innerHeight / 2)) * Math.PI * 0.8;
      } else {
        // Idle ambient rotation
        targetRotY = Math.sin(time * 0.5) * 0.2;
        targetRotX = Math.cos(time * 0.3) * 0.1;
      }

      // Smooth Lerp towards target rotation
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;
      
      time += 0.015;

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
        // 1. PERFECT SYMMETRICAL GEOMETRY
        // No displacement waves, just 3 perfect concentric spheres
        let radius = baseRadius;
        
        if (p.layer === 0) {
          radius = baseRadius; // Outer
        } else if (p.layer === 1) {
          radius = baseRadius * 0.65; // Middle
        } else {
          radius = baseRadius * 0.3; // Core
        }

        // Apply opposing rotations to inner layers for dynamic geometric mechanism
        let layerRotX = currentRotX;
        let layerRotY = currentRotY;

        if (p.layer === 1) {
          layerRotX = -currentRotX * 1.2;
          layerRotY = -currentRotY * 1.2;
        } else if (p.layer === 2) {
          layerRotX = currentRotX * 2.5;
          layerRotY = currentRotY * 2.5 + time; // core spins slightly on its own
        }

        // 2. CONVERT TO 3D CARTESIAN
        const x3d = radius * Math.sin(p.theta) * Math.cos(p.phi);
        const y3d = radius * Math.sin(p.theta) * Math.sin(p.phi);
        const z3d = radius * Math.cos(p.theta);

        // 3. APPLY LAYER ROTATION MATRIX
        let x1 = x3d * Math.cos(layerRotY) - z3d * Math.sin(layerRotY);
        let z1 = x3d * Math.sin(layerRotY) + z3d * Math.cos(layerRotY);
        let y1 = y3d;

        let y2 = y1 * Math.cos(layerRotX) - z1 * Math.sin(layerRotX);
        let z2 = y1 * Math.sin(layerRotX) + z1 * Math.cos(layerRotX);
        let x2 = x1;

        // 4. PERSPECTIVE PROJECT TO 2D SCREEN
        const scale = focalLength / (focalLength + z2);
        let screenX = x2 * scale + centerX;
        let screenY = y2 * scale + centerY;

        // 5. GLOBAL MOUSE INTERACTION
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dx = screenX - mouseRef.current.x;
          const dy = screenY - mouseRef.current.y;
          const dist = Math.hypot(dx, dy);
          
          const interactionRadius = width * 0.2; 
          if (dist < interactionRadius) {
            const force = (interactionRadius - dist) / interactionRadius;
            const angle = Math.atan2(dy, dx);
            
            // Push particles away smoothly
            screenX += Math.cos(angle) * force * (width * 0.05);
            screenY += Math.sin(angle) * force * (width * 0.05);
          }
        }

        // 6. DEPTH Normalization & Alpha Fade
        const maxDepth = baseRadius; 
        const depthRatio = (z2 + maxDepth) / (maxDepth * 2); // 0 (front) to 1 (back)
        
        // Increased particle sizes as requested
        const baseParticleSize = Math.max(0.6, width * 0.0015); 
        const maxSizeVariance = width * 0.006;
        
        const alpha = Math.max(0.05, (1 - depthRatio) * 0.95 + 0.05); 
        const size = Math.max(baseParticleSize, (1 - depthRatio) * maxSizeVariance + baseParticleSize);   

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
        // Line connection effect also reacts to global mouse position
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
                  ctx.strokeStyle = `rgba(${p.color}, ${(1 - linkDist / lineRenderLimit) * 0.35})`;
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
      window.removeEventListener("mousemove", handleGlobalMouseMove);
      window.removeEventListener("mouseleave", handleGlobalMouseLeave);
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <Link href="/elena-ai" className="elena-orb-portal-link relative w-full aspect-square max-w-[600px]">
        <div
          ref={containerRef}
          className="elena-orb-container w-full h-full absolute inset-0 overflow-visible flex items-center justify-center"
        >
          <canvas ref={canvasRef} className="elena-orb-canvas w-full h-full block absolute inset-0 z-10" />
          
          {/* Logo Overlay */}
          <div className="absolute z-20 pointer-events-none drop-shadow-[0_0_20px_rgba(0,229,255,0.6)]">
            <Image src={logo} alt="PixelWave Logo" width={200} height={60} className="opacity-95" />
          </div>
        </div>
      </Link>
    </div>
  );
}
