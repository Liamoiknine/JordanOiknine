import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Leadership from "@/components/sections/Leadership";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Experience />
      <Leadership />
      <Projects />
      <Contact />
    </div>
  );
}

