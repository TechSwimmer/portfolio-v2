import Link from "next/link"

export default function Navbar() {
    return (
        <header className="border-b">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    Nikhil 
                </h1>
                </Link>
                <ul className="flex items-center gap-6 pl-6">
                    <Link href="/about">
                    <li>About</li>
                    </Link>
                    <Link href="/projects">
                    <li>Projects</li>
                    </Link>
                    <Link href="/skills">
                    <li>Skills</li>
                    </Link>
                    <Link href="/contact">
                    <li>Contact</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}