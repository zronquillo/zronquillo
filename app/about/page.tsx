import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import PortraitSlot from "@/components/PortraitSlot";
import ContactCTA from "@/components/ContactCTA";
import {
  aboutPage,
  aboutStory,
  careerProgression,
  hero,
  services,
} from "@/data";

export const metadata: Metadata = {
  title: { absolute: "About Zi Ronquillo | Healthcare & Digital Growth Specialist" },
  description:
    "From global customer experience to digital design, Shopify, social media, GoHighLevel funnels and healthcare digital support: the background behind Zi Ronquillo's work.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="border-b border-line bg-ivory-deep/60">
        <Container className="grid items-center gap-12 py-16 sm:py-24 md:grid-cols-[1.5fr_1fr] md:gap-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-clay">
              About
            </p>
            <h1 className="max-w-3xl text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              {aboutStory.lead}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              {hero.message}
            </p>
            <p className="mt-8 font-serif text-lg text-ink">
              {hero.name}
              <span className="text-clay"> · </span>
              <span className="text-ink-soft">{hero.title}</span>
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/portfolio">View My Work</Button>
              <Button href="/contact" variant="secondary">
                Let&apos;s Work Together
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[16rem] md:max-w-none">
            <PortraitSlot alt="Portrait of Zipporah “Zi” Ronquillo" />
          </div>
        </Container>
      </section>

      {/* Story */}
      <section>
        <Container className="py-16 sm:py-24">
          <SectionHeading eyebrow="My story" title="From customer experience to digital growth" />
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {aboutPage.storyBlocks.map((b, i) => (
              <div key={b.heading} className="border-t border-line pt-6">
                <p className="font-serif text-2xl text-clay">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl text-ink">{b.heading}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{b.text}</p>
              </div>
            ))}
          </div>
          <blockquote className="mt-14 max-w-3xl border-l-2 border-clay pl-6 font-serif text-2xl leading-snug text-ink sm:text-3xl">
            {aboutPage.closingLine}
          </blockquote>
        </Container>
      </section>

      {/* Progression */}
      <section className="border-y border-line bg-ivory-deep/60">
        <Container className="py-16 sm:py-24">
          <SectionHeading eyebrow="The progression" title="How the work built on itself" />
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {careerProgression.map((step, i) => (
              <li
                key={step}
                className="rounded-2xl border border-line bg-ivory p-5"
              >
                <span className="font-serif text-xl text-clay" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 font-serif text-lg leading-snug text-ink">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Creative + technical + operational */}
      <section>
        <Container className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="How I work"
            title="Creative, technical and operational, together"
            intro="Most projects need all three. Having them in one person keeps content, website and follow-up consistent."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {aboutPage.pillars.map((p) => (
              <article
                key={p.label}
                className="rounded-2xl border border-line bg-white/60 p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                  {p.label}
                </p>
                <h3 className="mt-3 text-2xl leading-snug text-ink">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{p.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Healthcare focus */}
      <section
        aria-labelledby="healthcare-heading"
        className="border-y border-line bg-ivory-deep/60"
      >
        <Container className="grid gap-12 py-16 sm:py-24 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-clay">
              Specialization
            </p>
            <h2 id="healthcare-heading" className="text-3xl leading-tight text-ink sm:text-4xl">
              {aboutPage.healthcare.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              {aboutPage.healthcare.lead}
            </p>
          </div>
          <div>
            <ul className="flex flex-wrap gap-2" aria-label="Healthcare support areas">
              {aboutPage.healthcare.areas.map((a) => (
                <li
                  key={a}
                  className="rounded-full border border-line bg-ivory px-4 py-2 text-ink-soft"
                >
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-8 border-l-2 border-clay pl-5 text-base leading-relaxed text-muted">
              {aboutPage.healthcare.note}
            </p>
          </div>
        </Container>
      </section>

      {/* Five capability areas */}
      <section>
        <Container className="py-16 sm:py-24">
          <SectionHeading
            eyebrow="What I do"
            title={aboutPage.capabilities.heading}
            intro={aboutPage.capabilities.intro}
          />
          <ul className="mt-12 divide-y divide-line border-y border-line">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="group grid items-baseline gap-2 py-6 transition-colors hover:bg-ivory-deep/60 sm:grid-cols-[4rem_1.2fr_1.6fr_auto] sm:gap-6 sm:px-4"
                >
                  <span className="font-serif text-2xl text-clay" aria-hidden="true">
                    {s.number}
                  </span>
                  <span className="font-serif text-xl leading-snug text-ink sm:text-2xl">
                    {s.title}
                  </span>
                  <span className="text-ink-soft">{s.summary}</span>
                  <span className="text-sm font-semibold text-clay-deep sm:text-right">
                    Details <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/services" variant="secondary">
              See all services
            </Button>
            <Button href="/portfolio" variant="secondary">
              View my work
            </Button>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
