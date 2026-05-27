import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <div className="max-w-4xl">
        <SectionHeading
          eyebrow="About"
          title="Building thoughtful digital experiences"
        />

        <div className="space-y-6 text-lg text-gray-600 leading-8">
          <p>
            I am a full-stack developer
            passionate about building
            scalable and user-focused web
            applications with modern
            technologies.
          </p>

          <p>
            I enjoy solving real-world
            problems, writing clean code,
            and creating experiences that
            feel intuitive and performant.
          </p>
        </div>
      </div>
    </section>
  );
}