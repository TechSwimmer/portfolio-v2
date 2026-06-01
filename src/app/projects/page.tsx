
import Projects from "@/components/sections/Projects";
import {projects} from "@/data/projects"
import Reveal from "@/components/animations/Reveal";



import BulletListSection from "@/components/project-sections/BulletListSection";
import MediaContentSection from "@/components/project-sections/MediaContentSection";
import ContentBlockSection from "@/components/project-sections/ContentBlockSection";

type ProjectPageProps  = {
  params:{
    slug:string;
  };
};

export default function ProjectsPage({params}:ProjectPageProps) {

  const { slug } =  params;
  const  project = projects.find(
    (p) => p.slug === slug
  )

  return (
    
      <section className="max-w-7xl mx-auto px-6 py-20">
        
        <Projects />
        
      </section>
    
  );
}