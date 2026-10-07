export default function SectionHeading({
  eyebrow,
  title,
  intro,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-clay">
          {eyebrow}
        </p>
      )}
      <Tag className="text-3xl leading-tight text-ink sm:text-4xl">{title}</Tag>
      {intro && (
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p>
      )}
    </div>
  );
}
