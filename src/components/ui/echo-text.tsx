import type { ComponentPropsWithoutRef } from "react";

interface EchoTextProps extends ComponentPropsWithoutRef<"span"> {
  accentLayer?: boolean;
}

export function EchoText({ accentLayer = false, className = "", children, ...props }: EchoTextProps) {
  return (
    <span className={`echo-text${accentLayer ? " echo-text--accent" : ""} ${className}`.trim()} {...props}>
      <span className="echo-text__layer echo-text__layer--4" aria-hidden="true">{children}</span>
      <span className="echo-text__layer echo-text__layer--3" aria-hidden="true">{children}</span>
      <span className="echo-text__layer echo-text__layer--2" aria-hidden="true">{children}</span>
      <span className="echo-text__layer echo-text__layer--1" aria-hidden="true">{children}</span>
      <span className="echo-text__main">{children}</span>
    </span>
  );
}
