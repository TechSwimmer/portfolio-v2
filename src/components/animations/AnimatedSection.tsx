"use client";

import { motion } from "framer-motion";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  delay?: number;
  yOffset?: number;
};

export default function AnimatedSection({
  children,
  className = "",
  once = true,
  delay = 0,
  yOffset = 16,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once,
        margin: "-80px",
      }}
      transition={{
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}