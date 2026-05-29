import Projects from "@/components/sections/Projects";
import {projects} from "@/data/projects"

import BulletListSection from "@/components/project-sections/BulletListSection";
import MediaContentSection from "@/components/project-sections/MediaContentSection";
import ContentBlockSection from "@/components/project-sections/ContentBlockSection";

type ProjectPageProps  = {
  params:Promise<{
    slug:string;
  }>;
};

export default async function ProjectsPage({params}:ProjectPageProps) {

  const { slug } = await params;
  const  project = projects.find(
    (p) => p.slug === slug
  )

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold">
        <Projects />
      </h1>
    </section>
  );
}