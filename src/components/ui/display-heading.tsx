import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

interface DisplayHeadingProps extends Omit<ComponentPropsWithoutRef<"h2">, "children"> {
  as?: ElementType; size?: "massive" | "display"; children: ReactNode;
}

export function DisplayHeading({ as: Tag = "h2", size = "display", className = "", children, ...props }: DisplayHeadingProps) {
  return <Tag className={`display-heading display-heading--${size} ${className}`.trim()} {...props}>{children}</Tag>;
}
