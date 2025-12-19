"use client";
import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import ProgressBar from "@/components/misc/ProgressBar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { useState } from "react";
import Resume from "@/components/Resume";

export default function Home() {
  const [light, setLight] = useState(true);

  return (
    <main className={`${light ? "light" : "dark"} text-(--textMain) bg-(--background)`}>
      <ProgressBar />
      <Navbar light={light} setLight={setLight} />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
    </main>
  );
}
