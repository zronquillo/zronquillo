import Container from "./Container";

export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-line bg-ivory-deep/60">
      <Container className="py-16 sm:py-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-clay">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl leading-[1.1] text-ink sm:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            {intro}
          </p>
        )}
      </Container>
    </section>
  );
}
