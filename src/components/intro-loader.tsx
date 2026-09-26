"use client";

import { useEffect, useState } from "react";
import { DecryptedLabel } from "@/components/effects/decrypted-label";

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = window.sessionStorage.getItem("portfolio-intro-seen");
    const delay = reduceMotion || seen ? 0 : 1900;
    const progressTimer = reduceMotion || seen ? undefined : window.setInterval(() => {
      setProgress((current) => Math.min(current + 25, 100));
    }, 260);
    const timer = window.setTimeout(() => {
      setVisible(false);
      window.sessionStorage.setItem("portfolio-intro-seen", "true");
    }, delay);
    return () => {
      window.clearTimeout(timer);
      if (progressTimer) window.clearInterval(progressTimer);
    };
  }, []);

  if (!visible) return null;
  return (
    <div className="intro-loader" role="status" aria-label="Loading portfolio">
      <p className="intro-loader__name">DNK</p>
      <div className="intro-loader__progress" aria-hidden="true"><span /></div>
      <div className="intro-loader__meta"><DecryptedLabel text="PORTFOLIO / 2026" /><span className="intro-loader__count">{String(progress).padStart(2, "0")}</span></div>
    </div>
  );
}
