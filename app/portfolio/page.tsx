import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import ContactCTA from "@/components/ContactCTA";
import { projectCategories, projects } from "@/data";

export const metadata: Metadata = {
  title: { absolute: "Portfolio: Healthcare, Social Media & E-commerce | Zi Ronquillo" },
  description:
    "Selected work by Zi Ronquillo: healthcare websites, social media content, Shopify and e-commerce stores, and GoHighLevel funnels and automation.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected work"
        intro="Projects grouped by what they do: healthcare, social media, e-commerce, and funnels & automation."
      />

      {projectCategories.map((cat, i) => {
        const items = projects.filter((p) => p.category === cat.id);
        return (
          <section
            key={cat.id}
            aria-labelledby={`cat-${i}`}
            className={i % 2 === 1 ? "border-y border-line bg-ivory-deep/60" : ""}
          >
            <Container className="py-16 sm:py-20">
              <h2 id={`cat-${i}`} className="text-3xl text-ink sm:text-4xl">
                {cat.id}
              </h2>
              <p className="mt-3 text-lg text-ink-soft">{cat.intro}</p>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <ContactCTA />
    </>
  );
}
