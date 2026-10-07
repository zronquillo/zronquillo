export const hero = {
  name: "Zipporah “Zi” Ronquillo",
  title: "Healthcare & Digital Growth Specialist",
  message:
    "I help healthcare and service-based businesses build stronger digital systems — from content and social media to e-commerce, websites, funnels, automation, and digital operations.",
  primaryCta: { label: "View My Work", href: "/portfolio" },
  secondaryCta: { label: "Let's Work Together", href: "/contact" },
  capabilities: [
    "Social Media",
    "Healthcare Support",
    "Shopify",
    "GHL & Automation",
    "Websites",
  ],
} as const;

export const whoIHelp = {
  heading: "Who I help",
  body: "Healthcare practices and service-based businesses that want their social media, website, online store and follow-up to work together, supported by someone who understands customer experience and day-to-day operations.",
} as const;

export const careerProgression = [
  "Customer Experience",
  "Digital Design",
  "E-commerce",
  "Social Media",
  "Funnels & Automation",
  "Healthcare Digital Support",
] as const;

export const aboutStory = {
  lead: "I build digital systems for businesses that care how their customers are treated.",
  paragraphs: [
    "My career started in global customer experience and operations. That work taught me how to communicate clearly with people, follow a process, and keep standards steady when a lot is moving at once.",
    "From there I moved into digital design and e-commerce: building Shopify stores, organizing product catalogs, and creating graphics and landing pages. Social media and content followed, then funnels and automation in GoHighLevel, where lead capture, booking and follow-up come together.",
    "Today my focus is healthcare and service-based businesses. I bring together the creative side (content and design), the technical side (websites, funnels, automation) and the operational side (inboxes, scheduling, follow-up) so the pieces work together.",
    "That customer experience and operational discipline is still the foundation of everything I build.",
  ],
  note: "I support the digital and administrative side of healthcare businesses. I am not a licensed healthcare professional and do not provide clinical services.",
} as const;

// About page structure. Wording reuses the approved positioning and the service
// capability lists. It introduces no new facts, dates, credentials or clients.
export const aboutPage = {
  storyBlocks: [
    { heading: "Where it started", text: aboutStory.paragraphs[0] },
    { heading: "How it grew", text: aboutStory.paragraphs[1] },
    { heading: "Where I focus now", text: aboutStory.paragraphs[2] },
  ],
  closingLine: aboutStory.paragraphs[3],
  pillars: [
    {
      label: "Creative",
      title: "Content and design",
      text: "Social media content, graphics, short-form video and captions that look consistent and read naturally.",
    },
    {
      label: "Technical",
      title: "Websites, funnels and automation",
      text: "WordPress and HTML/CSS/JavaScript websites, plus GoHighLevel funnels, calendars and workflows.",
    },
    {
      label: "Operational",
      title: "Everyday operations",
      text: "Inbox and customer support, scheduling and follow-up, and a steady process behind it all.",
    },
  ],
  healthcare: {
    heading: "Healthcare focus",
    lead: "My current focus is the administrative and digital side of healthcare practices.",
    areas: [
      "Administrative support",
      "Patient-facing communication",
      "Appointment support",
      "Intake and follow-up support",
      "Inbox support",
      "Practice operations",
      "Healthcare digital support",
    ],
    note: aboutStory.note,
  },
  capabilities: {
    heading: "Five areas of work",
    intro:
      "Each one stands on its own. The Services page has the full detail for every area.",
  },
} as const;
