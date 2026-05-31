"use client";

import { motion } from "framer-motion";

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
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.2,
        duration: 0.7,
      }}
      className="
        relative
        flex
        flex-col
        gap-5
      "
    >
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

              hover:-translate-y-1
              hover:shadow-lg

              dark:border-zinc-800
              dark:bg-zinc-900/70
            "
          >
            <h3
              className="
                text-xl
                font-semibold

                dark:text-zinc-100
              "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-2
                font-medium
                text-zinc-700

                dark:text-zinc-300
              "
            >
              {item.subtitle}
            </p>

            <p
              className="
                mt-3
                text-sm
                text-zinc-500

                dark:text-zinc-400
              "
            >
              {item.description}
            </p>
          </div>
        )
      )}
    </motion.div>
  );
}