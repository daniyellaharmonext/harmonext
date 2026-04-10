import { Link } from 'react-router-dom';
import AnimatedText from '../../components/AnimatedText/AnimatedText.jsx';
import SectionReveal from '../../components/SectionReveal/SectionReveal.jsx';
import styles from './Home.module.css';

/* ── Animated hero phrases ── */
const HERO_PHRASES = [
  'Structured Execution.',
  'Measurable Results.',
  'Scalable Systems.',
  'Agile Precision.',
];

/* ── Services overview ── */
const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'PM & Delivery',
    description: 'End-to-end project and program management using Agile and SAFe frameworks. We deliver on time, on scope, and on budget.',
    link: '/services',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Engineering',
    description: 'Product development and technical delivery that bridges vision and execution — built to scale.',
    link: '/services',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Strategy & Innovation',
    description: 'Digital strategy and roadmaps that align technology investment with business outcomes and long-term growth.',
    link: '/services',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'QA & Governance',
    description: 'Structured quality assurance and release governance that ensures every deployment is controlled, tested, and compliant.',
    link: '/services',
  },
];

/* ── Methodology steps (snapshot) ── */
const METHOD_STEPS = [
  { number: '01', label: 'Discover', detail: 'Deep-dive into your goals, systems, and constraints.' },
  { number: '02', label: 'Plan', detail: 'Roadmaps, backlogs, and sprint structures aligned to outcomes.' },
  { number: '03', label: 'Execute', detail: 'Incremental delivery with full transparency and velocity.' },
  { number: '04', label: 'Test', detail: 'Rigorous QA before anything ships.' },
  { number: '05', label: 'Deliver', detail: 'Precision releases with governance and stakeholder sign-off.' },
];

/* ── Industries ── */
const INDUSTRIES = [
  'Government Agencies',
  'Startups & Scale-ups',
  'Nonprofits',
  'Financial Services',
  'E-Commerce & Retail',
];

const Home = () => (
  <>
    {/* ══════════════════════════════════════════════
        HERO SECTION
        Background: looping video with dark overlay.
        TODO: Replace /videos/hero-bg.mp4 with real footage.
              Recommended: stock video of Black women collaborating —
              working at whiteboards, building jenga blocks together,
              in a modern office setting. Source from: Pexels, Shutterstock,
              or custom brand shoot.
    ══════════════════════════════════════════════ */}
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.videoWrap}>
        <video
          className={styles.videoBg}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay — keeps text readable over any video content */}
        <div className={styles.videoOverlay} aria-hidden="true" />
      </div>

      <div className={styles.heroContent}>
        <p className={styles.heroEyebrow}>Strategy &amp; Technology Consultancy</p>
        <h1 className={styles.heroHeading}>
          We Plan.{' '}
          <br className={styles.desktopBreak} />
          We Execute.{' '}
          <br className={styles.desktopBreak} />
          We Deliver.
        </h1>
        <p className={styles.heroSub}>
          <AnimatedText phrases={HERO_PHRASES} interval={3000} />
        </p>
        <p className={styles.heroCopy}>
          HarmoNext partners with organizations to design, build, and deliver
          technology solutions with Agile precision.
        </p>
        <Link to="/contact" className={styles.heroCta}>
          Schedule a Consultation
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>

    {/* ══════════════════════════════════════════════
        SERVICES OVERVIEW
    ══════════════════════════════════════════════ */}
    <section className={styles.services}>
      <div className={`container ${styles.servicesInner}`}>
        <SectionReveal>
          <p className="section-label">What We Deliver</p>
          <h2 className={styles.sectionHeading}>
            Four Pillars of<br />Transformational Delivery
          </h2>
        </SectionReveal>
        <div className={styles.servicesGrid}>
          {SERVICES.map((svc, i) => (
            <SectionReveal key={svc.title} delay={i * 80}>
              <article className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{svc.icon}</div>
                <h3 className={styles.serviceTitle}>{svc.title}</h3>
                <p className={styles.serviceDesc}>{svc.description}</p>
                <Link to={svc.link} className={styles.serviceLink}>
                  Learn more
                  <span aria-hidden="true"> →</span>
                </Link>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ══════════════════════════════════════════════
        METHODOLOGY SNAPSHOT
    ══════════════════════════════════════════════ */}
    <section className={styles.method}>
      <div className={`container ${styles.methodInner}`}>
        <SectionReveal>
          <p className="section-label">How We Work</p>
          <h2 className={styles.sectionHeading}>Delivery You Can Count On</h2>
          <p className={styles.methodIntro}>
            Every engagement follows a disciplined, five-phase delivery model —
            built on SAFe principles and Agile best practices.
          </p>
        </SectionReveal>
        <div className={styles.methodSteps}>
          {METHOD_STEPS.map((step, i) => (
            <SectionReveal key={step.number} delay={i * 100}>
              <div className={styles.methodStep}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h4 className={styles.stepLabel}>{step.label}</h4>
                <p className={styles.stepDetail}>{step.detail}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
        <SectionReveal delay={200}>
          <div className={styles.methodCta}>
            <Link to="/methodology" className={styles.methodLink}>
              See the full methodology →
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* ══════════════════════════════════════════════
        INDUSTRIES SERVED
    ══════════════════════════════════════════════ */}
    <section className={styles.industries}>
      <div className={`container ${styles.industriesInner}`}>
        <SectionReveal>
          <p className="section-label">Industries We Serve</p>
          <h2 className={styles.sectionHeading}>Built for the Sectors That Matter</h2>
        </SectionReveal>
        <SectionReveal delay={80}>
          <ul className={styles.industryList} role="list">
            {INDUSTRIES.map((name) => (
              <li key={name} className={styles.industryItem}>
                <span className={styles.industryDot} aria-hidden="true" />
                {name}
              </li>
            ))}
          </ul>
          <Link to="/industries" className={styles.industryLink}>
            Explore all industries →
          </Link>
        </SectionReveal>
      </div>
    </section>

    {/* ══════════════════════════════════════════════
        BOTTOM CTA BANNER
    ══════════════════════════════════════════════ */}
    <section className={styles.ctaBanner}>
      <div className={`container ${styles.ctaInner}`}>
        <SectionReveal>
          <h2 className={styles.ctaHeading}>
            Ready to build something that lasts?
          </h2>
          <p className={styles.ctaCopy}>
            Let's design a solution that fits your organization — structured,
            scalable, and delivered with precision.
          </p>
          <Link to="/contact" className={styles.ctaBtn}>
            Schedule a Consultation
          </Link>
        </SectionReveal>
      </div>
    </section>
  </>
);

export default Home;
