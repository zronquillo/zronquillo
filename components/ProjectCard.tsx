import Image from "next/image";
import type { Project } from "@/data";

export default function ProjectCard({
  project,
  titleHref,
}: {
  project: Project;
  /** When set, the title becomes the card's single external link; its hit area stretches over the whole card. */
  titleHref?: string;
}) {
  const initials = project.name
    .split(/[\s&-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <article className={`flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white/60 transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_rgba(28,26,23,0.35)]${titleHref ? " relative" : ""}`}>
      {project.image ? (
        <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-ivory-deep px-4 py-5">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={800}
            height={500}
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
            className="h-[86%] w-auto max-w-full object-contain drop-shadow-[0_5px_12px_rgba(28,26,23,0.16)] transition-transform duration-[280ms] ease-out"
          />
        </div>
      ) : (
        <div
          className="flex aspect-[16/10] items-center justify-center bg-ivory-deep"
          aria-hidden="true"
        >
          <span className="font-serif text-5xl text-clay">{initials}</span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
          {project.categoryLabel ?? project.category}
        </p>
        <h3 className="mt-2 text-xl leading-snug text-ink">
          {titleHref ? (
            <a
              href={titleHref}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none!"
            >
              {project.name}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            project.name
          )}
        </h3>
        <p className="mt-2 leading-relaxed text-ink-soft">
          {project.description}
        </p>
        {project.highlights && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Highlights">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="rounded-full bg-ivory-deep px-3 py-1 text-sm text-ink-soft"
              >
                {h}
              </li>
            ))}
          </ul>
        )}
        {(project.role || project.services || project.tools) && (
          <dl className="mt-4 space-y-1 text-sm text-ink-soft">
            {project.role && (
              <div>
                <dt className="inline font-semibold">Role: </dt>
                <dd className="inline">{project.role}</dd>
              </div>
            )}
            {project.services && (
              <div>
                <dt className="inline font-semibold">Services: </dt>
                <dd className="inline">{project.services.join(", ")}</dd>
              </div>
            )}
            {project.tools && (
              <div>
                <dt className="inline font-semibold">Tools: </dt>
                <dd className="inline">{project.tools.join(", ")}</dd>
              </div>
            )}
          </dl>
        )}
        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm font-semibold text-clay-deep underline underline-offset-4 hover:text-clay"
          >
            {project.link.label} ↗
          </a>
        )}
      </div>
    </article>
  );
}
