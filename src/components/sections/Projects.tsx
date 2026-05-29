"use client";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-14">
            <SectionHeading
                eyebrow="Projects"
                title="Selected Work"
            />

            <div className="grid md:grid-cols-2 gap-6 mt-12">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.slug}
                        title={project.title}
                        slug={project.slug}
                        description={project.description}
                        techStack={project.techStack}
                        live={project.live}
                        github={project.github}
                        video={project.video}
                        image={project.image}
                    />
                ))}
            </div>
        </section> 
    )
}
