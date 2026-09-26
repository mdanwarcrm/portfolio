"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const TargetCursor = dynamic(() => import("./TargetCursor"), { ssr: false });

export function PortfolioCursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 769px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(finePointer.matches && !reducedMotion.matches);
    update();
    finePointer.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      finePointer.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  if (!enabled) return null;
  return (
    <TargetCursor
      targetSelector=".cursor-target"
      spinDuration={8}
      hideDefaultCursor
      parallaxOn
      hoverDuration={0.2}
      cursorColor="#e8e8e8"
      cursorColorOnTarget="#00ff41"
    />
  );
}
