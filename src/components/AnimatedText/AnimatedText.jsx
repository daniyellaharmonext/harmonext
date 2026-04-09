import { useState, useEffect } from 'react';
import styles from './AnimatedText.module.css';

/**
 * AnimatedText
 * Cycles through an array of phrases with a fade-up animation.
 * Changing the `key` on the span forces React to remount it, which
 * re-plays the CSS @keyframes entry animation — no JS animation needed.
 *
 * Props:
 *   phrases  — string[] — list of phrases to cycle
 *   interval — number   — ms between swaps (default 3200)
 */
const AnimatedText = ({ phrases, interval = 3200 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, interval);
    return () => clearInterval(timer);
  }, [phrases, interval]);

  return (
    // key remount triggers the CSS entry animation on each phrase change
    <span key={index} className={styles.phrase}>
      {phrases[index]}
    </span>
  );
};

export default AnimatedText;
