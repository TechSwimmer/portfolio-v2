"use client";

import { motion } from "framer-motion";
import PrimaryButton from "@/components/ui/PrimaryButton";

import Link from "next/link";
import HeroProofPanel from "./HeroProofPanel";

export default function Hero() {
    return (
        <section className="relative max-w-7xl mx-auto px-6 py-28" id="home">
            <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl"
                >
                    <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4 dark:text-zinc-400">
                        Full Stack Developer
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight dark:text-zinc-100">
                        Building thoughtful{" "}
                        <span className="text-4xl bg-gradient-to-r from-gray-900 to-gray-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent tracking-[0.15em]">
                            Digital Experiences
                        </span>
                    </h1>

                    <p className="text-lg text-gray-600 dark:text-zinc-300 mt-8 max-w-2xl leading-relaxed">
                       Full-stack developer building production-ready applications, contributing to open source, and solving real-world problems through modern web technologies.
                    </p>

                    <div className="flex gap-4 mt-10">

                        <PrimaryButton text="view projects" href="/#projects" />


                        <PrimaryButton text="Contact Me" href="/#contact" />

                    </div>

                    <div className="flex flex-wrap gap-3 mt-12">
                        {[
                            "React",
                            "Next.js",
                            "Node.js",
                            "TypeScript",
                            "Tailwind CSS",
                            "MongoDB",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 rounded-full border border-gray-400 bg-white text-smt transition dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-500 hover:bg-zinc-50 dark:hover:border-zinc-600 dark:hover:border-zinc-600 dark:hover:shadow-zinc-950/40 dark:hover:text-zinc-900"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
                <div>
                    <HeroProofPanel />
                </div>
            </div>
        </section>
    )

}