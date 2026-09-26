"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import type { TimelineEntry } from "@/types/portfolio";
import { DecryptedLabel } from "./effects/decrypted-label";
import { PageContainer } from "./ui/page-container";
import { SectionEyebrow } from "./ui/section-eyebrow";
import { TechnicalRuler } from "./ui/technical-ruler";

export function JourneyTimeline({ entries }: { entries: TimelineEntry[] }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 72%", "end 68%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 85, damping: 28, mass: 0.35 });

  return (
    <section id="journey" className="journey-section" aria-labelledby="journey-title">
      <PageContainer>
        <TechnicalRuler start="Archive / Journey" end="Continuity / 001" />
        <div className="journey-section__intro">
          <SectionEyebrow index="02"><DecryptedLabel text="CHAPTER / JOURNEY" /></SectionEyebrow>
          <h2 id="journey-title">My<br /><span>journey.</span></h2>
          <p>A structured record of education, experience, technology, and the work that shaped the current direction. Verified details are still pending.</p>
        </div>
        <div ref={timelineRef} className="journey-timeline">
          <div className="journey-beam" aria-hidden="true"><motion.span style={{ scaleY: progress }} /></div>
          {entries.map((entry, index) => (
            <article className="journey-entry" key={`${entry.period}-${index}`}>
              <div className="journey-entry__date"><span>{String(index + 1).padStart(2, "0")}</span><strong>{entry.period}</strong></div>
              <div className="journey-entry__content">
                <p className="journey-entry__category"><DecryptedLabel text={entry.category.toUpperCase()} /></p>
                <h3>{entry.title}</h3>
                {entry.organization && <p className="journey-entry__organization">{entry.organization}</p>}
                <p className="journey-entry__description">{entry.description}</p>
                {entry.metadata && <ul>{entry.metadata.map((item) => <li key={item}>{item}</li>)}</ul>}
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
