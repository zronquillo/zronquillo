import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex min-h-12 items-center justify-center rounded-full px-7 text-[0.95rem] font-medium transition-colors duration-200";

const variants = {
  primary: "bg-ink text-ivory hover:bg-clay-deep",
  secondary:
    "border border-ink/30 text-ink hover:border-clay hover:text-clay-deep",
} as const;

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
}) {
  const cls = `${base} ${variants[variant]}`;
  if (external || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
