import type { PropsWithChildren } from "react";
import type { PortfolioSection } from "@/types/portfolio";

interface SectionShellProps extends PropsWithChildren { section: PortfolioSection; className?: string; }

export function SectionShell({ section, className, children }: SectionShellProps) {
  return (
    <section id={section.id} className={className} aria-labelledby={`${section.id}-title`}>
      <p>{section.eyebrow}</p>
      <h2 id={`${section.id}-title`}>{section.label}</h2>
      {children}
    </section>
  );
}
