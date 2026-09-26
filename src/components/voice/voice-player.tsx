import { narrationChapters } from "@/data/narration";
import type { NarrationStatus } from "@/hooks/use-speech-narration";
import { DecryptedLabel } from "@/components/effects/decrypted-label";
import { VoiceSettings } from "./voice-settings";
import { VoiceVisualizer } from "./voice-visualizer";

interface VoicePlayerProps {
  status: NarrationStatus; currentChapter: number; expanded: boolean; voices: SpeechSynthesisVoice[];
  selectedVoiceURI: string; rate: number; onPlay: () => void; onPause: () => void; onStop: () => void;
  onRestart: () => void; onToggleExpanded: () => void; onClose: () => void; onTranscript: () => void;
  onVoiceChange: (uri: string) => void; onRateChange: (rate: number) => void;
}

export function VoicePlayer(props: VoicePlayerProps) {
  // This engine-agnostic player can later use /audio/narendra-profile.mp3 without redesigning the UI.
  const chapter = narrationChapters[props.currentChapter] ?? narrationChapters[0];
  const playing = props.status === "playing";
  const progress = ((props.currentChapter + (props.status === "completed" ? 1 : 0)) / narrationChapters.length) * 100;
  const viewSection = () => document.getElementById(chapter.section)?.scrollIntoView({ behavior: "smooth", block: "start" });
  return <aside className={`voice-player${props.expanded ? " is-expanded" : ""}`} aria-label="Voice profile player">
    <div className="voice-player__top"><div><span className="voice-player__eyebrow"><i /> <DecryptedLabel text="VOICE PROFILE / NARRATED JOURNEY" /></span><strong>{props.status === "completed" ? "Journey completed" : chapter.label}</strong></div><div className="voice-player__window"><button className="cursor-target" type="button" aria-label={props.expanded ? "Minimize voice player" : "Expand voice player"} onClick={props.onToggleExpanded}>{props.expanded ? "-" : "+"}</button><button className="cursor-target" type="button" aria-label="Close voice player" onClick={props.onClose}>x</button></div></div>
    <div className="voice-player__status"><button className="voice-player__primary cursor-target" type="button" aria-label={playing ? "Pause narration" : "Play or resume narration"} onClick={playing ? props.onPause : props.onPlay}>{playing ? "II" : ">"}</button><VoiceVisualizer active={playing} /><div><span>{String(props.currentChapter + 1).padStart(2, "0")} / {String(narrationChapters.length).padStart(2, "0")}</span><b>{props.status === "paused" ? "Paused" : props.status === "error" ? "Narration error" : props.status === "completed" ? "Completed" : playing ? "Speaking" : "Ready"}</b></div></div>
    <div className="voice-player__progress" aria-label={`Chapter ${props.currentChapter + 1} of ${narrationChapters.length}`}><span style={{ width: `${Math.max(6, progress)}%` }} /></div>
    {props.expanded && <div className="voice-player__expanded"><div className="voice-player__actions"><button className="cursor-target" type="button" onClick={props.onRestart}>Restart</button><button className="cursor-target" type="button" onClick={props.onStop}>Stop</button><button className="cursor-target" type="button" onClick={viewSection}>View section</button><button className="cursor-target" type="button" onClick={props.onTranscript}>Read transcript</button></div><VoiceSettings voices={props.voices} selectedVoiceURI={props.selectedVoiceURI} rate={props.rate} onVoiceChange={props.onVoiceChange} onRateChange={props.onRateChange} /></div>}
  </aside>;
}
