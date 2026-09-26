import { DecryptedLabel } from "./effects/decrypted-label";
import { PageContainer } from "./ui/page-container";
import { SectionLabel } from "./ui/section-label";

const contactLinks = [
  { label: "ceo@bdits.in", href: "mailto:ceo@bdits.in" },
  { label: "+91 85208 46598", href: "tel:+918520846598" },
  { label: "GitHub / mdanwarcrm", href: "https://github.com/mdanwarcrm/portfolio" },
];

export function FooterContact() {
  return (
    <footer id="contact" className="contact-footer">
      <PageContainer>
        <SectionLabel index="09"><DecryptedLabel text="CONTACT / NEXT CHAPTER" /></SectionLabel>
        <div className="contact-footer__grid">
          <h2>Let&apos;s create<br /><span>something</span><br />meaningful.</h2>
          <div className="contact-footer__links" aria-label="Contact details">
            <p>Have a real operational challenge or a product idea? Let&apos;s turn it into a system that works.</p>
            {contactLinks.map((link) => <a className="cursor-target" key={link.label} href={link.href}>{link.label}<i aria-hidden="true">↗</i></a>)}
          </div>
        </div>
        <div className="contact-footer__bottom"><span>DNKM / Portfolio / 2026</span><span>Built for real problems.</span></div>
      </PageContainer>
    </footer>
  );
}
