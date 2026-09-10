function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Contact
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Let's Work Together
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
          Have a project or idea you'd like to discuss? Feel free to reach out.
        </p>

        <a
          href="mailto:preciousikechukwu845@gmail.com"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
        >
          Send Me an Email
        </a>

        <p className="mt-6 text-slate-400">
          preciousikechukwu845@gmail.com
        </p>

      </div>
    </section>
  );
}

export default Contact;