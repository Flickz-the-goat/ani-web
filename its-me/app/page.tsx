import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import ProgressBar from "@/components/misc/ProgressBar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <ProgressBar />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
