import AnimatedSection from "../animations/AnimatedSection";

type OpenSourceCardProps = {
  id: number;

  projectName: string;

  title: string;

  description: string;

  issue?: string;

  type:
  | "feature"
  | "bugfix"
  | "ui"
  | "documentation";

  techStack: string[];

  status:
  | "merged"
  | "open";

  pullRequest?: string;

  highlights?: string[];

  filesChanged?: string[];
};

export default function OpenSourceCard({
  projectName,
  title,
  description,
  issue,
  type,
  techStack,
  status,
  pullRequest,
  highlights,
}: OpenSourceCardProps) {
  return (
    <AnimatedSection>
      <div
        className="
        group
        flex
        h-full
        flex-col
        rounded-[2rem]
        border
        border-gray-200
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-300

        hover:-translate-y-2
        hover:shadow-xl

        dark:border-zinc-800
        dark:bg-zinc-900/80
        dark:hover:border-zinc-700
      "
      >
        {/* Top Row */}

        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p
              className="
              text-sm
              font-medium
              uppercase
              tracking-[0.2em]
              text-zinc-500

              dark:text-zinc-400
            "
            >
              {projectName}
            </p>

            <h3
              className="
              mt-2
              text-2xl
              font-semibold
              tracking-tight

              dark:text-zinc-100
            "
            >
              {title}
            </h3>
          </div>

          <span
            className={`
            rounded-full
            px-4
            py-1.5
            text-sm
            font-medium

            ${status === "merged"
                ? `
                bg-emerald-100
                text-emerald-700

                dark:bg-emerald-950
                dark:text-emerald-300
              `
                : `
                bg-amber-100
                text-amber-700

                dark:bg-amber-950
                dark:text-amber-300
              `
              }
          `}
          >
            {status}
          </span>
        </div>

        <div className="flex flex-1 flex-col">
          {/* Description */}

          <p
            className="
          text-gray-600
          leading-relaxed

          dark:text-zinc-300
        "
          >
            {description}

          </p>

          {/* Issue + Type */}

          <div className="mt-5 flex flex-wrap gap-3">
            {issue && (
              <span
                className="
              rounded-full
              border
              border-zinc-200
              bg-zinc-100
              px-3
              py-1
              text-sm

              dark:border-zinc-700
              dark:bg-zinc-800
              dark:text-zinc-200
            "
              >
                {issue}
              </span>
            )}

            <span
              className="
            rounded-full
            border
            border-zinc-200
            bg-zinc-100
            px-3
            py-1
            text-sm
            capitalize

            dark:border-zinc-700
            dark:bg-zinc-800
            dark:text-zinc-200
          "
            >
              {type}
            </span>
          </div>


          {/* Highlights */}
          {highlights &&
            highlights.length > 0 && (

              <div className="mt-6">
                <h4
                  className="
                mb-3
                text-sm
                font-semibold
                uppercase
                tracking-wide

                dark:text-zinc-200
              "
                >
                  Key Contributions
                </h4>

                <ul
                  className="
                space-y-2
                text-sm
                text-gray-600

                dark:text-zinc-300
              "
                >
                  {highlights.map(
                    (item, index) => (
                      <li
                        key={`${item}-${index}`}
                        className="flex gap-2"
                      >
                        <span>
                          •
                        </span>

                        <span>
                          {item}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>

            )}

          {/* Tech Stack */}

          <div className="mt-6 flex flex-wrap gap-2">
            {techStack.map(
              (tech, index) => (

                <span
                  key={`${tech}-${index}`}
                  className="
                rounded-full
                border
                border-gray-200
                bg-gray-100
                px-3
                py-1.5
                text-sm
                text-gray-700
                transition-colors
                
                dark:border-zinc-700
                dark:bg-zinc-800
                dark:text-zinc-200
              "
                >

                  {tech}

                </span>

              )
            )}
          </div>

        </div>

        {/* Footer */}

        <div
          className="
          mt-3
          border-t
          border-gray-100
          pt-2

          dark:border-zinc-800
        "
        >
          {pullRequest && (
            <a
              href={pullRequest}
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex
              items-center
              text-sm
              font-medium
              text-zinc-700
              transition-colors
              hover:text-black

              dark:text-zinc-300
              dark:hover:text-zinc-100
            "
            >
              View Pull Request →
            </a>
          )}
        </div>

      </div>
    </AnimatedSection>
  );
}