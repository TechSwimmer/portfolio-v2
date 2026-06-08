
import Projects from "@/components/sections/Projects";
import {projects} from "@/data/projects"


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