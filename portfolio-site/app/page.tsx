import { SiteFooter } from "./site-footer";
import { SiteNav } from "./site-nav";
import { projects } from "../lib/projects";

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

      <SiteNav home />

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
        <div className="hero-index reveal delay-three" aria-hidden="true">
          <span>FULL-STACK</span>
          <span>AI SYSTEMS</span>
          <span>DATA PRODUCTS</span>
        </div>
      </section>

      <section className="projects section-shell" id="work">
        <div className="section-heading reveal">
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
          {projects.map((project, index) => (
            <article
              className={`project-card project-${project.accent} reveal delay-${["one", "two", "three"][index]}`}
              key={project.slug}
            >
              <div className="project-topline">
                <span>{project.number}</span>
                <span>{project.eyebrow}</span>
              </div>
              <div className="project-main">
                <div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <a
                    className="button button-secondary project-shots-button"
                    href={`/projects/${project.slug}`}
                  >
                    View screenshots
                  </a>
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
        <div className="about-intro reveal">
          <p className="kicker">How I work</p>
          <h2>
            Curious about the details.
            <span>Focused on the outcome.</span>
          </h2>
        </div>
        <div className="about-copy reveal delay-one">
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
          {capabilities.map((capability, index) => (
            <div
              className={`capability reveal delay-${["one", "two", "three"][index]}`}
              key={capability.label}
            >
              <span>{capability.label}</span>
              <p>{capability.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <p className="kicker reveal">Let’s connect</p>
        <h2 className="reveal delay-one">
          Have an opportunity or an idea worth building?
        </h2>
        <div className="contact-bottom reveal delay-two">
          <p>I’d love to hear about it.</p>
          <a className="email-link" href="mailto:chanyongpark199@gmail.com">
            chanyongpark199@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <SiteFooter home />
    </main>
  );
}
