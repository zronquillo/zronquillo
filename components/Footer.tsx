import Link from "next/link";
import Container from "./Container";
import SocialLinks from "./SocialLinks";
import { contact, nav, site } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-ivory">
      <Container className="grid gap-10 py-14 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl">{site.name}</p>
          <p className="mt-2 text-ivory/80">
            Healthcare &amp; Digital Growth Specialist
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sand">
            Explore
          </p>
          <ul className="space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-ivory/85 hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sand">
            Contact
          </p>
          <ul className="space-y-2 text-ivory/85">
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-white">
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp {contact.whatsappDisplay}
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <SocialLinks tone="dark" heading="Social" />
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-5 text-sm text-ivory/70">
          © {new Date().getFullYear()} {site.name}
        </Container>
      </div>
    </footer>
  );
}
