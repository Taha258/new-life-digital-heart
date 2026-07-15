import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Send, Lock } from "lucide-react";
import { toast } from "sonner";
import heroContact from "@/assets/hero-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Prayer — New Life Christian Fellowship" },
      { name: "description", content: "Get in touch, submit a prayer request, or find our location." },
      { property: "og:title", content: "Contact New Life" },
      { property: "og:description", content: "We'd love to hear from you. Reach out or share a prayer request." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Reach out"
        title="We'd love to hear from you."
        description="Have a question, need prayer, or just want to say hello? Our team reads every message."
        image={heroContact}
        imageAlt="Hands folded in prayer over an open Bible"
      />

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <PrayerForm />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page grid gap-8 md:grid-cols-[1fr_1.4fr] items-stretch">
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-10">
            <h3 className="font-serif text-3xl text-white">Visit us</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" /><span>123 Grace Avenue<br />Springfield, IL 62701</span></li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-gold" />(555) 123-4567</li>
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-gold" />hello@newlifecf.org</li>
            </ul>
            <h4 className="mt-8 font-serif text-xl text-gold">Service Times</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3"><Clock className="h-4 w-4 text-gold mt-0.5" /><span><b>Sunday</b> · 9:00 AM & 11:00 AM</span></li>
              <li className="flex items-start gap-3"><Clock className="h-4 w-4 text-gold mt-0.5" /><span><b>Wednesday</b> · 7:00 PM Bible Study</span></li>
              <li className="flex items-start gap-3"><Clock className="h-4 w-4 text-gold mt-0.5" /><span><b>Friday</b> · 6:30 PM Prayer</span></li>
            </ul>
            <div className="mt-8 flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 hover:bg-gold hover:text-gold-foreground hover:border-gold transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg border border-border/60 min-h-[400px]">
            <iframe
              title="Map"
              className="h-full w-full min-h-[400px]"
              src="https://www.google.com/maps?q=Springfield+IL&output=embed"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [state, setState] = useState({ name: "", email: "", phone: "", message: "" });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        toast.success("Thanks! We'll be in touch soon.");
        setState({ name: "", email: "", phone: "", message: "" });
      }}
      className="bg-white rounded-3xl border border-border/60 shadow-sm p-8 md:p-10"
    >
      <h2 className="font-serif text-3xl text-primary">Send a message</h2>
      <p className="mt-2 text-sm text-muted-foreground">We usually respond within one business day.</p>
      <div className="mt-6 space-y-4">
        <Field label="Name" value={state.name} onChange={(v) => setState({ ...state, name: v })} required />
        <Field label="Email" type="email" value={state.email} onChange={(v) => setState({ ...state, email: v })} required />
        <Field label="Phone (optional)" value={state.phone} onChange={(v) => setState({ ...state, phone: v })} />
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Message</label>
          <textarea
            required
            value={state.message}
            onChange={(e) => setState({ ...state, message: e.target.value })}
            rows={5}
            maxLength={2000}
            className="mt-1.5 w-full rounded-xl border border-border bg-cream/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
        <button className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-royal-deep transition-colors">
          <Send className="h-4 w-4" /> Send message
        </button>
      </div>
    </form>
  );
}

function PrayerForm() {
  const [state, setState] = useState({ name: "", details: "", confidential: false });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        toast.success("Your prayer request has been received. We're praying with you.");
        setState({ name: "", details: "", confidential: false });
      }}
      className="bg-cream rounded-3xl border border-gold/30 shadow-sm p-8 md:p-10"
    >
      <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 text-gold-foreground px-3 py-1 text-xs font-semibold uppercase tracking-widest">
        <Lock className="h-3 w-3" /> Private
      </div>
      <h2 className="mt-4 font-serif text-3xl text-primary">Prayer request</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Our pastoral team prays over every request received. Share as much or as little as you'd like.
      </p>
      <div className="mt-6 space-y-4">
        <Field label="Name (optional)" value={state.name} onChange={(v) => setState({ ...state, name: v })} />
        <div>
          <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Request details</label>
          <textarea
            required
            value={state.details}
            onChange={(e) => setState({ ...state, details: e.target.value })}
            rows={5}
            maxLength={2000}
            className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
        <label className="flex items-start gap-3 text-sm text-foreground/80 cursor-pointer">
          <input
            type="checkbox"
            checked={state.confidential}
            onChange={(e) => setState({ ...state, confidential: e.target.checked })}
            className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-gold"
          />
          <span>Keep this request confidential (pastoral team only, not shared with prayer groups).</span>
        </label>
        <button className="inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-6 py-3 text-sm font-semibold hover:brightness-105 transition-all shadow-sm">
          Submit request
        </button>
      </div>
    </form>
  );
}

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={200}
        className="mt-1.5 w-full rounded-xl border border-border bg-cream/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
      />
    </div>
  );
}