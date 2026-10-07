"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the menu when the route changes (adjust state during render)
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-ink"
          aria-label={`${site.shortName} — home`}
        >
          Zi <span className="text-clay">Ronquillo</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav
              .filter((n) => n.href !== "/")
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`text-sm transition-colors hover:text-clay ${
                      isActive(item.href)
                        ? "font-semibold text-clay-deep underline decoration-clay decoration-2 underline-offset-8"
                        : "text-ink-soft"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="relative z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-ink transition-all duration-200 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-ink transition-all duration-200 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>
    </header>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 overflow-y-auto bg-ivory pt-20 lg:hidden"
      >
        <nav aria-label="Mobile" className="px-5 pb-10 sm:px-8">
          <ul className="divide-y divide-line border-y border-line">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex min-h-16 items-center justify-between font-serif text-2xl ${
                    isActive(item.href) ? "text-clay-deep" : "text-ink"
                  }`}
                >
                  {item.label}
                  <span aria-hidden="true" className="text-clay">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
