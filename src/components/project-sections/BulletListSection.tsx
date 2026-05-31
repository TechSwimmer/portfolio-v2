type BulletListSectionProps = {
    title: string;
    items: string[];
};

export default function BulletListSection({title,items}: BulletListSectionProps) {

    return (
        <section className="mt-20">
            <h2 className="mb-8 text-3xl font-bold dark:text-zinc-100">
                {title}
            </h2>

            <ul className="space-y-5">
                {items.map((item,index) => (
                    <li
                        key={`${item}-${index}`}
                        className="text-lg leading-relaxed text-gray-600 dark:text-zinc-300"
                    >
                        • {item}
                    </li>
                ))}
            </ul>
        </section>
    )
}