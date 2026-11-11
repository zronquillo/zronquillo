"use client";

import Image from "next/image";
import { useState } from "react";
import Container from "@/components/Container";
import {
  filterIntros,
  portfolioFeatured,
  portfolioFilters,
  projectCategories,
  projects,
  websiteProjectSlugs,
  type PortfolioFilter,
  type Project,
} from "@/data";

type Selection = "All" | PortfolioFilter;

function matches(p: Project, f: Selection) {
  if (f === "All") return true;
  if (f === "Websites") return websiteProjectSlugs.includes(p.slug);
  return p.category === f;
}

function PortfolioCard({ project }: { project: Project }) {
  const feat = portfolioFeatured[project.slug];
  const eyebrow = feat?.label ?? project.categoryLabel ?? project.category;
  const tags = feat?.tags ?? project.highlights;

  const body = (
    <div className="flex flex-1 flex-col p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
        {eyebrow}
      </p>
      <h3 className="mt-2 text-xl leading-snug text-ink">
        {feat ? (
          <a
            href={feat.url}
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
      <p className="mt-2 leading-relaxed text-ink-soft">{project.description}</p>
      {tags && (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tags">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-full bg-ivory-deep px-3 py-1 text-sm text-ink-soft"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  if (feat) {
    return (
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white/60 transition-[background-color,border-color,transform,box-shadow] duration-[280ms] ease-out hover:-translate-y-[3px] hover:border-clay/50 hover:bg-sand/70 hover:shadow-[0_8px_20px_-14px_rgba(28,26,23,0.25)] has-[a:focus-visible]:-translate-y-[3px] has-[a:focus-visible]:border-clay/50 has-[a:focus-visible]:bg-sand/70 has-[a:focus-visible]:shadow-[0_8px_20px_-14px_rgba(28,26,23,0.25)] has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-clay">
        <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-ivory-deep px-4 py-5">
          <Image
            src={feat.image.src}
            alt={feat.image.alt}
            width={800}
            height={500}
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
            className="h-[86%] w-auto max-w-full object-contain drop-shadow-[0_5px_12px_rgba(28,26,23,0.16)] transition-transform duration-[280ms] ease-out group-hover:scale-[1.03]"
          />
        </div>
        {body}
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white/60">
      {body}
    </article>
  );
}

export default function PortfolioBrowser() {
  const [selected, setSelected] = useState<Selection>("All");

  const total = projects.length;
  const count = (f: Selection) => projects.filter((p) => matches(p, f)).length;

  const groups =
    selected === "All"
      ? projectCategories.map((c) => ({
          id: c.id as PortfolioFilter,
          intro: c.intro,
          items: projects.filter((p) => p.category === c.id),
        }))
      : [
          {
            id: selected,
            intro: filterIntros[selected],
            items: projects.filter((p) => matches(p, selected)),
          },
        ];

  const options: Selection[] = ["All", ...portfolioFilters];

  return (
    <>
      <section className="border-b border-line">
        <Container className="py-6">
          <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
            {options.map((o) => {
              const active = o === selected;
              return (
                <button
                  key={o}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelected(o)}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-5 text-[0.95rem] transition-colors duration-200 ${
                    active
                      ? "border-ink bg-ink text-ivory"
                      : "border-line bg-ivory text-ink-soft hover:border-clay hover:text-clay-deep"
                  }`}
                >
                  {o}
                  <span className={active ? "text-sand" : "text-muted"}>
                    {count(o)}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="sr-only" aria-live="polite">
            Showing {count(selected)} of {total} projects
            {selected === "All" ? "" : ` in ${selected}`}.
          </p>
        </Container>
      </section>

      {groups.map((g, i) => (
        <section
          key={g.id}
          aria-labelledby={`group-${i}`}
          className={i % 2 === 1 ? "border-y border-line bg-ivory-deep/60" : ""}
        >
          <Container className="py-14 sm:py-20">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h2 id={`group-${i}`} className="text-3xl text-ink sm:text-4xl">
                {g.id}
              </h2>
              <p className="text-sm text-muted">
                {g.items.length} {g.items.length === 1 ? "project" : "projects"}
              </p>
            </div>
            <p className="mt-3 max-w-2xl text-lg text-ink-soft">{g.intro}</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {g.items.map((p) => (
                <PortfolioCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
