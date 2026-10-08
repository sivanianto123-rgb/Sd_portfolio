import { motion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1];

export function Reveal({ children, delay = 0, y = 40, className, as = "div", once = true }) {
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

// Splits text into words and reveals them with a stagger, for kinetic headings.
// Uses a single whileInView observer on the parent, driving children via
// variant propagation — far more reliable than giving every word its own
// IntersectionObserver (which was flaky, especially for headings already in
// view at mount with no subsequent scroll event to re-trigger it).
const containerVariants = (stagger, delay) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const wordVariants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.7, ease: EASE } },
};

export function SplitReveal({ text, className, delay = 0, stagger = 0.03 }) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={containerVariants(stagger, delay)}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
          aria-hidden="true"
        >
          <motion.span style={{ display: "inline-block" }} variants={wordVariants}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export { EASE };
