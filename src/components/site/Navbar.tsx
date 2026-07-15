import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-all duration-300",
          scrolled
            ? "border-border/40 bg-background/95 backdrop-blur-lg shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
            : "border-transparent bg-background/80 backdrop-blur-sm",
        )}
      >
        <div className="container-page flex h-18 items-center justify-between gap-4">
          <Link to="/" className="flex items-center group">
            <img
              src="/New Life Christian Fellowship - Logo Design - FF.png"
              alt="New Life Christian Fellowship"
              className="h-14 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    active
                      ? "text-primary bg-primary/5"
                      : "text-foreground/65 hover:text-primary hover:bg-primary/[0.03]",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/donate"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-sm transition-all hover:shadow-lg hover:brightness-105 hover:scale-[1.02] active:scale-[0.98]"
            >
              <HandHeart className="h-4 w-4" />
              Donate
            </Link>
            <button
              className="lg:hidden grid h-11 w-11 place-items-center rounded-full border border-border text-primary hover:bg-primary/5 transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setOpen(false)}
      />

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[min(320px,85vw)] bg-background shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between p-5 border-b border-border/50">
          <span className="font-serif text-lg text-primary">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-primary/5 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col p-5 gap-1">
          {links.map((l, i) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-5 py-3.5 text-base font-medium transition-all",
                  active
                    ? "bg-primary/8 text-primary"
                    : "text-foreground/70 hover:bg-primary/[0.04] hover:text-primary",
                )}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            to="/donate"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-semibold text-gold-foreground hover:brightness-105 transition-all active:scale-[0.98]"
          >
            <HandHeart className="h-4 w-4" />
            Donate
          </Link>
        </nav>
      </div>
    </>
  );
}
