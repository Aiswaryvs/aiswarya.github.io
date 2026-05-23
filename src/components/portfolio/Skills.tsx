import {
  Code2,
  Database,
  Server,
  Shield,
  Workflow,
  Layout,
  Container,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const groups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["Python", "JavaScript"],
  },
  {
    icon: Server,
    title: "Frameworks",
    items: ["FastAPI", "Django", "Django REST Framework"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis"],
  },
  {
    icon: Workflow,
    title: "APIs",
    items: ["RESTful APIs", "API Integration", "API Documentation"],
  },
  {
    icon: Shield,
    title: "Auth & Security",
    items: ["JWT", "OAuth 2.0", "RBAC", "Token-Based Auth", "Session Management"],
  },
  {
    icon: Workflow,
    title: "Async Processing",
    items: ["Celery", "RabbitMQ"],
  },
  {
    icon: Layout,
    title: "Frontend",
    items: ["React", "HTML", "CSS"],
  },
  {
    icon: Container,
    title: "DevOps",
    items: ["Docker"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "GitLab", "Jira"],
  },
];

const marqueeItems = [
  "Python",
  "FastAPI",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "Celery",
  "RabbitMQ",
  "Docker",
  "Redis",
  "JWT",
  "OAuth 2.0",
  "React",
  "Git",
  "DRF",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, var(--border), transparent)",
        }}
      />
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          kicker="02 — Skills"
          title="The tools I reach for, every day."
          subtitle="A pragmatic stack focused on shipping reliable, maintainable software."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-elevated"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold">{g.title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div
          className="relative mt-16 overflow-hidden"
          style={{
            maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee gap-8 py-2">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="font-mono text-2xl font-bold uppercase tracking-tight text-muted-foreground/40 transition-colors hover:text-primary md:text-4xl"
              >
                {item} <span className="text-primary">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
