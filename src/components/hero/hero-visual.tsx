import Image from "next/image";
import { TechnicalRuler } from "@/components/ui/technical-ruler";

export function HeroVisual() {
  return (
    <div className="hero-visual-stage">
      <TechnicalRuler start="Identity" end="Founder / Builder" />
      <div className="hero-visual" aria-label="Portrait of Dindi Narendra Kumar Madala">
        <div className="hero-visual__back" aria-hidden="true" />
        <div className="hero-visual__frame">
          <Image
            className="hero-portrait"
            src="/images/portfolio/hero-identity.png"
            alt="Dindi Narendra Kumar Madala"
            fill
            preload
            sizes="(max-width: 640px) 8rem, (max-width: 1024px) 20rem, 27rem"
          />
          <span className="hero-visual__asset-label">[ PORTRAIT / DNKM ] <small>India</small></span>
        </div>
        <p className="hero-visual__meta"><span>Dindi Narendra Kumar</span><span>Entrepreneur / India</span></p>
      </div>
    </div>
  );
}
