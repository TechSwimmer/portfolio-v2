"use client";

import { motion, Variants, useAnimationControls, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import PrimaryButton from "@/components/ui/PrimaryButton";

import Link from "next/link";
import HeroProofPanel from "./HeroProofPanel";

export default function Hero() {

    const controls = useAnimationControls();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });
    const containerVariants: Variants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
        else {
            controls.start("hidden");
        }
    }, [isInView, controls])

    const childVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: "easeOut" }, // ✅ "easeOut" not "ease-out"
        },
    };

    return (
        <section ref={ref} className="relative max-w-7xl mx-auto px-6 py-28" id="home">
            <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">


                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants = {containerVariants}
                    className="max-w-3xl"
                >
                    <motion.p variants={childVariants} className="text-md uppercase tracking-[0.2em] text-gray-500 mb-4 dark:text-zinc-400">
                        Full Stack Developer
                    </motion.p>

                    <motion.h1 variants={childVariants} className="text-5xl md:text-7xl font-bold font-sora leading-tight dark:text-zinc-100">
                        Building thoughtful{" "}
                        <span className="text-4xl font-display bg-gradient-to-r from-gray-900 to-gray-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent tracking-wide">
                            Digital Experiences
                        </span>
                    </motion.h1>

                    <motion.p variants={childVariants} className="text-lg font-inter text-gray-600 dark:text-zinc-300 mt-8 max-w-2xl leading-relaxed">
                        Full-stack developer building production-ready applications, contributing to open source, and solving real-world problems through modern web technologies.
                    </motion.p>

                    <motion.div variants={childVariants} className="flex gap-4 mt-10">

                        <PrimaryButton text="View projects" href="/#projects" />


                        <PrimaryButton text="Contact Me" href="/#contact" />
                        <PrimaryButton
                            text="Download CV"
                            href="/Nikhil-next.pdf"
                            external
                            variant="primary"
                        />

                    </motion.div>

                    <div className="flex flex-wrap gap-3 mt-12">
                        {[
                            "React",
                            "Next.js",
                            "Node.js",
                            "TypeScript",
                            "Tailwind CSS",
                            "MongoDB",
                        ].map((tech) => (
                            <motion.span variants={childVariants}
                                key={tech}
                                className="px-4 py-2 font-inter rounded-full border border-gray-400 bg-white text-sm transition dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-300/40 hover:border-zinc-500 hover:bg-zinc-50 dark:hover:border-zinc-600 dark:hover:border-zinc-600 dark:hover:shadow-lg dark:hover:shadow-black/30 dark:hover:text-zinc-900"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className="max-w-3xl"
                >
                    <HeroProofPanel />  {/* This component now returns motion children */}
                </motion.div>


            </div>
        </section>
    )

}