export default function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Django",
    "Flask",
    "SQL",
    "MongoDB",
    "Git",
    "Docker",
    "AWS",
    "Tailwind CSS",
    "Framer Motion",
  ];

  return (
    <section id="skills" className="py-12 w-full max-w-6xl mx-auto px-6">
      <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6 text-center">
        Skills<span className="text-orange-500">.</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className="border-2 border-neutral-900 px-4 py-3 bg-white shadow-[3px_3px_0px_#000] text-center font-mono text-sm hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
