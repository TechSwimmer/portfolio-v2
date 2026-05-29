import Link from "next/link";

type PrimaryButtonProps = {
    text: string;
    href: string;
    variant?: "primary" | "secondary";
    external?:boolean;
};

export default function PrimaryButton({
    text,href,variant="primary",external=false,
}: PrimaryButtonProps) {
    const styles = variant === "primary"
        ? "bg-black text-white hover:opacity-90"
        : "border border-gray-300 bg-white text-black hover:bg-gray-100";

    if(external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block rounded-xl px-6 py-3 transition ${styles}`}
            >
                {text}
            </a>
        );
    }

    return (
        <Link
            href={href}
            className={`inline-block rounded-xl px-6 py-3 transition ${styles}`}
        >
            {text}
        </Link>
        )
}

