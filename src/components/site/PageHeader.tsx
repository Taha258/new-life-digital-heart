import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  if (image) {
    return (
      <section className="relative min-h-[62vh] md:min-h-[68vh] flex items-center overflow-hidden">
        <img
          src={image}
          alt={imageAlt ?? ""}
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-royal-deep/85 via-primary/70 to-royal-deep/85" />
        <div className="absolute inset-0 bg-linear-to-t from-royal-deep/60 to-transparent" />

        <div className="container-page relative z-10 text-center text-white py-24 max-w-3xl mx-auto fade-up">
          {eyebrow && (
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold font-semibold">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-white">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg md:text-xl text-white/85 leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-gold/60 to-transparent" />
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-cream border-b border-border/50">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold/60 to-transparent" />
      <div className="container-page py-20 md:py-28 text-center max-w-3xl mx-auto fade-up">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary">{title}</h1>
        {description && (
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}