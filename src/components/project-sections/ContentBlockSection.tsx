type ContentBlockSectionProps = {
    title:string;
    items: {
        subtitle:string;
        description:string;
    }[];
};

export default function ContentBlockSection({ title , items}:ContentBlockSectionProps) {

    return (
        <section className="mt-20">
            <h2 className="mb-8 text-3xl font-bold">
                {title}
            </h2>

            <div className="grid gap-6">
                {items.map((item) => (
                    <div 
                        key={item.subtitle}
                        className="rounded-3xl border border-gray-200 bg-white p-8"
                    >
                        <h3 className="mb-3 text-xl font-semibold">
                            {item.subtitle}
                        </h3>
                        
                        <p className="leading-relaxed text-gray-600">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
} 