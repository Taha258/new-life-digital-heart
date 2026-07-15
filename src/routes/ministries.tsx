import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import {
  Sparkles,
  Users,
  Heart,
  Baby,
  Music,
  HandHeart,
  Coffee,
  Globe,
  ArrowRight,
} from "lucide-react";
import heroMinistries from "@/assets/hero-ministries.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/ministries")({
  head: () => ({
    meta: [
      { title: "Ministries — New Life Christian Fellowship" },
      {
        name: "description",
        content: "Find your community — ministries for every age and season of life.",
      },
      { property: "og:title", content: "Ministries at New Life" },
      {
        property: "og:description",
        content: "Youth, kids, women, men, worship, outreach — there's a place for you.",
      },
    ],
  }),
  component: Ministries,
});

const ministries = [
  {
    icon: Baby,
    title: "Kids",
    desc: "Safe, fun, gospel-centered environments for infants through 5th grade.",
  },
  {
    icon: Sparkles,
    title: "Youth",
    desc: "Middle and high school students growing in faith and friendship.",
  },
  {
    icon: Heart,
    title: "Women",
    desc: "Bible studies, retreats, and friendships that carry through every season.",
  },
  {
    icon: Users,
    title: "Men",
    desc: "Brotherhood built around Scripture, service, and shared meals.",
  },
  {
    icon: Music,
    title: "Worship Team",
    desc: "Musicians, singers, and tech volunteers leading us to the throne.",
  },
  {
    icon: HandHeart,
    title: "Outreach",
    desc: "Meeting real needs — food, shelter, mentorship — across our city.",
  },
  {
    icon: Coffee,
    title: "Hospitality",
    desc: "Greeters, hosts, and coffee crews making everyone feel at home.",
  },
  {
    icon: Globe,
    title: "Missions",
    desc: "Partnering with churches and workers on five continents.",
  },
];

function Ministries() {
  const gridRef = useScrollReveal();

  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title="A place for every season."
        description="However you're wired, whatever you love — there's a spot at New Life where you belong and can make a difference."
        image={heroMinistries}
        imageAlt="Volunteers serving together in community"
      />
      <section ref={gridRef} className="reveal py-16 sm:py-20 md:py-28">
        <div className="container-page grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ministries.map((m, i) => (
            <div
              key={m.title}
              className={`stagger-${Math.min(i + 1, 6)} group relative bg-white rounded-2xl p-5 sm:p-7 border border-border/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm group-hover:scale-110 transition-transform duration-300">
                <m.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl text-primary">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              <Link
                to="/contact"
                className="mt-4 sm:mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-primary transition-colors group/link"
              >
                Learn more{" "}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
