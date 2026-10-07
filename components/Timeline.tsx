import type { ExperiencePeriod } from "@/data";

export default function Timeline({ items }: { items: ExperiencePeriod[] }) {
  return (
    <ol className="relative border-l border-line">
      {items.map((p) => (
        <li key={p.period} className="relative pb-14 pl-8 last:pb-0 sm:pl-12">
          <span
            aria-hidden="true"
            className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-clay bg-ivory"
          />
          <p className="font-serif text-xl text-clay">{p.period}</p>
          <h3 className="mt-1 text-2xl leading-snug text-ink sm:text-3xl">
            {p.title}
          </h3>
          <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">
            {p.summary}
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {p.itemsLabel}
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {p.items.map((i) => (
              <li
                key={i}
                className="rounded-full bg-ivory-deep px-3.5 py-1.5 text-sm text-ink-soft"
              >
                {i}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
