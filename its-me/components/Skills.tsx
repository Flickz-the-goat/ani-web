"use client"
import { AnimatePresence, motion } from "framer-motion";
export default function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Python",
    "Java",
    "C/C#",
    "Azure", 
    "MySQL",
    "Full Stack Dev",
    "Ethical AI"
  ];

  return (
    <section id="skills" className="py-12 w-full max-w-6xl mx-auto px-6">
    <AnimatePresence>
      <motion.h2 initial={{opacity: 0}} animate={{opacity: 100}} className="text-5xl md:text-6xl font-bold font-mono mb-6 text-center">
        Skills<span className="text-(--effect)">.</span>
      </motion.h2>
    </AnimatePresence>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className="z-0 fill-animation border-2 border-(--borderColor) px-4 py-3 bg-(--cardBg)  shadow-[3px_3px_0px_var(--shadowColor)] text-center font-mono text-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
