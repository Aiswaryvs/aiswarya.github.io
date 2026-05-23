import { Briefcase, Rocket, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { icon: Briefcase, value: "3+", label: "Years experience" },
  { icon: Rocket, value: "20+", label: "Projects shipped" },
  { icon: Users, value: "10+", label: "Happy clients" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading kicker="01 — About" title="A backend engineer who cares about clean systems." />

        <div className="mt-12 grid gap-10 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-3">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              I'm a Python developer with <span className="text-foreground">3 years</span> of
              hands-on experience designing and shipping production-grade backends. I specialize in
              building secure RESTful APIs with <span className="text-primary">FastAPI</span> and{" "}
              <span className="text-primary">Django</span>, integrating third-party services, and
              architecting asynchronous pipelines with <span className="text-primary">Celery</span>{" "}
              and <span className="text-primary">RabbitMQ</span>.
            </p>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              I care deeply about authentication done right — JWT, OAuth 2.0, RBAC — and about
              writing code that other engineers actually enjoy reading. I'm just as comfortable
              modeling Postgres schemas as I am crafting React components for a smooth full-stack
              experience.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="grid gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-surface/50 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-elevated"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold">{s.value}</div>
                    <div className="text-sm text-muted-foreground">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
