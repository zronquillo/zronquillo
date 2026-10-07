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

// Services page only. Section ids reuse the slugs above so /services#slug links
// from other pages keep working. Capability lists follow the approved profile;
// nothing here adds pricing, clients, metrics, credentials or testimonials.
export type ServiceSection = {
  slug: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  platforms?: string[];
  note?: string;
};

export const servicesPage = {
  hero: {
    eyebrow: "Services",
    title: "Creative, technical and operational work, built to connect",
    intro:
      "I help healthcare and service-based businesses build stronger digital systems — from content and social media to e-commerce, websites, funnels, automation, and digital operations.",
  },
  positioning: {
    heading: "Not one isolated service",
    body: [
      "Most businesses don't need one more disconnected task handled. They need their content, website, lead capture and follow-up to work together.",
      "I bring creative, technical and operational skills to each of those pieces, so they fit together instead of being managed in separate silos.",
    ],
  },
  sections: [
    {
      slug: "social-media-content",
      number: "01",
      title: "Social Media Marketing & Content",
      description:
        "Strategic content and digital communication support: planning what to say, designing and writing it, and keeping it published and answered across your channels.",
      capabilities: [
        "Social media management",
        "Content strategy and calendars",
        "Graphic design",
        "Short-form video",
        "Caption and content writing",
        "Scheduling and publishing",
        "Community and inbox support",
        "AI-assisted content workflows",
      ],
      platforms: ["LinkedIn", "Facebook", "Instagram", "TikTok"],
    },
    {
      slug: "healthcare-practice-support",
      number: "02",
      title: "Healthcare / Medical VA & Practice Support",
      description:
        "Administrative and patient-facing support that keeps a practice's communication, scheduling and day-to-day digital operations organized.",
      capabilities: [
        "Administrative support",
        "Patient-facing communication",
        "Appointment support",
        "Intake and follow-up",
        "Inbox support",
        "Practice operations",
        "Healthcare digital support",
        "Medical VA support",
      ],
      note: "Administrative, communication and digital support only. I am not a licensed healthcare professional, and I do not perform clinical duties, diagnosis, treatment or medical advice.",
    },
    {
      slug: "shopify-ecommerce",
      number: "03",
      title: "Shopify & E-commerce",
      description:
        "Store design and catalog management for online shops, from product setup and organization to landing pages, product graphics, META Catalog and customer support.",
      capabilities: [
        "Shopify store design",
        "Product uploads and catalog management",
        "Product organization and collections",
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
      title: "GoHighLevel & Automation",
      description:
        "Lead capture, booking and follow-up systems built in GoHighLevel, so inquiries are captured, routed and followed up inside one system.",
      capabilities: [
        "Funnels",
        "Lead capture",
        "CRM and pipelines",
        "Calendars and booking",
        "Workflows",
        "Email/SMS nurture",
        "Automations",
        "Social Planner",
        "Segmentation",
        "A/B testing",
      ],
    },
    {
      slug: "websites-digital",
      number: "05",
      title: "Websites & Digital Presence",
      description:
        "Clean, responsive websites and landing pages, built in WordPress and Elementor or in custom HTML, CSS and JavaScript, and shaped around how a business presents itself online.",
      capabilities: [
        "WordPress / Elementor",
        "HTML / CSS / JavaScript",
        "Landing pages",
        "HighLevel Sites",
        "Website customization",
        "Digital presence development",
      ],
    },
  ] satisfies ServiceSection[],
  together: {
    eyebrow: "How it fits together",
    heading: "How the services work together",
    intro:
      "Depending on the project, these pieces can connect in sequence. Not every client needs every step, and I combine only what fits.",
    steps: [
      {
        label: "Content",
        area: "Social Media Marketing & Content",
        text: "Content and communication that put the business in front of people.",
      },
      {
        label: "Website",
        area: "Websites & Digital Presence · Shopify & E-commerce",
        text: "A site or store that presents the business clearly.",
      },
      {
        label: "Lead capture",
        area: "GoHighLevel & Automation",
        text: "Funnels, forms and calendars that capture inquiries and bookings.",
      },
      {
        label: "Automation",
        area: "GoHighLevel & Automation",
        text: "Workflows and nurture that move leads along without manual effort.",
      },
      {
        label: "Follow-up & digital operations",
        area: "Healthcare Practice Support · CRM and inbox",
        text: "Pipelines, inboxes and routines that keep follow-up consistent.",
      },
    ],
  },
  healthcare: {
    eyebrow: "Healthcare focus",
    heading: "Support for the business side of healthcare",
    body: "My current focus is healthcare and service-based businesses. I support the digital, administrative, communication and operational side of a practice.",
    boundary:
      "This is not clinical support. I do not provide clinical services, diagnosis, treatment or medical advice, and I am not a licensed healthcare professional.",
  },
};
