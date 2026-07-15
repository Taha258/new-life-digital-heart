import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
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