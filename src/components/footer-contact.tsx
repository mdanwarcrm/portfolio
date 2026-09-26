import { DecryptedLabel } from "./effects/decrypted-label";
import { PageContainer } from "./ui/page-container";
import { SectionLabel } from "./ui/section-label";

const pendingLinks = ["[ ADD EMAIL ]", "[ ADD LINKEDIN ]", "[ ADD GITHUB ]", "[ ADD LOCATION ]"];

export function FooterContact() {
  return (
    <footer id="contact" className="contact-footer">
      <PageContainer>
        <SectionLabel index="09"><DecryptedLabel text="CONTACT / NEXT CHAPTER" /></SectionLabel>
        <div className="contact-footer__grid">
          <h2>Let&apos;s create<br /><span>something</span><br />meaningful.</h2>
          <div className="contact-footer__links" aria-label="Contact details pending">
            <p>Verified contact details have not been supplied. Available links will activate when confirmed.</p>
            {pendingLinks.map((label) => <span key={label}>{label}<i aria-hidden="true">↗</i></span>)}
          </div>
        </div>
        <div className="contact-footer__bottom"><span>DNK / Portfolio / 2026</span><span>Built with intention.</span></div>
      </PageContainer>
    </footer>
  );
}
