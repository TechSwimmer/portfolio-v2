export type SkillCategory = {
    title: string;
    skills: string[];   
};

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        skills: ["React","Next.js","Tailwind CSS", "TypeScript"]
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "MongoDB",],
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "Postman"],
    },   
];