function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[85vh] items-center bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Hello, I'm
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Aghahowa Precious
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">
          Frontend Developer
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          I build modern, responsive, and user-friendly web applications
          using HTML, CSS, JavaScript, Tailwind CSS, and React.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;