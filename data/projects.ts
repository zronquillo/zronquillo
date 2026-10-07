// Only details stated in the approved blueprint appear here.
// Optional fields (role, tools, link, image) are omitted until verified.
// See CONTENT-REVIEW.md.

export type ProjectCategory =
  | "Healthcare"
  | "Social Media"
  | "E-commerce"
  | "Funnels & Automation";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  /** Optional display label shown on the card instead of `category` (grouping still uses `category`). */
  categoryLabel?: string;
  description: string;
  highlights?: string[];
  role?: string;
  services?: string[];
  tools?: string[];
  link?: { label: string; href: string };
  image?: { src: string; alt: string };
  featured?: boolean;
};

export const projectCategories: {
  id: ProjectCategory;
  intro: string;
}[] = [
  {
    id: "Healthcare",
    intro: "Websites and digital presence for healthcare and wellness.",
  },
  {
    id: "Social Media",
    intro: "Content production and social media work.",
  },
  {
    id: "E-commerce",
    intro: "Online stores and product catalogs.",
  },
  {
    id: "Funnels & Automation",
    intro: "Lead capture, booking and follow-up systems.",
  },
];

export const projects: Project[] = [
  {
    slug: "docmich",
    name: "DocMich",
    category: "Healthcare",
    description: "Physician website and digital presence.",
    featured: true,
  },
  {
    slug: "aurelia-smiles",
    name: "Aurelia Smiles",
    category: "Healthcare",
    description:
      "Reusable dental website system built as a mother template for customized clinic demos.",
    featured: true,
  },
  {
    slug: "kingvet-animal-clinic",
    name: "KingVet Animal Clinic",
    category: "Healthcare",
    description:
      "Veterinary clinic website demo built from a reusable veterinary website template.",
    featured: true,
  },
  {
    slug: "pampanga-dental-clinic",
    name: "Pampanga Dental Clinic",
    category: "Healthcare",
    description: "Dental practice website demo.",
  },
  {
    slug: "medical-recovery-store",
    name: "Medical Recovery Store",
    category: "Healthcare",
    description: "Healthcare e-commerce project.",
  },
  {
    slug: "la-fertilitea",
    name: "La Fertilitea",
    category: "Healthcare",
    description:
      "Wellness e-commerce, with branding and automation-related work.",
  },
  {
    slug: "eliza-law-injury-lawyers",
    name: "Eliza Law Injury Lawyers",
    category: "Social Media",
    description: "Social media production for a personal injury law firm.",
    highlights: [
      "Social media production",
      "Research",
      "Captions",
      "Short-form video",
      "Thumbnails",
      "Hashtags",
      "Content calendars",
      "Bilingual EN/ES content",
      "GHL Social Planner",
    ],
  },
  {
    slug: "healthcare-wellness-content",
    name: "Healthcare & Wellness Content",
    category: "Social Media",
    description:
      "Content examples across plastic surgery, dermatology, dental, wellness and practitioners.",
    highlights: [
      "Plastic surgery",
      "Dermatology",
      "Dental",
      "Wellness",
      "Practitioners",
    ],
  },
  { slug: "cj-rosser", name: "CJ Rosser", category: "E-commerce", description: "E-commerce project." },
  { slug: "jvault", name: "JVault", category: "E-commerce", description: "E-commerce project." },
  { slug: "sabi-skin", name: "Sabi-Skin", category: "E-commerce", description: "E-commerce project." },
  { slug: "green-horizons", name: "Green Horizons", category: "E-commerce", description: "E-commerce project." },
  { slug: "zipporah-jewels", name: "Zipporah Jewels", category: "E-commerce", description: "E-commerce project." },
  { slug: "little-lamb", name: "Little Lamb", category: "E-commerce", description: "E-commerce project." },
  {
    slug: "4-leak-practice-revenue-audit",
    name: "4-Leak Practice Revenue Audit",
    category: "Funnels & Automation",
    description:
      "A practice revenue audit tool connected to a HighLevel booking calendar.",
    highlights: [
      "Single-file HTML/CSS/JS",
      "Multi-currency functionality",
      "HighLevel calendar integration",
      "Responsive design",
      "Hosted on GitHub Pages",
      "Live testing",
      "Confirmed test bookings",
    ],
  },
  {
    slug: "highlevel-booking-system",
    name: "HighLevel Booking System",
    category: "Funnels & Automation",
    description: "A strategy-call booking system built in HighLevel.",
    highlights: [
      "Strategy-call calendar",
      "Booking rules",
      "Notifications",
      "Booking workflow",
    ],
  },
  {
    slug: "personal-injury-intake-funnel",
    name: "Personal Injury Intake Funnel",
    category: "Funnels & Automation",
    description: "A lead intake funnel built in HighLevel.",
    highlights: [
      "Lead capture",
      "Qualification",
      "Case-review pipeline",
      "A/B testing",
    ],
  },
];
