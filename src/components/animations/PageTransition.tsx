"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function PageTransition({
  children,
}: Props) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{
        opacity: 0,
        y: 25,
        filter: "blur(8px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}