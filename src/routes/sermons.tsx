import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Play, Search, Radio, Clock } from "lucide-react";
import c1 from "@/assets/community-1.jpg";
import c3 from "@/assets/community-3.jpg";
import hero from "@/assets/hero-church.jpg";

export const Route = createFileRoute("/sermons")({
  head: () => ({
    meta: [
      { title: "Sermons & Livestream — New Life Christian Fellowship" },
      { name: "description", content: "Watch or listen to recent sermons and join our Sunday livestream." },
      { property: "og:title", content: "Sermons — New Life" },
      { property: "og:description", content: "Catch up on messages and worship with us live each Sunday." },
    ],
  }),
  component: Sermons,
});

const sermons = [
  { title: "The Grace That Finds Us", speaker: "Pastor David Thompson", date: "Nov 12, 2025", topic: "Grace", img: hero },
  { title: "Living Water for Weary Souls", speaker: "Pastor Michael Chen", date: "Nov 5, 2025", topic: "Hope", img: c1 },
  { title: "The Prayer Jesus Taught", speaker: "Pastor David Thompson", date: "Oct 29, 2025", topic: "Prayer", img: c3 },
  { title: "Rooted: A Study in Colossians", speaker: "Grace Okafor", date: "Oct 22, 2025", topic: "Bible Study", img: hero },
  { title: "When God Feels Silent", speaker: "Pastor David Thompson", date: "Oct 15, 2025", topic: "Hope", img: c1 },
  { title: "Love One Another", speaker: "Sarah Thompson", date: "Oct 8, 2025", topic: "Community", img: c3 },
];

const topics = ["All", "Grace", "Hope", "Prayer", "Community", "Bible Study"];

function Sermons() {
  const [q, setQ] = useState("");
  const [topic, setTopic] = useState("All");

  const filtered = useMemo(
    () =>
      sermons.filter(
        (s) =>
          (topic === "All" || s.topic === topic) &&
          (q === "" || s.title.toLowerCase().includes(q.toLowerCase()) || s.speaker.toLowerCase().includes(q.toLowerCase())),
      ),
    [q, topic],
  );

  return (
    <>
      <PageHeader
        eyebrow="Sermons & Livestream"
        title="Messages of hope, week by week."
        description="Whether you're catching up or worshiping with us live, God's Word is for you."
      />

      {/* Livestream */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] items-stretch">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-primary aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/videoseries?list=PLbpi6ZahtOH6Blw3RGYpWkSByi_T7Rygb"
                title="Livestream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="bg-cream rounded-3xl p-8 border border-border/60 flex flex-col">
              <span className="inline-flex items-center gap-2 self-start rounded-full bg-destructive/10 text-destructive px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                <span className="h-2 w-2 rounded-full bg-destructive animate-pulse" /> Offline
              </span>
              <h3 className="mt-4 font-serif text-2xl text-primary">Next service in</h3>
              <Countdown />
              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <p className="flex items-center gap-2"><Radio className="h-4 w-4 text-gold" /> Livestream every Sunday</p>
                <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> 9:00 AM & 11:00 AM local</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8">
        <div className="container-page">
          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <div className="relative w-full md:max-w-sm">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search sermons or speakers"
                className="w-full rounded-full border border-border bg-white pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {topics.map((t) => (
                <button
                  key={t}
                  onClick={() => setTopic(t)}
                  className={
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors " +
                    (topic === t
                      ? "bg-primary text-primary-foreground"
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
      <section className="pb-24">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <article key={s.title} className="group bg-white rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-xl transition-all">
              <div className="relative aspect-video overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-primary/70 to-transparent" />
                <button className="absolute inset-0 grid place-items-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gold text-gold-foreground shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 fill-current" />
                  </span>
                </button>
                <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3 py-1 text-xs font-semibold text-primary">
                  {s.topic}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-gold font-semibold">{s.date}</p>
                <h3 className="mt-2 font-serif text-xl text-primary leading-snug">{s.title}</h3>
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
  // Static illustrative countdown — computes days to next Sunday 9am
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
    <div className="mt-4 grid grid-cols-3 gap-3">
      {cells.map((c) => (
        <div key={c.l} className="rounded-xl bg-white border border-border/60 py-4 text-center">
          <div className="font-serif text-3xl text-primary">{String(c.v).padStart(2, "0")}</div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{c.l}</div>
        </div>
      ))}
    </div>
  );
}