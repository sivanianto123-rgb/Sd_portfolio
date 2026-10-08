import { motion } from "motion/react";
import { SKILLS, SKILL_MARQUEE } from "../data/content";
import { Reveal } from "./Reveal";

function Marquee({ items, direction = 1, duration = 28 }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <motion.div
        className="marquee-track"
        animate={{ x: direction > 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-grid">
        <div className="section-label-col">
          <span className="section-num">02</span>
          <span className="section-label">Skills</span>
        </div>
        <div className="section-main">
          <Reveal as="h2" className="section-heading">
            Technical toolbox.
          </Reveal>
        </div>
      </div>

      <div className="marquee-stack">
        <Marquee items={SKILL_MARQUEE} direction={1} duration={32} />
        <Marquee items={[...SKILL_MARQUEE].reverse()} direction={-1} duration={26} />
      </div>

      <div className="skills-grid">
        {SKILLS.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.06} className="skill-card">
            <h3>{group.group}</h3>
            <div className="tag-row">
              {group.items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
