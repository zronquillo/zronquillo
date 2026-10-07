import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import PortraitSlot from "@/components/PortraitSlot";
import ContactCTA from "@/components/ContactCTA";
import { aboutStory, careerProgression } from "@/data";

export const metadata: Metadata = {
  title: { absolute: "About Zi Ronquillo | Healthcare & Digital Growth Specialist" },
  description:
    "From global customer experience to digital design, Shopify, social media, GoHighLevel funnels and healthcare digital support: the background behind Zi Ronquillo's work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title={aboutStory.lead} />

      <section>
        <Container className="grid gap-14 py-16 sm:py-24 md:grid-cols-[2fr_1fr] md:gap-20">
          <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
            {aboutStory.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="border-l-2 border-clay pl-5 text-base text-muted">
              {aboutStory.note}
            </p>
          </div>
          <div className="md:sticky md:top-28 md:self-start">
            <PortraitSlot alt="Portrait of Zipporah “Zi” Ronquillo" />
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-ivory-deep/60">
        <Container className="py-16 sm:py-24">
          <h2 className="text-3xl text-ink sm:text-4xl">The progression</h2>
          <ol className="mt-10 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
            {careerProgression.map((step, i) => (
              <li key={step} className="flex items-center gap-3">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden text-clay md:inline"
                  >
                    →
                  </span>
                )}
                <span className="rounded-full border border-line bg-ivory px-5 py-2.5 font-serif text-lg text-ink">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
