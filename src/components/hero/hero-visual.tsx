"use client";

import { useEffect, useRef, useState } from "react";
import HalftoneReveal from "@/components/effects/HalftoneReveal";
import { TechnicalRuler } from "@/components/ui/technical-ruler";

export function HeroVisual() {
  const visualRef = useRef<HTMLDivElement>(null);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 769px)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setInteractive(pointer.matches && !motion.matches);
    update();
    pointer.addEventListener("change", update);
    motion.addEventListener("change", update);
    return () => {
      pointer.removeEventListener("change", update);
      motion.removeEventListener("change", update);
    };
  }, []);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!interactive) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    visualRef.current?.style.setProperty("--tilt-x", `${(-y * 7).toFixed(2)}deg`);
    visualRef.current?.style.setProperty("--tilt-y", `${(x * 9).toFixed(2)}deg`);
  }

  function resetTilt() {
    visualRef.current?.style.setProperty("--tilt-x", "0deg");
    visualRef.current?.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <div className="hero-visual-stage cursor-target" onPointerMove={handlePointerMove} onPointerLeave={resetTilt}>
      <TechnicalRuler start="Identity" end="Founder / Builder" />
      <div ref={visualRef} className="hero-visual" aria-label="Abstract founder portrait representing systems, technology, and entrepreneurship">
        <div className="hero-visual__back" aria-hidden="true" />
        <div className="hero-visual__frame">
          <HalftoneReveal
            src="/images/portfolio/hero-identity.png"
            inkColor="#050505"
            paperColor="#d9d9d9"
            mode="mono"
            dotDensity={68}
            angle={45}
            revealRadius={0.4}
            dotSize={1}
            shape="circle"
            contrast={1.15}
            trigger="off"
            idleReveal={1}
            borderRadius="0"
            style={{}}
          />
          <span className="hero-visual__asset-label">[ PORTRAIT / DNKM ] <small>India</small></span>
        </div>
        <p className="hero-visual__meta"><span>Dindi Narendra Kumar</span><span>Entrepreneur / India</span></p>
      </div>
    </div>
  );
}
