import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SocialLinks from "@/components/SocialLinks";
import { contact } from "@/data";

export const metadata: Metadata = {
  title: { absolute: "Contact Zi Ronquillo | Healthcare & Digital Growth Specialist" },
  description:
    "Hiring for a role or looking for freelance support? Contact Zi Ronquillo, a healthcare & digital growth specialist, by email or WhatsApp.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={contact.headline}
        intro={`${contact.message} Whether it's a freelance project or a role on your team, email or WhatsApp is the quickest way to reach me.`}
      />
      <section>
        <Container className="py-16 sm:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.emailSubject)}`}
              className="block rounded-2xl border border-line bg-white/60 p-8 transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(28,26,23,0.35)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                Email
              </p>
              <p className="mt-3 break-all font-serif text-2xl text-ink">
                {contact.email}
              </p>
            </a>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-line bg-white/60 p-8 transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(28,26,23,0.35)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                WhatsApp
              </p>
              <p className="mt-3 font-serif text-2xl text-ink">
                {contact.whatsappDisplay}
              </p>
            </a>
          </div>
          <div className="mt-12">
            <SocialLinks heading="Elsewhere online" />
          </div>
          <div className="mt-10">
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.emailSubject)}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 text-[0.95rem] font-medium text-ivory transition-colors duration-200 hover:bg-clay-deep"
            >
              {contact.cta}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
