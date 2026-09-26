from pathlib import Path
import shutil

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    BaseDocTemplate, Frame, Image, KeepTogether, PageBreak, PageTemplate,
    Paragraph, Spacer, Table, TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "resume"
OUT.mkdir(parents=True, exist_ok=True)
PDF = OUT / "Dindi-Narendra-Kumar-Madala-Resume.pdf"
PORTRAIT = OUT / "portrait-resume.png"

NAVY = colors.HexColor("#102A43")
INK = colors.HexColor("#18212B")
MUTED = colors.HexColor("#52606D")
GREEN = colors.HexColor("#00875A")
PALE = colors.HexColor("#EAF7F1")
LINE = colors.HexColor("#D9E2EC")


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Kicker", fontName="Helvetica-Bold", fontSize=7.2, leading=8.5, textColor=GREEN, spaceAfter=4, uppercase=True))
styles.add(ParagraphStyle(name="Name", fontName="Helvetica-Bold", fontSize=25, leading=23, textColor=NAVY, spaceAfter=5))
styles.add(ParagraphStyle(name="Role", fontName="Helvetica-Bold", fontSize=7.8, leading=10, textColor=GREEN, spaceAfter=6))
styles.add(ParagraphStyle(name="Contact", fontName="Helvetica", fontSize=7.7, leading=10, textColor=MUTED))
styles.add(ParagraphStyle(name="Section", fontName="Helvetica-Bold", fontSize=7.4, leading=9, textColor=GREEN, spaceBefore=7, spaceAfter=4))
styles.add(ParagraphStyle(name="PageTitle", fontName="Helvetica-Bold", fontSize=21, leading=23, textColor=NAVY, spaceAfter=4))
styles.add(ParagraphStyle(name="Intro", fontName="Helvetica", fontSize=8.7, leading=11.2, textColor=MUTED, spaceAfter=8))
styles.add(ParagraphStyle(name="Body", fontName="Helvetica", fontSize=8.6, leading=11.1, textColor=INK, spaceAfter=4))
styles.add(ParagraphStyle(name="Small", fontName="Helvetica", fontSize=7.5, leading=9.4, textColor=MUTED, spaceAfter=3))
styles.add(ParagraphStyle(name="Tiny", fontName="Helvetica", fontSize=6.8, leading=8.3, textColor=MUTED, spaceAfter=2))
styles.add(ParagraphStyle(name="H3", fontName="Helvetica-Bold", fontSize=10.2, leading=12, textColor=NAVY, spaceAfter=1))
styles.add(ParagraphStyle(name="Meta", fontName="Helvetica-Bold", fontSize=7.0, leading=8.5, textColor=GREEN, spaceAfter=3))
styles.add(ParagraphStyle(name="ResumeBullet", fontName="Helvetica", fontSize=8.0, leading=10, textColor=INK, leftIndent=8, firstLineIndent=-6, bulletIndent=0, spaceAfter=2))
styles.add(ParagraphStyle(name="LabTitle", fontName="Helvetica-Bold", fontSize=8.4, leading=9.7, textColor=NAVY, spaceAfter=2))
styles.add(ParagraphStyle(name="CapTitle", fontName="Helvetica-Bold", fontSize=7.2, leading=8.5, textColor=GREEN, spaceAfter=1))


def P(text, style="Body"):
    return Paragraph(text, styles[style])


def header_footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica-Bold", 6.7)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(A4[0] - 15 * mm, A4[1] - 8 * mm, f"DNKM  /  PROFESSIONAL RESUME  /  {doc.page:02d} / 03")
    canvas.setFont("Helvetica-Bold", 6.3)
    canvas.drawCentredString(A4[0] / 2, 7 * mm, "DINDI NARENDRA KUMAR MADALA  |  INDIA  |  2026")
    canvas.restoreState()


def section(kicker, title, intro):
    return [P(kicker.upper(), "Kicker"), P(title, "PageTitle"), P(intro, "Intro")]


def experience(period, role, location, body, bullets):
    content = [P(role, "H3"), P(f"{period.upper()}  |  {location.upper()}", "Meta"), P(body, "Small")]
    content.extend(P(f"<font color='#00875A'>•</font>  {bullet}", "ResumeBullet") for bullet in bullets)
    content.append(Spacer(1, 2 * mm))
    return content


def project(number, name, status, role, summary, contribution, technologies):
    left = P(f"<b>{number:02d}</b>", "H3")
    right = [P(f"<b>{name}</b>  <font size='7' color='#00875A'><b>{status.upper()}</b></font>", "H3"),
             P(f"<b>{role}</b>  |  {technologies}", "Tiny"),
             P(f"{summary} <b>Contribution:</b> {contribution}", "Small")]
    table = Table([[left, right]], colWidths=[13 * mm, 158 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (0, 0), PALE), ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ALIGN", (0, 0), (0, 0), "CENTER"), ("LEFTPADDING", (0, 0), (0, 0), 4),
        ("RIGHTPADDING", (0, 0), (0, 0), 4), ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6), ("LEFTPADDING", (1, 0), (1, 0), 10),
        ("LINEBELOW", (0, 0), (-1, 0), 0.5, LINE),
    ]))
    return KeepTogether([table, Spacer(1, 2.2 * mm)])


def lab(number, name, status, description, features):
    return [P(f"<font color='#00875A'>{number:02d}</font>  {name}  <font size='6.5' color='#00875A'>{status.upper()}</font>", "LabTitle"),
            P(description, "Tiny"), P(" / ".join(features), "Tiny")]


def build():
    doc = BaseDocTemplate(str(PDF), pagesize=A4, rightMargin=15 * mm, leftMargin=15 * mm,
                          topMargin=15 * mm, bottomMargin=13 * mm,
                          title="Professional Resume and Project Portfolio - Dindi Narendra Kumar Madala",
                          author="Dindi Narendra Kumar Madala",
                          subject="Experience, projects, skills, education, and professional profile")
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")
    doc.addPageTemplates([PageTemplate(id="resume", frames=frame, onPage=header_footer)])
    story = []

    identity = [P("PROFESSIONAL RESUME AND PROJECT PORTFOLIO", "Kicker"),
                P("DINDI NARENDRA<br/>KUMAR MADALA", "Name"),
                P("ENTREPRENEUR  /  TECHNOLOGY PROFESSIONAL  /  SYSTEM BUILDER", "Role"),
                P("+91 85208 46598  |  ceo@bdits.in<br/><link href='https://github.com/mdanwarcrm/portfolio' color='#00875A'>github.com/mdanwarcrm/portfolio</link>", "Contact")]
    portrait = Image(str(PORTRAIT), width=39 * mm, height=48 * mm)
    hero = Table([[identity, portrait]], colWidths=[132 * mm, 43 * mm])
    hero.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("LEFTPADDING", (0, 0), (-1, -1), 0),
                              ("RIGHTPADDING", (0, 0), (0, 0), 7), ("RIGHTPADDING", (1, 0), (1, 0), 0)]))
    story += [hero, Spacer(1, 3 * mm), P("PROFESSIONAL PROFILE", "Section"),
              P("India-based entrepreneur and technology professional with experience spanning family transport operations, network engineering, security analysis, and digital product development. Worked across United Kingdom client environments from 2018 to 2022 and has focused on India-based entrepreneurship since January 2023. Builds practical systems around real operational needs across CRM, education, finance, billing, retail, commerce, automation, and analytics.", "Body")]

    main = [P("PROFESSIONAL EXPERIENCE", "Section")]
    main += experience("Jan 2023 - Present", "Entrepreneur - Digital Products and Business Platforms", "India", "Developing technology-driven business solutions across overseas education, CRM, finance, billing, retail, and e-commerce.", ["Translate operational requirements into structured product workflows and interfaces.", "Lead product strategy, workflow design, automation thinking, and practical delivery across six featured platforms and nine applied labs."])
    main += experience("Feb 2018 - Feb 2022", "Network Engineer and Security Analyst", "United Kingdom", "Supported network infrastructure and security operations across multiple UK client environments.", ["Worked across Silver Chip, Motor Fuel Group, BP, Londis, Monzo Bank, and Salford Shopping Centre environments.", "Focused on monitoring, infrastructure support, troubleshooting, risk awareness, technical investigation, and service reliability."])
    main += experience("2014 - 2018", "Business Operations - Family Transport Business", "India", "Built an operational foundation through hands-on involvement with logistics, lorries, JCBs, and heavy-vehicle activity.", ["Supported coordination, maintenance awareness, day-to-day problem solving, and responsibility in real operating conditions."])
    side = [P("CORE EXPERTISE", "Section")]
    for item in ["Entrepreneurship and product strategy", "Network engineering and operations", "Cyber security analysis", "CRM and workflow systems", "Web applications and dashboards", "AI-assisted automation", "Business operations"]:
        side.append(P(f"<font color='#00875A'>•</font> {item}", "Small"))
    side += [P("EDUCATION", "Section"), P("<b>B.Tech</b><br/>Information Technology", "Small"),
             P("<b>Intermediate - MPC</b><br/>Mathematics, Physics, Chemistry", "Small"),
             P("<b>Secondary Education</b><br/>10th Class", "Small"),
             P("UK CLIENT ENVIRONMENTS", "Section"),
             P("Silver Chip / Motor Fuel Group / BP / Londis / Monzo Bank / Salford Shopping Centre", "Tiny")]
    body_table = Table([[main, side]], colWidths=[119 * mm, 56 * mm])
    body_table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (0, 0), 0),
                                    ("RIGHTPADDING", (0, 0), (0, 0), 8), ("LEFTPADDING", (1, 0), (1, 0), 8),
                                    ("RIGHTPADDING", (1, 0), (1, 0), 0), ("LINEBEFORE", (1, 0), (1, 0), 0.6, LINE)]))
    story += [body_table, PageBreak()]

    story += section("Selected work", "Featured product portfolio", "Six platform concepts and active builds shaped around real business workflows. Status labels describe the portfolio state shown on the website.")
    projects = [
        ("Nidhi Path", "Active", "Product and Systems", "A role-aware loan operations platform that unifies lead, case, document, and communication workflows.", "Product strategy, operations modelling, interface direction, and implementation.", "Next.js / Supabase / TypeScript / Operations"),
        ("Haneeva Overseas", "In development", "CRM Platform", "An overseas education CRM for student counselling, follow-ups, applications, and team ownership.", "Workflow architecture, lead lifecycle design, dashboard systems, and product direction.", "CRM / Automation / Analytics / Web App"),
        ("Aadya Overseas", "Prototype", "Discovery Platform", "A university discovery experience for comparing programs, destinations, eligibility, and application routes.", "Information architecture, search experience, decision flows, and interface direction.", "Search / Data / UX Systems / Next.js"),
        ("Aaryan Overseas", "Concept", "Service Platform", "A digital education-consulting journey from first enquiry through counselling, documents, and application progress.", "Journey mapping, service design, web experience, and operational structure.", "Service Design / CRM / Content / Automation"),
        ("Coffee Shop CRM and Billing", "Prototype", "Operations System", "A compact system combining billing, customer history, loyalty, stock visibility, and daily performance.", "POS workflows, customer model, reporting logic, and product design.", "POS / CRM / Inventory / Analytics"),
        ("E-Commerce Platform", "Concept", "Commerce Platform", "A modular storefront and operations dashboard focused on discovery, checkout, fulfilment, and customer insight.", "Commerce flows, design system, catalogue structure, and dashboard direction.", "Commerce / Next.js / Payments / Analytics"),
    ]
    for index, item in enumerate(projects, 1):
        story.append(project(index, *item))
    story += [P("PORTFOLIO SCOPE", "Section"), P("These projects demonstrate product thinking across finance operations, overseas education, hospitality, retail, and digital commerce. They are presented with transparent portfolio status labels rather than unsupported commercial outcome claims.", "Small"), PageBreak()]

    story += section("Applied experimentation", "Technology labs and capabilities", "Nine focused labs extend the product portfolio into AI, automation, infrastructure monitoring, security operations, and business systems.")
    labs = [
        ("AI Document Intelligence", "Lab", "Extract, summarize, search, and question complex documents.", ["PDF upload", "Semantic search", "Q&A", "Structured extraction"]),
        ("ATS Resume Analyzer", "Lab", "Evaluate ATS compatibility, keywords, structure, and role alignment.", ["ATS scoring", "Keyword matching", "Section analysis", "Recommendations"]),
        ("University Course Discovery", "Concept", "Research courses, fees, requirements, and verified official sources.", ["Course search", "Official links", "Fee tracking", "Comparison"]),
        ("AI Customer Support Desk", "Lab", "Organize customer questions with assisted replies and escalation workflows.", ["Support inbox", "AI suggestions", "Knowledge base", "Analytics"]),
        ("Smart Lead Assignment Engine", "Lab", "Balance and route CRM leads through automated and manual assignment.", ["Round robin", "Bulk import", "Assignment history", "Workload balance"]),
        ("Fleet Operations Dashboard", "Concept", "Coordinate vehicle records, maintenance, costs, reminders, and status.", ["Vehicle records", "Fuel logs", "Maintenance", "Fleet analytics"]),
        ("Network Operations Monitor", "Lab", "Visualize infrastructure health, device activity, uptime, and incidents.", ["Device inventory", "Uptime", "Topology", "Alerts"]),
        ("Cyber Security Incident Dashboard", "Lab", "Track simulated security events from severity through response.", ["Event queue", "Severity", "Timeline", "Response status"]),
        ("Business Operations CRM", "Concept", "Unify customers, enquiries, follow-ups, tasks, notes, and reporting.", ["Customers", "Tasks", "Activity history", "Reports"]),
    ]
    lab_rows = []
    for row in range(5):
        cells = []
        for col in range(2):
            idx = row * 2 + col
            cells.append(lab(idx + 7, *labs[idx]) if idx < len(labs) else "")
        lab_rows.append(cells)
    lab_table = Table(lab_rows, colWidths=[87.5 * mm, 87.5 * mm])
    lab_table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 6),
                                   ("RIGHTPADDING", (0, 0), (-1, -1), 6), ("TOPPADDING", (0, 0), (-1, -1), 6),
                                   ("BOTTOMPADDING", (0, 0), (-1, -1), 6), ("LINEBELOW", (0, 0), (-1, -2), 0.5, LINE)]))
    story += [lab_table, P("CAPABILITIES AND TECHNOLOGIES", "Section")]
    caps = [
        ("BUSINESS", "Entrepreneurship / operations / product strategy / requirements / process design / digital transformation"),
        ("NETWORKS", "Engineering / operations / infrastructure support / troubleshooting / connectivity / reliability"),
        ("CYBER SECURITY", "Security analysis / monitoring / risk awareness / investigation / incident review / infrastructure security"),
        ("SOFTWARE", "Web applications / CRM / billing / e-commerce / dashboards / workflow automation"),
        ("TECHNOLOGIES", "React / Next.js / TypeScript / Tailwind CSS / Node.js / Supabase / Python / PostgreSQL / REST APIs / GitHub"),
        ("AI AND AUTOMATION", "AI workflows / LLM integration / prompt engineering / document processing / AI-assisted CRM"),
    ]
    cap_rows = [[ [P(caps[r*2][0], "CapTitle"), P(caps[r*2][1], "Tiny")], [P(caps[r*2+1][0], "CapTitle"), P(caps[r*2+1][1], "Tiny")] ] for r in range(3)]
    cap_table = Table(cap_rows, colWidths=[87.5 * mm, 87.5 * mm])
    cap_table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 5),
                                   ("RIGHTPADDING", (0, 0), (-1, -1), 5), ("TOPPADDING", (0, 0), (-1, -1), 3),
                                   ("BOTTOMPADDING", (0, 0), (-1, -1), 3)]))
    story += [cap_table, Spacer(1, 3 * mm), P("<b><font color='#00875A'>CONTACT</font></b>  ceo@bdits.in  |  +91 85208 46598  |  <link href='https://github.com/mdanwarcrm/portfolio' color='#00875A'>github.com/mdanwarcrm/portfolio</link>", "Contact")]
    doc.build(story)
    shutil.copy2(PDF, ROOT / "public" / "resume.pdf")
    print(PDF)


if __name__ == "__main__":
    build()
