import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const footerRef = useScrollReveal();

  return (
    <footer className="mt-20 bg-primary text-primary-foreground">
      <div
        ref={footerRef}
        className="reveal container-page py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4"
      >
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/New Life Christian Fellowship - Logo Design - FF.png"
              alt="New Life Christian Fellowship"
              className="h-11 w-auto object-contain"
            />
          </div>
          <p className="mt-5 text-sm opacity-80 leading-relaxed">
            A place to belong, a family in Christ. Come as you are - you are loved here.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-gold hover:text-gold-foreground hover:border-gold transition-all duration-200 hover:scale-110"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg text-gold">Quick Links</h4>
          <ul className="mt-5 space-y-3 text-sm opacity-90">
            {[
              ["About Us", "/about"],
              ["Ministries", "/ministries"],
              ["Sermons", "/sermons"],
              ["Events", "/events"],
              ["Prayer Request", "/contact"],
              ["Give", "/donate"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="inline-flex items-center gap-1.5 hover:text-gold transition-colors group"
                >
                  {label}
                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-gold">Service Times</h4>
          <ul className="mt-5 space-y-3 text-sm opacity-90">
            <li>
              <span className="font-semibold">Sunday Worship</span>
              <br />
              <span className="opacity-75">9:00 AM & 11:00 AM</span>
            </li>
            <li>
              <span className="font-semibold">Midweek Study</span>
              <br />
              <span className="opacity-75">Wednesday, 7:00 PM</span>
            </li>
            <li>
              <span className="font-semibold">Prayer Meeting</span>
              <br />
              <span className="opacity-75">Friday, 6:30 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-gold">Stay Connected</h4>
          <p className="mt-5 text-sm opacity-80">
            Weekly encouragement and updates from our church family.
          </p>
          {subscribed ? (
            <p className="mt-4 text-sm text-gold font-medium">Thank you for subscribing!</p>
          ) : (
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (email) {
                  setSubscribed(true);
                  setEmail("");
                }
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 min-w-0 rounded-full bg-white/10 border border-white/20 px-4 py-2.5 text-sm placeholder:text-white/50 focus:outline-none focus:border-gold transition-colors"
              />
              <button className="shrink-0 rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-gold-foreground hover:brightness-110 transition-all active:scale-95">
                Join
              </button>
            </form>
          )}
          <ul className="mt-6 space-y-2 text-sm opacity-90">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
              123 Grace Avenue, Springfield
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" />
              (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gold" />
              hello@newlifecf.org
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-70">
          <p>
            &copy; {new Date().getFullYear()} New Life Christian Fellowship. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
