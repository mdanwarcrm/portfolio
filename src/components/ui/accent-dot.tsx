interface AccentDotProps { pulse?: boolean; }

export function AccentDot({ pulse = false }: AccentDotProps) {
  return <span className={`accent-dot${pulse ? " accent-dot--pulse" : ""}`} aria-hidden="true" />;
}
