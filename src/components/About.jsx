import { Reveal } from "./Reveal";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-grid">
        <div className="section-label-col">
          <span className="section-num">01</span>
          <span className="section-label">About</span>
        </div>

        <div className="section-main">
          <Reveal as="p" className="about-lede">
            Hi — I'm Sivani. I'm a full-stack Software Engineer who's happiest moving across
            the whole stack: frontend, backend, and the database underneath it.
          </Reveal>

          <Reveal as="p" delay={0.1} className="about-body">
            On the job, that's meant shipping cross-platform web and mobile interfaces wired
            up to REST and GraphQL APIs, and building Python (Flask) and PostgreSQL backends
            end-to-end — from the schema design to the tests to actually getting it deployed.
          </Reveal>

          <Reveal as="p" delay={0.2} className="about-body">
            What I really enjoy, though, is opening the hood on the things most of us just
            import and trust. I don't like treating a vector database or a consensus protocol
            as a black box, so in my own time I've rebuilt pieces of that machinery from
            scratch — a vector search engine, an ML drift-monitoring platform, the systems
            further down this page. I hold the{" "}
            <strong>IBM AI Developer Professional Certificate</strong>, and I'm always
            looking for the next system I don't fully understand yet.
          </Reveal>

          <Reveal delay={0.3} className="about-badges">
            <span>Pondicherry, India</span>
            <span>B.Tech CSE &middot; SRM Institute of Science &amp; Technology</span>
            <span>IBM AI Developer Professional Certificate</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
