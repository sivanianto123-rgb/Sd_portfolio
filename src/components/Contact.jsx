import { SOCIAL } from "../data/content";
import { Reveal, SplitReveal } from "./Reveal";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="section-grid">
        <div className="section-label-col">
          <span className="section-num">05</span>
          <span className="section-label">Contact</span>
        </div>

        <div className="section-main">
          <h2 className="contact-heading">
            <SplitReveal text="Let's build" />
            <br />
            <SplitReveal text="something." delay={0.15} className="hero-title-accent" />
          </h2>

          <Reveal as="p" delay={0.3} className="section-sub">
            Open to full-stack, frontend, and AI-systems roles. The fastest way to reach me
            is email — I'll get back to you quickly.
          </Reveal>

          <Reveal delay={0.4} className="contact-cta-row">
            <MagneticButton href={`mailto:${SOCIAL.email}`} className="btn btn-solid btn-lg">
              {SOCIAL.email}
            </MagneticButton>
          </Reveal>

          <Reveal delay={0.5} className="contact-grid">
            <a className="contact-card cursor-hover" href={`tel:${SOCIAL.phone.replace(/\s/g, "")}`}>
              <span className="contact-label">Phone</span>
              <span className="contact-value">{SOCIAL.phone}</span>
            </a>
            <a className="contact-card cursor-hover" href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">/in/sivani-t</span>
            </a>
            <a className="contact-card cursor-hover" href={SOCIAL.github} target="_blank" rel="noopener noreferrer">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">@sivanianto123-rgb</span>
            </a>
            <a
              className="contact-card cursor-hover"
              href={`${import.meta.env.BASE_URL}resume/T_Sivani_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-label">Resume</span>
              <span className="contact-value">Download PDF</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
