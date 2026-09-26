import type { Project } from "@/types/portfolio";
import { ProjectCard } from "./project-card";

interface BentoProjectsProps { projects: Project[]; }

export function BentoProjects({ projects }: BentoProjectsProps) {
  return <div className="projects-bento">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} featured={index === 0} />)}</div>;
}
