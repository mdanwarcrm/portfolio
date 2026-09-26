import type { ComponentPropsWithoutRef } from "react";

interface SectionEyebrowProps extends ComponentPropsWithoutRef<"p"> {
  index?: string;
}

export function SectionEyebrow({ index, className = "", children, ...props }: SectionEyebrowProps) {
  return (
    <p className={`section-eyebrow ${className}`.trim()} {...props}>
      <span className="section-eyebrow__mark" aria-hidden="true" />
      {index && <span className="section-eyebrow__index">{index}</span>}
      <span>{children}</span>
    </p>
  );
}
