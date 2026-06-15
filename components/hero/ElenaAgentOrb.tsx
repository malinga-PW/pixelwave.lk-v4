"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

interface FacePoint {
  x: number;
  y: number;
  z: number;
  baseColor: string;
  alphaMod: number;
}

export default function ElenaAgentOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

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

    // Initialize 3D particles in horizontal contour lines (like the reference image)
    const points: FacePoint[] = [];
    const numSlices = 80; // Horizontal lines
    const pointsPerSlice = 90; // Points per line

    for (let i = 0; i < numSlices; i++) {
      // y goes from 1 (top) to -1 (bottom)
      const y = 1 - (i / (numSlices - 1)) * 2;
      
      // Base radius of the head at this y (ellipsoid shape)
      const headRadius = Math.sqrt(1 - y * y) * 0.85;
      
      for (let j = 0; j < pointsPerSlice; j++) {
        // theta goes from -PI (left back) to PI (right back)
        // We focus more points on the front of the face
        const theta = -Math.PI + (j / (pointsPerSlice - 1)) * (Math.PI * 2);
        
        let x = Math.sin(theta) * headRadius;
        let z = Math.cos(theta) * headRadius;
        
        let rModifier = 1.0;
        let baseColor = "0, 229, 255"; 
        let alphaMod = 1.0;

        // Front face sculpting (only when pointing forward, z > 0 and |x| < 0.7)
        if (z > 0 && Math.abs(x) < 0.75) {
          // Nose: protrudes forward in the middle
          const nose = Math.exp(-((x * x) / 0.015 + ((y - 0.05) * (y - 0.05)) / 0.08)) * 0.35;
          
          // Eye sockets: recessed areas
          const leftEye = Math.exp(-(((x + 0.25) * (x + 0.25)) / 0.02 + ((y - 0.25) * (y - 0.25)) / 0.015)) * -0.15;
          const rightEye = Math.exp(-(((x - 0.25) * (x - 0.25)) / 0.02 + ((y - 0.25) * (y - 0.25)) / 0.015)) * -0.15;
          
          // Eyebrow ridge: protruding above eyes
          const brow = Math.exp(-((x * x) / 0.1 + ((y - 0.35) * (y - 0.35)) / 0.01)) * 0.08;

          // Mouth/Lips: protruding slightly
          const lips = Math.exp(-((x * x) / 0.03 + ((y + 0.25) * (y + 0.25)) / 0.01)) * 0.1;
          const mouthSlit = Math.exp(-((x * x) / 0.04 + ((y + 0.25) * (y + 0.25)) / 0.002)) * -0.05;

          // Chin
          const chin = Math.exp(-((x * x) / 0.04 + ((y + 0.45) * (y + 0.45)) / 0.02)) * 0.15;

          // Cheeks
          const cheeks = Math.exp(-((Math.abs(x) - 0.35)**2 / 0.04 + ((y + 0.1) * (y + 0.1)) / 0.05)) * 0.08;

          rModifier += nose + leftEye + rightEye + brow + lips + mouthSlit + chin + cheeks;
        } 
        
        // Elongate head vertically
        const finalY = y * 1.1;
        const finalX = x * rModifier;
        const finalZ = z * rModifier;

        // Color grading (Cyan in front, fading to purple in the back)
        if (finalZ > 0.4) {
          baseColor = "0, 255, 255"; // Bright glowing cyan
        } else if (finalZ > 0) {
          baseColor = "100, 200, 255"; // Light blue
        } else {
          baseColor = "120, 50, 255"; // Deep purple
          alphaMod = Math.max(0.1, 1.0 + finalZ); // Fade out the back heavily
        }

        points.push({ x: finalX, y: finalY, z: finalZ, baseColor, alphaMod });
      }
    }

    // Animation variables
    let time = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const baseRadius = 135; // Size of the head
    const focalLength = 350;

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
          targetRotY = (dx / width) * Math.PI * 0.6; // Look left/right
          targetRotX = -(dy / height) * Math.PI * 0.6; // Look up/down
      } else {
          // Idle ambient rotation
          targetRotY = Math.sin(time * 0.5) * 0.2;
          targetRotX = Math.cos(time * 0.3) * 0.1;
      }

      // Smooth Lerp
      currentRotX += (targetRotX - currentRotX) * 0.08;
      currentRotY += (targetRotY - currentRotY) * 0.08;
      
      time += 0.02;

      // Projection array
      interface ProjectedPoint {
        x: number; y: number; z: number; color: string; size: number; alpha: number;
      }
      const projectedPoints: ProjectedPoint[] = [];

      points.forEach((p) => {
        // Subtle breathing wave
        const wave = Math.sin(p.y * 5 + time) * 0.02;
        const currentRadius = baseRadius * (1 + wave);

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

        // Depth Alpha and Size
        const maxDepth = baseRadius + 15;
        const depthRatio = (z2 + maxDepth) / (maxDepth * 2);
        const alpha = Math.max(0.05, ((1 - depthRatio) * 0.9 + 0.1) * p.alphaMod);
        const size = Math.max(0.3, (1 - depthRatio) * 1.5 + 0.3);

        // Only push points that are visible enough to save performance
        if (alpha > 0.05) {
          projectedPoints.push({ x: screenX, y: screenY, z: z2, color: p.baseColor, size, alpha });
        }
      });

      // Depth Sort
      projectedPoints.sort((a, b) => b.z - a.z);

      // Render Particles
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
    };
  }, []);

  return (
    <div 
      className="elena-orb-container relative w-full flex justify-center" 
      style={{ aspectRatio: '1/1', position: 'relative' }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      
      {/* Ask Elena Overlay */}
      <div 
        style={{ 
          position: "absolute", 
          bottom: "5%", 
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
            whiteSpace: "nowrap",
            transition: "transform 0.2s"
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
