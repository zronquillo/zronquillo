import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Timeline from "@/components/Timeline";
import ContactCTA from "@/components/ContactCTA";
import { experience } from "@/data";

export const metadata: Metadata = {
  title: "Experience & Background",
  description:
    "Global customer experience and operations, then freelance digital and e-commerce work, now focused on healthcare and digital growth.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="A foundation in customer experience"
        intro="Operations first, then digital. That order is why the work is built around people."
      />
      <section>
        <Container className="py-16 sm:py-24">
          <h2 className="sr-only">Career timeline</h2>
          <Timeline items={experience} />
        </Container>
      </section>
      <ContactCTA />
    </>
  );
}
