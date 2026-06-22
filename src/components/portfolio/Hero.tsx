import { ArrowRight, Download, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import resume from "../../assets/Aiswarya_V_S.pdf";

const codeLines = [
  { t: "class", v: "Engineer:", c: "text-[oklch(0.75_0.16_300)]" },
  { t: "    name", v: '= "Aiswarya V S"', c: "text-primary" },
  { t: "    role", v: '= "Python Developer"', c: "text-accent" },
  { t: "    focus", v: '= "Scalable Backends"', c: "text-[oklch(0.8_0.15_85)]" },
  { t: "    stack", v: '= ["Django", "FastAPI", "DRF"]', c: "text-primary" },
  { t: "    location", v: '= "UAE"', c: "text-accent" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Mesh background */}
      <div className="bg-mesh absolute inset-0 -z-10" />
      <div className="absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="absolute -bottom-24 right-0 -z-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:-6s]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Own visa, UAE
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Hi, I'm <span className="text-gradient bg-[length:200%_auto] animate-gradient">Aiswarya</span>
            <br />
            a <span className="font-mono text-primary">Python</span> developer.
          </h1>

          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Experienced Software Engineer specializing in building scalable backends with{" "}
            <span className="text-foreground">Django</span>,
            <span className="text-foreground"> Django REST Framework</span>, and
            <span className="text-foreground"> FastAPI</span> — shipping 50+ production APIs
            across healthcare, rental, and queue-management platforms.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={resume} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-elevated"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-muted-foreground">
            <a
              href="https://www.linkedin.com/in/aiswarya-v-s-31ba37371"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/Aiswaryvs" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-1.5 text-xs">
              <MapPin className="h-3.5 w-3.5" />
              UAE — Open to relocation
            </div>
          </div>
        </div>

        {/* Code card */}
        <div className="animate-fade-up [animation-delay:200ms]">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
            <div className="glass overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-2 border-b border-border bg-surface-elevated/50 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[oklch(0.65_0.22_25)]" />
                <span className="h-3 w-3 rounded-full bg-[oklch(0.8_0.15_85)]" />
                <span className="h-3 w-3 rounded-full bg-primary" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">aiswarya.py</span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed">
                <code>
                  {codeLines.map((line, i) => (
                    <div
                      key={i}
                      className="animate-fade-up opacity-0"
                      style={{ animationDelay: `${400 + i * 120}ms`, animationFillMode: "forwards" }}
                    >
                      <span className="text-muted-foreground">{String(i + 1).padStart(2, "0")}  </span>
                      <span className={line.c}>{line.t}</span>{" "}
                      <span className="text-foreground/90">{line.v}</span>
                    </div>
                  ))}
                  <div
                    className="mt-4 animate-fade-up opacity-0"
                    style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
                  >
                    <span className="text-muted-foreground">08  </span>
                    <span className="text-[oklch(0.75_0.16_300)]">def</span>{" "}
                    <span className="text-primary">ship</span>
                    <span>():</span>
                  </div>
                  <div
                    className="animate-fade-up opacity-0"
                    style={{ animationDelay: "1350ms", animationFillMode: "forwards" }}
                  >
                    <span className="text-muted-foreground">09  </span>
                    <span className="text-accent">    return</span>{" "}
                    <span className="text-[oklch(0.8_0.15_85)]">"scalable APIs"</span>
                  </div>
                  <div
                    className="mt-3 flex items-center gap-2 animate-fade-up opacity-0"
                    style={{ animationDelay: "1550ms", animationFillMode: "forwards" }}
                  >
                    <span className="text-primary">$</span>
                    <span className="text-foreground/80">python</span>
                    <span className="text-muted-foreground">aiswarya.py</span>
                    <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-primary" />
                  </div>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
