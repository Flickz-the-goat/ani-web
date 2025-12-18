"use client"
import { ArrowBigDown, Circle } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ClickButton from "./misc/ClickButton";
export default function Hero(){
    return(
<section className="h-screen flex">
  <div className="max-w-6xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16">

    {/* LEFT */}
    <div className="space-y-8">
      <p className="inline-block text-sm font-mono border-2 border-neutral-900 px-3 py-1 bg-neutral-100 shadow-[2px_2px_0px_#000] fill-animation z-10 relative overflow-visible hover:rotate-4">
      <span className="w-2 h-2 bg-neutral-900 rounded-full absolute -top-1 left-1/2"></span>
        $whoami
      </p>

      <div className="space-y-3">
        <h1 className="text-5xl md:text-6xl font-bold font-mono tracking-tight">
          Anirudh<span className="text-orange-500">.</span>
        </h1>
        <p className="text-lg text-neutral-700 font-medium underline-animation">
          Software Developer
        </p>
      </div>

      <p className="text-neutral-700 max-w-lg leading-relaxed">
        I build clean, fast interfaces & systems with a strong focus on
        performance, simplicity, and maintainability.
      </p>

      <div className="flex gap-4 text-sm font-mono">
        <ClickButton text={"view-work"} link={"#projects"} />
        <ClickButton text={"github"} link={"https://github.com"}/>
      </div>
    </div>

    {/* RIGHT */}
    <div className="flex justify-end items-center">
      <img
        src="/hero.jpeg"
        alt="Anirudh"
        className="h-[70vh] object-cover border-2 border-neutral-900
                   shadow-[6px_6px_0px_#000]
                   grayscale hover:grayscale-0 hover:-rotate-1
                   transition-all"
      />
    </div>

  </div>
</section>


    )
}