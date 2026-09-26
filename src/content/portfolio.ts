import type { PortfolioContent } from "@/types/portfolio";
import { education } from "@/data/education";
import { experience } from "@/data/experience";

export const portfolioContent = {
  site: { shortName: "DNKM", year: 2026 },
  sections: [
    { id: "about", label: "About", eyebrow: "Who I am" },
    { id: "journey", label: "Journey", eyebrow: "The path so far" },
    { id: "work", label: "Work", eyebrow: "Selected projects" },
    { id: "skills", label: "Skills", eyebrow: "How I work" },
    { id: "experience", label: "Experience", eyebrow: "Professional profile" },
    { id: "education", label: "Education", eyebrow: "Academic foundation" },
    { id: "achievements", label: "Highlights", eyebrow: "Selected outcomes" },
    { id: "resume", label: "Resume", eyebrow: "The concise version" },
    { id: "contact", label: "Contact", eyebrow: "Start a conversation" },
  ],
  projects: [
    { slug: "nidhi-path", name: "Nidhi Path", summary: "A role-aware loan operations platform that turns complex lead, case, document, and communication workflows into one focused system.", role: "Product & Systems", contribution: "Product strategy, operations modelling, interface direction, and implementation.", technologies: ["Next.js", "Supabase", "TypeScript", "Operations"], image: "/images/portfolio/project-nidhi-path.png", year: "2026", status: "Active" },
    { slug: "haneeva-overseas", name: "Haneeva Overseas", summary: "An overseas education CRM designed to make student counselling, follow-ups, applications, and team ownership visible end to end.", role: "CRM Platform", contribution: "Workflow architecture, lead lifecycle design, dashboard systems, and product direction.", technologies: ["CRM", "Automation", "Analytics", "Web App"], image: "/images/portfolio/project-haneeva-overseas.png", year: "2026", status: "In development" },
    { slug: "aadya-overseas", name: "Aadya Overseas", summary: "A university discovery experience that helps students compare programs, destinations, eligibility, and application routes with less friction.", role: "Discovery Platform", contribution: "Information architecture, search experience, decision flows, and interface direction.", technologies: ["Search", "Data", "UX Systems", "Next.js"], image: "/images/portfolio/project-aadya-overseas.png", year: "2026", status: "Prototype" },
    { slug: "aaryan-overseas", name: "Aaryan Overseas", summary: "A clear digital journey for education consulting—from first enquiry through counselling, documentation, and application progress.", role: "Service Platform", contribution: "Journey mapping, service design, web experience, and operational structure.", technologies: ["Service Design", "CRM", "Content", "Automation"], image: "/images/portfolio/project-aaryan-overseas.png", year: "2026", status: "Concept" },
    { slug: "coffee-shop-crm", name: "Coffee Shop CRM & Billing", summary: "A compact operations system combining billing, customer history, loyalty, stock visibility, and daily performance for a busy café.", role: "Operations System", contribution: "POS workflows, customer model, reporting logic, and product design.", technologies: ["POS", "CRM", "Inventory", "Analytics"], image: "/images/portfolio/project-coffee-crm.png", year: "2026", status: "Prototype" },
    { slug: "ecommerce-platform", name: "E-Commerce Platform", summary: "A modular storefront and operations dashboard built around product discovery, checkout clarity, fulfilment, and customer insight.", role: "Commerce Platform", contribution: "Commerce flows, design system, catalogue structure, and dashboard direction.", technologies: ["Commerce", "Next.js", "Payments", "Analytics"], image: "/images/portfolio/project-ecommerce.png", year: "2026", status: "Concept" },
  ],
  journey: [
    { period: "2016—2019", category: "Operations", title: "Learning systems in motion", organization: "Transport operations", description: "Built an early understanding of logistics, responsibility, coordination, and how real-world systems behave under pressure.", metadata: ["Phase / 01", "Foundation"] },
    { period: "2019—2021", category: "Networks", title: "From operations to infrastructure", organization: "Networking & technical support", description: "Moved closer to technology through network fundamentals, troubleshooting, infrastructure, and service continuity.", metadata: ["Phase / 02", "Technical depth"] },
    { period: "2021—2023", category: "Cyber Security", title: "Thinking in risks and controls", organization: "Security learning & practice", description: "Developed a security-first mindset: observe systems, understand attack surfaces, reduce risk, and document clearly.", metadata: ["Phase / 03", "Security mindset"] },
    { period: "2023—Now", category: "Entrepreneurship", title: "Building digital products", organization: "India", description: "Building India-based ventures by combining operational experience, technology, and business thinking to create practical products for real problems.", metadata: ["Phase / 04", "Current"] },
  ],
  experience,
  education,
  achievements: [
    { period: "15", title: "Product concepts", organization: "Portfolio laboratory", detail: "Six featured platforms and nine applied product experiments." },
    { period: "4", title: "Operating domains", organization: "Operations to products", detail: "Transport, networks, cyber security, and digital ventures." },
    { period: "1", title: "Systems mindset", organization: "Every engagement", detail: "Understand the problem, structure the workflow, then build." },
  ],
  socialLinks: [
    { label: "Email", href: "mailto:ceo@bdits.in" },
    { label: "GitHub", href: "https://github.com/mdanwarcrm/portfolio" },
    { label: "Phone", href: "tel:+918520846598" },
  ],
} satisfies PortfolioContent;
