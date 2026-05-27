"use client";

import { motion } from "framer-motion";
import PrimaryButton from "@/components/ui/PrimaryButton";

import Link from "next/link";

export default function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-28">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl"
            >
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
                    Full Stack Developer
                </p>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    Building thoughtful{" "}
                    <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
                        Full-Stack Experience
                    </span>
                </h1>

                <p className="text-lg text-gray-600 mt-8 max-w-2xl leading-relaxed">
                    Passionate about creating scalable
                    web applications with modern
                    technologies and clean user
                    experiences.
                </p>

                <div className="flex gap-4 mt-10">
                    
                    <PrimaryButton text="view projects" href="/projects" />
                    
                    
                    <PrimaryButton text="Contact Me" href="/contact"/>
                    
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
                            className="px-4 py-2 rounded-full border text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    )

}