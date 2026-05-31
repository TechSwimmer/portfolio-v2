type ContentBlockSectionProps = {
    title:string;
    image?:string;
    items: {
        subtitle:string;
        description:string;
    }[];
};

export default function ContentBlockSection({ title , items, image}:ContentBlockSectionProps) {

    return (
        <section className="mt-20">
            <h2 className="mb-8 text-3xl font-bold dark:text-zinc-100">
                {title}
            </h2>
            {image && (
                <div className="
                mb-8 overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800">
                    <img
                        src={image}
                        alt={title}
                        className="w-full object-cover"
                    />
                </div>
            )}
            <div className="grid gap-6">
                {items.map((item) => (
                    <div 
                        key={item.subtitle}
                        className="rounded-3xl border border-gray-300 bg-white p-8 shadow-sm transition-colors dark:border-zinc-800 dark:bg-zinc-900/70"
                    >
                        <h3 className="mb-3 text-xl font-semibold dark:text-zinc-100">
                            {item.subtitle}
                        </h3>
                        
                        <p className="leading-relaxed text-gray-600 dark:text-zinc-300">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
} 