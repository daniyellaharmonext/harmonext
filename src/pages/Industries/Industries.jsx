import { Link } from 'react-router-dom';
import SectionReveal from '../../components/SectionReveal/SectionReveal.jsx';
import styles from './Industries.module.css';

const INDUSTRIES = [
  {
    id: 'government',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    name: 'Government Agencies',
    tagline: 'Compliance-first delivery for complex public-sector programs.',
    description:
      'Government technology delivery is uniquely challenging — legacy systems, strict procurement rules, multi-stakeholder bureaucracy, and unforgiving compliance requirements. HarmoNext has experience navigating all of it.',
    painPoints: [
      'Aging legacy systems resistant to modernization efforts',
      'Slow, complex procurement and approval cycles',
      'Limited internal tech talent and high contractor turnover',
      'Strict compliance, security, and ATO requirements',
      'Multi-agency coordination with siloed data and processes',
    ],
    how: 'We deliver government engagements with documentation discipline, compliance-first architecture, and a change management model that gets buy-in from the people who matter most — front-line staff.',
  },
  {
    id: 'startups',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    name: 'Startups & Scale-ups',
    tagline: 'Speed with structure — so you grow without breaking.',
    description:
      'Startups need velocity. But velocity without structure creates technical debt, misaligned teams, and products that don\'t scale. HarmoNext helps startups move fast — without building things they\'ll have to rebuild in 12 months.',
    painPoints: [
      'Rapidly shifting priorities with no clear backlog ownership',
      'Engineering teams building without product structure',
      'No release process as team size and complexity grows',
      'Founders context-switching between strategy and execution',
      'Pressure to ship before the foundation is solid',
    ],
    how: 'We embed lightweight but durable process into early-stage teams — product ownership, sprint structure, and release governance that scales with your growth, not against it.',
  },
  {
    id: 'nonprofits',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    name: 'Nonprofits',
    tagline: 'Mission-driven delivery that maximizes every dollar.',
    description:
      'Nonprofits are held to a high standard — donors, boards, and regulators all want to see impact. But most nonprofits are operating legacy processes that prevent them from demonstrating that impact clearly. We fix that.',
    painPoints: [
      'Manual grant management and program reporting processes',
      'Limited IT budget with high-impact operational needs',
      'Volunteer and staff coordination at scale without infrastructure',
      'Donor and board reporting requirements with no clean data source',
      'Resistance to technology change among long-tenured staff',
    ],
    how: 'We serve nonprofits with the same rigor we bring to enterprise clients — tailored to budget realities and mission priorities. Every solution we build is designed to reduce burden, not add it.',
  },
  {
    id: 'finance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    name: 'Financial Services',
    tagline: 'Structured delivery for regulated, high-stakes technology.',
    description:
      'Financial services technology lives at the intersection of innovation and compliance. New products need to ship fast; regulations can\'t be compromised. HarmoNext brings both the technical depth and the governance discipline to make that work.',
    painPoints: [
      'Regulatory compliance requirements that slow delivery velocity',
      'Legacy core systems resistant to modern API integration',
      'High-stakes release cycles where errors have outsized consequences',
      'Security and data privacy requirements shaping every architecture decision',
      'Customer experience expectations set by fintech competitors',
    ],
    how: 'We combine Agile delivery velocity with the documentation rigor and governance structure that financial services requires — including compliance traceability, security-aware architecture, and controlled release processes.',
  },
  {
    id: 'ecommerce',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    name: 'E-Commerce & Retail',
    tagline: 'Scalable platforms built to perform under pressure.',
    description:
      'E-commerce organizations operate in a world where peak-season failure is not an option — and where customer experience expectations are set by the largest players in the market. HarmoNext helps you build and deliver at that standard.',
    painPoints: [
      'Peak-season scalability requirements with unpredictable traffic spikes',
      'Complex third-party integrations (ERP, 3PL, payment, marketing stack)',
      'Customer experience gaps that drive cart abandonment and churn',
      'Disconnected systems creating inventory and fulfillment blind spots',
      'Speed-to-market pressure for new features and promotions',
    ],
    how: 'We design e-commerce technology delivery around resilience and integration — building systems that scale when it matters and connect the platforms you already rely on, cleanly and reliably.',
  },
];

const Industries = () => (
  <>
    {/* ── Page hero ── */}
    <section className={styles.pageHero}>
      <div className={`container ${styles.pageHeroInner}`}>
        <p className="section-label">Where We Work</p>
        <h1 className={styles.heroHeading}>Industries We Serve</h1>
        <p className={styles.heroSub}>
          HarmoNext brings the same standard of structured, Agile delivery to every sector —
          adapted to the unique constraints and demands of each.
        </p>
      </div>
    </section>

    {/* ── Industry sections ── */}
    {INDUSTRIES.map((ind, i) => (
      <section
        key={ind.id}
        id={ind.id}
        className={`${styles.industrySection} ${i % 2 !== 0 ? styles.alt : ''}`}
      >
        <div className={`container ${styles.industryInner}`}>
          <SectionReveal className={styles.industryLeft}>
            <div className={styles.industryIconWrap}>{ind.icon}</div>
            <h2 className={styles.industryName}>{ind.name}</h2>
            <p className={styles.industryTagline}>{ind.tagline}</p>
            <p className={styles.industryDesc}>{ind.description}</p>
            <div className={styles.howBlock}>
              <p className={styles.howLabel}>How HarmoNext Helps</p>
              <p className={styles.howText}>{ind.how}</p>
            </div>
          </SectionReveal>

          <SectionReveal delay={100} className={styles.industryRight}>
            <div className={styles.painCard}>
              <p className={styles.painLabel}>Common Pain Points We Address</p>
              <ul className={styles.painList}>
                {ind.painPoints.map((point) => (
                  <li key={point} className={styles.painItem}>
                    <span className={styles.painIcon} aria-hidden="true">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>
        <div className={styles.divider} aria-hidden="true" />
      </section>
    ))}

    {/* ── CTA ── */}
    <section className={styles.ctaSection}>
      <div className={`container ${styles.ctaInner}`}>
        <SectionReveal>
          <h2 className={styles.ctaHeading}>Don&apos;t see your industry?</h2>
          <p className={styles.ctaCopy}>
            Our delivery model adapts to any sector. Let&apos;s talk about what
            structured, Agile delivery could look like in your context.
          </p>
          <Link to="/contact" className={styles.ctaBtn}>Get In Touch</Link>
        </SectionReveal>
      </div>
    </section>
  </>
);

export default Industries;
