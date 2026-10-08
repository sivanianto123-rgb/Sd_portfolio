import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, X, Github, Linkedin, Mail, FileDown } from "lucide-react";
import "./App.css";

const EASE = [0.16, 1, 0.3, 1];

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4";

const RESUME_URL = `${import.meta.env.BASE_URL}resume/T_Sivani_Resume.pdf`;
const GITHUB_URL = "https://github.com/sivanianto123-rgb";
const LINKEDIN_URL = "https://www.linkedin.com/in/sivani-t-7b6a20207/";
const EMAIL = "sivanianto123@gmail.com";

function LogoMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="4" y="9" width="14" height="5" rx="2.5" fill="#000" transform="rotate(-35 11 11)" />
      <rect x="4" y="9" width="14" height="5" rx="2.5" fill="#000" transform="rotate(55 11 11)" opacity="0.35" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <circle cx="3" cy="3" r="1.6" fill="#fff" />
      <circle cx="9" cy="3" r="1.6" fill="#fff" />
      <circle cx="3" cy="9" r="1.6" fill="#fff" />
      <circle cx="9" cy="9" r="1.6" fill="#fff" />
    </svg>
  );
}

function MenuOverlay({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <motion.div
            className="menu-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <button className="menu-close" onClick={onClose} aria-label="Close menu">
              <X size={18} strokeWidth={2} />
            </button>

            <nav className="menu-links">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github size={16} strokeWidth={1.75} /> GitHub
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} strokeWidth={1.75} /> LinkedIn
              </a>
              <a href={`mailto:${EMAIL}`}>
                <Mail size={16} strokeWidth={1.75} /> {EMAIL}
              </a>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                <FileDown size={16} strokeWidth={1.75} /> Download Resume
              </a>
            </nav>

            <p className="menu-footnote">Pondicherry, India — open to full-stack &amp; AI-systems roles.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page">
      <motion.header
        className="navbar"
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="navbar-left">
          <div className="brand">
            <LogoMark />
            <span className="brand-text">T Sivani</span>
          </div>

          <button className="menu-btn" onClick={() => setMenuOpen(true)}>
            <span className="menu-btn-icon">
              <Plus size={12} strokeWidth={3} />
            </span>
            Menu
          </button>

          <div className="tags-pill">
            <span>Full-Stack</span>
            <span>AI Systems</span>
          </div>
        </div>

        <div className="navbar-right">
          <div className="status-pill">
            <span className="status-dot-btn">
              <GridIcon />
            </span>
            Open to Work
          </div>
        </div>
      </motion.header>

      <motion.div
        className="video-layer"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
      >
        <div className="video-wrapper">
          <video src={VIDEO_URL} autoPlay muted loop playsInline />
        </div>
      </motion.div>

      <motion.div
        className="footer-wrapper"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: EASE }}
      >
        <div className="footer-content">
          <div className="footer-left">
            <motion.p
              className="footer-subtitle"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            >
              <span className="dot" />
              Software Engineer &middot; Full-Stack &amp; AI Systems
            </motion.p>

            <motion.h1
              className="footer-heading"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
            >
              Full-Stack Engineer,
              <br />
              AI Systems Builder.
            </motion.h1>

            <motion.div
              className="footer-buttons"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
            >
              <a
                className="btn btn-solid"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Projects
              </a>
              <a
                className="btn btn-outline"
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          <div className="footer-right">
            <span className="tag-pill">HNSW</span>
            <span className="tag-pill">Raft</span>
            <span className="tag-pill">MVCC</span>
          </div>
        </div>
      </motion.div>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
