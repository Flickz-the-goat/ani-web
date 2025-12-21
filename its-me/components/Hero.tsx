"use client"
import { ArrowBigDown, Circle } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ClickButton from "./misc/ClickButton";
export default function Hero(){
    return(
    <section className="h-screen flex">
  <div className="max-w-6xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8 pt-20">

    {/* LEFT */}
    <div className="space-y-4">
      <motion.p initial={{opacity: 0, x:-100}} animate={{opacity: 100, x: 0, transition:{type: "spring", delay: 1}}} className="inline-block text-sm font-mono border-2 border-(--borderColor) px-3 py-1 bg-(--secondary-bg) shadow-[2px_2px_0px_var(--shadowColor)] fill-animation z-10 relative overflow-visible hover:rotate-4">
      <span className="w-2 h-2 bg-(--borderColor) rounded-full absolute -top-1 left-1/2"></span>
        $whoami
      </motion.p>

      <div className="space-y-2">
        <motion.h1  initial={{opacity: 0, x:-100}} animate={{opacity: 100, x: 0, transition:{type: "spring", delay: 1.2}}} className="text-6xl md:text-7xl font-bold font-mono tracking-tight">
          Anirudh<span className="text-(--effect)">.</span>
        </motion.h1>
        <motion.p initial={{opacity: 0, x:-100}} animate={{opacity: 100, x: 0, transition:{type: "spring", delay: 1.4}}} className="text-xl text-(--textSecondary) font-medium">
          Software Developer
        </motion.p>
      </div>

      <motion.p  initial={{opacity: 0, x:-100}} animate={{opacity: 100, x: 0, transition:{type: "spring", delay: 1.6}}} className="text-(--text-secondary) max-w-lg leading-relaxed text-lg">
        I build clean, fast interfaces & systems with a strong focus on
        performance, simplicity, and maintainability.
      </motion.p>

      <div className="flex gap-4 text-sm font-mono">
        <ClickButton text={"view-work"} link={"#projects"} />
        <ClickButton text={"github"} link={"https://github.com/Flickz-the-goat"}/>
      </div>
    </div>

    {/* RIGHT */}
    <motion.div initial={{opacity: 0, x: 100}} animate={{opacity: 100, x: 0, transition: {type: "spring"}}} className="relative flex justify-end items-center">
      <img
        src="/hero.jpeg"
        alt="Anirudh"
        className="md:h-[80vh] object-cover border-2 border-(--borderColor)
                   shadow-[6px_6px_0px_(--shadowColor)]
                   grayscale hover:grayscale-0 hover:-rotate-1
                   transition-all sm:h-[50vh]"
      />
    </motion.div>

  </div>
</section>
    )
}
