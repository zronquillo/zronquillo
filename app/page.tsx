import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import ContactCTA from "@/components/ContactCTA";
import {
  activeSocialLinks,
  careerProgression,
  hero,
  projects,
  services,
  site,
  whoIHelp,
} from "@/data";
import type { Project } from "@/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Zipporah Ronquillo",
  alternateName: "Zi Ronquillo",
  jobTitle: hero.title,
  url: site.url,
  sameAs: activeSocialLinks.map((s) => s.url),
  description: site.description,
  knowsAbout: [
    "Social media marketing",
    "Healthcare virtual assistance",
    "Shopify and e-commerce",
    "GoHighLevel, CRM and automation",
    "WordPress and website development",
  ],
};

// Homepage-only card presentation (the /portfolio page is unchanged).
const homepageCards: Record<
  string,
  Pick<Project, "image" | "categoryLabel" | "highlights">
> = {
  docmich: {
    image: {
      src: "/projects/docmich.png",
      alt: "DocMich website homepage for Dr. Michele L. Santos",
    },
    categoryLabel: "Private Practice Website",
    highlights: [
      "Website Design",
      "Private Practice",
      "Healthcare",
      "Booking & Automation",
    ],
  },
  "aurelia-smiles": {
    image: {
      src: "/projects/aureliasmiles.png",
      alt: "Aurelia Smiles dental website homepage",
    },
    categoryLabel: "Dental Website",
    highlights: ["Website Design", "Dental", "Healthcare", "Funnel Building"],
  },
  "kingvet-animal-clinic": {
    image: {
      src: "/projects/kingvet2.png",
      alt: "KingVet Animal Clinic website homepage",
    },
    categoryLabel: "Veterinary Website",
    highlights: [
      "Website Design",
      "Veterinary",
      "Animal Care",
      "Responsive Design",
    ],
  },
};

// Homepage-only: the project title links to the live demo (whole card is clickable).
const homepageLinks: Record<string, string> = {
  docmich: "https://docmich.vercel.app/",
  "aurelia-smiles": "https://aureliasmiles.vercel.app/",
  "kingvet-animal-clinic": "https://kingvet-animal-clinic-demo.vercel.app/",
};

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 select-none font-serif text-[28rem] leading-none text-ivory-deep sm:text-[40rem]"
        >
          Z
        </div>
        <Container className="relative py-20 sm:py-32">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-clay">
            {hero.title}
          </p>
          <h1 className="max-w-4xl text-5xl leading-[1.04] text-ink sm:text-7xl lg:text-[5.5rem]">
            {hero.name}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            {hero.message}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
          <ul
            className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium sm:gap-x-3 text-ink-soft sm:text-base"
            aria-label="Capabilities"
          >
            {hero.capabilities.map((c, i) => (
              <li key={c} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden="true" className="hidden text-clay sm:inline">
                    ·
                  </span>
                )}
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y border-line bg-ivory-deep/60">
        <Container className="grid gap-8 py-16 md:grid-cols-[1fr_2fr] md:gap-16">
          <h2 className="text-3xl text-ink sm:text-4xl">{whoIHelp.heading}</h2>
          <p className="text-xl leading-relaxed text-ink-soft">
            {whoIHelp.body}
          </p>
        </Container>
      </section>

      <section aria-labelledby="home-services">
        <Container className="py-20 sm:py-28">
          <div id="home-services">
            <SectionHeading
              eyebrow="Services"
              title="What I can help with"
              intro="Five service areas. Each stands on its own, and together they cover content, storefront, website and the systems behind them."
            />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services#${s.slug}`}
                className="block rounded-2xl focus-visible:outline-offset-4 [&>article]:transition-[background-color,border-color,transform,box-shadow] [&>article]:duration-[280ms] [&>article]:ease-out [&:hover>article]:-translate-y-[3px] [&:hover>article]:border-clay/50 [&:hover>article]:bg-sand/70 [&:hover>article]:shadow-[0_8px_20px_-14px_rgba(28,26,23,0.25)] [&:focus-visible>article]:-translate-y-[3px] [&:focus-visible>article]:border-clay/50 [&:focus-visible>article]:bg-sand/70 [&:focus-visible>article]:shadow-[0_8px_20px_-14px_rgba(28,26,23,0.25)]"
              >
                <ServiceCard service={s} />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory-deep/60 border-y border-line">
        <Container className="py-20 sm:py-28">
          <SectionHeading
            eyebrow="Selected work"
            title="Selected work"
            intro="Selected website projects across healthcare, dental, and veterinary care. The full portfolio has more."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <div
                key={p.slug}
                className="rounded-2xl [&:hover_img]:scale-[1.03] [&>article]:h-full [&>article]:transition-[background-color,border-color,transform,box-shadow] [&>article]:duration-[280ms] [&>article]:ease-out [&:hover>article]:-translate-y-[3px] [&:hover>article]:border-clay/50 [&:hover>article]:bg-sand/70 [&:hover>article]:shadow-[0_8px_20px_-14px_rgba(28,26,23,0.25)] [&:has(a:focus-visible)>article]:-translate-y-[3px] [&:has(a:focus-visible)>article]:border-clay/50 [&:has(a:focus-visible)>article]:bg-sand/70 [&:has(a:focus-visible)>article]:shadow-[0_8px_20px_-14px_rgba(28,26,23,0.25)] [&:has(a:focus-visible)>article]:outline-2 [&:has(a:focus-visible)>article]:outline-clay [&:has(a:focus-visible)>article]:outline-offset-4"
              >
                <ProjectCard
                  project={{ ...p, ...homepageCards[p.slug] }}
                  titleHref={homepageLinks[p.slug]}
                />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/portfolio" variant="secondary">
              See the full portfolio
            </Button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-20 sm:py-28">
          <SectionHeading
            eyebrow="The path here"
            title="How the work fits together"
          />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {careerProgression.map((step, i) => (
              <li key={step} className="bg-ivory p-6">
                <span className="font-serif text-2xl text-clay">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-serif text-xl text-ink">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Button href="/about" variant="secondary">
              Read my story
            </Button>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
