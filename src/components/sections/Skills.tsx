import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <SectionHeading
        eyebrow="Skills"
        title="Technologies I Work With"
      />

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-3xl border border-gray-200 p-8 hover:-translate-y-1 hover:shadow-lg transition duration-300 bg-white"
          >
            <h3 className="text-xl font-semibold mb-6">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-gray-100 text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}