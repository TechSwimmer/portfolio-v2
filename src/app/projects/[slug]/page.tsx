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
        <h1 className="mb-6 text-5xl font-bold">
          {project.title}
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
          {project.description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="mb-20">
        <h2 className="mb-8 text-3xl font-bold">
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
                <h3 className="mb-3 text-lg font-semibold">
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
                        className="rounded-full bg-gray-100 px-4 py-2 hover"
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