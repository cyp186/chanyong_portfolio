const projects = [
  {
    number: "01",
    title: "RentMate",
    eyebrow: "Property management platform",
    description:
      "A full-stack rental management system that brings maintenance requests, property bookings and tenant communication into one reliable workflow.",
    contribution:
      "Led delivery as Scrum Master, built core React experiences and strengthened the application with automated testing and CI/CD.",
    stack: ["React", "Spring Boot", "Java 21", "Neon", "Docker"],
    href: "https://github.com/cyp186/rentmate_property_management",
    accent: "lime",
  },
  {
    number: "02",
    title: "AI Business Assistant",
    eyebrow: "AI-assisted enquiry management",
    description:
      "A secure workspace for small businesses to manage enquiries and draft knowledge-grounded responses with selectable tone and human approval.",
    contribution:
      "Designed role-based data isolation, email verification, analytics and a modular API architecture around an approval-first AI workflow.",
    stack: ["React", "FastAPI", "PostgreSQL", "OpenAI", "Alembic"],
    href: "https://github.com/cyp186/ai-sme-assistant",
    accent: "violet",
  },
  {
    number: "03",
    title: "Atelier Clothing Recommendation",
    eyebrow: "Flask data application",
    description:
      "A full-stack NLP application that predicts whether a customer would recommend a clothing item based on review text.",
    contribution:
      "Built database-backed filters, aggregate queries, and adaptive visualisations.",
    stack: ["Python", "Flask", "SQLite", "HTML", "CSS"],
    href: "https://github.com/cyp186/atelier_clothing_recommendation",
    accent: "cyan",
  },
];

const capabilities = [
  {
    label: "Build",
    items: "React · Java · Python · Spring Boot · FastAPI · Flask",
  },
  {
    label: "Data",
    items: "PostgreSQL · Neon · SQLite · SQLAlchemy · Alembic",
  },
  {
    label: "Quality",
    items: "JUnit · Mockito · Jest · GitHub Actions · Docker",
  },
];

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Chanyong, home">
          CY<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a
          className="nav-cta"
          href="https://github.com/cyp186"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero section-shell" id="top">
        <div className="availability reveal">
          <span className="status-dot" /> Software Engineering / Data Science 
        </div>
        <h1 className="hero-title reveal delay-one">
          I build software that turns
          <span>complex ideas into clear experiences.</span>
        </h1>
        <div className="hero-bottom reveal delay-two">
          <p>
            I’m <strong>Chanyong</strong>, a software engineering student in
            Melbourne focused on thoughtful full-stack products, practical AI
            and data-driven systems.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/cyp186"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>FULL-STACK</span>
          <span>AI SYSTEMS</span>
          <span>DATA PRODUCTS</span>
        </div>
      </section>

      <section className="projects section-shell" id="work">
        <div className="section-heading">
          <div>
            <p className="kicker">Selected work</p>
            <h2>Projects built with purpose.</h2>
          </div>
          <p className="section-note">
            A selection of products where I combined engineering, product
            thinking and team delivery.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article
              className={`project-card project-${project.accent}`}
              key={project.title}
            >
              <div className="project-topline">
                <span>{project.number}</span>
                <span>{project.eyebrow}</span>
              </div>
              <div className="project-main">
                <div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <a
                  className="project-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} on GitHub`}
                >
                  ↗
                </a>
              </div>
              <div className="project-bottom">
                <p>{project.contribution}</p>
                <ul aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-intro">
          <p className="kicker">How I work</p>
          <h2>
            Curious about the details.
            <span>Focused on the outcome.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            Through university and independent projects, I’ve worked across the
            full development lifecycle—from shaping requirements and designing
            data models to implementation, testing and team delivery.
          </p>
          <p>
            I care about maintainable code and interfaces that feel obvious to
            use. I’m now looking for an internship where I can contribute,
            learn from experienced engineers and keep building useful software.
          </p>
        </div>

        <div className="capabilities">
          {capabilities.map((capability) => (
            <div className="capability" key={capability.label}>
              <span>{capability.label}</span>
              <p>{capability.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <p className="kicker">Let’s connect</p>
        <h2>Have an opportunity or an idea worth building?</h2>
        <div className="contact-bottom">
          <p>I’d love to hear about it.</p>
          <a className="email-link" href="mailto:chanyongpark199@gmail.com">
            chanyongpark199@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <p>© 2026 Chanyong. Built with care.</p>
        <div>
          <a
            href="https://www.linkedin.com/in/chanyong-park-4b2416355/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/cyp186"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
