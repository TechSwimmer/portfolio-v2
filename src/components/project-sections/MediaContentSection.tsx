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
            <h2 className="mb-8 text-3xl font-bold">
                {title}
            </h2>

            <div className="space-y-14">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-3xl border border-gray-200 p-8"
                    >

                        {item.subtitle && (
                            <h3 className="mb-4 text-2xl font=-semibold">
                                {item.subtitle}
                            </h3>
                        )}

                        {item.description && (
                            <p className="mb-5 leading-relaxed text-gray-600">
                                {item.description}
                            </p>
                        )}

                        {item.bullets && (
                            <ul className="space-y-2">
                                {item.bullets.map((bullet, i) => (
                                    <li
                                        key={i}
                                        className="text-gray-600"
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