import { Link } from 'react-router-dom';
import SectionReveal from '../../components/SectionReveal/SectionReveal.jsx';
import styles from './Services.module.css';

const SERVICES = [
  {
    id: 'pm',
    tag: '01',
    title: 'Project & Program Management',
    problem:
      'Organizations lose time and money to missed deadlines, scope creep, and disconnected teams. Without dedicated project leadership, even well-funded initiatives stall.',
    solution:
      'HarmoNext provides embedded project and program management leadership — structured around Agile and SAFe frameworks. We own delivery accountability from kickoff to closure, keeping stakeholders aligned and teams executing.',
    outcomes: [
      'On-time delivery across complex, multi-workstream projects',
      'Transparent status reporting and stakeholder communication',
      'Reduced scope creep through disciplined change management',
      'Clearly defined RACI frameworks and decision trees',
      'Sprint-level velocity tracking with predictive delivery forecasting',
    ],
    callout: {
      label: 'Client Impact',
      text: 'A government agency reduced average project overrun from 40% to under 8% within two PI cycles after HarmoNext took over program management.',
    },
  },
  {
    id: 'agile',
    tag: '02',
    title: 'Agile Transformation & Coaching',
    problem:
      'Many organizations want to be agile but lack the cultural buy-in, framework knowledge, and ongoing coaching to make it stick. Agile in name only is worse than not doing it at all.',
    solution:
      'We guide teams through real Agile adoption — from initial training and role definition to full SAFe implementation at the program or portfolio level. We don\'t just certify your teams; we coach them through execution.',
    outcomes: [
      'Faster sprint cadence and improved team velocity',
      'PI Planning facilitation across multiple Agile Release Trains',
      'Scrum Master and RTE coaching and mentorship',
      'Backlog health and grooming practices that actually hold',
      'SAFe implementation readiness assessments and roadmaps',
    ],
    callout: {
      label: 'Transformation Snapshot',
      text: 'One e-commerce client went from 6-month waterfall releases to bi-weekly deployments within one quarter of working with HarmoNext.',
    },
  },
  {
    id: 'engineering',
    tag: '03',
    title: 'Product Development & Engineering',
    problem:
      'Building the right product requires more than good developers. It requires aligning technical execution with business strategy — and most teams lack the bridge between the two.',
    solution:
      'Our engineering team designs and delivers technology solutions with product discipline built in. We work across the full stack — from architecture and APIs to front-end experience — and we lead with a product mindset.',
    outcomes: [
      'MVPs designed, built, and shipped on schedule',
      'Scalable, maintainable architecture from day one',
      'Cross-functional team alignment across design, engineering, and product',
      'Code quality standards and peer review processes',
      'Technology selection guidance aligned to long-term roadmap',
    ],
    callout: {
      label: 'Featured Build',
      text: 'HarmoNext engineered Fabel — an AI Operating System for creators — from product concept to market-ready MVP in 14 weeks.',
    },
  },
  {
    id: 'ba',
    tag: '04',
    title: 'Business Analysis & Requirements',
    problem:
      'Unclear or incomplete requirements are the #1 driver of costly rework. If engineering doesn\'t know exactly what they\'re building — or why — the output won\'t match the expectation.',
    solution:
      'Our business analysts embed with your stakeholders to surface, document, and validate requirements before a single line of code is written. We write user stories with real acceptance criteria — not vague wish lists.',
    outcomes: [
      'Clear, prioritized user stories with defined acceptance criteria',
      'Gap analysis between current-state and desired-state systems',
      'Process mapping and workflow documentation',
      'Stakeholder alignment workshops and sign-off protocols',
      'Requirements traceability matrices for compliance-sensitive projects',
    ],
  },
  {
    id: 'qa',
    tag: '05',
    title: 'QA & Release Governance',
    problem:
      'Production failures, customer-facing bugs, and failed audits share a common root: inadequate quality control before release. A broken release damages trust faster than any competitor can.',
    solution:
      'We implement structured QA processes — from test planning and case writing to UAT facilitation and release sign-off governance. Every release is controlled, documented, and traceable.',
    outcomes: [
      'Significant defect reduction through shift-left testing practices',
      'Structured UAT facilitation with business stakeholders',
      'Regression testing frameworks built for repeatability',
      'Release readiness checklists and go/no-go decision frameworks',
      'Compliance-ready release artifacts and audit trails',
    ],
  },
  {
    id: 'strategy',
    tag: '06',
    title: 'Digital Strategy & Innovation',
    problem:
      'Organizations invest in technology without a clear picture of where they\'re going or why. Disconnected tools, duplicate systems, and no roadmap lead to waste and stagnation.',
    solution:
      'We help organizations build a digital strategy that connects technology investment to business outcomes — with a roadmap that\'s realistic, sequenced, and designed for evolution.',
    outcomes: [
      'Digital maturity assessments and gap analysis',
      'Technology roadmaps tied to business growth objectives',
      'Innovation frameworks and prioritization models',
      'Build vs. buy analysis with total cost of ownership modeling',
      'Competitive positioning through technology differentiation',
    ],
    callout: {
      label: 'Strategic Insight',
      text: 'Strategy without execution is hallucination. HarmoNext delivers both — we map the path and walk it with you.',
    },
  },
];

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Services = () => (
  <>
    {/* ── Page hero ── */}
    <section className={styles.pageHero}>
      <div className={`container ${styles.pageHeroInner}`}>
        <p className="section-label">What We Offer</p>
        <h1 className={styles.heroHeading}>
          Services Built for<br />Complex Delivery
        </h1>
        <p className={styles.heroSub}>
          From strategy to shipping — we bring the rigor, the team, and
          the accountability to make your most ambitious initiatives succeed.
        </p>
        <Link to="/contact" className={styles.heroCta}>Schedule a Consultation</Link>
      </div>
    </section>

    {/* ── Service sections ── */}
    {SERVICES.map((svc) => (
      <section
        key={svc.id}
        id={svc.id}
        className={styles.serviceSection}
      >
        <div className={`container ${styles.serviceInner}`}>
          <SectionReveal className={styles.serviceLeft}>
            <span className={styles.serviceTag}>{svc.tag}</span>
            <h2 className={styles.serviceTitle}>{svc.title}</h2>

            <div className={styles.block}>
              <p className={styles.blockLabel}>The Problem</p>
              <p className={styles.blockText}>{svc.problem}</p>
            </div>

            <div className={styles.block}>
              <p className={styles.blockLabel}>Our Solution</p>
              <p className={styles.blockText}>{svc.solution}</p>
            </div>
          </SectionReveal>

          <SectionReveal className={styles.serviceRight} delay={100}>
            <div className={styles.outcomesCard}>
              <p className={styles.outcomesLabel}>Key Outcomes</p>
              <ul className={styles.outcomesList}>
                {svc.outcomes.map((outcome) => (
                  <li key={outcome} className={styles.outcomeItem}>
                    <span className={styles.outcomeIcon}><CheckIcon /></span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {svc.callout && (
              <div className={styles.callout}>
                <span className={styles.calloutLabel}>{svc.callout.label}</span>
                <p className={styles.calloutText}>&ldquo;{svc.callout.text}&rdquo;</p>
              </div>
            )}
          </SectionReveal>
        </div>
        {/* Thin gold section divider */}
        <div className={styles.divider} aria-hidden="true" />
      </section>
    ))}

    {/* ── CTA ── */}
    <section className={styles.ctaSection}>
      <div className={`container ${styles.ctaInner}`}>
        <SectionReveal>
          <h2 className={styles.ctaHeading}>Not sure where to start?</h2>
          <p className={styles.ctaCopy}>
            We'll help you figure out which services fit your current needs —
            no pressure, no pitch deck.
          </p>
          <Link to="/contact" className={styles.ctaBtn}>Let's Talk</Link>
        </SectionReveal>
      </div>
    </section>
  </>
);

export default Services;
