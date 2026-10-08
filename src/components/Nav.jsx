import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { SOCIAL } from "../data/content";

const EASE = [0.16, 1, 0.3, 1];

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`nav ${scrolled ? "nav-scrolled" : ""}`}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <a href="#home" className="brand">
        T<span className="brand-dot">.</span>Sivani
      </a>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          className="nav-resume"
          href={`${import.meta.env.BASE_URL}resume/T_Sivani_Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>

      <div className="nav-actions">
        <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="nav-icon-link">
          GH
        </a>
        <button className="nav-burger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          <span className={open ? "open" : ""} />
          <span className={open ? "open" : ""} />
        </button>
      </div>
    </motion.header>
  );
}
