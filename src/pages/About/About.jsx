import { Link } from 'react-router-dom';
import SectionReveal from '../../components/SectionReveal/SectionReveal.jsx';
import styles from './About.module.css';

/* ── Core values ── */
const VALUES = [
  {
    title: 'Accountability',
    description:
      'We own our outcomes — not just our deliverables. If something is off track, we say so early and fix it with urgency.',
  },
  {
    title: 'Structure',
    description:
      'Chaos is the enemy of scale. Every engagement begins with a foundation of clarity: clear roles, clear timelines, clear expectations.',
  },
  {
    title: 'Excellence',
    description:
      'We hold every artifact, sprint, and release to the same standard. Good enough is not in our vocabulary.',
  },
  {
    title: 'Innovation',
    description:
      'We bring fresh thinking to proven frameworks — combining disciplined delivery with creative problem-solving.',
  },
];

/* ── Leadership team ── */
const LEADERSHIP = [
  {
    name: 'Danielette',
    role: 'Product Owner (PO)',
    bio: 'Danielette leads product vision and stakeholder alignment — ensuring that what gets built is exactly what the client needs, prioritized with intent and delivered with clarity.',
    /* TODO: Replace initials with <img src="/assets/team/danielette.jpg" alt="Danielette" /> */
    initial: 'D',
  },
  {
    name: 'Danielle',
    role: 'Business Analyst (BA)',
    bio: 'Danielle translates complex business requirements into actionable specifications, user stories, and acceptance criteria that engineering teams can execute against with confidence.',
    initial: 'D',
  },
  {
    name: 'Dancilia',
    role: 'RTE / Scrum Master',
    bio: 'Dancilia orchestrates multi-team Agile delivery as Release Train Engineer — removing impediments, facilitating PI planning, and keeping every sprint on course.',
    initial: 'D',
  },
  {
    name: 'Daniyella',
    role: 'Director of Engineering',
    bio: 'Daniyella drives the technical strategy and engineering execution — bridging architecture decisions with business outcomes and ensuring every system is built to last.',
    initial: 'D',
  },
];

/* Simple org hierarchy diagram */
const OrgDiagram = () => (
  <div className={styles.orgDiagram} aria-label="Leadership structure">
    <div className={styles.orgLevel}>
      <div className={`${styles.orgNode} ${styles.orgRoot}`}>Director of Engineering</div>
    </div>
    <div className={styles.orgConnector} aria-hidden="true" />
    <div className={styles.orgLevel}>
      <div className={styles.orgNode}>Product Owner</div>
      <div className={styles.orgNode}>Business Analyst</div>
      <div className={styles.orgNode}>RTE / Scrum Master</div>
    </div>
  </div>
);

const About = () => (
  <>
    {/* ── Page hero ── */}
    <section className={styles.pageHero}>
      <div className={`container ${styles.pageHeroInner}`}>
        <p className="section-label">Our Story</p>
        <h1 className={styles.heroHeading}>
          Delivering with<br /> Clarity and Purpose.
        </h1>
        <p className={styles.heroSub}>
          At HarmonExt, we believe successful projects are built on structure, communication, and intentional execution. 
          We partner with organizations to manage and deliver initiatives from start to finish—bringing alignment to teams, visibility to progress, and confidence to outcomes.
        </p>
      </div>
    </section>

    {/* ── Mission & Vision ── */}
    <section className={styles.missionSection}>
      <div className={`container ${styles.missionGrid}`}>
        <SectionReveal>
          <div className={styles.missionCard}>
            <span className={styles.missionLabel}>Mission</span>
            <h2 className={styles.missionHeading}>Why We Show Up</h2>
            <p className={styles.missionText}>
              To partner with organizations in designing, building, and delivering
              technology solutions that are structured, scalable, and genuinely
              impactful — so our clients can focus on what they do best.
            </p>
          </div>
        </SectionReveal>
        <SectionReveal delay={120}>
          <div className={styles.missionCard}>
            <span className={styles.missionLabel}>Vision</span>
            <h2 className={styles.missionHeading}>Where We&apos;re Going</h2>
            <p className={styles.missionText}>
              A world where every organization — large or small, public or
              private — has access to the strategic clarity and technical
              excellence they need to grow with confidence.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* ── Why HarmoNext Exists ── */}
    <section className={styles.whySection}>
      <div className={`container ${styles.whyInner}`}>
        <SectionReveal>
          <div className={styles.whyContent}>
            <p className="section-label">Why We Exist</p>
            <h2 className={styles.sectionHeading}>The Gap We Saw. The Change We Made.</h2>
            <p className={styles.whyText}>
              Four sisters. Four complementary disciplines. One shared observation: too many organizations
              were spinning their wheels — hiring consultants who talked strategy but couldn't execute,
              or building teams that delivered features but missed the point. HarmoNext was founded to
              bridge that gap. We combine the rigor of enterprise project management, the precision of
              technical engineering, and the creativity of strategic thinking into a single, integrated
              delivery model. We didn't just want to advise. We wanted to build.
            </p>
            <p className={styles.whyText}>
              As a woman-owned, Black-led consultancy, we also bring perspective that changes the quality
              of the questions asked — and by extension, the quality of the solutions designed.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* ── Core Values ── */}
    <section className={styles.valuesSection}>
      <div className={`container ${styles.valuesInner}`}>
        <SectionReveal>
          <p className="section-label">What We Stand For</p>
          <h2 className={styles.sectionHeading}>Core Values</h2>
        </SectionReveal>
        <div className={styles.valuesGrid}>
          {VALUES.map((val, i) => (
            <SectionReveal key={val.title} delay={i * 80}>
              <article className={styles.valueCard}>
                <div className={styles.valueNumber}>0{i + 1}</div>
                <h3 className={styles.valueTitle}>{val.title}</h3>
                <p className={styles.valueDesc}>{val.description}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ── Leadership Team ── */}
    <section className={styles.teamSection}>
      <div className={`container ${styles.teamInner}`}>
        <SectionReveal>
          <p className="section-label">Leadership</p>
          <h2 className={styles.sectionHeading}>The HarmoNext Team</h2>
          <p className={styles.teamIntro}>
            Four sisters. Four disciplines. One integrated approach to delivery.
          </p>
        </SectionReveal>

        <div className={styles.teamGrid}>
          {LEADERSHIP.map((member, i) => (
            <SectionReveal key={member.name} delay={i * 90}>
              <article className={styles.teamCard}>
                {/* Avatar — TODO: replace with actual headshot <img /> */}
                <div className={styles.avatar} aria-hidden="true">
                  {member.initial}
                </div>
                <div className={styles.teamInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <p className={styles.memberBio}>{member.bio}</p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        {/* Org structure diagram */}
        <SectionReveal delay={160}>
          <div className={styles.orgWrap}>
            <p className={styles.orgLabel}>Organizational Structure</p>
            <OrgDiagram />
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className={styles.ctaSection}>
      <div className={`container ${styles.ctaInner}`}>
        <SectionReveal>
          <h2 className={styles.ctaHeading}>Ready to work with us?</h2>
          <p className={styles.ctaCopy}>
            Let's talk about how HarmoNext can help your organization deliver with
            precision and purpose.
          </p>
          <Link to="/contact" className={styles.ctaBtn}>Schedule a Consultation</Link>
        </SectionReveal>
      </div>
    </section>
  </>
);

export default About;
