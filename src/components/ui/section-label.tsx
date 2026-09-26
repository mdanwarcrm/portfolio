import type { ComponentPropsWithoutRef } from "react";
import { AccentDot } from "./accent-dot";

interface SectionLabelProps extends ComponentPropsWithoutRef<"p"> { index?: string; showDot?: boolean; }

export function SectionLabel({ index, showDot = false, className = "", children, ...props }: SectionLabelProps) {
  return <p className={`section-label ${className}`.trim()} {...props}>{showDot && <AccentDot />}{index && <span>{index}</span>}{children}</p>;
}
