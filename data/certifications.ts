// Names only: issuers, dates and credential IDs are not displayed until verified.

export type Certification = {
  name: string;
  /** "current" renders as a certificate card; "pending" renders as a temporary placeholder. */
  status: "current" | "pending";
  /** Optional web-ready certificate image in /public/certifications (add when provided). */
  image?: { src: string; alt: string };
  /** Optional issuer / date, shown only once verified. */
  issuer?: string;
  date?: string;
};

export const certifications: Certification[] = [
  { name: "Medical Virtual Assistant Training", status: "current" },
  // TEMPORARY PLACEHOLDER: replace with the new HIPAA certificate:
  // set status to "current", and add image / issuer / date. Nothing else needs to change.
  { name: "HIPAA Training", status: "pending" },
  { name: "Shopify Partner Certification", status: "current" },
  { name: "AIM DNA GHL Mastery", status: "current" },
  { name: "DigiPro", status: "current" },
  { name: "DigitalMarketer", status: "current" },
  { name: "GoHighLevel Funnel Masterclass", status: "current" },
  { name: "Systeme.io Funnel Design", status: "current" },
  { name: "Shopify Product Listing", status: "current" },
];
