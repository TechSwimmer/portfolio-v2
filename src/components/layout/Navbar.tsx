"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/#home" },  
  { name: "Projects", href: "/#projects" },
  { name: "Open Source", href: "/#opensource" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/70 dark:border-white/10 dark:bg-zinc-950/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        
          <h1 className="font-display text-xl font-semibold tracking-wide text-zinc-900 dark:text-zinc-100">
            Nikhil
          </h1>
        

        {/* Desktop Navigation (hidden on mobile) */}
        <ul className="hidden md:flex items-center gap-6 pl-6 text-gray-700">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={
                    isActive
                      ? "page"
                      : undefined
                  }
                  className={`relative transition-colors duration-300
    
    focus:outline-none
    focus:ring-2
    focus:ring-zinc-500
    dark:focus:ring-zinc-400
    rounded-sm
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:transition-[width]
    after:duration-300
    ${isActive
                      ? "text-zinc-950 after:w-full after:bg-zinc-950 dark:text-zinc-100 dark:after:bg-zinc-100 font-inter font-semibold"
                      : "text-zinc-700 hover:text-zinc-950 after:w-0 after:bg-zinc-950 hover:after:w-full dark:text-zinc-200 dark:hover:text-zinc-100 dark:after:bg-zinc-100 font-inter font-semibold"
                    }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Controls: Theme Toggle + Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:text-zinc-200 dark:focus:ring-zinc-400 rounded-md"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 z-40 mt-1 border-t border-white/20 bg-white/95 dark:border-white/10 dark:bg-zinc-950/95 md:hidden">
            <ul className="flex flex-col items-center gap-6 py-6 text-gray-700">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={
                        closeMobileMenu
                      }
                      aria-current={
                        isActive
                          ? "page"
                          : undefined
                      }
                      className={`block py-2 text-lg transition-colors
    focus:outline-none
    focus:ring-2
    focus:ring-zinc-500
    dark:focus:ring-zinc-400
    rounded-md px-3
    ${isActive
                          ? "text-zinc-950 font-semibold dark:text-zinc-100"
                          : "text-zinc-700 hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-zinc-100"
                        }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}