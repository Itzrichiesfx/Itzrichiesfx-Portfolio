function About() {
  return (
    <section id="about" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-6xl px-6">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          About Me
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Building modern web experiences.
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-slate-400">
          <p>
            I am a frontend developer passionate about building beautiful,
            responsive, and functional web applications.
          </p>

          <p>
            I enjoy turning ideas and designs into interactive digital
            experiences using modern web technologies.
          </p>

          <p>
            I am continuously improving my skills in React and modern frontend
            development.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;