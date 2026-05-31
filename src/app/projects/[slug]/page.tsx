import { projects } from "@/data/projects";

import BulletListSection from "@/components/project-sections/BulletListSection";
import ContentBlockSection from "@/components/project-sections/ContentBlockSection";
import MediaContentSection from "@/components/project-sections/MediaContentSection";

type ProjectPageProps = {
  params: Promise<{
    slug: string; 
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return (
      <div className="p-10">
        Project not Found
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-28">
      {/* Hero Section */}
      <div className="mb-20">
        <h1 className="mb-6 text-5xl font-bold dark:text-zinc-100">
          {project.title}
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-zinc-300">
          {project.description}
        </p>
      </div>
      {/* Hero Media */}
      {(project.video || project.image) && (
        <div
          className="
      mb-20
      overflow-hidden
      rounded-[2rem]
      border
      border-zinc-200
      shadow-sm

      dark:border-zinc-800
      dark:bg-zinc-900/70
    "
        >
          {project.video ? (
            <video
              src={project.video}
              poster={project.poster}
              preload="metadata"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="
          w-full
          object-cover
        "
            />
          ) : (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="
          h-[450px]
          w-full
          object-cover
        "
            />
          )}
        </div>
      )}
      {/* Tech Stack */}
      <div className="mb-20">
        <h2 className="mb-8 text-3xl font-bold dark:text-zinc-100">
          Tech Stack
        </h2>

        <div className="space-y-6">
          {project.techStack.map(
            (category) => (
              <div
                key={
                  category.subtitle
                }
              >
                <h3 className="mb-3 text-lg font-semibold dark:text-zinc-200">
                  {
                    category.subtitle
                  }
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.technologies.map(
                    (
                      tech,
                      index
                    ) => (
                      <span
                        key={`${tech}-${index}`}
                        className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 transition-colors dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 hover"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Dynamic Sections */}
      {project.sections?.map(
        (
          section,
          index
        ) => {
          switch (
          section.type
          ) {
            case "bulletList":
              return (
                <BulletListSection
                  key={index}
                  title={
                    section.title
                  }
                  items={
                    section.items
                  }
                />
              );

            case "contentBlock":
              
              return (
                <ContentBlockSection
                  key={index}
                  title={
                    section.title
                  }

                  items={
                    section.items
                  }
                />
              );

            case "mediaContent":
              return (
                <MediaContentSection
                  key={index}
                  title={
                    section.title
                  }
                  items={
                    section.items
                  }
                />
              );

            default:
              return null;
          }
        }
      )}
    </section>
  );
}