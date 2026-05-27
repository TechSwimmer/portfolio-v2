import Link from "next/link";

type PrimaryButtonProps = {
    text: string;
    href: string;
};

export default function PrimaryButton({ text, href, }: PrimaryButtonProps) {
    return (
        <Link
            href={href}
            className="px-6 py-3 rounded-xl bg-black text-white hover:opacity-90 transition inline-block"
        >
            {text}
        </Link>
    );
}