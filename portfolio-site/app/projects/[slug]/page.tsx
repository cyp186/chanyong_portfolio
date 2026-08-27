import { readdir } from "node:fs/promises";
import { join } from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../site-footer";
import { SiteNav } from "../../site-nav";
import { getProject, projects, type Screenshot } from "../../../lib/projects";
import { ProjectGallery } from "./gallery";
import { ProjectWalkthrough } from "./walkthrough";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const IMAGE_PATTERN = /\.(png|jpe?g|webp|gif|avif)$/i;

function labelFromFilename(file: string) {
  return file
    .replace(/\.[^.]+$/, "")
    .replace(/^\d+[-_\s]*/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

async function listImageFiles(slug: string) {
  const directory = join(process.cwd(), "public", "projects", slug);

  try {
    const files = await readdir(directory);
    return files.filter((file) => IMAGE_PATTERN.test(file));
  } catch {
    return [];
  }
}

function resolveShots(slug: string, shots: Screenshot[] | undefined, fileSet: Set<string>) {
  return (shots ?? [])
    .filter((shot) => fileSet.has(shot.file))
    .map((shot) => ({
      src: `/projects/${slug}/${encodeURIComponent(shot.file)}`,
      alt: shot.caption,
    }));
}

async function getWalkthrough(project: NonNullable<ReturnType<typeof getProject>>) {
  if (!project.walkthrough) return null;

  const files = await listImageFiles(project.slug);
  const fileSet = new Set(files);
  const { walkthrough } = project;

  return {
    title: walkthrough.title,
    intro: walkthrough.intro,
    introShots: resolveShots(project.slug, walkthrough.introShots, fileSet),
    sections: walkthrough.sections.map((section) => ({
      title: section.title,
      paragraphs: section.paragraphs,
      bullets: section.bullets,
      table: section.table,
      afterTable: section.afterTable,
      flow: section.flow,
      tail: section.tail,
      shots: resolveShots(project.slug, section.shots, fileSet),
    })),
    closingTitle: walkthrough.closingTitle,
    closing: walkthrough.closing,
  };
}
async function getScreenshotGroups(project: NonNullable<ReturnType<typeof getProject>>) {
  const files = await listImageFiles(project.slug);
  const fileSet = new Set(files);

  if (project.screenshotGroups?.length) {
    return project.screenshotGroups
      .map((group) => ({
        title: group.title,
        note: group.note,
        shots: group.shots
          .filter((shot) => fileSet.has(shot.file))
          .map((shot) => ({
            src: `/projects/${project.slug}/${encodeURIComponent(shot.file)}`,
            alt: shot.caption,
          })),
      }))
      .filter((group) => group.shots.length > 0);
  }

  return files.length
    ? [
        {
          title: "Screenshots",
          note: "A closer look at the interface and workflow.",
          shots: files
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
            .map((file) => ({
              src: `/projects/${project.slug}/${file}`,
              alt: labelFromFilename(file),
            })),
        },
      ]
    : [];
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} — Chanyong`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const walkthrough = await getWalkthrough(project);
  const groups = walkthrough ? [] : await getScreenshotGroups(project);

  return (
    <main>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <SiteNav />

      <article className={`project-page project-${project.accent}`}>
        <header className="project-page-hero section-shell">
          <a className="back-link reveal" href="/#work">
            ← Back to work
          </a>
          <p className="kicker reveal delay-one">
            {project.number} · {project.eyebrow}
          </p>
          <h1 className="reveal delay-two">{project.title}</h1>
          <p className="project-page-lead reveal delay-three">
            {project.description}
          </p>
          <p className="project-page-note reveal">{project.contribution}</p>
          <div className="project-page-meta reveal delay-one">
            <ul aria-label={`${project.title} technologies`}>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              className="button button-secondary"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>

        {walkthrough ? (
          <ProjectWalkthrough content={walkthrough} />
        ) : (
          <section className="section-shell project-shots">
            <ProjectGallery groups={groups} />
          </section>
        )}
      </article>

      <SiteFooter />
    </main>
  );
}
