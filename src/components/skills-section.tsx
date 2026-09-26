"use client";

import { useEffect, useState } from "react";
import MagnetLines from "@/components/effects/MagnetLines";
import { DecryptedLabel } from "@/components/effects/decrypted-label";
import { PageContainer } from "@/components/ui/page-container";

const skills = ["Product strategy", "Business operations", "CRM architecture", "Network systems", "Cyber security", "Web platforms", "Workflow automation", "AI product concepts", "Research & documentation", "Customer experience"];

export function SkillsSection() {
  const [compact, setCompact] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 769px)");
    const update = () => setCompact(!media.matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-title">
      <PageContainer className="skills-section__grid">
        <div className="skills-section__intro">
          <p className="section-eyebrow"><span className="section-eyebrow__mark" aria-hidden="true" /><span className="section-eyebrow__index">04</span><DecryptedLabel text="CAPABILITIES / DISCIPLINES" /></p>
          <h2 id="skills-title">Skills &amp;<br /><span>disciplines.</span></h2>
          <p>A practical toolkit spanning operations, product strategy, technical systems, security, automation, and clear communication.</p>
        </div>
        <div className={`skills-field${compact ? " skills-field--static" : ""}`}>
          <MagnetLines
            rows={compact ? 5 : 8}
            columns={compact ? 6 : 10}
            containerSize="100%"
            lineColor="rgba(232,232,232,0.38)"
            lineWidth="1px"
            lineHeight={compact ? "18px" : "28px"}
            baseAngle={-10}
            interactive={!compact}
          />
          <ul aria-label="Skills and disciplines">
            {skills.map((skill, index) => <li key={skill}><span>{String(index + 1).padStart(2, "0")}</span>{skill}</li>)}
          </ul>
        </div>
      </PageContainer>
    </section>
  );
}
