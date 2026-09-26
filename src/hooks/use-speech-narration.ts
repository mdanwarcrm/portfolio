"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { narrationChapters } from "@/data/narration";

export type NarrationStatus = "idle" | "loading" | "playing" | "paused" | "completed" | "error" | "unsupported";

function voiceScore(voice: SpeechSynthesisVoice) {
  const language = voice.lang.toLowerCase();
  if (language.startsWith("en-in")) return 0;
  if (language.startsWith("en-gb")) return 1;
  if (language.startsWith("en-us")) return 2;
  if (language.startsWith("en")) return 3;
  return 9;
}

export function useSpeechNarration() {
  const [status, setStatus] = useState<NarrationStatus>("loading");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState("");
  const [rate, setRateState] = useState(1);
  const [currentChapter, setCurrentChapter] = useState(0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const runRef = useRef(0);
  const speakingRef = useRef(false);
  const rateRef = useRef(1);
  const selectedVoiceURIRef = useRef("");

  const supported = status !== "unsupported";
  const selectedVoice = useMemo(() => voices.find((voice) => voice.voiceURI === selectedVoiceURI), [selectedVoiceURI, voices]);

  useEffect(() => {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      const unsupportedTimer = setTimeout(() => setStatus("unsupported"), 0);
      return () => clearTimeout(unsupportedTimer);
    }

    const loadVoices = () => {
      const english = window.speechSynthesis.getVoices().filter((voice) => voice.lang.toLowerCase().startsWith("en"));
      const ordered = [...english].sort((a, b) => voiceScore(a) - voiceScore(b) || Number(b.default) - Number(a.default));
      setVoices(ordered.slice(0, 12));
      setSelectedVoiceURI((current) => {
        const nextVoice = current || ordered[0]?.voiceURI || "";
        selectedVoiceURIRef.current = nextVoice;
        return nextVoice;
      });
      setStatus((current) => current === "loading" ? "idle" : current);
    };

    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    const fallback = window.setTimeout(loadVoices, 500);
    return () => {
      window.clearTimeout(fallback);
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
      runRef.current += 1;
      speakingRef.current = false;
      window.speechSynthesis.cancel();
    };
  }, []);

  const speakChapterRef = useRef<(index: number, run: number) => void>(() => undefined);
  const speakChapter = useCallback((index: number, run: number) => {
    if (run !== runRef.current || !("speechSynthesis" in window)) return;
    const chapter = narrationChapters[index];
    if (!chapter) {
      speakingRef.current = false;
      setStatus("completed");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(chapter.text);
    const currentVoice = voices.find((voice) => voice.voiceURI === selectedVoiceURIRef.current) ?? voices[0];
    if (currentVoice) utterance.voice = currentVoice;
    utterance.rate = rateRef.current;
    utterance.pitch = 0.98;
    utterance.volume = 1;
    utterance.onstart = () => { if (run === runRef.current) { speakingRef.current = true; setCurrentChapter(index); setStatus("playing"); } };
    utterance.onend = () => { if (run === runRef.current && speakingRef.current) speakChapterRef.current(index + 1, run); };
    utterance.onerror = (event) => {
      if (run !== runRef.current || event.error === "canceled" || event.error === "interrupted") return;
      speakingRef.current = false;
      setStatus("error");
    };
    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [voices]);

  useEffect(() => {
    speakChapterRef.current = speakChapter;
  }, [speakChapter]);

  const startAt = useCallback((index: number) => {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) { setStatus("unsupported"); return; }
    runRef.current += 1;
    const run = runRef.current;
    speakingRef.current = true;
    window.speechSynthesis.cancel();
    setCurrentChapter(index);
    window.setTimeout(() => speakChapterRef.current(index, run), 80);
  }, []);

  const play = useCallback(() => {
    if (status === "paused") { window.speechSynthesis.resume(); setStatus("playing"); return; }
    startAt(status === "completed" ? 0 : currentChapter);
  }, [currentChapter, startAt, status]);

  const pause = useCallback(() => {
    if (status === "playing") { window.speechSynthesis.pause(); setStatus("paused"); }
  }, [status]);

  const stop = useCallback(() => {
    runRef.current += 1;
    speakingRef.current = false;
    window.speechSynthesis.cancel();
    setCurrentChapter(0);
    setStatus("idle");
  }, []);

  const restart = useCallback(() => startAt(0), [startAt]);
  const setRate = useCallback((nextRate: number) => {
    rateRef.current = nextRate;
    setRateState(nextRate);
    if (status === "playing" || status === "paused") window.setTimeout(() => startAt(currentChapter), 0);
  }, [currentChapter, startAt, status]);
  const selectVoice = useCallback((uri: string) => {
    selectedVoiceURIRef.current = uri;
    setSelectedVoiceURI(uri);
    if (status === "playing" || status === "paused") window.setTimeout(() => startAt(currentChapter), 0);
  }, [currentChapter, startAt, status]);

  return { status, supported, voices, selectedVoice, selectedVoiceURI, rate, currentChapter, play, pause, stop, restart, setRate, selectVoice };
}
