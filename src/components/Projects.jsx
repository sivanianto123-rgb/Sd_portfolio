import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PROJECTS } from "../data/content";
import { Reveal } from "./Reveal";

function ProjectCard({ project, i }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [i % 2 === 0 ? -40 : 40, i % 2 === 0 ? 40 : -40]);
  const reversed = i % 2 === 1;

  return (
    <article className={`project ${reversed ? "project-reversed" : ""}`} ref={ref}>
      <div className="project-media">
        <motion.div
          className="project-media-inner"
          initial={{ clipPath: "inset(8% 8% 8% 8% round 12px)", opacity: 0 }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0% round 12px)", opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img src={project.image} alt={`${project.name} — real captured result`} style={{ y: imageY }} loading="lazy" />
        </motion.div>
      </div>

      <div className="project-body">
        <span className="project-index">{project.index}</span>

        <Reveal as="h3" className="project-name">
          {project.name}
        </Reveal>
        <Reveal as="p" delay={0.05} className="project-tagline">
          {project.tagline} &middot; {project.year}
        </Reveal>

        <Reveal as="p" delay={0.1} className="project-desc">
          {project.description}
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="project-highlights">
            {project.highlights.map((h, j) => (
              <li key={j}>{h}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="tag-row small">
          {project.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </Reveal>

        <Reveal delay={0.25} className="project-links">
          <a href={project.links.source} target="_blank" rel="noopener noreferrer" className="cursor-hover">
            Source &rarr;
          </a>
          <a href={project.links.readme} target="_blank" rel="noopener noreferrer" className="cursor-hover">
            Read-me &rarr;
          </a>
        </Reveal>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section projects" id="work">
      <div className="section-grid">
        <div className="section-label-col">
          <span className="section-num">04</span>
          <span className="section-label">Work</span>
        </div>
        <div className="section-main">
          <Reveal as="h2" className="section-heading">
            Five systems, built from first principles.
          </Reveal>
          <Reveal as="p" delay={0.08} className="section-sub">
            Real captures from running code — not mockups. Source for all of them lives on{" "}
            <a href="https://github.com/sivanianto123-rgb/workspace" target="_blank" rel="noopener noreferrer" className="cursor-hover">
              GitHub
            </a>
            .
          </Reveal>
        </div>
      </div>

      <div className="projects-list">
        {PROJECTS.map((p, i) => (
          <ProjectCard project={p} i={i} key={p.name} />
        ))}
      </div>
    </section>
  );
}
