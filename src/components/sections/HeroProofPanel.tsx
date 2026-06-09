import Link from "next/link";

const proofItems = [
  {
    title: "JobLens-AI",
    subtitle: "Currently Learning: AI-powered ATS Chrome Extension",
    description: "Resume Parsing • Skill Match • LinkedIn ATS",
    href: "/projects/joblens-ai",
  },
  {
    title: "ResumeBaker",
    subtitle: "AI powered Resume Builder with live preview",
    description: "AI Import • JWT Auth • PDF Export",
    href: "/projects/resumebaker",
  },
  {
    title: "6 Merged OSS PRs",
    subtitle: "Open Source Contributions",
    description: "React • Electron • JavaScript",
    href: "/open-source",
  },
];

export default function HeroProofPanel() {
  return (
    <>
      {proofItems.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          aria-label={`${item.title} - ${item.subtitle}`}
          className="
            group
            relative
            mb-3
            block 
            rounded-[2rem]
            border
            border-zinc-200
            bg-white/70
            p-6
            shadow-sm
            
            transition-[transform,border-color]
            duration-300
            hover:-translate-y-1
            hover:border-zinc-400
            
            focus:outline-none
            focus:ring-2
            focus:ring-zinc-400
            focus:ring-offset-2
            focus:ring-offset-white
            dark:border-zinc-800
            dark:bg-zinc-900/70
            dark:hover:border-zinc-700
            dark:focus:ring-zinc-500
            dark:focus:ring-offset-zinc-950
          "
        >
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[2rem]
              bg-gradient-to-br
              from-zinc-950/0
              to-zinc-950/0
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
              dark:from-white/5
              dark:to-transparent
            "
          />

          <h2 className="relative text-xl font-semibold font-display dark:text-zinc-100">
            {item.title}
          </h2>

          <p className="relative mt-2 font-inter font-medium text-zinc-700 dark:text-zinc-300">
            {item.subtitle}
          </p>

          <p className="relative mt-3 font-inter text-sm text-zinc-500 dark:text-zinc-400">
            {item.description}
          </p>
        </Link>
      ))}
    </>
  );
}
