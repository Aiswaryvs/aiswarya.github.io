import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Python Developer Portfolio — Backend Engineer" },
      {
        name: "description",
        content:
          "Portfolio of a Python developer with 3 years of experience building scalable APIs with FastAPI, Django, Celery, PostgreSQL, and React.",
      },
      { property: "og:title", content: "Python Developer Portfolio" },
      {
        property: "og:description",
        content: "FastAPI · Django · Celery · PostgreSQL · Docker — 3 years building production backends.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
