import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#050505", border: "3px solid #00ff41", color: "#f5f5f5", fontSize: 22, fontWeight: 800, letterSpacing: "-2px" }}>DNKM</div>, size);
}
