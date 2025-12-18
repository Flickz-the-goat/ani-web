import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import ProgressBar from "@/components/misc/ProgressBar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
        <ProgressBar />
        <Navbar />
        <Hero />
        <Skills />
    </main>
  );
}
