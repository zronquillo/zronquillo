import Image from "next/image";

// Set `src` in data/profile.ts when a professional headshot is available.
export default function PortraitSlot({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={640}
        height={800}
        className="aspect-[4/5] w-full rounded-[2rem] object-cover"
      />
    );
  }
  return (
    <div
      role="img"
      aria-label="Portrait placeholder: a professional headshot will go here"
      className="relative flex aspect-[4/5] w-full items-end overflow-hidden rounded-[2rem] border border-line bg-ivory-deep p-6"
    >
      <span
        aria-hidden="true"
        className="absolute -right-4 -top-10 font-serif text-[16rem] leading-none text-sand"
      >
        Z
      </span>
      <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-muted">
        Portrait coming soon
      </p>
    </div>
  );
}
