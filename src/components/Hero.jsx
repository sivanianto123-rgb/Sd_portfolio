import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SplitReveal, EASE } from "./Reveal";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.8], [0.55, 0.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section className="hero" id="home" ref={ref}>
      <motion.div className="hero-video-layer" style={{ scale: videoScale, opacity: videoOpacity }}>
        <video src={VIDEO_URL} autoPlay muted loop playsInline />
        <div className="hero-video-fade" />
      </motion.div>

      <motion.div className="hero-content" style={{ y: contentY }}>
        <motion.p
          className="eyebrow cursor-hover"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
        >
          <span className="pulse-dot" /> Open to work &middot; Pondicherry, India
        </motion.p>

        <h1 className="hero-title">
          <SplitReveal text="Full-Stack Engineer," delay={0.4} />
          <br />
          <SplitReveal text="AI Systems Builder." delay={0.65} className="hero-title-accent" />
        </h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
        >
          I build full-stack products with React, Flutter and Python/Flask — and, for the
          love of knowing how things really work, from-scratch systems like a vector search
          engine, a Raft consensus simulator, and a WAL+MVCC transaction engine.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
        >
          <a href="#work" className="btn btn-solid">
            View Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="scroll-cue cursor-hover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        aria-label="Scroll down"
      >
        <span className="scroll-cue-line" />
        Scroll
      </motion.a>
    </section>
  );
}
