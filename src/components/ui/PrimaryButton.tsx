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
  variant ===
  "primary"
    ? `
      bg-zinc-950
      text-white
      
      
     
      dark:bg-zinc-100
      dark:text-zinc-900
    `
    : `
      border
      border-gray-200
      bg-white
      text-zinc-800
      

     
      hover:bg-gray-50
      

      dark:border-zinc-700
      dark:bg-zinc-900
      dark:text-zinc-200
      dark:hover:bg-zinc-800
      
    `;

 const sharedClasses = `
  inline-flex
  items-center
  justify-center
  rounded-2xl
  px-3
  py-2.5
  text-sm
  sm:px-4
  sm:py-3
  sm:text-base
  font-medium
  font-display
  transition-[transform,background]
  duration-300
  whitespace-nowrap
  disabled:opacity-50
  disabled:cursor-not-allowed

  hover:-translate-y-[2px]
  active:translate-y-0
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
