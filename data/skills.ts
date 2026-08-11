export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },

  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Supabase",
      "MongoDB",
      "PostgreSQL",
      "REST API",
      "Firebase",
    ],
  },

  {
    title: "Programming",
    icon: "💻",
    skills: [
      "C",
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Data Structures",
    ],
  },

  {
    title: "Tools",
    icon: "🛠️",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Docker",
      "Postman",
      "Linux",
      "Vercel",
      "Figma",
    ],
  },
];