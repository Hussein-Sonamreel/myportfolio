// src/data/projectsData.ts
export interface Project {
  title: string;
  category: string;
  summary: string;
  image: string;
  techStack: string[];
  problem: string;
  solution: string;
  result: string;
  liveUrl?: string; // Optional link to live site
  caseStudyUrl: string; // Will link to a future page
}

export const featuredProject: Project = {
  title: "Glam by Fatma",
  category: "Luxury Salon Brand Website",
  summary: "A premium, trust-building digital presence designed to attract high-value clients and streamline bookings through an elegant interface and direct WhatsApp integration.",
  image: "/projects/glam-by-fatma-featured.png",
  techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
  problem: "The salon had a world-class reputation but lacked an online presence to match, resulting in missed opportunities with affluent clients seeking premium beauty services.",
  solution: "We developed a visually stunning, fully responsive brand website showcasing their services, gallery, and social proof. A direct WhatsApp booking integration removed friction, making inquiries effortless.",
  result: "Increased client inquiries by over 25% within the first two months and successfully established a premium, trustworthy digital brand identity.",
  caseStudyUrl: "/work/glam-by-fatma", // Placeholder for now
};