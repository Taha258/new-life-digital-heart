import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — New Life Christian Fellowship" },
      { name: "description", content: "Upcoming church events, retreats, and community gatherings." },
      { property: "og:title", content: "Events at New Life" },
      { property: "og:description", content: "See what's coming up and RSVP for our next gathering." },
    ],
  }),
  component: Events,
});

const events = [
  { date: "Nov 24", day: "Sunday", time: "6:00 PM", title: "Thanksgiving Community Dinner", loc: "Main Hall", desc: "A shared table, live worship, and short reflections. Bring a friend and a side dish." },
  { date: "Dec 07", day: "Saturday", time: "10:00 AM", title: "Serve Day: Downtown Cleanup", loc: "City Center", desc: "Meet neighbors, serve the city, and share the love of Jesus in practical ways." },
  { date: "Dec 15", day: "Sunday", time: "5:00 PM", title: "Christmas Eve Candlelight Service", loc: "Sanctuary", desc: "Carols, candles, and the wonder of Christ's arrival. All are welcome." },
  { date: "Jan 10", day: "Friday", time: "7:00 PM", title: "Prayer & Vision Night", loc: "Chapel", desc: "Kick off the new year with worship and prayer for our church and city." },
  { date: "Feb 14", day: "Friday", time: "6:30 PM", title: "Marriage Retreat Weekend", loc: "Cedar Springs Retreat Center", desc: "Two nights away to invest in your marriage. Childcare provided." },
];

function Events() {
  return (
    <>
      <PageHeader
        eyebrow="What's happening"
        title="Upcoming events"
        description="From Sunday gatherings to retreats and service days — we'd love for you to join us."
      />
      <section className="py-16 md:py-24">
        <div className="container-page space-y-5 max-w-4xl">
          {events.map((e) => (
            <article key={e.title} className="group grid gap-6 md:grid-cols-[160px_1fr_auto] items-center bg-white border border-border/60 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all">
              <div className="text-center bg-cream rounded-2xl py-6 border border-border/50">
                <div className="font-serif text-3xl text-primary">{e.date}</div>
                <div className="text-xs uppercase tracking-widest text-gold font-semibold mt-1">{e.day}</div>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-primary">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-gold" />{e.time}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-gold" />{e.loc}</span>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-royal-deep transition-colors whitespace-nowrap">
                RSVP <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ))}
          <div className="pt-8 text-center">
            <p className="inline-flex items-center gap-2 text-muted-foreground text-sm">
              <Calendar className="h-4 w-4 text-gold" /> Want the full calendar? Email events@newlifecf.org
            </p>
          </div>
        </div>
      </section>
    </>
  );
}