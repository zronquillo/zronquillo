import { activeSocialLinks } from "@/data";

export default function SocialLinks({
  tone = "light",
  heading,
}: {
  tone?: "light" | "dark";
  heading?: string;
}) {
  if (activeSocialLinks.length === 0) return null;
  const link =
    tone === "dark"
      ? "text-ivory/85 hover:text-white"
      : "text-ink-soft hover:text-clay-deep";
  return (
    <nav aria-label={heading ?? "Social profiles"}>
      {heading && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
            tone === "dark" ? "text-sand" : "text-clay"
          }`}
        >
          {heading}
        </p>
      )}
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {activeSocialLinks.map((s) => (
          <li key={s.platform}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer me"
              aria-label={`${s.label} (opens in a new tab)`}
              className={`inline-flex min-h-8 items-center underline-offset-4 hover:underline ${link}`}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
