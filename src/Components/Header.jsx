function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white"
        >
        <span className="text-blue-500"></span>
        </a>

        <nav>
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-300">
            <li>
              <a
                href="#home"
                className="transition hover:text-blue-400"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="transition hover:text-blue-400"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="transition hover:text-blue-400"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;