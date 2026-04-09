import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Services from './pages/Services/Services.jsx';
import Methodology from './pages/Methodology/Methodology.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Industries from './pages/Industries/Industries.jsx';
import Contact from './pages/Contact/Contact.jsx';

/** Scrolls to the top of the page whenever the route changes. */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

/**
 * Keying this wrapper on pathname causes React to remount it on every
 * navigation, which re-triggers the CSS entry animation defined in global.css.
 */
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-enter">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

const AppContent = () => (
  <>
    <ScrollToTop />
    <Navbar />
    <main>
      <AnimatedRoutes />
    </main>
    <Footer />
  </>
);

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
