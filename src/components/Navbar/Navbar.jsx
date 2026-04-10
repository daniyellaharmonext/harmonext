import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/methodology', label: 'How We Work' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/industries', label: 'Industries' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navClass = [
    styles.nav,
    menuOpen ? styles.menuActive : '',
  ].filter(Boolean).join(' ');

  return (
    <nav className={navClass} aria-label="Main navigation">
      <div className={styles.inner}>
        {/* Logo — TODO: replace with <img src="/assets/logo.png" alt="HarmoNext" /> once the logo file is added */}
        <Link to="/" className={styles.logo} aria-label="HarmoNext home">
          <span className={styles.logoHarmo}>Harmo</span>
          <span className={styles.logoNext}>Next</span>
        </Link>

        {/* Desktop nav links */}
        <ul className={styles.links} role="list">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/contact" className={styles.cta}>
              Schedule a Consultation
            </Link>
          </li>
        </ul>

        {/* Hamburger button for mobile */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`} aria-hidden={!menuOpen}>
        <ul className={styles.drawerLinks} role="list">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? `${styles.drawerLink} ${styles.active}` : styles.drawerLink
              }
            >
              Home
            </NavLink>
          </li>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? `${styles.drawerLink} ${styles.active}` : styles.drawerLink
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>
          Schedule a Consultation
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
