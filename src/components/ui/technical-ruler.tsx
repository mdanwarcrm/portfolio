interface TechnicalRulerProps {
  start: string;
  end: string;
  className?: string;
}

export function TechnicalRuler({ start, end, className = "" }: TechnicalRulerProps) {
  return (
    <div className={`technical-ruler ${className}`.trim()} aria-hidden="true">
      <div className="technical-ruler__labels"><span>{start}</span><span>{end}</span></div>
      <div className="technical-ruler__ticks"><i /><i /></div>
    </div>
  );
}
