import type { ComponentPropsWithoutRef } from "react";

export function AnimatedLink({ className = "", children, ...props }: ComponentPropsWithoutRef<"a">) {
  return <a className={`animated-link ${className}`.trim()} {...props}><span>{children}</span></a>;
}
