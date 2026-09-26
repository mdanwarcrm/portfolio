interface MetadataLabelProps {
  label: string;
  value: string;
  accent?: boolean;
}

export function MetadataLabel({ label, value, accent = false }: MetadataLabelProps) {
  return <span className={`metadata-label${accent ? " metadata-label--accent" : ""}`}><b>{label}</b><span>{value}</span></span>;
}
