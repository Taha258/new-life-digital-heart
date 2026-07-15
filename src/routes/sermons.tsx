import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Search, Radio, Clock } from "lucide-react";
import c1 from "@/assets/community-1.jpg";
import c2 from "@/assets/community-2.jpg";
import c3 from "@/assets/community-3.jpg";
import hero from "@/assets/hero-church.jpg";
import heroEvents from "@/assets/hero-events.jpg";
import heroContact from "@/assets/hero-contact.jpg";
import heroSermons from "@/assets/hero-sermons.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/sermons")({
  head: () => ({
    meta: [
      { title: "Sermons & Livestream — New Life Christian Fellowship" },
      {
        name: "description",
        content: "Watch or listen to recent sermons and join our Sunday livestream.",
      },
      { property: "og:title", content: "Sermons — New Life" },
      {
        property: "og:description",
        content: "Catch up on messages and worship with us live each Sunday.",
      },
    ],
  }),
  component: Sermons,
});

const sermons = [
  {
    title: "The Grace That Finds Us",
    speaker: "Pastor David Thompson",
    date: "Nov 12, 2025",
    topic: "Grace",
    img: hero,
  },
  {
    title: "Living Water for Weary Souls",
    speaker: "Pastor Michael Chen",
    date: "Nov 5, 2025",
    topic: "Hope",
    img: c1,
  },
  {
    title: "The Prayer Jesus Taught",
    speaker: "Pastor David Thompson",
    date: "Oct 29, 2025",
    topic: "Prayer",
    img: c3,
  },
  {
    title: "Rooted: A Study in Colossians",
    speaker: "Grace Okafor",
    date: "Oct 22, 2025",
    topic: "Bible Study",
    img: heroEvents,
  },
  {
    title: "When God Feels Silent",
    speaker: "Pastor David Thompson",
    date: "Oct 15, 2025",
    topic: "Hope",
    img: heroContact,
  },
  {
    title: "Love One Another",
    speaker: "Sarah Thompson",
    date: "Oct 8, 2025",
    topic: "Community",
    img: c2,
  },
];

const topics = ["All", "Grace", "Hope", "Prayer", "Community", "Bible Study"];

function Sermons() {
  const [q, setQ] = useState("");
  const [topic, setTopic] = useState("All");
  const liveRef = useScrollReveal();
  const gridRef = useScrollReveal();

  const filtered = useMemo(
    () =>
      sermons.filter(
        (s) =>
          (topic === "All" || s.topic === topic) &&
          (q === "" ||
            s.title.toLowerCase().includes(q.toLowerCase()) ||
            s.speaker.toLowerCase().includes(q.toLowerCase())),
      ),
    [q, topic],
  );

  return (
    <>
      <PageHeader
        eyebrow="Sermons & Livestream"
        title="Messages of hope, week by week."
        description="Whether you're catching up or worshiping with us live, God's Word is for you."
        image={heroSermons}
        imageAlt="Open Bible on a pulpit in a lit sanctuary"
      />

      {/* Livestream */}
      <section ref={liveRef} className="reveal py-12 sm:py-16 md:py-20">
        <div className="container-page">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.6fr_1fr] items-stretch">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-primary aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/videoseries?list=PLbpi6ZahtOH6Blw3RGYpWkSByi_T7Rygb"
                title="Livestream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="bg-cream rounded-3xl p-6 sm:p-8 border border-border/60 flex flex-col">
              <span className="inline-flex items-center gap-2 self-start rounded-full bg-destructive/10 text-destructive px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                <span className="h-2 w-2 rounded-full bg-destructive animate-pulse" /> Offline
              </span>
              <h3 className="mt-4 font-serif text-xl sm:text-2xl text-primary">Next service in</h3>
              <Countdown />
              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Radio className="h-4 w-4 text-gold" /> Livestream every Sunday
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold" /> 9:00 AM & 11:00 AM local
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-6 sm:pb-8">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:items-center sm:justify-between sm:flex-row">
            <div className="relative w-full sm:max-w-sm">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search sermons or speakers"
                className="w-full rounded-full border border-border bg-white pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold transition-shadow"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {topics.map((t) => (
                <button
                  key={t}
                  onClick={() => setTopic(t)}
                  className={
                    "rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 " +
                    (topic === t
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-cream text-foreground/70 hover:bg-secondary")
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section ref={gridRef} className="reveal pb-16 sm:pb-24">
        <div className="container-page grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s, i) => (
            <article
              key={s.title}
              className={`stagger-${Math.min(i + 1, 6)} group bg-white rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-xl transition-all duration-300`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/70 to-transparent" />
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-semibold text-primary">
                  {s.topic}
                </span>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-xs uppercase tracking-widest text-gold font-semibold">
                  {s.date}
                </p>
                <h3 className="mt-2 font-serif text-lg sm:text-xl text-primary leading-snug">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.speaker}</p>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground py-16">
              No sermons match your search.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

function Countdown() {
  const [, setTick] = useState(0);

  useMemo(() => {
    const id = setInterval(() => setTick((t) => t + 1), 60_000);
    return () => clearInterval(id);
  }, []);

  const target = useMemo(() => {
    const d = new Date();
    const day = d.getDay();
    const daysUntil = (7 - day) % 7 || 7;
    const next = new Date(d);
    next.setDate(d.getDate() + daysUntil);
    next.setHours(9, 0, 0, 0);
    return next;
  }, []);

  const diff = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const cells = [
    { v: days, l: "Days" },
    { v: hours, l: "Hours" },
    { v: minutes, l: "Min" },
  ];

  return (
    <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
      {cells.map((c) => (
        <div
          key={c.l}
          className="rounded-xl bg-white border border-border/60 py-3 sm:py-4 text-center hover:shadow-sm transition-shadow"
        >
          <div className="font-serif text-2xl sm:text-3xl text-primary">
            {String(c.v).padStart(2, "0")}
          </div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
            {c.l}
          </div>
        </div>
      ))}
    </div>
  );
}
