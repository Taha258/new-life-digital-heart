import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { HandHeart, Lock, Sparkles } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Give — New Life Christian Fellowship" },
      { name: "description", content: "Support the mission of New Life Christian Fellowship with a one-time or recurring gift." },
      { property: "og:title", content: "Give to New Life" },
      { property: "og:description", content: "Every gift fuels ministry, missions, and mercy." },
    ],
  }),
  component: Donate,
});

const presets = [25, 50, 100, 250, 500, 1000];

function Donate() {
  const [amount, setAmount] = useState<number | "">(100);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [fund, setFund] = useState("general");

  const finalAmount = custom ? Number(custom) : amount;

  return (
    <>
      <PageHeader
        eyebrow="Give with joy"
        title="Partner with what God is doing."
        description="Your generosity fuels weekly ministry, global missions, and mercy for our neighbors."
      />
      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr] max-w-5xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!finalAmount || Number(finalAmount) <= 0) {
                toast.error("Please enter a gift amount.");
                return;
              }
              toast.success(`Thank you! Redirecting to secure checkout for $${finalAmount} (${frequency}).`);
            }}
            className="bg-white rounded-3xl border border-border/60 shadow-sm p-8 md:p-10"
          >
            <h2 className="font-serif text-3xl text-primary">Make a gift</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Payment processing coming soon — this is a preview of the giving flow.
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Frequency</p>
              <div className="mt-2 grid grid-cols-2 rounded-full bg-cream p-1">
                {(["one-time", "monthly"] as const).map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFrequency(f)}
                    className={
                      "rounded-full py-2.5 text-sm font-semibold capitalize transition-colors " +
                      (frequency === f ? "bg-primary text-primary-foreground shadow" : "text-foreground/60")
                    }
                  >
                    {f === "one-time" ? "One-time" : "Monthly"}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Amount</p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                {presets.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => { setAmount(p); setCustom(""); }}
                    className={
                      "rounded-xl border py-4 text-lg font-semibold transition-all " +
                      (amount === p && !custom
                        ? "border-gold bg-gold/10 text-primary"
                        : "border-border bg-cream/50 text-foreground/70 hover:border-gold")
                    }
                  >
                    ${p}
                  </button>
                ))}
              </div>
              <div className="mt-3 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <input
                  type="number"
                  min={1}
                  placeholder="Other amount"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  className="w-full rounded-xl border border-border bg-cream/50 pl-8 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Fund</p>
              <select
                value={fund}
                onChange={(e) => setFund(e.target.value)}
                className="mt-2 w-full rounded-xl border border-border bg-cream/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="general">General Fund</option>
                <option value="missions">Global Missions</option>
                <option value="building">Building & Facilities</option>
                <option value="benevolence">Benevolence & Mercy</option>
              </select>
            </div>

            <button className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold text-gold-foreground px-8 py-4 font-semibold shadow-sm hover:shadow-md hover:brightness-105 transition-all">
              <HandHeart className="h-5 w-5" /> Give ${finalAmount || 0} {frequency === "monthly" && "/ month"}
            </button>
            <p className="mt-4 text-xs text-muted-foreground flex items-center justify-center gap-1.5">
              <Lock className="h-3 w-3" /> Secure payment processing
            </p>
          </form>

          <aside className="space-y-4">
            {[
              { icon: HandHeart, title: "Local outreach", body: "Food, shelter, and mentorship for our neighbors in need." },
              { icon: Sparkles, title: "Global missions", body: "Partner churches and workers on five continents." },
              { icon: HandHeart, title: "Weekly ministry", body: "Worship, kids, youth, and gatherings that build faith." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-cream p-6 border border-border/60">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-gold text-gold-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg text-primary">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}