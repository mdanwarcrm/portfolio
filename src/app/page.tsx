import { DecryptedLabel } from "@/components/effects/decrypted-label";
import { HeroInteractiveTitle } from "@/components/effects/hero-interactive-title";
import { PortfolioCursor } from "@/components/effects/portfolio-cursor";
import { FooterContact } from "@/components/footer-contact";
import { HeroVisual } from "@/components/hero/hero-visual";
import { IntroLoader } from "@/components/intro-loader";
import { JourneyTimeline } from "@/components/journey-timeline";
import { ProfessionalSections } from "@/components/professional-sections";
import { BentoProjects } from "@/components/projects/bento-projects";
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
              <MetadataLabel label="Location" value="[ ADD LOCATION ]" />
              <MetadataLabel label="Discipline" value="Law + Technology" />
              <MetadataLabel label="Status" value="In progress" accent />
            </div>
            <div className="hero__composition">
              <HeroInteractiveTitle />
              <HeroVisual />
            </div>
            <div className="hero__footer">
              <p>A multidisciplinary portfolio at the intersection of analytical thinking, emerging technology, and meaningful communication.</p>
              <div className="hero__actions">
                <a className="hero-button hero-button--primary cursor-target" href="#work">Explore my work <span aria-hidden="true">↘</span></a>
                <span className="hero-button hero-button--disabled" aria-disabled="true">View resume <small>Pending</small></span>
              </div>
              <a className="scroll-cue cursor-target" href="#about"><span>Scroll</span><span aria-hidden="true">↓</span></a>
            </div>
          </PageContainer>
        </section>

        <section id="about" className="about-entry" aria-labelledby="about-title">
          <PageContainer>
            <SectionLabel index="01"><DecryptedLabel text="ABOUT / PERSPECTIVE" /></SectionLabel>
            <div className="about-entry__grid">
              <DisplayHeading id="about-title">Different fields.<br /><span>One point of view.</span></DisplayHeading>
              <div className="about-entry__copy">
                <p>This is where the story begins—connecting law, technology, research, and communication through curiosity and deliberate problem solving.</p>
                <p className="about-entry__note">Full narrative to follow with the dedicated About reference.</p>
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
              <p>Project names, imagery, roles, technologies, and links remain explicitly temporary until verified content is supplied.</p>
            </div>
            <BentoProjects projects={portfolioContent.projects} />
          </PageContainer>
        </section>

        <SkillsSection />
        <ProfessionalSections />
      </main>
      <FooterContact />
    </>
  );
}
