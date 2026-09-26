export interface LabProject { name: string; description: string; features: string[]; status: "Lab" | "Concept"; }

export const labProjects: LabProject[] = [
  { name: "AI Document Intelligence", description: "Extract, summarize, search, and question complex documents through one AI workspace.", features: ["PDF upload", "Semantic search", "Q&A", "Structured extraction"], status: "Lab" },
  { name: "ATS Resume Analyzer", description: "Evaluate ATS compatibility, keyword relevance, structure, and role alignment.", features: ["ATS scoring", "Keyword matching", "Section analysis", "Recommendations"], status: "Lab" },
  { name: "University Course Discovery", description: "Research courses, fees, requirements, and verified official university sources.", features: ["Course search", "Official links", "Fee tracking", "Comparison"], status: "Concept" },
  { name: "AI Customer Support Desk", description: "Organize customer questions with assisted replies, priorities, and escalation workflows.", features: ["Support inbox", "AI suggestions", "Knowledge base", "Analytics"], status: "Lab" },
  { name: "Smart Lead Assignment Engine", description: "Balance and route CRM leads through automated and manual assignment workflows.", features: ["Round robin", "Bulk import", "Assignment history", "Workload balance"], status: "Lab" },
  { name: "Fleet Operations Dashboard", description: "Coordinate heavy-vehicle records, maintenance, costs, reminders, and operating status.", features: ["Vehicle records", "Fuel logs", "Maintenance", "Fleet analytics"], status: "Concept" },
  { name: "Network Operations Monitor", description: "Visualize infrastructure health, device activity, uptime, alerts, and incidents.", features: ["Device inventory", "Uptime", "Topology", "Alerts"], status: "Lab" },
  { name: "Cyber Security Incident Dashboard", description: "Track simulated security events from severity scoring through investigation and response.", features: ["Event queue", "Severity", "Timeline", "Response status"], status: "Lab" },
  { name: "Business Operations CRM", description: "Unify customers, enquiries, follow-ups, tasks, notes, and reporting for growing businesses.", features: ["Customers", "Tasks", "Activity history", "Reports"], status: "Concept" },
];
