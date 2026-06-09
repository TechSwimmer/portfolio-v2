import SectionHeading from "@/components/ui/SectionHeading";



export default function About() {
  return (
    
    <section className=" scroll-mt-28
    max-w-7xl
    mx-auto
    px-6
    py-28" id="about">
      
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-zinc-400/10 blur-[120px] dark:bg-zinc-500/10 -z-10"/>
      <div className="max-w-4xl">
        <SectionHeading
          eyebrow="About"
          title="Building products with real-world impact"
        />
 
        <div className="space-y-6 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          <p>
            I’m a career-switching developer who learns best by building. 
            I’ve spent the last few years turning ideas into full-stack apps,
            AI experiments, and Chrome extension projects, using each one to 
            get better at solving problems end to end. I care most about building
            software that feels practical, clear, and enjoyable to use.
          </p>

          <p>
            Beyond personal projects, I’ve contributed to open source by 
            shipping features, fixing bugs, and polishing small but important 
            details in other people’s codebases. I like the process of dropping 
            into an unfamiliar system, understanding how it fits together, and 
            making it better piece by piece.
          </p>
        </div>
        
      </div>
    </section>
    
  );
}