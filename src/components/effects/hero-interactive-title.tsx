"use client";

import { useEffect, useRef, useState, type CSSProperties, type ComponentType, type RefObject } from "react";
import TextPressure from "./TextPressure";
import VariableProximity from "./VariableProximity";

const VariableProximityEffect = VariableProximity as unknown as ComponentType<{
  label: string;
  fromFontVariationSettings: string;
  toFontVariationSettings: string;
  containerRef: RefObject<HTMLDivElement | null>;
  radius: number;
  falloff: "linear" | "exponential" | "gaussian";
  style?: CSSProperties;
}>;

export function HeroInteractiveTitle() {
  const proximityRef = useRef<HTMLDivElement>(null);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 769px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setInteractive(finePointer.matches && !reducedMotion.matches);
    update();
    finePointer.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      finePointer.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  return (
    <h1 id="hero-title" className="hero-interactive-title" aria-label="Law and technology. Research and AI.">
      <span className="hero-interactive-title__pressure cursor-target">
        <TextPressure
          text="LAW × TECH"
          fontFamily="Roboto Flex, General Sans, sans-serif"
          flex
          width
          weight
          italic
          alpha={false}
          stroke={false}
          textColor="#ffffff"
          minFontSize={42}
          interactive={interactive}
        />
      </span>
      <span ref={proximityRef} className="hero-interactive-title__proximity">
        {interactive ? (
          <VariableProximityEffect
            label="RESEARCH × AI"
            fromFontVariationSettings="'wght' 420, 'wdth' 100"
            toFontVariationSettings="'wght' 700, 'wdth' 106"
            containerRef={proximityRef}
            radius={105}
            falloff="linear"
            style={{ fontFamily: "Roboto Flex, General Sans, sans-serif" }}
          />
        ) : (
          <span>RESEARCH × AI</span>
        )}
      </span>
    </h1>
  );
}
