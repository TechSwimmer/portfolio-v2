import Link from "next/link";

import PrimaryButton from "@/components/ui/PrimaryButton";

type TechStackCategory = {
    subtitle: string;
    technologies: string[];
};

type ProjectCardProps = {
    title: string;
    description: string;
    techStack: TechStackCategory[];
    github?: string;
    live?: string;
    slug: string;
    video?: string;
    image?: string;

};

export default function ProjectCard({
    title,
    description,
    techStack,
    github,
    live,
    slug,
    video,
    image,
}: ProjectCardProps) {
    return (
        <div className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200">
                {video ? (
                    <video
                        src={video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-[220px] w-full object-cover transition duration-500 hover:scale-[1.02]"
                    />
                ) : image ? (
                    <img
                        src={image}
                        alt={`${title} preview`}
                        className="h-[220px] w-full object-cover transition duration-500 hover:scale-[1.02]"
                    />
                ) : (
                    <div className="h-[220px] w-full bg-gray-100" />
                )}
            </div>

            <h3 className="mb-4 text-3xl font-semibold">
                {title}
            </h3>



            <p className="mb-6 text-gray-600 leading-relaxed text-[18px]">
                {description}
            </p>

            {/* Tech Stack */}
            <div className="mb-6 flex flex-wrap gap-2">
                {techStack
                    .flatMap(
                        (category) =>
                            category.technologies
                    )
                    .slice(0, 6)
                    .map((tech,index) => (
                        <span
                            key={`${tech}-${index}`}
                            className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-sm text-gray-700"
                        >
                            {tech}
                        </span>
                    ))}
            </div>

            {/* Buttons */}
            <div className="mt-auto flex items-center justify-between gap-4 border-t border-gray-100 pt-5">
                <div className="flex gap-2">
                    <PrimaryButton
                        text="Live"
                        href={live}
                        external
                        variant="secondary"
                    />

                    <PrimaryButton
                        text="GitHub"
                        href={github}
                        external
                        variant="secondary"
                    />
                </div>

                <PrimaryButton
                    text="Article"
                    href={`/projects/${slug}`}
                />
            </div>

        </div>
    );
}