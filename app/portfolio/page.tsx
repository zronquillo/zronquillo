import type { Metadata } from "next";
import Container from "@/components/Container";
import PortfolioBrowser from "@/components/PortfolioBrowser";
import ContactCTA from "@/components/ContactCTA";
import { portfolioHero } from "@/data";

export const metadata: Metadata = {
  title: { absolute: "Portfolio: Healthcare, Social Media & E-commerce | Zi Ronquillo" },
  description:
    "Selected work by Zi Ronquillo: healthcare websites, social media content, Shopify and e-commerce stores, and GoHighLevel funnels and automation.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-line bg-ivory-deep/60">
        <Container className="py-16 sm:py-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-clay">
            {portfolioHero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            {portfolioHero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            {portfolioHero.intro}
          </p>
        </Container>
      </section>

      <PortfolioBrowser />

      <ContactCTA />
    </>
  );
}
