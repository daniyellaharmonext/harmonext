import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/methodology', label: 'How We Work' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/industries', label: 'Industries' },
  { to: '/contact', label: 'Contact' },
];

/* LinkedIn SVG icon */
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* Email SVG icon */
const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.inner}>
      {/* Brand column */}
      <div className={styles.brand}>
        {/* TODO: replace with <img src="/assets/logo.png" alt="HarmoNext" /> once logo file is added */}
        <Link to="/" className={styles.logo} aria-label="HarmoNext home">
          <span className={styles.logoHarmo}>Harmo</span>
          <span className={styles.logoNext}>Next</span>
        </Link>
        <p className={styles.tagline}>
          Structured. Strategic. Scalable.
        </p>
        <div className={styles.social}>
          {/* TODO: replace href with real LinkedIn URL */}
          <a
            href="https://linkedin.com/company/harmonext"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="HarmoNext on LinkedIn"
          >
            <LinkedInIcon />
          </a>
          {/* TODO: replace href with real email */}
          <a
            href="mailto:info@harmonext.com"
            className={styles.socialLink}
            aria-label="Email HarmoNext"
          >
            <EmailIcon />
          </a>
        </div>
      </div>

      {/* Navigation column */}
      <div className={styles.navCol}>
        <h4 className={styles.colHeading}>Company</h4>
        <ul className={styles.navList}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className={styles.navLink}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact column */}
      <div className={styles.contactCol}>
        <h4 className={styles.colHeading}>Get In Touch</h4>
        {/* TODO: replace with real contact details */}
        <p className={styles.contactItem}>info@harmonext.com</p>
        <p className={styles.contactItem}>Houston, Texas</p>
        <Link to="/contact" className={styles.consultBtn}>
          Schedule a Consultation
        </Link>
      </div>
    </div>

    <div className={styles.bottom}>
      <span>© 2025 HarmoNext. All rights reserved.</span>
      <span className={styles.bottomRight}>
        Strategy &amp; Technology Consultancy
      </span>
    </div>
  </footer>
);

export default Footer;
