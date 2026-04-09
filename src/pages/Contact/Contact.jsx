import { useState } from 'react';
import SectionReveal from '../../components/SectionReveal/SectionReveal.jsx';
import styles from './Contact.module.css';

const PROJECT_TYPES = [
  'Select a service...',
  'PM & Delivery',
  'Engineering',
  'Agile Transformation & Coaching',
  'Business Analysis & Requirements',
  'QA & Release Governance',
  'Digital Strategy & Innovation',
  'Other',
];

const BUDGET_RANGES = [
  'Select a range...',
  'Under $10K',
  '$10K – $50K',
  '$50K – $100K',
  '$100K+',
  'Not sure yet',
];

const TIMELINES = [
  'Select a timeline...',
  'Immediate (within 2 weeks)',
  '1 – 3 months',
  '3 – 6 months',
  'Flexible / Not yet determined',
];

const INITIAL_FORM = {
  fullName: '',
  email: '',
  organization: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: '',
};

const INITIAL_ERRORS = {
  fullName: '',
  email: '',
  organization: '',
  projectType: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = { ...INITIAL_ERRORS };
    let valid = true;

    if (!form.fullName.trim()) {
      errs.fullName = 'Full name is required.';
      valid = false;
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      errs.email = 'Email address is required.';
      valid = false;
    } else if (!emailRe.test(form.email)) {
      errs.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (!form.organization.trim()) {
      errs.organization = 'Organization name is required.';
      valid = false;
    }

    if (!form.projectType || form.projectType === PROJECT_TYPES[0]) {
      errs.projectType = 'Please select a type of project.';
      valid = false;
    }

    if (!form.message.trim()) {
      errs.message = 'Please describe your project or goals.';
      valid = false;
    } else if (form.message.trim().length < 20) {
      errs.message = 'Please provide at least a brief description (20+ characters).';
      valid = false;
    }

    setErrors(errs);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    /* TODO: Connect to a real form backend (e.g. Formspree, EmailJS, or a custom API endpoint).
       Replace this console.log with your submission logic. */
    console.log('Form submitted:', form);

    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  /* LinkedIn SVG */
  const LinkedInIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  return (
    <>
      {/* ── Page hero ── */}
      <section className={styles.pageHero}>
        <div className={`container ${styles.pageHeroInner}`}>
          <p className="section-label">Start Here</p>
          <h1 className={styles.heroHeading}>Request a Consultation</h1>
          <p className={styles.heroSub}>
            Tell us about your project. We&apos;ll review your submission and follow up
            within one business day to schedule a conversation.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className={styles.main}>
        <div className={`container ${styles.mainInner}`}>

          {/* Form column */}
          <div className={styles.formCol}>
            {submitted ? (
              <SectionReveal>
                <div className={styles.successState}>
                  <div className={styles.successIcon} aria-hidden="true">✓</div>
                  <h2 className={styles.successHeading}>Submission Received</h2>
                  <p className={styles.successText}>
                    Thank you for reaching out. A member of the HarmoNext team will review
                    your project details and be in touch within one business day.
                  </p>
                  <button
                    className={styles.resetBtn}
                    onClick={() => setSubmitted(false)}
                  >
                    Submit another request
                  </button>
                </div>
              </SectionReveal>
            ) : (
              <SectionReveal>
                <form
                  className={styles.form}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Consultation request form"
                >
                  {/* Row 1: Name + Email */}
                  <div className={styles.formRow}>
                    <div className={styles.fieldGroup}>
                      <label htmlFor="fullName" className={styles.label}>
                        Full Name <span className={styles.required} aria-hidden="true">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        autoComplete="name"
                        aria-required="true"
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                      {errors.fullName && (
                        <span id="fullName-error" className={styles.errorMsg} role="alert">
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="email" className={styles.label}>
                        Email Address <span className={styles.required} aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@organization.com"
                        autoComplete="email"
                        aria-required="true"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <span id="email-error" className={styles.errorMsg} role="alert">
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Organization */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="organization" className={styles.label}>
                      Organization Name <span className={styles.required} aria-hidden="true">*</span>
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      className={`${styles.input} ${errors.organization ? styles.inputError : ''}`}
                      value={form.organization}
                      onChange={handleChange}
                      placeholder="Your company or organization"
                      autoComplete="organization"
                      aria-required="true"
                      aria-describedby={errors.organization ? 'organization-error' : undefined}
                    />
                    {errors.organization && (
                      <span id="organization-error" className={styles.errorMsg} role="alert">
                        {errors.organization}
                      </span>
                    )}
                  </div>

                  {/* Row 2: Project type + Budget */}
                  <div className={styles.formRow}>
                    <div className={styles.fieldGroup}>
                      <label htmlFor="projectType" className={styles.label}>
                        Type of Project <span className={styles.required} aria-hidden="true">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        className={`${styles.select} ${errors.projectType ? styles.inputError : ''}`}
                        value={form.projectType}
                        onChange={handleChange}
                        aria-required="true"
                        aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                      >
                        {PROJECT_TYPES.map((opt) => (
                          <option
                            key={opt}
                            value={opt === PROJECT_TYPES[0] ? '' : opt}
                            disabled={opt === PROJECT_TYPES[0]}
                          >
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <span id="projectType-error" className={styles.errorMsg} role="alert">
                          {errors.projectType}
                        </span>
                      )}
                    </div>

                    <div className={styles.fieldGroup}>
                      <label htmlFor="budget" className={styles.label}>
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className={styles.select}
                        value={form.budget}
                        onChange={handleChange}
                      >
                        {BUDGET_RANGES.map((opt) => (
                          <option
                            key={opt}
                            value={opt === BUDGET_RANGES[0] ? '' : opt}
                            disabled={opt === BUDGET_RANGES[0]}
                          >
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="timeline" className={styles.label}>
                      Preferred Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className={styles.select}
                      value={form.timeline}
                      onChange={handleChange}
                    >
                      {TIMELINES.map((opt) => (
                        <option
                          key={opt}
                          value={opt === TIMELINES[0] ? '' : opt}
                          disabled={opt === TIMELINES[0]}
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Project Description <span className={styles.required} aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, or the challenge you're facing..."
                      rows={6}
                      aria-required="true"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <span id="message-error" className={styles.errorMsg} role="alert">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Submit Request
                  </button>

                  <p className={styles.formNote}>
                    Fields marked <span aria-hidden="true">*</span> are required.
                    We typically respond within one business day.
                  </p>
                </form>
              </SectionReveal>
            )}
          </div>

          {/* Info column */}
          <SectionReveal delay={120} className={styles.infoCol}>
            <div className={styles.infoCard}>
              <p className={styles.infoHeading}>Contact Information</p>

              {/* TODO: Replace with real contact details */}
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email</span>
                <a href="mailto:info@harmonext.com" className={styles.infoLink}>
                  info@harmonext.com
                </a>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>LinkedIn</span>
                <a
                  href="https://linkedin.com/company/harmonext"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoLink}
                >
                  {/* TODO: Replace with real LinkedIn company URL */}
                  linkedin.com/company/harmonext
                  <LinkedInIcon />
                </a>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location</span>
                {/* TODO: Replace with real location */}
                <span className={styles.infoText}>
                  Washington, DC Metropolitan Area
                </span>
              </div>
            </div>

            <div className={styles.expectCard}>
              <p className={styles.expectHeading}>What to Expect</p>
              <ol className={styles.expectList}>
                <li className={styles.expectItem}>
                  <span className={styles.expectNum}>01</span>
                  <span>We review your submission and assess fit within 1 business day.</span>
                </li>
                <li className={styles.expectItem}>
                  <span className={styles.expectNum}>02</span>
                  <span>We schedule a 30-minute discovery call to understand your needs.</span>
                </li>
                <li className={styles.expectItem}>
                  <span className={styles.expectNum}>03</span>
                  <span>We present a proposed engagement scope with a transparent cost estimate.</span>
                </li>
                <li className={styles.expectItem}>
                  <span className={styles.expectNum}>04</span>
                  <span>We agree on terms and begin your engagement with a structured kickoff.</span>
                </li>
              </ol>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
