import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import pastor from "@/assets/pastor.jpg";
import c1 from "@/assets/community-1.jpg";
import c2 from "@/assets/community-2.jpg";
import c3 from "@/assets/community-3.jpg";
import heroAbout from "@/assets/hero-about.jpg";
import { Compass, Sprout, Heart, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - New Life Christian Fellowship" },
      {
        name: "description",
        content: "Our story, mission, and beliefs at New Life Christian Fellowship.",
      },
      { property: "og:title", content: "About New Life Christian Fellowship" },
      {
        property: "og:description",
        content: "Founded in 1978, we're a family committed to Jesus and one another.",
      },
    ],
  }),
  component: About,
});

const beliefs = [
  {
    q: "The Bible",
    a: "We believe the Scriptures are the inspired, authoritative Word of God and our guide for faith and life.",
  },
  { q: "God", a: "One God eternally existing in three persons: Father, Son, and Holy Spirit." },
  {
    q: "Jesus Christ",
    a: "Fully God and fully man, who lived, died, and rose again to reconcile us to the Father.",
  },
  {
    q: "Salvation",
    a: "By grace alone, through faith alone, in Christ alone - a free gift for all who believe.",
  },
  {
    q: "The Church",
    a: "A family of believers called to worship, grow, and serve together in love.",
  },
  {
    q: "The Return of Christ",
    a: "We look forward to the day Jesus returns to make all things new.",
  },
];

const leaders = [
  { name: "Pastor David Thompson", role: "Senior Pastor", img: pastor },
  { name: "Sarah Thompson", role: "Women's Ministry Lead", img: c2 },
  { name: "Michael Chen", role: "Worship Pastor", img: c1 },
  { name: "Grace Okafor", role: "Youth Pastor", img: c3 },
];

function About() {
  const storyRef = useScrollReveal();
  const missionRef = useScrollReveal();
  const beliefsRef = useScrollReveal();
  const teamRef = useScrollReveal();

  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Rooted in grace, growing in love."
        description="Since 1978, New Life Christian Fellowship has been a spiritual home for generations of families across our city."
        image={heroAbout}
        imageAlt="Congregation gathered in the sanctuary"
      />

      <section ref={storyRef} className="reveal py-16 sm:py-20 md:py-28">
        <div className="container-page grid gap-10 sm:gap-12 md:grid-cols-2 items-center">
          <img
            src={c1}
            alt="Congregation"
            width={1200}
            height={800}
            loading="lazy"
            className="rounded-3xl shadow-lg w-full h-[300px] sm:h-[380px] md:h-[440px] object-cover"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary">
              A humble beginning, a hopeful future.
            </h2>
            <p className="mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
              What started as a small prayer group meeting in a family living room has grown into a
              vibrant community of over 800 members. Through every season - celebrations, losses,
              revivals, and rebuilds - we've held tightly to one conviction: Jesus is worth it all.
            </p>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Today, we gather across two Sunday services, midweek studies, and dozens of small
              groups that meet in homes throughout the week.
            </p>
          </div>
        </div>
      </section>

      <section ref={missionRef} className="reveal bg-cream py-16 sm:py-20 md:py-28">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          {[
            {
              icon: Compass,
              title: "Our Mission",
              body: "To make disciples who love God, love people, and make Jesus known - in our homes, our city, and to the ends of the earth.",
            },
            {
              icon: Sprout,
              title: "Our Vision",
              body: "A thriving community of faith where every generation experiences the transforming power of the gospel.",
            },
          ].map((v, i) => (
            <div
              key={v.title}
              className={`stagger-${i + 1} bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-border/60 hover:shadow-lg transition-all duration-300`}
            >
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gold/15 text-gold">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl sm:text-3xl text-primary">{v.title}</h3>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section ref={beliefsRef} className="reveal py-16 sm:py-20 md:py-28">
        <div className="container-page max-w-3xl px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold text-center">
            Statement of faith
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl text-primary text-center">
            What we believe
          </h2>
          <p className="mt-4 text-center text-sm sm:text-base text-muted-foreground">
            The core convictions that shape our worship, teaching, and life together.
          </p>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {beliefs.map((b) => (
              <AccordionItem
                key={b.q}
                value={b.q}
                className="border border-border/70 rounded-xl px-5 sm:px-6 bg-white hover:shadow-sm transition-shadow"
              >
                <AccordionTrigger className="text-base sm:text-lg font-serif text-primary hover:no-underline">
                  {b.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {b.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section ref={teamRef} className="reveal bg-cream py-16 sm:py-20 md:py-28">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <p className="text-xs uppercase tracking-[0.28em] text-gold font-semibold">Our team</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl text-primary">
              Meet the leadership
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((l, i) => (
              <div
                key={l.name}
                className={`stagger-${i + 1} group bg-white rounded-2xl overflow-hidden shadow-sm border border-border/60 hover:shadow-lg transition-all duration-300`}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={l.img}
                    alt={l.name}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 sm:p-5 text-center">
                  <p className="font-serif text-base sm:text-lg text-primary">{l.name}</p>
                  <p className="text-xs uppercase tracking-widest text-gold mt-1">{l.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
