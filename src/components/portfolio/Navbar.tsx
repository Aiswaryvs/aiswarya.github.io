import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoA from "@/assets/logo-a.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
            scrolled ? "glass shadow-lg" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-2 rounded-2xl bg-primary/30 blur-xl opacity-50 transition-all duration-500 group-hover:opacity-90 group-hover:bg-primary/50 animate-glow" />
              {/* Inner subtle glow */}
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Logo container */}
              <div className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-primary/40 bg-background/60 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:border-primary/80 group-hover:scale-105">
                <img
                  src={logoA}
                  alt="Aiswarya logo"
                  className="h-full w-full object-contain p-0.5 drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)] transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="flex flex-col -space-y-0.5">
              <span className="font-mono text-sm tracking-tight leading-tight">
                <span className="font-semibold text-foreground">aiswarya</span>
                <span className="text-primary font-bold">.py</span>
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <span className="h-px w-3 bg-primary/40" />
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  Software Engineer
                </span>
              </span>
            </div>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* <a
            href="#contact"
            className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)] md:inline-flex"
          >
            Hire me
          </a> */}

          <button
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-md text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="glass mt-2 rounded-2xl p-3 md:hidden animate-fade-in">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-4 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                {/* <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-md bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
                >
                  Hire me
                </a> */}
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
