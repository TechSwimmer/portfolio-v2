import SectionHeading from "@/components/ui/SectionHeading";

import { osscontributions } from "@/data/openSource";
import OpenSourceCard from "../cards/OpenSourceCard";


export default function OpenSource() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28" id="opensource">
      <SectionHeading
        eyebrow="Open Source Contibutions"
        title="Real-world engineering contributions"
      />
      
      <div className="grid min-[900px]:grid-cols-2 xl:grid-cols-3 gap-6 mt-12 auto-rows-fr">
        {osscontributions.map((item) => (
          
            <OpenSourceCard
              key={item.id}
              id={item.id}
              projectName={item.projectName}
              title={item.title}
              description={item.description}
              type={item.type}
              techStack={item.techStack}
              status={item.status}
              pullRequest={item.pullRequest}
              filesChanged={item.filesChanged}
              highlights={item.highlights}
              issue={item.issue}
            />
          
        ))}

      </div>
      
    </section>
  );
}