import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { EXPERIENCE } from "../data/content";
import { Reveal } from "./Reveal";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section experience" id="experience">
      <div className="section-grid">
        <div className="section-label-col">
          <span className="section-num">03</span>
          <span className="section-label">Experience</span>
        </div>
        <div className="section-main">
          <Reveal as="h2" className="section-heading">
            Where I&rsquo;ve worked.
          </Reveal>

          <div className="timeline" ref={ref}>
            <div className="timeline-track">
              <motion.div className="timeline-progress" style={{ scaleY }} />
            </div>

            <div className="timeline-items">
              {EXPERIENCE.map((job, i) => (
                <Reveal key={job.org} delay={i * 0.1} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-top">
                    <h3>{job.role}</h3>
                    <span className="timeline-date">{job.date}</span>
                  </div>
                  <p className="timeline-org">
                    {job.org} &middot; {job.place}
                  </p>
                  <ul>
                    {job.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
