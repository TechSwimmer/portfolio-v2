import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/">
          <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-xl font-bold text-transparent">
            Nikhil
          </h1>
        </Link>

        <ul className="flex items-center gap-6 pl-6 text-gray-700">
          <li>
            <Link
              href="/about"
              className="relative text-gray-700 transition-colors duration-300 hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/projects"
              className="relative text-gray-700 transition-colors duration-300 hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              href="/skills"
              className="relative text-gray-700 transition-colors duration-300 hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="relative text-gray-700 transition-colors duration-300 hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}