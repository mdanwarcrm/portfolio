export interface NarrationChapter {
  id: string;
  label: string;
  section: string;
  text: string;
}

export const narrationChapters: NarrationChapter[] = [
  { id: "intro", label: "Introduction", section: "top", text: "Hello, I'm Dindi Narendra Kumar Madala. My professional journey has taken me through business operations, network engineering, cyber security, entrepreneurship, and digital product development." },
  { id: "operations", label: "Business Operations", section: "journey", text: "My journey began with hands-on involvement in my family's transport business, where I gained practical exposure to operations involving lorries, JCBs, and heavy vehicles." },
  { id: "uk", label: "UK Technology Experience", section: "experience", text: "I later moved to the United Kingdom, where I worked in network engineering and cyber security environments between 2018 and 2022, supporting multiple client environments." },
  { id: "clients", label: "Client Environments", section: "clients", text: "These environments included Silver Chip, Motor Fuel Group, BP, Londis, Monzo Bank, and Salford Shopping Centre." },
  { id: "entrepreneurship", label: "Entrepreneurship", section: "journey", text: "Since January 2023, I have focused on entrepreneurship and developing technology-driven business solutions across overseas education, CRM systems, finance, billing, retail, and e-commerce." },
  { id: "projects", label: "Digital Products", section: "work", text: "Some of the platforms featured in this portfolio include Nidhi Path, Haneeva Overseas, Aadya Overseas, Aaryan Overseas, a Coffee Shop CRM and Billing System, and an e-commerce platform." },
  { id: "philosophy", label: "Approach", section: "about", text: "My approach to technology is simple: understand the real problem first, then build a system that solves it effectively." },
  { id: "closing", label: "The Journey", section: "contact", text: "My journey has taken me from operations, to networks, to cyber security, and finally to building digital products. This portfolio represents that journey. Thank you for exploring my work." },
];

export const narrationTranscript = narrationChapters.map((chapter) => chapter.text).join("\n\n");
