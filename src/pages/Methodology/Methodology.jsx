import { Link } from 'react-router-dom';
import SectionReveal from '../../components/SectionReveal/SectionReveal.jsx';
import styles from './Methodology.module.css';

const PHASES = [
  {
    number: '01',
    name: 'Discovery & Assessment',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    description:
      'We begin with a structured deep-dive into your organization — current systems, existing processes, team dynamics, and strategic goals. No assumptions are made. We ask the hard questions, document the honest answers, and identify the gaps that most engagements overlook.',
  },
  {
    number: '02',
    name: 'Planning & Backlog Creation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    description:
      'Discovery output becomes a working product. We build your project roadmap, decompose work into epics and user stories, align resources, and structure sprint plans with realistic velocity targets. Stakeholders see the full picture before execution begins.',
  },
  {
    number: '03',
    name: 'Sprint Execution',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description:
      'Our teams execute in focused, time-boxed sprints — delivering working software incrementally with full transparency. Daily standups, sprint reviews, and retrospectives are not optional rituals; they\'re the mechanism that keeps delivery honest and teams improving.',
  },
  {
    number: '04',
    name: 'QA & Testing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description:
      'Every deliverable passes through rigorous quality assurance before it advances. We write test cases against acceptance criteria, facilitate structured UAT sessions with business stakeholders, and document every defect — how it was found, how it was resolved, and how it was verified.',
  },
  {
    number: '05',
    name: 'Deployment & Release',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    description:
      'We manage releases with precision — coordinating environments, executing deployment runbooks, securing stakeholder sign-offs, and communicating go-live readiness. Releases are never improvised. They are rehearsed, documented, and executed with control.',
  },
  {
    number: '06',
    name: 'Reporting & Governance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    description:
      'At every milestone, you receive structured reporting — progress against plan, velocity trends, risk flags, and decisions made. Governance is not bureaucracy; it\'s the mechanism that gives leadership confidence and keeps every stakeholder aligned without daily firefighting.',
  },
];

const PRINCIPLES = [
  {
    label: 'SAFe-Aligned',
    text: 'Scaled Agile Framework at the program and portfolio level — structured for enterprise delivery.',
  },
  {
    label: 'Agile-Driven',
    text: 'Iterative, incremental delivery with continuous feedback built into every phase.',
  },
  {
    label: 'Results-Focused',
    text: 'Every ceremony, artifact, and process exists to deliver outcomes — not to check boxes.',
  },
];

const Methodology = () => (
  <>
    {/* ── Page hero ── */}
    <section className={styles.pageHero}>
      <div className={`container ${styles.pageHeroInner}`}>
        <p className="section-label">How We Deliver</p>
        <h1 className={styles.heroHeading}>Our Methodology</h1>
        <p className={styles.heroSub}>
          Disciplined, transparent, and built for scale. Every HarmoNext engagement
          follows a six-phase delivery model that eliminates ambiguity and
          instills confidence at every step.
        </p>
      </div>
    </section>

    {/* ── Principles banner ── */}
    <section className={styles.principles}>
      <div className={`container ${styles.principlesInner}`}>
        {PRINCIPLES.map((p) => (
          <SectionReveal key={p.label} className={styles.principle}>
            <strong className={styles.principleLabel}>{p.label}</strong>
            <p className={styles.principleText}>{p.text}</p>
          </SectionReveal>
        ))}
      </div>
    </section>

    {/* ── Phase timeline ── */}
    <section className={styles.phases}>
      <div className={`container ${styles.phasesInner}`}>
        <SectionReveal>
          <p className="section-label">The Six Phases</p>
          <h2 className={styles.sectionHeading}>
            From Discovery to Governance —<br />Every Step Intentional
          </h2>
        </SectionReveal>

        <div className={styles.timeline}>
          {PHASES.map((phase, i) => (
            <SectionReveal key={phase.number} delay={i * 80} className={styles.phaseReveal}>
              <article className={styles.phaseItem}>
                {/* Left: number + connector line */}
                <div className={styles.phaseLeft}>
                  <div className={styles.phaseNumber}>{phase.number}</div>
                  {i < PHASES.length - 1 && (
                    <div className={styles.connector} aria-hidden="true" />
                  )}
                </div>

                {/* Right: content */}
                <div className={styles.phaseContent}>
                  <div className={styles.phaseIcon}>{phase.icon}</div>
                  <h3 className={styles.phaseName}>{phase.name}</h3>
                  <p className={styles.phaseDesc}>{phase.description}</p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── SAFe callout ── */}
    <section className={styles.safeSection}>
      <div className={`container ${styles.safeInner}`}>
        <SectionReveal>
          <div className={styles.safeCard}>
            <p className={styles.safeEyebrow}>Our Framework Foundation</p>
            <h2 className={styles.safeHeading}>
              SAFe-aligned. Agile-driven. Results-focused.
            </h2>
            <p className={styles.safeText}>
              HarmoNext delivery is rooted in the Scaled Agile Framework (SAFe) — the industry
              standard for enterprise Agile delivery. We apply SAFe principles at the appropriate
              level for your organization: team, program, or portfolio. Whether you need a single
              Scrum team or a coordinated Release Train, we scale the methodology to fit — never
              the other way around.
            </p>
            <Link to="/contact" className={styles.safeBtn}>
              Start a Conversation →
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  </>
);

export default Methodology;
