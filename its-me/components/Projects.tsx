import { link } from "fs";

export default function Projects() {
  const projects = [
    {
      title: "Africited Website",
      description:
        "Engineered a secure backend with Row-Level Security and Supabase auth.Integrated Stripe for event signups and membership management. Built automated workflows for subscription renewals, cancellations, and plan changes.",
      link: "https://github.com/Flickz-the-goat/africited",
      tech: ["Next.js", "TailwindCSS", "Supabase", "StripeJS"],
    },
    {
    title: "Basic Live Flight Tracker",
    description: "A React-based map that displays real-time airplane positions using OpenSky API. Planes move smoothly based on heading and speed, with interactive markers and flight path tracking.",
    link: "https://github.com/Flickz-the-goat/flight-tracker", 
    tech: ["React", "Next.js", "Mapbox GL", "TypeScript", "OpenSky API"],
  }

  ];

  return (
    <section id="projects" className="py-12 w-full max-w-6xl mx-auto px-6">
      <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6 text-center">
        Noteable Projects<span className="text-(--effect)">.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="border-2 border-(--borderColor) p-6 bg-(--cardBg) shadow-[4px_4px_0px_var(--shadowColor)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <h3 className="text-2xl font-bold font-mono mb-2">
              {project.title}
            </h3>
            <p className="text-(--textSecondary) mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={tech}
                  className="text-xs font-mono border border-(--borderColor) px-2 py-1 shadow-[4px_4px_0px_var(--shadowColor)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-(--effect) font-mono underline-animation"
              target="_blank"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
