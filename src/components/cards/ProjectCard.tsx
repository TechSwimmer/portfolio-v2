"use client";
import Image from "next/image"
import { useRef } from "react";

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
    poster?: string;
    captions?: string;

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
    poster,
    captions,
}: ProjectCardProps) {

    const videoRef = useRef<HTMLVideoElement>(null);
    return (

        <div className="
group
flex
h-full
flex-col
rounded-[2rem]
border
border-gray-200
bg-white
p-8


duration-300

hover:-translate-y-2


dark:border-zinc-800
dark:bg-zinc-900/80

">
            <div className="mb-6
overflow-hidden
rounded-[1.5rem]
border
border-gray-200
bg-zinc-100

dark:border-zinc-800
dark:bg-zinc-950">
                {video ? (
                    <video
                        ref={videoRef}
                        src={video}
                        muted
                        loop
                        playsInline
                        preload="none"
                        poster={poster}
                        onMouseEnter={() => videoRef.current?.play()}
                        onMouseLeave={() => {
                            if (!videoRef.current) return;

                            videoRef.current.pause();
                            videoRef.current.currentTime = 0;
                            
                        }}
                        className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-[1.04]"

                    >
                        {captions ? (
                            <track
                            kind="captions"
                            src={captions}
                            srcLang="en"
                            label="English captions"
                            default
                        />
                        ) : null}
                       
                    </video>
                ) : image ? (
                    <Image
                        src={image}
                        width={465}
                        height={220}
                        alt={`${title} preview`}
                        className="h-[220px] w-full object-cover transition duration-500 hover:scale-[1.02]"
                    />
                ) : (
                    <div className="h-[220px] w-full bg-gray-100" />
                )}
            </div>

            <h3 className="text-3xl
font-semibold
tracking-tight
dark:text-zinc-100">
                {title}
            </h3>



            <p className="mb-6 text-gray-600 leading-relaxed text-[18px] dark:text-zinc-300">
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
                    .map((tech, index) => (

                        <span
                            key={`${tech}-${index}`}
                            className="rounded-full
border
border-gray-200
bg-gray-100
px-3
py-1.5
text-sm
text-gray-700



dark:border-zinc-700
dark:bg-zinc-800
dark:text-zinc-200
duration-300
hover:-translate-y-1 

"
                        >
                            {tech}

                        </span>

                    ))}

            </div>


            {/* Buttons */}
            <div className="mt-auto flex items-center justify-between gap-4 border-t border-gray-100 dark:border-zinc-800 pt-5">
                <div className="flex gap-3">
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