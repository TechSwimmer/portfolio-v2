import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section className=" scroll-mt-28
    max-w-7xl
    mx-auto
    px-6
    py-28" id="about">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-[400px] w-[400px] rounded-full bg-zinc-400/10 blur-[120px] dark:bg-zinc-500/10-z-10"/>
      <div className="max-w-4xl">
        <SectionHeading
          eyebrow="About"
          title="Building products with real-world impact"
        />

        <div className="space-y-6 text-lg text-gray-600 leading-8">
          <p>
            I enjoy building products that solve real problems — 
            from full-stack applications to features that improve 
            usability and developer experience. Most of my work 
            revolves around React, Node.js, TypeScript, and modern 
            web technologies, with a strong focus on practical 
            implementation rather than tutorials or toy projects.
          </p>

          <p>
            Beyond personal projects, I actively contribute to open 
            source by shipping features, fixing issues, and improving 
            real-world products. I enjoy understanding how systems work 
            end-to-end and building software that feels intuitive, reliable, 
            and useful.
          </p>
        </div>
      </div>
    </section>
  );
}