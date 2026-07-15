import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, HandHeart } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ministries", label: "Ministries" },
  { to: "/sermons", label: "Sermons" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground font-serif text-xl shadow-sm">
            N
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-lg text-primary">New Life</span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Christian Fellowship
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={cn(
                  "text-sm font-medium transition-colors relative py-2",
                  active ? "text-primary" : "text-foreground/70 hover:text-primary",
                )}
              >
                {l.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/donate"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all hover:shadow-md hover:brightness-105"
          >
            <HandHeart className="h-4 w-4" />
            Donate
          </Link>
          <button
            className="lg:hidden grid h-11 w-11 place-items-center rounded-full border border-border text-primary"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-medium",
                  pathname === l.to
                    ? "bg-secondary text-primary"
                    : "text-foreground/80 hover:bg-secondary",
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-gold-foreground"
            >
              <HandHeart className="h-4 w-4" />
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}