import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import ContactCTA from "@/components/ContactCTA";
import { servicesPage } from "@/data";

export const metadata: Metadata = {
  title: { absolute: "Services: Social Media, Healthcare VA, Shopify, GoHighLevel" },
  description:
    "Social media marketing, healthcare / medical virtual assistance, Shopify and e-commerce, GoHighLevel CRM and automation, and WordPress website development.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const { hero, positioning, sections, together, healthcare } = servicesPage;

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-ivory-deep/60">
        <Container className="py-16 sm:py-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-clay">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            {hero.intro}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Let&apos;s Work Together</Button>
            <Button href="/portfolio" variant="secondary">
              View My Work
            </Button>
          </div>
        </Container>
      </section>

      {/* Positioning + quick index */}
      <section aria-labelledby="positioning-heading">
        <Container className="grid gap-12 py-16 sm:py-20 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <h2 id="positioning-heading" className="text-3xl leading-tight text-ink sm:text-4xl">
              {positioning.heading}
            </h2>
            <div className="mt-5 max-w-xl space-y-4 text-lg leading-relaxed text-ink-soft">
              {positioning.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <nav aria-label="Service areas">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-clay">
              Five service areas
            </p>
            <ol className="divide-y divide-line border-y border-line">
              {sections.map((s) => (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    className="flex min-h-12 items-baseline gap-4 py-3 text-ink-soft transition-colors hover:text-clay-deep"
                  >
                    <span className="font-serif text-lg text-clay" aria-hidden="true">
                      {s.number}
                    </span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </Container>
      </section>

      {/* Five service sections */}
      {sections.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          aria-labelledby={`${s.slug}-title`}
          className={`scroll-mt-16 border-t border-line ${
            i % 2 === 0 ? "bg-ivory-deep/60" : ""
          }`}
        >
          <Container className="grid gap-10 py-16 sm:py-20 md:grid-cols-[1fr_1.15fr] md:gap-16">
            <div>
              <p className="font-serif text-4xl text-clay" aria-hidden="true">
                {s.number}
              </p>
              <h2
                id={`${s.slug}-title`}
                className="mt-3 text-3xl leading-tight text-ink sm:text-4xl"
              >
                {s.title}
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
                {s.description}
              </p>
              {s.note && (
                <p className="mt-6 max-w-md border-l-2 border-clay pl-5 text-base leading-relaxed text-muted">
                  {s.note}
                </p>
              )}
              <Link
                href="/contact"
                className="mt-7 inline-flex min-h-12 items-center text-[0.95rem] font-semibold text-clay-deep underline underline-offset-4 hover:text-clay"
              >
                Discuss this service
                <span className="sr-only">: {s.title}</span>
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                What this includes
              </h3>
              <ul className="grid gap-x-8 sm:grid-cols-2">
                {s.capabilities.map((c) => (
                  <li
                    key={c}
                    className="flex gap-3 border-t border-line py-3 text-ink-soft"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-clay"
                    />
                    {c}
                  </li>
                ))}
              </ul>
              {s.platforms && (
                <p className="mt-6 text-sm text-muted">
                  <span className="font-semibold text-ink-soft">Platforms: </span>
                  {s.platforms.join(" · ")}
                </p>
              )}
            </div>
          </Container>
        </section>
      ))}

      {/* How the services work together */}
      <section
        aria-labelledby="together-heading"
        className="border-t border-line"
      >
        <Container className="py-16 sm:py-24">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-clay">
            {together.eyebrow}
          </p>
          <h2 id="together-heading" className="max-w-2xl text-3xl leading-tight text-ink sm:text-4xl">
            {together.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {together.intro}
          </p>
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {together.steps.map((step, i) => (
              <li key={step.label} className="rounded-2xl border border-line bg-white/60 p-6">
                <span className="font-serif text-2xl text-clay" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-xl leading-snug text-ink">
                  {step.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {step.text}
                </p>
                <p className="mt-4 text-xs leading-relaxed text-muted">{step.area}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Healthcare focus */}
      <section
        aria-labelledby="healthcare-heading"
        className="border-y border-line bg-ivory-deep/60"
      >
        <Container className="grid gap-10 py-16 sm:py-20 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-clay">
              {healthcare.eyebrow}
            </p>
            <h2 id="healthcare-heading" className="text-3xl leading-tight text-ink sm:text-4xl">
              {healthcare.heading}
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-ink-soft">{healthcare.body}</p>
            <p className="mt-6 border-l-2 border-clay pl-5 text-base leading-relaxed text-muted">
              {healthcare.boundary}
            </p>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
