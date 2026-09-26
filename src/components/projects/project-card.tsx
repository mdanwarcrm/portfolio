import Image from "next/image";
import type { Project } from "@/types/portfolio";
import { CometCard } from "@/components/effects/comet-card";
import { HalftoneImage } from "@/components/ui/halftone-image";
import { MetadataLabel } from "@/components/ui/metadata-label";

interface ProjectCardProps { project: Project; index: number; featured?: boolean; }

export function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  const className = `project-card cursor-target${featured ? " project-card--featured" : ""}`;
  const content = (
    <>
      <div className="project-card__caption">
        <MetadataLabel label="No." value={String(index + 1).padStart(2, "0")} accent />
        <MetadataLabel label="Project" value={project.name} />
        <MetadataLabel label="Year" value={project.year ?? "[ ADD YEAR ]"} />
        <MetadataLabel label="Status" value={project.status ?? "[ ADD STATUS ]"} />
      </div>
      <HalftoneImage interactive className="project-card__visual" aria-label={`${project.name} interface concept visual`}>
        {project.image ? <Image src={project.image} alt={`${project.name} product interface concept`} fill loading="eager" sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 42vw"} /> : <span>[ PROJECT IMAGE ]</span>}
        <span className="project-card__index">{String(index + 1).padStart(3, "0")}</span>
      </HalftoneImage>
      <div className="project-card__content">
        <p className="project-card__meta"><span>Project / {String(index + 1).padStart(3, "0")}</span><span>{project.role}</span></p>
        <h3>{project.name}</h3><span className="project-card__underline" aria-hidden="true" />
        <p>{project.summary}</p>
        <ul aria-label="Project technologies">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
      </div>
    </>
  );

  return featured ? <CometCard className={className}>{content}</CometCard> : <article className={className}>{content}</article>;
}
