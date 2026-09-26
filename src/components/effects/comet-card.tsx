"use client";

import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from "react";

interface CometCardProps extends HTMLAttributes<HTMLElement> { children: ReactNode; }

export function CometCard({ children, className = "", onPointerMove, onPointerLeave, ...props }: CometCardProps) {
  const ref = useRef<HTMLElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1025px)");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(pointer.matches && !motion.matches);
    update();
    pointer.addEventListener("change", update);
    motion.addEventListener("change", update);
    return () => { pointer.removeEventListener("change", update); motion.removeEventListener("change", update); };
  }, []);

  return (
    <article
      ref={ref}
      className={`comet-card ${className}`.trim()}
      onPointerMove={(event) => {
        onPointerMove?.(event);
        if (!enabled) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        event.currentTarget.style.setProperty("--comet-x", `${(-y * 4).toFixed(2)}deg`);
        event.currentTarget.style.setProperty("--comet-y", `${(x * 4).toFixed(2)}deg`);
      }}
      onPointerLeave={(event) => {
        onPointerLeave?.(event);
        event.currentTarget.style.setProperty("--comet-x", "0deg");
        event.currentTarget.style.setProperty("--comet-y", "0deg");
      }}
      {...props}
    >{children}</article>
  );
}
