export type SectionId = "about" | "journey" | "work" | "skills" | "experience" | "education" | "achievements" | "resume" | "contact";

export interface PortfolioSection { id: SectionId; label: string; eyebrow: string; }
export interface SocialLink { label: string; href: string; }
export interface Project {
  slug: string; name: string; summary: string; role: string; contribution: string;
  technologies: string[]; image?: string; liveUrl?: string; repositoryUrl?: string; year?: string; status?: string;
}
export interface TimelineEntry { period: string; category: string; title: string; organization?: string; description: string; metadata?: string[]; }
export interface ArchiveEntry { period: string; title: string; organization: string; detail: string; }
export interface PortfolioContent {
  site: { shortName: string; year: number };
  sections: PortfolioSection[];
  projects: Project[];
  journey: TimelineEntry[];
  experience: TimelineEntry[];
  education: TimelineEntry[];
  achievements: ArchiveEntry[];
  socialLinks: SocialLink[];
}
