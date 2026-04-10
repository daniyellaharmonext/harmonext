import { Link } from 'react-router-dom';
import SectionReveal from '../../components/SectionReveal/SectionReveal.jsx';
import styles from './Portfolio.module.css';

/* ──────────────────────────────────────────────────────────
   CASE STUDIES
   TODO: Replace with real case study details, metrics, and
         client-approved quotes when publishing publicly.
────────────────────────────────────────────────────────── */
const FEATURED = {
  tag: 'Featured Case Study',
  client: 'Social Media Marketing Platform',
  headline: 'An AI Operating System for Creators Who Want to Build Influence Without Burning Out.',
  industry: 'Creator Economy / AI',
  engagement: 'Product Strategy · Engineering · Delivery',
  problem: `Content creators are drowning in tools, tabs, and tasks. Despite the explosion of AI,
  most solutions add complexity rather than reducing it — leaving creators more burned out than
  before. This was conceived to solve a specific problem: how do you systematically build
  influence without systematic exhaustion?`,
  approach: `HarmoNext led the engagement from concept to shipped product. We started with a
  discovery sprint to validate the core value proposition with real creators, then built a
  product roadmap that sequenced MVP features by impact and technical feasibility. Our
  engineering team designed the system architecture and led full-stack development, while our
  PM and BA embedded with the founding team to manage scope, sprint execution, and
  stakeholder communication throughout.`,
  outcomes: [
    { metric: '14 Weeks', label: 'MVP shipped from first discovery call to market-ready product' },
    { metric: '3,000+', label: 'Creators onboarded in private beta within 60 days of launch' },
    { metric: '47%', label: 'Average reduction in time spent on content production reported by beta users' },
    { metric: '$250K', label: 'Pre-revenue partner commitments secured before public launch' },
  ],
};

const ADDITIONAL = [
  {
    id: 'gov',
    tag: 'Case Study',
    client: 'Government Digital Transformation',
    /* TODO: Replace with actual agency name and approved details */
    industry: 'Federal Government',
    engagement: 'Program Management · Agile Transformation · Systems Modernization',
    before: [
      'Legacy systems averaging 18+ years in production',
      'Manual, paper-based workflows across 6 departments',
      'Average project overrun of 40% beyond original timeline',
      'No standardized release process or change management protocol',
    ],
    after: [
      '60% reduction in average processing time post-modernization',
      '100% migration to secure cloud infrastructure',
      'Citizen experience satisfaction scores improved by 38%',
      'Bi-weekly release cadence established across all programs',
    ],
    summary:
      'A federal agency engaged HarmoNext to lead a 12-month enterprise modernization initiative — replacing legacy systems, transforming delivery practices, and establishing an Agile Release Train across four major program workstreams.',
  },
  {
    id: 'nonprofit',
    tag: 'Case Study',
    client: 'Nonprofit Operations Modernization',
    /* TODO: Replace with actual organization name and approved details */
    industry: 'Nonprofit / Social Impact',
    engagement: 'Business Analysis · Systems Implementation · Change Management',
    before: [
      'Grant management tracked in disconnected spreadsheets',
      'Volunteer coordination handled via email chains',
      'No real-time visibility into program impact or spend',
      'Manual monthly reporting taking 40+ staff-hours per cycle',
    ],
    after: [
      '80% reduction in administrative overhead across operations',
      'Real-time grant and program reporting available to leadership',
      '3x faster grant processing from application to award',
      'Staff training completion rate of 94% within 6 weeks of go-live',
    ],
    summary:
      'A national nonprofit managing grants, volunteers, and advocacy programs across 12 states engaged HarmoNext to consolidate their operations onto a single integrated platform — with full change management and staff enablement support.',
  },
];

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Portfolio = () => (
  <>
    {/* ── Page hero ── */}
    <section className={styles.pageHero}>
      <div className={`container ${styles.pageHeroInner}`}>
        <p className="section-label">Our Work</p>
        <h1 className={styles.heroHeading}>Portfolio &amp; Case Studies</h1>
        <p className={styles.heroSub}>
          Real engagements. Real results. A selection of the work we&apos;re proud to have
          delivered — and the impact it created.
        </p>
      </div>
    </section>

    {/* ── Featured case study: Fabel ── */}
    <section className={styles.featured}>
      <div className={`container ${styles.featuredInner}`}>
        <SectionReveal>
          <div className={styles.featuredHeader}>
            <span className={styles.featuredTag}>{FEATURED.tag}</span>
            <div className={styles.featuredMeta}>
              <span className={styles.metaItem}>{FEATURED.industry}</span>
              <span className={styles.metaDot} aria-hidden="true">·</span>
              <span className={styles.metaItem}>{FEATURED.engagement}</span>
            </div>
          </div>
          <h2 className={styles.featuredClient}>{FEATURED.client}</h2>
          <p className={styles.featuredHeadline}>{FEATURED.headline}</p>
        </SectionReveal>

        <div className={styles.featuredBody}>
          <SectionReveal className={styles.featuredText}>
            <div className={styles.caseBlock}>
              <p className={styles.caseLabel}>The Problem</p>
              <p className={styles.caseText}>{FEATURED.problem}</p>
            </div>
            <div className={styles.caseBlock}>
              <p className={styles.caseLabel}>Our Approach</p>
              <p className={styles.caseText}>{FEATURED.approach}</p>
            </div>
          </SectionReveal>

          <SectionReveal delay={100} className={styles.featuredMetrics}>
            <p className={styles.metricsLabel}>Outcomes &amp; Metrics</p>
            <div className={styles.metricsGrid}>
              {FEATURED.outcomes.map((o) => (
                <div key={o.metric} className={styles.metricCard}>
                  <span className={styles.metricValue}>{o.metric}</span>
                  <span className={styles.metricLabel}>{o.label}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>

    {/* ── Additional case studies ── */}
    <section className={styles.additionalSection}>
      <div className={`container ${styles.additionalInner}`}>
        <SectionReveal>
          <p className="section-label">More Work</p>
          <h2 className={styles.sectionHeading}>Additional Engagements</h2>
        </SectionReveal>

        <div className={styles.caseGrid}>
          {ADDITIONAL.map((cs, i) => (
            <SectionReveal key={cs.id} delay={i * 100} className={styles.cardReveal}>
              <article className={styles.caseCard}>
                <div className={styles.caseCardHeader}>
                  <span className={styles.caseTag}>{cs.tag}</span>
                  <div className={styles.caseMeta}>
                    <span>{cs.industry}</span>
                    <span aria-hidden="true">·</span>
                    <span>{cs.engagement}</span>
                  </div>
                </div>
                <h3 className={styles.caseTitle}>{cs.client}</h3>
                <p className={styles.caseSummary}>{cs.summary}</p>

                <div className={styles.beforeAfter}>
                  <div className={styles.beforeCol}>
                    <p className={styles.beforeLabel}>Before</p>
                    <ul className={styles.changeList}>
                      {cs.before.map((item) => (
                        <li key={item} className={styles.changeItem}>
                          <span className={styles.changeDot} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.arrowCol} aria-hidden="true">
                    <ArrowRight />
                  </div>
                  <div className={styles.afterCol}>
                    <p className={styles.afterLabel}>After</p>
                    <ul className={styles.changeList}>
                      {cs.after.map((item) => (
                        <li key={item} className={styles.changeItem}>
                          <span className={`${styles.changeDot} ${styles.dotGold}`} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className={styles.ctaSection}>
      <div className={`container ${styles.ctaInner}`}>
        <SectionReveal>
          <h2 className={styles.ctaHeading}>
            Your project could be next.
          </h2>
          <p className={styles.ctaCopy}>
            Let&apos;s talk about what a HarmoNext engagement could deliver for your organization.
          </p>
          <Link to="/contact" className={styles.ctaBtn}>Start the Conversation</Link>
        </SectionReveal>
      </div>
    </section>
  </>
);

export default Portfolio;
