"use client";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";



const proofItems = [
  {
    title:
      "ResumeBaker",

    subtitle:
      "AI powered Resume Builder with live preview",

    description:
      "AI Import • JWT Auth • PDF Export",
  },

  {
    title:
      "6 Merged OSS PRs",

    subtitle:
      "Open Source Contributions",

    description:
      "React • Electron • JavaScript",
  },

  {
    title:
      "Building with Next.js",

    subtitle:
      "Currently Learning",

    description:
      "Next.js • TypeScript • Tailwind",
  },
];

export default function HeroProofPanel() {

 const childVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }, // ✅ "easeOut" not "ease-out"
  },
};
  return (
    <>
      {proofItems.map(
        (item) => (
          <div
            key={item.title}
            className="
              rounded-[2rem]
              border
              border-zinc-200
              bg-white/70
              p-6
              shadow-sm
              backdrop-blur-sm
              transition-all
              duration-300
              mb-3
              hover:-translate-y-1
              hover:shadow-lg

              dark:border-zinc-800
              dark:bg-zinc-900/70
            "
          >
            <motion.h3 variants={childVariants} 
              className="
                text-xl
                font-semibold
                font-display

                dark:text-zinc-100
              "
            >
              {item.title}
            </motion.h3>

            <motion.p variants={childVariants}
              className="
                mt-2
                font-medium
                text-zinc-700
                font-inter
                dark:text-zinc-300
              "
            >
              {item.subtitle}
            </motion.p>

            <motion.p variants={childVariants}
              className="
                mt-3
                text-sm
                text-zinc-500
                font-inter

                dark:text-zinc-400
              "
            >
              {item.description}
            </motion.p>
          </div>
        )
      )}
    </>
  );
}