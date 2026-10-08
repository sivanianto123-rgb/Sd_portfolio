export const SOCIAL = {
  github: "https://github.com/sivanianto123-rgb",
  linkedin: "https://www.linkedin.com/in/sivani-t-7b6a20207/",
  email: "sivanianto123@gmail.com",
  phone: "+91 94864 15807",
};

export const SKILLS = [
  { group: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5/CSS3", "Flutter", "Dart", "Figma"] },
  { group: "Backend & APIs", items: ["Python (Flask)", "RESTful APIs", "GraphQL", "Node.js", "Express", "Microservices"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "PL/SQL", "Relational Schema Design"] },
  { group: "AI / ML Systems", items: ["Prompt Engineering", "Structured Outputs", "Tool Calling", "Vector Search (HNSW, ANN)", "ML Model Monitoring", "Drift Detection (PSI, KS)"] },
  { group: "Architecture & Tools", items: ["System Design", "Distributed Systems", "Git / GitHub", "PR Reviews", "Pytest", "Linux / Bash"] },
];

// flat marquee list, deduped & shortened for the ticker
export const SKILL_MARQUEE = [
  "React", "Next.js", "TypeScript", "Flutter", "Python", "Flask", "GraphQL",
  "PostgreSQL", "MySQL", "HNSW", "Raft", "MVCC", "System Design", "Pytest",
  "Node.js", "Prompt Engineering", "Drift Detection",
];

export const EXPERIENCE = [
  {
    role: "Software / Front-End Developer",
    org: "Coreillustrio",
    place: "Chennai – Guduvancherry, India",
    date: "06/2025 — 08/2026",
    points: [
      "Engineered cross-platform web and mobile interfaces using Flutter/Dart and React concepts, translating Figma mockups into responsive, pixel-perfect user experiences across iOS, Android, and web.",
      "Integrated REST and GraphQL APIs into frontend state architecture, optimizing application rendering speed, network data fetching, and mobile application performance.",
      "Shipped rapid feature iterations in agile sprints through Git pull-request workflows, conducting code reviews for teammates.",
    ],
  },
  {
    role: "Data Analyst Intern",
    org: "Larsen & Toubro",
    place: "Chennai – Guindy, India",
    date: "06/2023 — 07/2023",
    points: [
      "Designed and normalized relational database schemas using MySQL Workbench, resolving data inconsistencies and optimizing query structure for enterprise datasets.",
      "Presented database normalization concepts and relational data modeling solutions to engineering leadership.",
    ],
  },
];

const IMG = (name) => `${import.meta.env.BASE_URL}img/${name}`;
const REPO = "https://github.com/sivanianto123-rgb/workspace";

export const PROJECTS = [
  {
    index: "01",
    name: "ModelWatch",
    tagline: "ML Drift Detection Platform",
    year: "2026",
    image: IMG("modelwatch-dashboard.png"),
    description:
      "A full-stack platform that simulates production ML traffic and detects real-time feature drift using Population Stability Index (PSI) and Kolmogorov–Smirnov tests implemented from first principles. Trains a model, serves predictions, logs every scored request, and auto-retrains when drift crosses a configurable threshold.",
    highlights: [
      "Flask app factory with blueprinted routes for train / predict / drift / dashboard",
      "PostgreSQL schema tracking experiments, runs, prediction logs & retrain events",
      "PSI and KS tests implemented from scratch, not pulled from a library",
      "Automated retraining triggered when drifted-feature fraction exceeds a threshold",
    ],
    tags: ["Python", "Flask", "PostgreSQL", "SQLAlchemy", "Chart.js", "scikit-learn"],
    links: { source: `${REPO}/tree/main/modelwatch`, readme: `${REPO}/blob/main/modelwatch/README.md` },
  },
  {
    index: "02",
    name: "HNSW Vector Search",
    tagline: "Approximate Nearest-Neighbour Engine",
    year: "2026",
    image: IMG("vecsearch-benchmark.png"),
    description:
      "A from-scratch implementation of Hierarchical Navigable Small World (HNSW) graphs — the approximate-nearest-neighbour algorithm behind FAISS, Pinecone, Weaviate, Qdrant and pgvector — built up from an exact brute-force index through a single-layer NSW graph to the full hierarchical index.",
    highlights: [
      "Benchmarked against brute-force across 50K vectors with measured recall@10 vs. latency",
      "Up to 43x query speedup over brute force at scale, with tunable recall via ef_search",
      "Diversity-heuristic neighbour selection from the original HNSW paper",
      "CLI (vecsearch build | query | benchmark) plus a persistence layer and Pareto chart",
    ],
    tags: ["Python", "NumPy", "Data Structures", "ANN Search", "Pytest"],
    links: { source: `${REPO}/tree/main/vecsearch`, readme: `${REPO}/blob/main/vecsearch/README.md` },
  },
  {
    index: "03",
    name: "raftsim",
    tagline: "Raft Consensus Simulator",
    year: "2026",
    image: IMG("raftsim-failover.png"),
    description:
      "A dependency-free simulation of the Raft consensus algorithm — leader election, heartbeats, log replication, and crash / network-partition fault injection — running on a single-threaded simulated clock so the whole protocol is a deterministic function of its inputs.",
    highlights: [
      "Interactive REPL: kill / revive nodes, partition & heal the network, submit commands",
      "Automated tests verifying split-brain prevention and automatic leader recovery",
      "Deterministic, seedable simulation — a bug found at tick 2000 reproduces every time",
    ],
    tags: ["Python", "Distributed Systems", "Concurrency"],
    links: { source: `${REPO}/tree/main/raftsim`, readme: `${REPO}/blob/main/raftsim/README.md` },
  },
  {
    index: "04",
    name: "Repo Doctor",
    tagline: "Git Static Analysis CLI",
    year: "2026",
    image: IMG("repodoc-scan.png"),
    description:
      "A pip-installable CLI that runs pattern-based static analysis over Git repositories to flag leaked secrets, oversized files, and missing .gitignore entries — with color-coded terminal reporting, built to work as a pre-commit gate.",
    highlights: [
      "Detects AWS keys, generic API keys, hardcoded passwords & private-key blocks",
      "Shipped with a full pytest suite validating every check against fixture repos",
      "Proper exit codes (0 / 1 / 2) so it drops straight into a pre-commit hook",
    ],
    tags: ["Python", "Pytest", "Static Analysis", "Git"],
    links: { source: `${REPO}/tree/main/repodoc`, readme: `${REPO}/blob/main/repodoc/README.md` },
  },
  {
    index: "05",
    name: "txnkv",
    tagline: "WAL + MVCC Transaction Engine",
    year: "2026",
    image: IMG("txnkv-isolation.png"),
    description:
      "A transactional key-value store built from two ideas every real database relies on: a write-ahead log for crash-safe durability, and multi-version concurrency control for snapshot-isolated reads with write-write conflict detection.",
    highlights: [
      "fsync-on-every-append WAL; state rebuilds correctly from the log alone after a crash",
      "Snapshot isolation verified by test: a long-running transaction never sees a later commit",
      "\"First committer wins\" conflict detection with ConflictError on write-write races",
    ],
    tags: ["Python", "SQL", "Storage Engines", "System Design"],
    links: { source: `${REPO}/tree/main/txnkv`, readme: `${REPO}/blob/main/txnkv/README.md` },
  },
];

export const EDUCATION = {
  degree: "B.Tech in Computer Science and Engineering",
  org: "SRM Institute of Science and Technology",
  place: "Kattankulathur, Tamil Nadu",
  date: "01/2021 — 12/2025",
  meta: "CGPA: 7.38",
};

export const CERTIFICATIONS = [
  { name: "IBM AI Developer Professional Certificate", org: "Coursera" },
  { name: "Developing AI Applications with Python & Flask", org: "Coursera" },
  { name: "Building AI Powered Chatbots Without Programming", org: "Coursera" },
  { name: "Python for Data Science, AI Development", org: "AWS" },
  { name: "Introduction to AI", org: "Coursera" },
];
