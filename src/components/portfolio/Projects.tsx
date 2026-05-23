import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    title: "Distributed Task Orchestrator",
    description:
      "Async job pipeline handling 50k+ daily tasks with Celery, RabbitMQ, and Redis. Includes retries, dead-letter queues, and live dashboards.",
    tags: ["FastAPI", "Celery", "RabbitMQ", "Redis", "Docker"],
    accent: "from-primary/30 to-accent/20",
  },
  {
    title: "Multi-Tenant SaaS API",
    description:
      "Production Django REST Framework backend with role-based access control, OAuth 2.0, Stripe integration, and granular permissions.",
    tags: ["Django", "DRF", "PostgreSQL", "OAuth 2.0", "RBAC"],
    accent: "from-accent/30 to-primary/20",
  },
  {
    title: "Real-time Analytics Service",
    description:
      "High-throughput event ingestion service using FastAPI + MongoDB aggregation pipelines, exposed through documented OpenAPI specs.",
    tags: ["FastAPI", "MongoDB", "JWT", "Docker"],
    accent: "from-[oklch(0.7_0.15_300)]/30 to-primary/20",
  },
  {
    title: "Full-Stack Admin Dashboard",
    description:
      "React + Django REST admin panel with custom auth, audit logging, and CSV export pipelines. Deployed with Docker Compose.",
    tags: ["Django", "React", "PostgreSQL", "Docker"],
    accent: "from-primary/30 to-[oklch(0.7_0.15_300)]/20",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          kicker="03 — Selected work"
          title="Projects that ship real value."
          subtitle="A snapshot of recent backend systems and full-stack builds."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div
                className={`absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} opacity-40 blur-3xl transition-all duration-500 group-hover:opacity-70`}
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                    {p.title}
                  </h3>
                  <div className="flex shrink-0 gap-2">
                    <button
                      aria-label="GitHub"
                      className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
                    >
                      <Github className="h-4 w-4" />
                    </button>
                    <button
                      aria-label="Open"
                      className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all group-hover:rotate-45 hover:border-primary/40 hover:text-primary"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-pretty text-muted-foreground">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
