export interface TechItem {
  name: string;
  icon: string;
  description: string;
}

export const techStack: TechItem[] = [
  {
    name: "React",
    icon: "/icons/tech/react.svg",
    description: "Building dynamic, responsive user interfaces with a component-based architecture.",
  },
  {
    name: "TypeScript",
    icon: "/icons/tech/typescript.svg",
    description: "Ensuring code quality and scalability with strong typing.",
  },
  {
    name: "Vite",
    icon: "/icons/tech/vite.svg",
    description: "Developing with a lightning-fast build tool for a modern frontend experience.",
  },
  {
    name: "Node.js",
    icon: "/icons/tech/nodejs.svg",
    description: "Crafting robust and scalable server-side applications and APIs.",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tech/tailwind.svg",
    description: "Designing beautiful, custom UIs with a utility-first CSS framework.",
  },
  {
    name: "Framer Motion",
    icon: "/icons/tech/framer-motion.svg",
    description: "Creating fluid, cinematic animations that enhance the user experience.",
  },
  {
    name: "Supabase",
    icon: "/icons/tech/supabase.svg",
    description: "Leveraging a powerful open-source backend for databases, auth, and storage.",
  },
  {
    name: "Git",
    icon: "/icons/tech/git.svg",
    description: "Managing code versions and collaboration with industry-standard practices.",
  },
];