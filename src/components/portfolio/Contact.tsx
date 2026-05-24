import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface/70 p-10 md:p-16">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:-8s]" />

          <div className="relative">
            <SectionHeading
              kicker="05 — Contact"
              title="Let's build something solid together."
              subtitle="Open to Python Developer roles in the UAE and worldwide — available to start immediately."
              center
            />

            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href="mailto:vsaiswarya98@gmail.com"
                className="group inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
              >
                <Mail className="h-5 w-5" />
                vsaiswarya98@gmail.com
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <div className="mt-2 grid w-full max-w-md gap-3 sm:grid-cols-2">
                <a
                  href="tel:+971503253316"
                  className="flex items-center justify-center gap-2 rounded-lg border border-border bg-background/50 px-4 py-3 text-sm text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  +971 50 325 3316
                </a>
                <div className="flex items-center justify-center gap-2 rounded-lg border border-border bg-background/50 px-4 py-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  UAE · Own Visa
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/aiswarya-v-s-31ba37371"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="GitHub"
                  className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
