import { clients } from "@/data/clients";
import { highlights } from "@/data/highlights";
import { DecryptedLabel } from "./effects/decrypted-label";
import { PageContainer } from "./ui/page-container";
import { SectionEyebrow } from "./ui/section-eyebrow";

export function ClientsHighlights() {
  return <>
    <section className="clients-section" aria-labelledby="clients-title"><PageContainer>
      <SectionEyebrow index="10"><DecryptedLabel text="SELECTED / CLIENT ENVIRONMENTS" /></SectionEyebrow>
      <h2 id="clients-title">Client<br /><span>environments.</span></h2>
      <div className="clients-grid">{clients.map((client, index) => <article key={client.name}><span>CLIENT / {String(index + 1).padStart(2, "0")}</span><h3>{client.name}</h3><small>{client.category}</small></article>)}</div>
    </PageContainer></section>
    <section className="highlights-strip" aria-label="Professional highlights"><PageContainer className="highlights-strip__grid">{highlights.map(item => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</PageContainer></section>
  </>;
}
