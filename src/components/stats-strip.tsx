import { PageContainer } from "./ui/page-container";

const pendingMetrics = [
  "[ ADD EXPERIENCE ]",
  "[ ADD PROJECTS ]",
  "[ ADD TECHNOLOGIES ]",
  "[ ADD CERTIFICATIONS ]",
];

export function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="Portfolio metrics pending verification">
      <PageContainer className="stats-strip__grid">
        {pendingMetrics.map((label) => (
          <div className="stats-strip__item" key={label}>
            <strong aria-label="Value pending">—</strong>
            <span>{label}</span>
          </div>
        ))}
      </PageContainer>
    </section>
  );
}
