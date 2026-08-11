export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
  status: "Completed" | "In Progress";
  year: string;
};

export const projects: Project[] = [
  {
    id: 1,

    title: "AI Portfolio Builder",

    description:
      "An AI-powered platform that analyzes GitHub repositories and automatically generates a professional portfolio website with ATS optimization and skill recommendations.",

    image: "/projects/ai-portfolio-builder.png",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "OpenAI",
    ],

    github: "https://github.com/your-username/ai-portfolio-builder",

    live: "https://your-demo.vercel.app",

    featured: true,

    status: "Completed",

    year: "2026",
  },

  {
    id: 2,

    title: "EDUXP Learning Platform",

    description:
      "A complete AI-powered student learning platform with dashboards, attendance, AI mentor, certification management, internships, and analytics.",

    image: "/projects/eduxp.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "AI",
      "Tailwind CSS",
    ],

    github: "https://github.com/your-username/eduxp",

    live: "https://eduxp.vercel.app",

    featured: true,

    status: "In Progress",

    year: "2026",
  },

  {
    id: 3,

    title: "Digital Twin Factory",

    description:
      "Industrial AI dashboard that predicts machine failures using real-time sensor data, anomaly detection, and predictive maintenance.",

    image: "/projects/digital-twin.png",

    technologies: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Machine Learning",
    ],

    github: "https://github.com/your-username/digital-twin",

    live: "https://digital-twin.vercel.app",

    featured: true,

    status: "Completed",

    year: "2026",
  },

  {
    id: 4,

    title: "JARVIS AI Assistant",

    description:
      "Personal AI assistant capable of voice interaction, automation, reminders, application control, and AI-powered conversations.",

    image: "/projects/jarvis.png",

    technologies: [
      "Python",
      "FastAPI",
      "Speech Recognition",
      "OpenAI",
    ],

    github: "https://github.com/your-username/jarvis",

    live: "",

    featured: false,

    status: "In Progress",

    year: "2026",
  },

  {
    id: 5,

    title: "AI Factory Dashboard",

    description:
      "A smart manufacturing dashboard for monitoring production, visualizing KPIs, and providing AI-generated operational insights.",

    image: "/projects/factory-ai.png",

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Chart.js",
    ],

    github: "https://github.com/your-username/factory-dashboard",

    live: "",

    featured: false,

    status: "Completed",

    year: "2025",
  },
];