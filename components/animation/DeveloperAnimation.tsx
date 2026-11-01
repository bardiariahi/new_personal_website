
"use client";

import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/animations/developer-workspace.json";

interface MousePosition {
  x: number;
  y: number;
}

export default function DeveloperAnimation() {
  const [rotation, setRotation] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    if (!rect.width || !rect.height) return;

    const mouseX = (event.clientX - rect.left) / rect.width;
    const mouseY = (event.clientY - rect.top) / rect.height;

    setRotation({
      x: (0.5 - mouseY) * 12,
      y: (mouseX - 0.5) * 12,
    });
  };

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative mx-auto w-full max-w-[700px]"
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-[15%] rounded-full bg-primary/20 blur-[100px]" />

      {/* Floating Animation */}
      <div
        className="relative z-10 w-full transition-transform duration-300 ease-out motion-reduce:transition-none"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <Lottie
          animationData={animationData}
          loop
          autoplay
          className="h-auto w-full"
          rendererSettings={{
            preserveAspectRatio: "xMidYMid meet",
          }}
        />
      </div>
    </div>
  );
}
