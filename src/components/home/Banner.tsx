"use client"
import { useRef } from "react";

export default function LiquidCard() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="liquid-card relative overflow-hidden rounded-2xl p-[1px] h-100"
    >
      {/* Gradient Layer */}
      <div className="liquid-bg absolute inset-0"></div>

      {/* Glass Content */}
      <div className="relative rounded-2xl bg-white/70 backdrop-blur-xl p-6 border border-white/20">
        <h2 className="text-xl font-semibold">Yashwant Ughade</h2>
        <p className="text-gray-500">Full Stack Developer</p>
      </div>
    </div>
  );
}