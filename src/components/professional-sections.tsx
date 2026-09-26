import { portfolioContent } from "@/content/portfolio";
import { DecryptedLabel } from "./effects/decrypted-label";
import { PageContainer } from "./ui/page-container";
import { SectionEyebrow } from "./ui/section-eyebrow";

export function ProfessionalSections() {
  return (
    <>
      <section id="experience" className="record-section" aria-labelledby="experience-title">
        <PageContainer>
          <SectionEyebrow index="05"><DecryptedLabel text="PROFESSIONAL / EXPERIENCE" /></SectionEyebrow>
          <div className="record-section__heading"><h2 id="experience-title">Experience.</h2><p>Structured professional history will appear here when verified resume details are supplied.</p></div>
          <div className="record-list">{portfolioContent.experience.map((item, index) => <article key={index}><span>{item.period}</span><div><small>{item.category}</small><h3>{item.title}</h3><b>{item.organization}</b></div><p>{item.description}</p></article>)}</div>
        </PageContainer>
      </section>

      <section id="education" className="record-section record-section--alternate" aria-labelledby="education-title">
        <PageContainer>
          <SectionEyebrow index="06"><DecryptedLabel text="ACADEMIC / FOUNDATION" /></SectionEyebrow>
          <div className="record-section__heading"><h2 id="education-title">Education.</h2><p>Academic details remain intentionally explicit placeholders until source information is provided.</p></div>
          <div className="education-list">{portfolioContent.education.map((item, index) => <article key={index}><strong>{item.period}</strong><div><small>{item.category}</small><h3>{item.title}</h3><p>{item.organization}</p><p>{item.description}</p></div></article>)}</div>
        </PageContainer>
      </section>

      <section id="achievements" className="archive-section" aria-labelledby="achievements-title">
        <PageContainer>
          <SectionEyebrow index="07"><DecryptedLabel text="ACHIEVEMENTS / CERTIFICATIONS" /></SectionEyebrow>
          <div className="archive-section__heading"><h2 id="achievements-title">Selected<br /><span>archive.</span></h2><p>No achievements or certificates have been claimed. These slots are ready for verified records.</p></div>
          <div className="archive-grid">{portfolioContent.achievements.map((item, index) => <article key={index}><span>{String(index + 1).padStart(3, "0")}</span><strong>{item.period}</strong><h3>{item.title}</h3><p>{item.organization}</p><small>{item.detail}</small></article>)}</div>
        </PageContainer>
      </section>

      <section id="resume" className="resume-section" aria-labelledby="resume-title">
        <PageContainer className="resume-section__grid">
          <div><SectionEyebrow index="08"><DecryptedLabel text="FILE / RESUME" /></SectionEyebrow><h2 id="resume-title">My<br /><span>resume.</span></h2><p>A concise overview of education, experience, projects, and skills. The verified PDF has not been supplied yet.</p></div>
          <div className="resume-frame" aria-label="Resume file pending"><span>FILE / PDF</span><strong>[ RESUME PDF ]</strong><small>STATUS / AWAITING VERIFIED FILE</small></div>
        </PageContainer>
      </section>
    </>
  );
}
