"use client";

import { useEffect, useState } from "react";
import { portfolioContent } from "@/content/portfolio";
import { AnimatedLink } from "./ui/animated-link";
import { PageContainer } from "./ui/page-container";

const visibleSections = new Set(["about", "journey", "work", "skills", "resume"]);
const navigationLinks = portfolioContent.sections.filter((section) => visibleSections.has(section.id));

export function SiteNavigation() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = ["top", ...navigationLinks.map((link) => link.id)].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActive(visible.target.id);
    }, { rootMargin: "-28% 0px -58%", threshold: [0, 0.15, 0.4] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-nav">
      <PageContainer className="site-nav__inner">
        <a className="wordmark cursor-target" href="#top" aria-label="Go to the top of the portfolio">{portfolioContent.site.shortName}<span>.</span></a>
        <nav aria-label="Primary navigation">
          {navigationLinks.map((section) => <AnimatedLink className={`cursor-target${active === section.id ? " is-active" : ""}`} aria-current={active === section.id ? "location" : undefined} key={section.id} href={`#${section.id}`}>{section.label}</AnimatedLink>)}
        </nav>
        <a className="contact-link cursor-target" href="#contact">Contact <span aria-hidden="true">↗</span></a>
      </PageContainer>
    </header>
  );
}
