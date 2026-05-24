import { Briefcase, GraduationCap, Rocket, Server } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const stats = [
  { icon: Briefcase, value: "3+", label: "Years experience" },
  { icon: Server, value: "50+", label: "REST APIs shipped" },
  { icon: Rocket, value: "7+", label: "Production products" },
  { icon: GraduationCap, value: "MCA", label: "Master's degree" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          kicker="01 — About"
          title="A backend engineer who cares about clean systems."
        />

        <div className="mt-12 grid gap-10 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-3">
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              I'm <span className="text-foreground">Aiswarya V S</span>, a results-driven Software
              Engineer specializing in Python web development. Over the past{" "}
              <span className="text-foreground">3 years</span> at{" "}
              <span className="text-foreground">Pearlsoft Technologies</span>, I've designed and
              shipped production-grade backends with{" "}
              <span className="text-primary">Django</span>,{" "}
              <span className="text-primary">Django REST Framework</span>, and{" "}
              <span className="text-primary">FastAPI</span> across healthcare, rental, and
              queue-management platforms.
            </p>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              I care deeply about secure auth done right — JWT, OAuth 2.0, RBAC — building
              asynchronous pipelines with <span className="text-primary">Celery</span> and{" "}
              <span className="text-primary">RabbitMQ</span>, and integrating React frontends with
              well-documented REST APIs. I thrive in Agile teams and enjoy turning messy domain
              requirements into clean, maintainable systems.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-surface/50 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <GraduationCap className="h-4 w-4 text-primary" />
                Education
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex flex-wrap items-baseline justify-between gap-2">
                  <span>
                    <span className="text-foreground">Master of Computer Application</span> · Kerala, India
                  </span>
                  <span className="font-mono text-xs">2018 – 2022 · CGPA 7.92</span>
                </li>
                <li className="flex flex-wrap items-baseline justify-between gap-2">
                  <span>
                    <span className="text-foreground">Bachelor of Computer Application</span> · Kerala, India
                  </span>
                  <span className="font-mono text-xs">2015 – 2018 · CGPA 7.18</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
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
