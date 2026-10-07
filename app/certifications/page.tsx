import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";
import { certifications } from "@/data";

export const metadata: Metadata = {
  title: "Certifications & Training",
  description:
    "Training and certifications in medical virtual assistance, Shopify, GoHighLevel, funnel design and digital marketing.",
  alternates: { canonical: "/certifications" },
};

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Certifications"
        title="Training behind the work"
        intro="Training across medical virtual assistance, Shopify, GoHighLevel, funnel design and digital marketing."
      />
      <section>
        <Container className="py-16 sm:py-24">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) =>
              c.status === "pending" ? (
                <li
                  key={c.name}
                  className="rounded-2xl border border-dashed border-clay/50 bg-ivory-deep/60 p-6"
                >
                  <span
                    aria-hidden="true"
                    className="mb-4 block h-1 w-10 rounded-full bg-sand"
                  />
                  <p className="font-serif text-xl leading-snug text-ink">
                    {c.name}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Updated certificate coming soon
                  </p>
                </li>
              ) : (
                <li
                  key={c.name}
                  className="rounded-2xl border border-line bg-white/60 p-6"
                >
                  {c.image && (
                    <Image
                      src={c.image.src}
                      alt={c.image.alt}
                      width={640}
                      height={450}
                      className="mb-5 w-full rounded-lg border border-line"
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className="mb-4 block h-1 w-10 rounded-full bg-clay"
                  />
                  <p className="font-serif text-xl leading-snug text-ink">
                    {c.name}
                  </p>
                  {(c.issuer || c.date) && (
                    <p className="mt-2 text-sm text-muted">
                      {[c.issuer, c.date].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </li>
              ),
            )}
          </ul>
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
