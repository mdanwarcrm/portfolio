import type { PortfolioContent } from "@/types/portfolio";

// Replace placeholders only with verified resume or portfolio information.
export const portfolioContent = {
  site: { shortName: "DNK", year: 2026 },
  sections: [
    { id: "about", label: "About", eyebrow: "Who I am" },
    { id: "journey", label: "Journey", eyebrow: "The path so far" },
    { id: "work", label: "Work", eyebrow: "Selected projects" },
    { id: "skills", label: "Skills", eyebrow: "How I work" },
    { id: "experience", label: "Experience", eyebrow: "Professional profile" },
    { id: "education", label: "Education", eyebrow: "Academic foundation" },
    { id: "achievements", label: "Achievements", eyebrow: "Milestones" },
    { id: "resume", label: "Resume", eyebrow: "The concise version" },
    { id: "contact", label: "Contact", eyebrow: "Start a conversation" },
  ],
  projects: [
    { slug: "project-placeholder-01", name: "[ FEATURED PROJECT 01 ]", summary: "[ ADD VERIFIED PROJECT DESCRIPTION ]", role: "[ ADD CATEGORY ]", contribution: "[ ADD CONTRIBUTION ]", technologies: ["[ ADD TECHNOLOGY ]"], year: "[ ADD YEAR ]", status: "[ ADD STATUS ]" },
    { slug: "project-placeholder-02", name: "[ PROJECT 02 ]", summary: "[ ADD VERIFIED PROJECT DESCRIPTION ]", role: "[ ADD CATEGORY ]", contribution: "[ ADD CONTRIBUTION ]", technologies: ["[ ADD TECHNOLOGY ]"], year: "[ ADD YEAR ]", status: "[ ADD STATUS ]" },
    { slug: "project-placeholder-03", name: "[ PROJECT 03 ]", summary: "[ ADD VERIFIED PROJECT DESCRIPTION ]", role: "[ ADD CATEGORY ]", contribution: "[ ADD CONTRIBUTION ]", technologies: ["[ ADD TECHNOLOGY ]"], year: "[ ADD YEAR ]", status: "[ ADD STATUS ]" },
  ],
  journey: [
    { period: "[ DATE / YEAR ]", category: "Education", title: "[ ADD EDUCATION MILESTONE ]", organization: "[ ADD INSTITUTION ]", description: "[ Add a concise, verified account of this stage in the journey. ]", metadata: ["Archive / 001", "Status / Pending"] },
    { period: "[ DATE / YEAR ]", category: "Experience", title: "[ ADD PROFESSIONAL MILESTONE ]", organization: "[ ADD ORGANIZATION ]", description: "[ Add the verified role, responsibility, and contribution for this milestone. ]", metadata: ["Archive / 002", "Status / Pending"] },
    { period: "[ DATE / YEAR ]", category: "Technology", title: "[ ADD PROJECT / MILESTONE ]", organization: "[ ADD CONTEXT ]", description: "[ Add how this work shaped the current direction of the portfolio. ]", metadata: ["Archive / 003", "Status / Current"] },
  ],
  experience: [
    { period: "[ DURATION ]", category: "Role", title: "[ ADD ROLE ]", organization: "[ ADD ORGANIZATION ]", description: "[ ADD VERIFIED RESPONSIBILITIES AND KEY CONTRIBUTION ]" },
    { period: "[ DURATION ]", category: "Role", title: "[ ADD ROLE ]", organization: "[ ADD ORGANIZATION ]", description: "[ ADD VERIFIED RESPONSIBILITIES AND KEY CONTRIBUTION ]" },
  ],
  education: [
    { period: "[ YEAR ]", category: "Education", title: "[ ADD DEGREE / PROGRAM ]", organization: "[ ADD INSTITUTION / LOCATION ]", description: "[ ADD VERIFIED ACADEMIC DETAIL ]" },
  ],
  achievements: [
    { period: "[ YEAR ]", title: "[ ADD ACHIEVEMENT / CERTIFICATION ]", organization: "[ ADD ISSUER ]", detail: "[ ADD VERIFIED CATEGORY / DETAIL ]" },
    { period: "[ YEAR ]", title: "[ ADD ACHIEVEMENT / CERTIFICATION ]", organization: "[ ADD ISSUER ]", detail: "[ ADD VERIFIED CATEGORY / DETAIL ]" },
  ],
  socialLinks: [],
} satisfies PortfolioContent;
