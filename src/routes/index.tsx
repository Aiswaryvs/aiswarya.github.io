import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aiswarya V S — Python Developer (Django · DRF · FastAPI)" },
      {
        name: "description",
        content:
          "Aiswarya V S — Software Engineer with 3 years of experience building scalable Python backends with Django, DRF, FastAPI, Celery, PostgreSQL, and React. Based in UAE, open to relocation.",
      },
      { property: "og:title", content: "Aiswarya V S — Python Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Django · DRF · FastAPI · Celery · PostgreSQL · Docker — 3 years shipping production backends.",
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
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
