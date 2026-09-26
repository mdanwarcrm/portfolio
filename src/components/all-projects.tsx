import { portfolioContent } from "@/content/portfolio";
import { labProjects } from "@/data/projects";
import { DecryptedLabel } from "./effects/decrypted-label";
import { PageContainer } from "./ui/page-container";
import { SectionEyebrow } from "./ui/section-eyebrow";

export function AllProjects() {
  return <section className="all-projects" aria-labelledby="all-projects-title"><PageContainer>
    <SectionEyebrow index="04"><DecryptedLabel text="ARCHIVE / ALL PROJECTS" /></SectionEyebrow>
    <div className="all-projects__heading"><h2 id="all-projects-title">15 projects.<br /><span>One laboratory.</span></h2><p>Professional platforms meet focused experiments in AI, infrastructure, security, operations, and automation.</p></div>
    <h3 className="project-group-title">Professional projects</h3>
    <div className="professional-index">{portfolioContent.projects.map((project, index) => <article key={project.slug}><span>PROJECT / {String(index + 1).padStart(3, "0")}</span><b>{project.name}</b><small>STATUS / {project.status?.toUpperCase()}</small></article>)}</div>
    <h3 className="project-group-title">Labs / experiments</h3>
    <div className="labs-grid">{labProjects.map((project, index) => <article key={project.name}><div><span>LAB / {String(index + 7).padStart(3, "0")}</span><small>STATUS / {project.status.toUpperCase()}</small></div><h4>{project.name}</h4><p>{project.description}</p><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></article>)}</div>
  </PageContainer></section>;
}
