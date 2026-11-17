// Homepage "The Booked Practice System" section. Approved by Zi on Nov 17, 2026.
export type SystemStage = {
  number: string;
  title: string;
  summary: string;
  items: string[];
};

export const bookedSystem = {
  eyebrow: "The Booked Practice System",
  title: "One connected system, from first scroll to five-star review",
  intro:
    "Five stages that follow your patient or client from the moment they find you to the review they leave. Start with one stage or build the whole system over time.",
  stages: [
    {
      number: "01",
      title: "Get Seen",
      summary:
        "Consistent, on-brand content that keeps your practice visible and trusted.",
      items: [
        "Social media content",
        "Content calendar",
        "Reels video editing",
        "Graphics",
        "Content scheduling",
      ],
    },
    {
      number: "02",
      title: "Capture Every Lead",
      summary: "Every inquiry is captured and answered, even after hours.",
      items: ["Lead forms", "CRM build", "AI chatbot / Voice AI"],
    },
    {
      number: "03",
      title: "Book the Appointment",
      summary:
        "New inquiries are followed up fast and booked straight into your calendar.",
      items: ["Calendar booking", "Email follow-ups", "SMS follow-ups"],
    },
    {
      number: "04",
      title: "Make Sure They Show Up",
      summary: "Automated reminders that cut down no-shows.",
      items: ["Email reminders", "SMS reminders"],
    },
    {
      number: "05",
      title: "Grow Your Reputation",
      summary:
        "Happy patients and clients turn into reviews and repeat visits.",
      items: [
        "Review requests",
        "Reputation management",
        "Post-visit email follow-up",
      ],
    },
  ] satisfies SystemStage[],
} as const;
