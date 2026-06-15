"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import elenaFace from "@/public/images/hero/elena-face.png";

export default function ElenaAgentOrb() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number>();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Max rotation 15 degrees
    const rotateY = (mouseX / (rect.width / 2)) * 15;
    const rotateX = -(mouseY / (rect.height / 2)) * 15;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  // Idle animation when not hovered
  useEffect(() => {
    if (isHovered) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    let time = 0;
    const animateIdle = () => {
      time += 0.01;
      setRotation({
        x: Math.sin(time) * 3, // Gentle idle wobble
        y: Math.cos(time * 0.8) * 5
      });
      animationRef.current = requestAnimationFrame(animateIdle);
    };

    animationRef.current = requestAnimationFrame(animateIdle);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered]);

  return (
    <div 
      className="elena-orb-container relative w-full flex justify-center" 
      style={{ perspective: "1000px", position: 'relative', marginTop: "20px" }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        style={{
          width: '100%',
          aspectRatio: '1/1',
          position: 'relative',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 2s ease-in-out',
          transformStyle: 'preserve-3d',
          // Fade out the edges of the image to blend perfectly with the dark background
          maskImage: "radial-gradient(circle at center, black 50%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 50%, transparent 95%)"
        }}
      >
        <Image 
          src={elenaFace} 
          alt="Elena AI Face" 
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
      
      {/* Ask Elena Overlay */}
      <div 
        style={{ 
          position: "absolute", 
          bottom: "0", 
          left: "50%", 
          transform: "translateX(-50%)", 
          width: "90%", 
          maxWidth: "320px", 
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
            padding: "12px 20px", 
            borderRadius: "9999px",
            fontSize: "14px",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            outline: "none",
            boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
            margin: 0
          }}
        />
        <button 
          style={{ 
            background: "linear-gradient(to right, #00e5ff, #0077ff)", 
            color: "white", 
            border: "none", 
            padding: "12px 24px", 
            borderRadius: "9999px",
            fontSize: "14px",
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
