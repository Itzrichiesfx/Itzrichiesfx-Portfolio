const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Git",
];

function Skill() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Technologies
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          My Skills
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-5 text-center font-medium text-slate-300 transition hover:-translate-y-1 hover:border-blue-500 hover:text-white"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skill;