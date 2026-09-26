interface VoiceSettingsProps {
  voices: SpeechSynthesisVoice[];
  selectedVoiceURI: string;
  rate: number;
  onVoiceChange: (voiceURI: string) => void;
  onRateChange: (rate: number) => void;
}

export function VoiceSettings({ voices, selectedVoiceURI, rate, onVoiceChange, onRateChange }: VoiceSettingsProps) {
  return <div className="voice-settings">
    <label><span>Voice / English</span><select className="cursor-target" aria-label="Select narration voice" value={selectedVoiceURI} onChange={(event) => onVoiceChange(event.target.value)}><option value="">Browser default</option>{voices.map((voice) => <option key={voice.voiceURI} value={voice.voiceURI}>{voice.name} · {voice.lang}</option>)}</select></label>
    <fieldset><legend>Speech rate</legend>{[0.85, 1, 1.15].map((option) => <button className={`cursor-target${rate === option ? " is-selected" : ""}`} aria-label={`Set speech rate to ${option} times`} type="button" key={option} onClick={() => onRateChange(option)}>{option}×</button>)}</fieldset>
  </div>;
}
