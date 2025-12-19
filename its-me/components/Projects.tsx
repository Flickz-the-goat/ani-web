export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce site built with Next.js and Stripe.",
      link: "#",
      tech: ["Next.js", "Stripe", "Tailwind"],
    },
    {
      title: "Task Manager App",
      description:
        "A productivity app with real-time collaboration using Socket.io.",
      link: "#",
      tech: ["React", "Node.js", "Socket.io"],
    },
    {
      title: "Task Manager App",
      description:
        "A productivity app with real-time collaboration using Socket.io.",
      link: "#",
      tech: ["React", "Node.js", "Socket.io"],
    },
  ];

  return (
    <section id="projects" className="py-12 w-full max-w-6xl mx-auto px-6">
      <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6 text-center">
        Projects<span className="text-orange-500">.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="border-2 border-neutral-900 p-6 bg-white shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <h3 className="text-2xl font-bold font-mono mb-2">
              {project.title}
            </h3>
            <p className="text-neutral-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={tech}
                  className="text-xs font-mono border border-neutral-900 px-2 py-1 bg-neutral-100"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-orange-500 font-mono underline-animation"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
