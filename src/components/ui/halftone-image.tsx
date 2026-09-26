import type { ComponentPropsWithoutRef } from "react";

interface HalftoneImageProps extends ComponentPropsWithoutRef<"div"> {
  interactive?: boolean;
}

export function HalftoneImage({ interactive = false, className = "", children, ...props }: HalftoneImageProps) {
  return (
    <div className={`halftone-image${interactive ? " halftone-image--interactive" : ""} ${className}`.trim()} {...props}>
      <div className="halftone-image__content">{children}</div>
      <span className="halftone-image__screen" aria-hidden="true" />
      <span className="halftone-image__shade" aria-hidden="true" />
    </div>
  );
}
