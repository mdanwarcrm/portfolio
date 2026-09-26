import { portfolioContent } from "@/content/portfolio";
import { DecryptedLabel } from "./effects/decrypted-label";
import { PageContainer } from "./ui/page-container";
import { SectionEyebrow } from "./ui/section-eyebrow";

export function ProfessionalSections() {
  return (
    <>
      <section id="experience" className="record-section" aria-labelledby="experience-title">
        <PageContainer>
          <SectionEyebrow index="08"><DecryptedLabel text="PROFESSIONAL / EXPERIENCE" /></SectionEyebrow>
          <div className="record-section__heading"><h2 id="experience-title">Experience.</h2><p>A career shaped by direct operations, technical problem solving, and product entrepreneurship.</p></div>
          <div className="record-list">{portfolioContent.experience.map((item, index) => <article key={index}><span>{item.period}</span><div><small>{item.category}</small><h3>{item.title}</h3><b>{item.organization}</b></div><p>{item.description}</p></article>)}</div>
        </PageContainer>
      </section>

      <section id="education" className="record-section record-section--alternate" aria-labelledby="education-title">
        <PageContainer>
          <SectionEyebrow index="09"><DecryptedLabel text="ACADEMIC / FOUNDATION" /></SectionEyebrow>
          <div className="record-section__heading"><h2 id="education-title">Education.</h2><p>Continuous applied learning, strengthened through hands-on systems and product work.</p></div>
          <div className="education-list">{portfolioContent.education.map((item, index) => <article key={index}><strong>{item.period}</strong><div><small>{item.category}</small><h3>{item.title}</h3><p>{item.organization}</p><p>{item.description}</p></div></article>)}</div>
        </PageContainer>
      </section>

      <section id="achievements" className="archive-section" aria-labelledby="achievements-title">
        <PageContainer>
          <SectionEyebrow index="11"><DecryptedLabel text="PROFESSIONAL / HIGHLIGHTS" /></SectionEyebrow>
          <div className="archive-section__heading"><h2 id="achievements-title">Selected<br /><span>signals.</span></h2><p>A compact view of the breadth, progression, and systems mindset behind this sample portfolio.</p></div>
          <div className="archive-grid">{portfolioContent.achievements.map((item, index) => <article key={index}><span>{String(index + 1).padStart(3, "0")}</span><strong>{item.period}</strong><h3>{item.title}</h3><p>{item.organization}</p><small>{item.detail}</small></article>)}</div>
        </PageContainer>
      </section>

      <section id="resume" className="resume-section" aria-labelledby="resume-title">
        <PageContainer className="resume-section__grid">
          <div><SectionEyebrow index="12"><DecryptedLabel text="RESUME / 2026" /></SectionEyebrow><h2 id="resume-title">My<br /><span>resume.</span></h2><p>A concise summary of experience across entrepreneurship, network engineering, cyber security, business operations, and digital products.</p><div className="resume-actions"><a className="hero-button hero-button--primary cursor-target" href="/resume.pdf" target="_blank">View resume ↗</a><a className="hero-button cursor-target" href="/resume.pdf" download>Download PDF ↓</a></div></div>
          <div className="resume-frame" aria-label="Professional resume preview"><span>RESUME / 2026</span><strong>FOUNDER · TECHNOLOGIST · SYSTEM BUILDER</strong><small>PDF / READY</small></div>
        </PageContainer>
      </section>
    </>
  );
}
