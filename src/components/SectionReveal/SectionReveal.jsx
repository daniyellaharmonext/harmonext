import { useEffect, useRef } from 'react';
import styles from './SectionReveal.module.css';

/**
 * SectionReveal
 * Uses IntersectionObserver to add a `.visible` class when the element
 * enters the viewport, triggering the CSS fade-up transition.
 * Once visible, the observer is disconnected so the animation only plays once.
 *
 * Props:
 *   children  — ReactNode
 *   className — string   — extra class names to forward to the wrapper
 *   delay     — number   — ms transition delay for staggered reveals (default 0)
 *   threshold — number   — IntersectionObserver threshold (default 0.12)
 */
const SectionReveal = ({ children, className = '', delay = 0, threshold = 0.12 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add(styles.visible);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`${styles.reveal} ${className}`}>
      {children}
    </div>
  );
};

export default SectionReveal;
