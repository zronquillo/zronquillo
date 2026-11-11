// Portfolio page only. The 17-project inventory lives in ./projects and is NOT changed here.
// This file adds the page copy, the "Websites" filter, and presentation details for the
// three featured projects so they match the homepage exactly. No invented links or facts.

import type { ProjectCategory } from "./projects";

export type PortfolioFilter = ProjectCategory | "Websites";

export const portfolioHero = {
  eyebrow: "Portfolio",
  title:
    "Selected work across healthcare, e-commerce, social media, websites, and automation.",
  intro:
    "Showcase of websites, e-commerce work, digital marketing, funnels, and healthcare-focused digital systems.",
} as const;

export const portfolioFilters: PortfolioFilter[] = [
  "Healthcare",
  "Social Media",
  "E-commerce",
  "Funnels & Automation",
  "Websites",
];

export const filterIntros: Record<PortfolioFilter, string> = {
  Healthcare: "Websites and digital presence for healthcare and wellness.",
  "Social Media": "Content production and social media work.",
  "E-commerce": "Online stores and product catalogs.",
  "Funnels & Automation": "Lead capture, booking and follow-up systems.",
  Websites: "Website projects across healthcare, dental, and veterinary care.",
};

// Projects that appear under the "Websites" filter. Each keeps its own primary category;
// the default view never lists a project twice.
export const websiteProjectSlugs: string[] = [
  "docmich",
  "aurelia-smiles",
  "kingvet-animal-clinic",
  "pampanga-dental-clinic",
];

export type FeaturedPresentation = {
  label: string;
  tags: string[];
  url: string;
  image: { src: string; alt: string };
};

// Same labels, tags, images and URLs as the homepage Featured Work cards.
export const portfolioFeatured: Record<string, FeaturedPresentation> = {
  docmich: {
    label: "Private Practice Website",
    tags: ["Website Design", "Private Practice", "Healthcare", "Booking & Automation"],
    url: "https://docmich.vercel.app/",
    image: {
      src: "/projects/docmich.png",
      alt: "DocMich website homepage for Dr. Michele L. Santos",
    },
  },
  "aurelia-smiles": {
    label: "Dental Website",
    tags: ["Website Design", "Dental", "Healthcare", "Funnel Building"],
    url: "https://aureliasmiles.vercel.app/",
    image: {
      src: "/projects/aureliasmiles.png",
      alt: "Aurelia Smiles dental website homepage",
    },
  },
  "kingvet-animal-clinic": {
    label: "Veterinary Website",
    tags: ["Website Design", "Veterinary", "Animal Care", "Responsive Design"],
    url: "https://kingvet-animal-clinic-demo.vercel.app/",
    image: {
      src: "/projects/kingvet2.png",
      alt: "KingVet Animal Clinic website homepage",
    },
  },
};
