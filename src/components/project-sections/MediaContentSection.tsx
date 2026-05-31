type MediaContentSectionProps = {
    title: string;

    items: {
        subtitle?: string;
        description?: string;
        bullets?: string[];
        image?: string;
        video?: string;
    }[];
}

export default function MediaContentSection({ title, items }: MediaContentSectionProps) {

    return (
        <section className="mt-20">
            <h2 className="mb-8 text-3xl font-bold dark:text-zinc-100">
                {title}
            </h2>

            <div className="space-y-14">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-3xl border border-gray-200 p-8 shadow-sm transition-colors dark:border-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/70"
                    >

                        {item.subtitle && (
                            <h3 className="mb-4 text-2xl font-semibold dark:text-zinc-100">
                                {item.subtitle}
                            </h3>
                        )}

                        {item.description && (
                            <p className="mb-5 leading-relaxed text-gray-600 dark:text-zinc-300">
                                {item.description}
                            </p>
                        )}

                        {item.bullets && (
                            <ul className="space-y-2">
                                {item.bullets.map((bullet, i) => (
                                    <li
                                        key={i}
                                        className="text-gray-600 dark:text-zinc-300"
                                    >
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        )}


                    </div>
                ))}
            </div>
        </section>
    )
}