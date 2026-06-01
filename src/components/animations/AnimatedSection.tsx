"use client";

import {
  motion,
  Variants,
  useAnimationControls,
  useInView,
} from "framer-motion";

import {
  useRef,
  useEffect,
} from "react";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;

  once?: boolean;
  stagger?: number;
  delay?: number;

  yOffset?: number;
 
};

export default function AnimatedSection({
  children,
  className = "",
  once = true,
  stagger = 0.15,
  delay = 0.1,
  yOffset = 30,
  
}: AnimatedSectionProps) {

  const controls =
    useAnimationControls();

  const ref =
    useRef<HTMLDivElement | null>(null);

  const isInView =
    useInView(ref, {
      once,
      margin:
        "0px 0px -100px 0px",
    });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants:
    Variants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const childVariants:
    Variants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      filter: "blur(6px)",
    },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={className}
    >
      {Array.isArray(children)
        ? children.map(
            (child, index) => (
              <motion.div
                key={index}
                variants={
                  childVariants
                }
              >
                {child}
              </motion.div>
            )
          )
        : (
          <motion.div
            variants={
              childVariants
            }
          >
            {children}
          </motion.div>
        )}
    </motion.div>
  );
}