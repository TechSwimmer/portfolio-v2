import Link from "next/link";
import { motion } from "framer-motion"

const MotionLink = motion.create(Link);

const motionProps = {
  whileHover: {
    y: -2,
    scale: 1.02,
  },

  whileTap: {
    scale: 0.97,
  },

  transition: {
    duration: 0.2,
    ease: [0.22, 1, 0.36, 1] as const
  },
};


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
      shadow-sm
      hover:-translate-y-[2px]
      hover:shadow-lg
      dark:bg-zinc-100
      dark:text-zinc-900
    `
    : `
      border
      border-gray-200
      bg-white
      text-zinc-800
      shadow-sm

      hover:-translate-y-[2px]
      hover:bg-gray-50
      hover:shadow-md

      dark:border-zinc-700
      dark:bg-zinc-900
      dark:text-zinc-200
      dark:hover:bg-zinc-800
      dark:hover:shadow-zinc-950/40
    `;

 const sharedClasses = `
  inline-flex
  items-center
  justify-center
  rounded-2xl
  px-5
  py-3
  font-medium
  font-display
  transition-all
  duration-300
  disabled:opacity-50
  disabled:cursor-not-allowed

  hover:-translate-y-[2px]

  ${styles}
`;  

  // External links
  if (href && external) {
    return (
      
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={sharedClasses}
        {...motionProps}
      >
        {text}
      </motion.a>
      
    );
  }

  // Internal links
  if (href) {
    return (
      
      <MotionLink
        href={href}
        className={sharedClasses}
        {...motionProps}
      >
        {text}
      </MotionLink>
      
    );
  }

  // Form buttons
  return (
    
    <motion.button
      type={type}
      disabled={disabled}
      className={sharedClasses}
      {...motionProps}
    >
      {text}
    </motion.button>
    
  );
}