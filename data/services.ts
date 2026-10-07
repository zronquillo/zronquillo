export type Service = {
  slug: string;
  number: string;
  title: string;
  summary: string;
  capabilities: string[];
  platforms?: string[];
  note?: string;
  /** Answers: "what can Zi actually help me with?" */
  helpsWith: string;
};

export const services: Service[] = [
  {
    slug: "social-media-content",
    number: "01",
    title: "Social Media Marketing & Content",
    helpsWith:
      "A steady, consistent posting presence, from planning and design to writing and scheduling.",
    summary:
      "Content that looks consistent, reads naturally and goes out on schedule.",
    capabilities: [
      "Social media management",
      "Content strategy",
      "Content calendars",
      "Graphic design",
      "Short-form video",
      "Caption writing",
      "Content writing",
      "Scheduling and publishing",
      "Community and inbox support",
      "AI-assisted content workflows",
    ],
    platforms: ["LinkedIn", "Facebook", "Instagram", "TikTok"],
  },
  {
    slug: "healthcare-practice-support",
    number: "02",
    title: "Healthcare / Medical Virtual Assistance",
    helpsWith:
      "Reliable help with inboxes, appointment support and patient communication for a healthcare practice.",
    summary:
      "Administrative and patient-facing support for healthcare practices.",
    capabilities: [
      "Administrative support",
      "Patient-facing communication",
      "Appointment support",
      "Intake and follow-up support",
      "Inbox support",
      "Practice operations",
      "Healthcare digital support",
      "Medical VA support",
    ],
    note: "Administrative and digital support only. Not a licensed healthcare professional and no clinical responsibilities.",
  },
  {
    slug: "shopify-ecommerce",
    number: "03",
    title: "Shopify & E-commerce",
    helpsWith:
      "An online store that is organized, easy to browse and set up to sell, with the catalog kept tidy.",
    summary:
      "Online stores that are organized and ready to sell.",
    capabilities: [
      "Shopify store design",
      "Product uploads",
      "Product catalog management",
      "Product organization",
      "Collections",
      "Landing pages",
      "Product graphics",
      "META Catalog",
      "Customer support",
      "E-commerce design",
      "CRO-focused improvements",
    ],
  },
  {
    slug: "gohighlevel-automation",
    number: "04",
    title: "GoHighLevel, CRM & Automation",
    helpsWith:
      "Inquiries captured, booked and followed up inside one system, not tracked by hand.",
    summary:
      "Funnels, booking and follow-up that capture leads and keep them moving.",
    capabilities: [
      "Funnels",
      "Lead capture",
      "CRM",
      "Pipelines",
      "Calendars",
      "Booking systems",
      "Workflows",
      "Email and SMS nurture",
      "Automations",
      "Social Planner",
      "Segmentation",
      "A/B testing",
    ],
  },
  {
    slug: "websites-digital",
    number: "05",
    title: "WordPress & Website Development",
    helpsWith:
      "A clean, responsive website or landing page that presents your business clearly.",
    summary:
      "Clean, responsive websites and landing pages.",
    capabilities: [
      "WordPress",
      "Elementor",
      "HTML",
      "CSS",
      "JavaScript",
      "Landing pages",
      "HighLevel Sites",
      "Website customization",
      "Digital presence development",
    ],
  },
];
