
type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
}

export default function SectionHeading({ eyebrow, title,description}: SectionHeadingProps) {
    return(
        <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-3 transition-colors duration-300 dark:text-zinc-400">
                {eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight transition-colors duration-300 dark:text-zinc-100">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-gray-600 leading-relaxed transition-colors duration-300 dark:text-zinc-300">
                    {description}
                </p>
            )}
        </div>
    )
}