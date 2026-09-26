export function VoiceVisualizer({ active }: { active: boolean }) {
  return <span className={`voice-visualizer${active ? " is-active" : ""}`} aria-hidden="true">{Array.from({ length: 6 }, (_, index) => <i key={index} />)}</span>;
}
