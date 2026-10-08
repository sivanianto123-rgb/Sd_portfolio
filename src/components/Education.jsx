import { EDUCATION, CERTIFICATIONS } from "../data/content";
import { Reveal } from "./Reveal";

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="section-grid">
        <div className="section-label-col">
          <span className="section-num">05</span>
          <span className="section-label">Education</span>
        </div>

        <div className="section-main">
          <Reveal as="h2" className="section-heading">
            Foundations.
          </Reveal>

          <div className="edu-grid">
            <Reveal className="edu-card">
              <h3>{EDUCATION.degree}</h3>
              <p className="edu-org">
                {EDUCATION.org} &middot; {EDUCATION.place}
              </p>
              <p className="edu-meta">
                {EDUCATION.date} &nbsp;&middot;&nbsp; {EDUCATION.meta}
              </p>
            </Reveal>

            <div className="cert-list">
              {CERTIFICATIONS.map((cert, i) => (
                <Reveal key={cert.name} delay={i * 0.05} className="cert-item">
                  <h4>{cert.name}</h4>
                  <span>{cert.org}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
