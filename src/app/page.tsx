import { DecryptedLabel } from "@/components/effects/decrypted-label";
import { HeroInteractiveTitle } from "@/components/effects/hero-interactive-title";
import { PortfolioCursor } from "@/components/effects/portfolio-cursor";
import { FooterContact } from "@/components/footer-contact";
import { HeroVisual } from "@/components/hero/hero-visual";
import { IntroLoader } from "@/components/intro-loader";
import { JourneyTimeline } from "@/components/journey-timeline";
import { ProfessionalSections } from "@/components/professional-sections";
import { BentoProjects } from "@/components/projects/bento-projects";
import { AllProjects } from "@/components/all-projects";
import { ClientsHighlights } from "@/components/clients-highlights";
import { SiteNavigation } from "@/components/site-navigation";
import { SkillsSection } from "@/components/skills-section";
import { DisplayHeading } from "@/components/ui/display-heading";
import { EchoText } from "@/components/ui/echo-text";
import { MetadataLabel } from "@/components/ui/metadata-label";
import { PageContainer } from "@/components/ui/page-container";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionLabel } from "@/components/ui/section-label";
import { TechnicalRuler } from "@/components/ui/technical-ruler";
import { portfolioContent } from "@/content/portfolio";
import { VoiceProfileCTA } from "@/components/voice/voice-profile-cta";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <PortfolioCursor />
      <SiteNavigation />
      <main id="main-content">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="canvas-grid" aria-hidden="true" />
          <div className="hero-background-word" aria-hidden="true">Portfolio</div>
          <PageContainer className="hero__inner">
            <SectionEyebrow><DecryptedLabel text="PORTFOLIO / 2026" /></SectionEyebrow>
            <div className="hero-instrumentation" aria-label="Portfolio metadata">
              <MetadataLabel label="Base" value="India" />
              <MetadataLabel label="Discipline" value="Systems + Technology" />
              <MetadataLabel label="Status" value="Building" accent />
            </div>
            <div className="hero__composition">
              <HeroInteractiveTitle />
              <HeroVisual />
            </div>
            <div className="hero__footer">
              <p>Building systems for real problems across networks, cyber security, operations, and digital products.</p>
              <div className="hero__actions">
                <a className="hero-button hero-button--primary cursor-target" href="#work">Explore my work <span aria-hidden="true">↘</span></a>
                <a className="hero-button cursor-target" href="#resume">View profile <span aria-hidden="true">↓</span></a>
              </div>
              <a className="scroll-cue cursor-target" href="#about"><span>Scroll</span><span aria-hidden="true">↓</span></a>
            </div>
            <VoiceProfileCTA />
          </PageContainer>
        </section>

        <section id="about" className="about-entry" aria-labelledby="about-title">
          <PageContainer>
            <SectionLabel index="01"><DecryptedLabel text="ABOUT / PERSPECTIVE" /></SectionLabel>
            <div className="about-entry__grid">
              <DisplayHeading id="about-title">Real problems.<br /><span>Working systems.</span></DisplayHeading>
              <div className="about-entry__copy">
                <p>I&apos;m Dindi Narendra Kumar Madala—an India-based entrepreneur, technologist, system builder, and problem solver. My path from transport operations in India to network engineering and security analysis across UK client environments shaped a practical way of thinking: understand the real workflow first, then build technology around it.</p>
                <p className="about-entry__note">Operations taught responsibility. Technology added leverage. Entrepreneurship connected both to outcomes.</p>
              </div>
            </div>
          </PageContainer>
        </section>

        <JourneyTimeline entries={portfolioContent.journey} />

        <section id="work" className="featured-work" aria-labelledby="work-title">
          <PageContainer>
            <TechnicalRuler start="Selected / 001" end="Work / Archive" className="work-ruler" />
            <div className="section-intro">
              <SectionEyebrow index="03"><DecryptedLabel text="SELECTED / WORK" /></SectionEyebrow>
              <DisplayHeading id="work-title"><EchoText accentLayer>Featured</EchoText><br /><span className="section-intro__outline">projects.</span></DisplayHeading>
              <p>Six sample product stories spanning financial operations, overseas education, hospitality, and commerce—each visualised as a distinct system.</p>
            </div>
            <BentoProjects projects={portfolioContent.projects} />
          </PageContainer>
        </section>

        <AllProjects />
        <SkillsSection />
        <ProfessionalSections />
        <ClientsHighlights />
      </main>
      <FooterContact />
    </>
  );
}
