export default function About() {
  return (
    <section id="about" className="py-12 w-full max-w-6xl mx-auto px-6">
      <h2 className="text-5xl md:text-6xl font-bold font-mono mb-6 text-center">
        About<span className="text-orange-500">.</span>
      </h2>
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-lg text-neutral-700 leading-relaxed">
          I'm a passionate software developer with a love for creating intuitive
          and efficient solutions. With experience in full-stack development, I
          enjoy tackling complex problems and turning ideas into reality.
        </p>
        <p className="text-lg text-neutral-700 leading-relaxed">
          When I'm not coding, you can find me exploring new technologies,
          contributing to open-source projects, or enjoying outdoor activities.
          I believe in continuous learning and staying curious about the
          ever-evolving tech landscape.
        </p>
        <div className="flex justify-center gap-6 mt-8">
          <div className="text-center">
            <div className="text-4xl font-bold font-mono text-orange-500">
              50+
            </div>
            <div className="text-sm text-neutral-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold font-mono text-orange-500">
              3+
            </div>
            <div className="text-sm text-neutral-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold font-mono text-orange-500">
              10+
            </div>
            <div className="text-sm text-neutral-600">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
}
