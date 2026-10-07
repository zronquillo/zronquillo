import type { Service } from "@/data";

export default function ServiceCard({
  service,
  detailed = false,
}: {
  service: Service;
  detailed?: boolean;
}) {
  return (
    <article
      id={service.slug}
      className="flex h-full scroll-mt-24 flex-col rounded-2xl border border-line bg-white/60 p-7 transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_rgba(28,26,23,0.35)]"
    >
      <p className="font-serif text-3xl text-clay" aria-hidden="true">
        {service.number}
      </p>
      <h3 className="mt-3 text-2xl leading-snug text-ink">{service.title}</h3>
      <p className="mt-3 leading-relaxed text-ink-soft">{service.summary}</p>
      {detailed && (
        <>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft">
            <span className="font-semibold text-ink">Helpful if you need: </span>
            {service.helpsWith}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Capabilities">
            {service.capabilities.map((c) => (
              <li
                key={c}
                className="rounded-full bg-ivory-deep px-3 py-1.5 text-sm text-ink-soft"
              >
                {c}
              </li>
            ))}
          </ul>
          {service.platforms && (
            <p className="mt-5 text-sm text-muted">
              <span className="font-semibold text-ink-soft">Platforms: </span>
              {service.platforms.join(" · ")}
            </p>
          )}
          {service.note && (
            <p className="mt-5 border-l-2 border-clay pl-4 text-sm leading-relaxed text-muted">
              {service.note}
            </p>
          )}
        </>
      )}
    </article>
  );
}
