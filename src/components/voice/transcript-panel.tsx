"use client";

import { useEffect, useRef } from "react";
import { narrationChapters } from "@/data/narration";

export function TranscriptPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const handleKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => { window.removeEventListener("keydown", handleKey); previousFocus?.focus(); };
  }, [onClose, open]);
  if (!open) return null;
  return <div className="transcript-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <section className="transcript-panel" role="dialog" aria-modal="true" aria-labelledby="transcript-title">
      <header><div><span>Voice profile / Transcript</span><h2 id="transcript-title">Narrated journey.</h2></div><button ref={closeRef} className="cursor-target" type="button" aria-label="Close transcript" onClick={onClose}>Close x</button></header>
      <div className="transcript-panel__body">{narrationChapters.map((chapter, index) => <article key={chapter.id}><span>{String(index + 1).padStart(2, "0")} / {chapter.label}</span><p>{chapter.text}</p></article>)}</div>
    </section>
  </div>;
}
