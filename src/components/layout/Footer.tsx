import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        
        {/* Left Section */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Nikhil Pillai
          </h2>

          <p className="max-w-md text-sm text-zinc-600 dark:text-zinc-400">
            Full Stack Developer focused on building scalable web
            applications and polished user experiences.
          </p>
        </div>

        {/* Center Navigation */}
        <div>
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <li>
              <Link
                href="/about"
                className="text-zinc-600 transition hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-100 dark:focus:ring-zinc-400"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/projects"
                className="text-zinc-600 transition hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-100 dark:focus:ring-zinc-400"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                href="/skills"
                className="text-zinc-600 transition hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-100 dark:focus:ring-zinc-400"
              >
                Skills
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="text-zinc-600 transition hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-100 dark:focus:ring-zinc-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/TechSwimmer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-600 transition hover:scale-110 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-100 dark:focus:ring-zinc-400"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/techDevNikhil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-600 transition hover:scale-110 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-100 dark:focus:ring-zinc-400"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="/contact"
            aria-label="Email"
            className="text-zinc-600 transition hover:scale-110 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-100 dark:focus:ring-zinc-400"
          >
            <FaEnvelope size={22} />
          </a>

          <a
            href="https://www.codewars.com/users/techDevNikhil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodeWars"
            className="text-zinc-600 transition hover:scale-110 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:text-zinc-400 dark:hover:text-zinc-100 dark:focus:ring-zinc-400"
          >
            <FaCode size={22} />
          </a>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-zinc-200 py-4 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
        © {currentYear} Nikhil Pillai. Built with Next.js & Tailwind CSS.
      </div>
    </footer>
  );
} 