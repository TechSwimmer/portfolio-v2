


import PrimaryButton from "@/components/ui/PrimaryButton";


import HeroProofPanel from "./HeroProofPanel";
import AnimatedSection from "../animations/AnimatedSection";

export default function Hero() {



    return (
        <section className="relative max-w-7xl mx-auto px-6 py-28" id="home">

            <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">


                <div


                    className="max-w-3xl"
                >
                   
                    <AnimatedSection>
                        <p className="text-md uppercase tracking-[0.2em] text-gray-500 mb-4 dark:text-zinc-400">
                            Full Stack Developer
                        </p>

                        <h1 className="text-5xl md:text-7xl font-bold font-sora leading-[0.95] tracking-[-0.03em] dark:text-zinc-100">
                            I learn by building{" "}
                            <span className="text-4xl font-display bg-gradient-to-r from-gray-900 to-gray-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent tracking-wide">
                                things people actually use
                            </span>
                        </h1>

                        <p className="text-lg font-inter text-gray-600 dark:text-zinc-300 mt-8 max-w-2xl leading-relaxed">
                           Career-switching into tech, I’ve been teaching myself by building products, contributing to open source, and exploring full-stack and AI-powered ideas one project at a time.
                        </p>

                    </AnimatedSection>

                    <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <PrimaryButton
                            text="View projects"
                            href="/#projects"
                        />

                        <PrimaryButton
                            text="Contact Me"
                            href="/#contact"
                        />
                        <PrimaryButton
                            text="Download CV"
                            href="/Nikhil-next.pdf"
                            external
                            variant="primary"
                        />
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
                                className="px-4 py-2 font-inter rounded-full border border-gray-400 bg-white text-sm transition-transform duration-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 hover:-translate-y-[2px] dark:hover:border-zinc-600"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div

                    className="max-w-3xl"
                >
                    <AnimatedSection>
                        <HeroProofPanel />  {/* This component now returns motion children */}
                    </AnimatedSection>
                </div>


            </div>

        </section>
    )

}
