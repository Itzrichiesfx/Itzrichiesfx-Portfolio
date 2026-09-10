const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern and responsive personal portfolio built with React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    title: "Web Application",
    description:
      "A responsive web application focused on clean design and user experience.",
    technologies: ["JavaScript", "CSS"],
  },
  {
    title: "Landing Page",
    description:
      "A modern landing page designed with responsive layouts and clean UI principles.",
    technologies: ["HTML", "Tailwind CSS"],
  },
];

function Project() {
  return (
    <section id="projects" className="bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Portfolio
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Featured Projects
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-2 hover:border-blue-500"
            >
              <h3 className="text-xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-4 leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Project;