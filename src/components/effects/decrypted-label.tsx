"use client";

import DecryptedText from "./DecryptedText";

interface DecryptedLabelProps {
  text: string;
  className?: string;
}

export function DecryptedLabel({ text, className = "" }: DecryptedLabelProps) {
  return (
    <DecryptedText
      text={text}
      speed={42}
      maxIterations={7}
      characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/×.-"
      sequential
      revealDirection="start"
      animateOn="view"
      parentClassName={className}
      encryptedClassName="decrypted-label__encrypted"
    />
  );
}
