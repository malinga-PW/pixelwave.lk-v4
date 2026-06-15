"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

interface SpherePoint {
  x: number;
  y: number;
  z: number;
  baseColor: string;
  originalR: number;
  sizeModifier: number;
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

    // Initialize 3D particles
    const points: SpherePoint[] = [];
    const numPoints = 2500; // Dense particle cloud

    // Helper to get color based on vertical sphere height
    const getSphereColor = (ratio: number) => {
      if (ratio < 0.5) {
        // Interpolate between Green and Cyan
        const t = ratio * 2;
        const g = Math.round(255 * (1 - t) + 164 * t);
        const b = Math.round(151 * (1 - t) + 175 * t);
        return `0, ${g}, ${b}`;
      } else {
        // Interpolate between Cyan and Blue
        const t = (ratio - 0.5) * 2;
        const r = Math.round(0 * (1 - t) + 44 * t);
        const g = Math.round(164 * (1 - t) + 50 * t);
        const b = Math.round(175 * (1 - t) + 254 * t);
        return `${r}, ${g}, ${b}`;
      }
    };

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // -1 to 1
      const radiusAtY = Math.sqrt(1 - y * y);
      const phi = i * Math.PI * (3 - Math.sqrt(5)); // golden angle
      
      const x = Math.cos(phi) * radiusAtY;
      const z = Math.sin(phi) * radiusAtY;
      
      const ratio = (y + 1) / 2;
      let baseColor = getSphereColor(ratio);
      let rModifier = 1.0;
      let sizeModifier = 1.0;

      // Draw Face on the front hemisphere (z > 0)
      if (z > 0) {
        // Eyes
        const dLeftEye = Math.hypot(x + 0.35, y - 0.15);
        const dRightEye = Math.hypot(x - 0.35, y - 0.15);
        
        if (dLeftEye < 0.12 || dRightEye < 0.12) {
          baseColor = "0, 255, 255"; // Glowing Cyan LED eye
          sizeModifier = 2.5;
          rModifier = 0.95; // Indent slightly
        }
        
        // Mouth (Robot smile)
        if (y > 0.3 && y < 0.5 && Math.abs(x) < 0.25) {
           const curveDist = Math.abs((0.4 + x * x * 0.8) - y);
           if (curveDist < 0.05) {
             baseColor = "0, 255, 255";
             sizeModifier = 2.0;
             rModifier = 0.95;
           }
        }
      }

      points.push({ x, y, z, baseColor, originalR: rModifier, sizeModifier });
    }

    // Animation variables
    let time = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const baseRadius = 124; // 80% size
    const focalLength = 320;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Mouse tracking rotation
      let targetRotX = 0;
      let targetRotY = 0;
      if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dx = mouseRef.current.x - centerX;
          const dy = mouseRef.current.y - centerY;
          targetRotY = (dx / width) * Math.PI * 0.7; // Look towards mouse
          targetRotX = -(dy / height) * Math.PI * 0.7;
      } else {
          // Idle rotation
          targetRotY = Math.sin(time * 0.4) * 0.25;
          targetRotX = Math.cos(time * 0.3) * 0.15;
      }

      // Smooth Lerp
      currentRotX += (targetRotX - currentRotX) * 0.08;
      currentRotY += (targetRotY - currentRotY) * 0.08;
      
      time += 0.015;

      // Projection array
      interface ProjectedPoint {
        x: number; y: number; z: number; color: string; size: number; alpha: number;
      }
      const projectedPoints: ProjectedPoint[] = [];

      points.forEach((p) => {
        // Pulse wave
        const wave = Math.sin(p.originalR * 5 + time * 2) * 0.02;
        const currentRadius = baseRadius * p.originalR * (1 + wave);

        // Scale to radius
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

        // Mouse Repulsion
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dx = screenX - mouseRef.current.x;
          const dy = screenY - mouseRef.current.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 60) {
            const force = (60 - dist) / 60;
            const angle = Math.atan2(dy, dx);
            screenX += Math.cos(angle) * force * 10;
            screenY += Math.sin(angle) * force * 10;
          }
        }

        // Alpha and Size
        const maxDepth = baseRadius + 15;
        const depthRatio = (z2 + maxDepth) / (maxDepth * 2);
        const alpha = Math.max(0.08, (1 - depthRatio) * 0.85 + 0.15);
        const size = Math.max(0.4, (1 - depthRatio) * 1.5 + 0.5) * p.sizeModifier;

        projectedPoints.push({ x: screenX, y: screenY, z: z2, color: p.baseColor, size, alpha });
      });

      // Depth Sort
      projectedPoints.sort((a, b) => b.z - a.z);

      // Render
      projectedPoints.forEach((p, idx) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();

        // Neural links
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const mDist = Math.hypot(p.x - mouseRef.current.x, p.y - mouseRef.current.y);
          if (mDist < 60) {
            for (let j = idx + 1; j < projectedPoints.length; j++) {
              const other = projectedPoints[j];
              const otherDistToMouse = Math.hypot(other.x - mouseRef.current.x, other.y - mouseRef.current.y);
              if (otherDistToMouse < 60) {
                const linkDist = Math.hypot(p.x - other.x, p.y - other.y);
                if (linkDist < 20) {
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(other.x, other.y);
                  ctx.strokeStyle = `rgba(${p.color}, ${(1 - linkDist / 20) * 0.3})`;
                  ctx.lineWidth = 0.5;
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
    <div 
      className="elena-orb-container relative w-full flex justify-center" 
      style={{ aspectRatio: '1/1', position: 'relative' }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      
      {/* Ask Elena Overlay - using inline styles to absolutely prevent layout crashes with global CSS */}
      <div 
        style={{ 
          position: "absolute", 
          bottom: "10%", 
          left: "50%", 
          transform: "translateX(-50%)", 
          width: "90%", 
          maxWidth: "280px", 
          display: "flex", 
          gap: "8px", 
          zIndex: 20 
        }}
      >
        <input 
          type="text" 
          placeholder="Ask Elena..." 
          style={{ 
            flex: 1, 
            background: "rgba(0,0,0,0.6)", 
            border: "1px solid rgba(255,255,255,0.2)", 
            color: "white", 
            padding: "10px 16px", 
            borderRadius: "9999px",
            fontSize: "13px",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            outline: "none",
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
            margin: 0
          }}
        />
        <button 
          style={{ 
            background: "linear-gradient(to right, #00e5ff, #0077ff)", 
            color: "white", 
            border: "none", 
            padding: "10px 20px", 
            borderRadius: "9999px",
            fontSize: "13px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 0 15px rgba(0,229,255,0.4)",
            margin: 0,
            whiteSpace: "nowrap"
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Ask
        </button>
      </div>
    </div>
  );
}
