import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  Clock,
  Users,
  BookOpen,
  Play,
  ArrowRight,
  HandHeart,
  Heart,
  Sparkles,
  Church,
} from "lucide-react";
import hero from "@/assets/hero-church.jpg";
import pastor from "@/assets/pastor.jpg";
import c1 from "@/assets/community-1.jpg";
import c2 from "@/assets/community-2.jpg";
import c3 from "@/assets/community-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={hero}
          alt="Church sanctuary at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-br from-royal-deep/85 via-primary/70 to-royal-deep/85" />
        <div className="absolute inset-0 bg-linear-to-t from-royal-deep/60 to-transparent" />

        <div className="container-page relative z-10 text-center text-white py-24 fade-up">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold">
            <Sparkles className="h-3.5 w-3.5" /> Welcome home
          </p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl mx-auto">
            A Place to Belong,<br />
            <span className="text-gold italic">a Family in Christ</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/85 leading-relaxed">
            New Life Christian Fellowship is a warm community of people learning to
            follow Jesus together. Whoever you are, wherever you've been — there's a seat
            for you.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-semibold text-gold-foreground shadow-lg hover:shadow-xl hover:brightness-105 transition-all"
            >
              Join Us This Sunday <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/sermons"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur px-7 py-3.5 font-semibold text-white hover:bg-white/20 transition-colors"
            >
              <Play className="h-4 w-4" /> Watch Livestream
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-xs uppercase tracking-widest animate-pulse">
          Scroll to explore
        </div>
      </section>

      {/* SERVICE TIMES */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">
              Gather with us
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl text-primary">Service Times</h2>
            <p className="mt-4 text-muted-foreground">
              We'd love to worship alongside you. Here's when our doors are open.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Church,
                title: "Sunday Worship",
                time: "9:00 AM & 11:00 AM",
                desc: "Two identical services with worship, teaching, and communion.",
              },
              {
                icon: BookOpen,
                title: "Midweek Study",
                time: "Wednesday · 7:00 PM",
                desc: "Small-group Bible study across our campus and online.",
              },
              {
                icon: Heart,
                title: "Prayer Meeting",
                time: "Friday · 6:30 PM",
                desc: "A quiet hour of intercession and worship in the chapel.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="group relative bg-white rounded-2xl p-8 border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 left-8 right-8 h-1 bg-linear-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl text-primary">{s.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-gold font-semibold">
                  <Clock className="h-4 w-4" /> {s.time}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PASTOR MESSAGE */}
      <section className="py-20 md:py-28">
        <div className="container-page grid gap-12 md:grid-cols-2 items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gold/20 -rotate-2" />
            <img
              src={pastor}
              alt="Pastor David"
              width={800}
              height={1000}
              loading="lazy"
              className="relative rounded-3xl shadow-xl w-full h-[520px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-5 border border-border/50 max-w-[220px]">
              <p className="font-serif text-primary text-lg">Pastor David Thompson</p>
              <p className="text-xs text-muted-foreground mt-1">Senior Pastor · Since 2011</p>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">
              A word from our pastor
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl text-primary leading-tight">
              "Every story matters here."
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              When you walk through our doors, you're not walking into a program — you're
              walking into a family. We believe the gospel changes everything, and we're
              committed to helping one another live it out.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Whether you're exploring faith for the first time or you've walked with
              Jesus for decades, we can't wait to meet you.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:text-gold transition-colors"
            >
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { to: "/ministries", icon: Users, title: "Ministries", desc: "Find your people — from kids to seniors, we grow together." },
              { to: "/sermons", icon: Play, title: "Sermons", desc: "Catch up on recent messages or watch this Sunday live." },
              { to: "/events", icon: Calendar, title: "Events", desc: "Upcoming gatherings, retreats, and community moments." },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gold/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <item.icon className="h-8 w-8 text-gold" />
                <h3 className="mt-6 text-2xl text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">{item.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-gold font-semibold text-sm">
                  Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE BANNER */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-royal-deep to-primary text-primary-foreground p-10 md:p-16 shadow-xl">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gold/25 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Give with Joy</p>
                <h2 className="mt-3 text-3xl md:text-5xl text-white">
                  Partner with us in changing lives.
                </h2>
                <p className="mt-4 text-white/80 max-w-xl">
                  Every gift fuels ministry, missions, and the meals we share with our
                  neighbors. Thank you for making room for what God is doing.
                </p>
              </div>
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-semibold text-gold-foreground shadow-lg hover:shadow-2xl hover:brightness-105 transition-all whitespace-nowrap"
              >
                <HandHeart className="h-5 w-5" /> Give Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / COMMUNITY */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">
              Our family
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl text-primary">Stories & Community</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { img: c1, quote: "I walked in as a stranger and left as family.", name: "Marcus R." },
              { img: c2, quote: "Our kids ask every week when we're going back to church.", name: "The Alvarez Family" },
              { img: c3, quote: "Worshiping here has changed how I see God — closer, kinder.", name: "Priya S." },
            ].map((t, i) => (
              <figure
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border border-border/60 shadow-sm hover:shadow-xl transition-all"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <figcaption className="p-6">
                  <p className="font-serif text-lg text-primary italic leading-snug">
                    "{t.quote}"
                  </p>
                  <p className="mt-4 text-sm text-muted-foreground font-semibold">
                    — {t.name}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
