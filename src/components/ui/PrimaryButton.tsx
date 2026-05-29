import Link from "next/link";

type PrimaryButtonProps = {
  text: string;

  href?: string;

  variant?: "primary" | "secondary";

  external?: boolean;

  type?: "button" | "submit";

  disabled?: boolean;
};

export default function PrimaryButton({
  text,
  href,
  variant = "primary",
  external = false,
  type = "button",
  disabled = false,
}: PrimaryButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:opacity-90"
      : "border border-gray-300 bg-white text-black hover:bg-gray-100";

  const sharedClasses = `
    inline-flex
    items-center
    justify-center
    rounded-xl
    px-6
    py-3
    transition
    disabled:opacity-50
    ${styles}
  `;

  // External links
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClasses}
      >
        {text}
      </a>
    );
  }

  // Internal links
  if (href) {
    return (
      <Link
        href={href}
        className={sharedClasses}
      >
        {text}
      </Link>
    );
  }

  // Form buttons
  return (
    <button
      type={type}
      disabled={disabled}
      className={sharedClasses}
    >
      {text}
    </button>
  );
}