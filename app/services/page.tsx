import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import ContactCTA from "@/components/ContactCTA";
import { services, toolGroups } from "@/data";

export const metadata: Metadata = {
  title: { absolute: "Services: Social Media, Healthcare VA, Shopify, GoHighLevel" },
  description:
    "Social media marketing, healthcare / medical virtual assistance, Shopify and e-commerce, GoHighLevel CRM and automation, and WordPress website development.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What I can help you with"
        intro="Pick one area or combine them. Working across all five keeps your content, store, website and follow-up consistent with each other."
      />

      <section>
        <Container className="py-16 sm:py-24">
          <h2 className="sr-only">Service areas</h2>
          <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} detailed />
          ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-ivory-deep/60">
        <Container className="py-16 sm:py-24">
          <h2 className="text-3xl text-ink sm:text-4xl">Tools I work with</h2>
          <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {toolGroups.map((g) => (
              <div key={g.group}>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                  {g.group}
                </dt>
                <dd className="mt-3 text-ink-soft">{g.tools.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
