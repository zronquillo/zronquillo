// Dates are shown as given in the blueprint; verification is tracked in CONTENT-REVIEW.md.

export type ExperiencePeriod = {
  period: string;
  title: string;
  summary: string;
  items: string[];
  itemsLabel: string;
};

export const experience: ExperiencePeriod[] = [
  {
    period: "2008–2018",
    title: "Global Customer Experience & Operations",
    summary:
      "The foundation: customer-facing and operations work with global companies.",
    itemsLabel: "Companies",
    items: ["PayPal", "Juniper Networks", "Wells Fargo", "QBE"],
  },
  {
    period: "2019–Present",
    title: "Freelance Digital & E-commerce",
    summary:
      "Independent digital work for online stores, brands and service businesses.",
    itemsLabel: "Areas",
    items: [
      "Shopify",
      "E-commerce",
      "Web Design",
      "Social Media",
      "Content",
      "Funnels",
    ],
  },
  {
    period: "Current focus",
    title: "Healthcare & Digital Growth",
    summary:
      "Bringing it together for healthcare and service-based businesses.",
    itemsLabel: "Areas",
    items: [
      "Social Media",
      "Healthcare Support",
      "Shopify",
      "GoHighLevel",
      "Automation",
      "Digital Systems",
    ],
  },
];
