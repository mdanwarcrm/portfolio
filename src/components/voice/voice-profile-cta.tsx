"use client";

import { useEffect, useState } from "react";
import { narrationChapters } from "@/data/narration";
import { useSpeechNarration } from "@/hooks/use-speech-narration";
import { VoicePlayer } from "./voice-player";
import { TranscriptPanel } from "./transcript-panel";

export function VoiceProfileCTA() {
  const narration = useSpeechNarration();
  const [playerOpen, setPlayerOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [transcriptOpen, setTranscriptOpen] = useState(false);
  const start = () => { setPlayerOpen(true); setExpanded(true); narration.play(); };

  useEffect(() => {
    if (narration.status !== "playing") return;
    const section = document.getElementById(narrationChapters[narration.currentChapter]?.section ?? "top");
    section?.classList.add("voice-narration-active");
    return () => section?.classList.remove("voice-narration-active");
  }, [narration.currentChapter, narration.status]);

  return <>
    <div className="voice-cta">
      <span className="voice-cta__label"><i /> Voice profile</span><strong>Narrated introduction</strong><small>~01:20 / Listen to my journey</small>
      {narration.status === "unsupported" ? <><span className="voice-cta__unsupported">Voice narration is not available in this browser.</span><button className="voice-cta__button cursor-target" type="button" onClick={() => setTranscriptOpen(true)}>Read transcript</button></> : <><button className="voice-cta__button cursor-target" type="button" aria-label="Hear my narrated professional story" disabled={narration.status === "loading"} onClick={start}>{narration.status === "loading" ? "Loading voices..." : "Play / Hear my story"}</button><button className="voice-cta__transcript cursor-target" type="button" onClick={() => setTranscriptOpen(true)}>Read transcript</button></>}
    </div>
    {playerOpen && narration.supported && <VoicePlayer {...narration} expanded={expanded} onToggleExpanded={() => setExpanded((value) => !value)} onClose={() => { narration.stop(); setPlayerOpen(false); }} onTranscript={() => setTranscriptOpen(true)} onVoiceChange={narration.selectVoice} onRateChange={narration.setRate} onPlay={narration.play} onPause={narration.pause} onStop={narration.stop} onRestart={narration.restart} />}
    <TranscriptPanel open={transcriptOpen} onClose={() => setTranscriptOpen(false)} />
  </>;
}
