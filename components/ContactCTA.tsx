import Container from "./Container";
import Button from "./Button";
import { contact } from "@/data";

export default function ContactCTA() {
  return (
    <section className="bg-ink text-ivory" aria-labelledby="cta-heading">
      <Container className="py-20 text-center sm:py-28">
        <h2
          id="cta-heading"
          className="mx-auto max-w-2xl text-4xl leading-tight sm:text-5xl"
        >
          {contact.headline}
        </h2>
        <p className="mt-4 text-xl text-sand">{contact.message}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.emailSubject)}`}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-ivory px-7 text-[0.95rem] font-medium text-ink transition-colors duration-200 hover:bg-sand"
          >
            {contact.cta}
          </a>
          <Button href={contact.whatsappUrl} variant="secondary" external>
            <span className="text-ivory">WhatsApp</span>
          </Button>
        </div>
      </Container>
    </section>
  );
}
