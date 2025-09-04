export interface Project {
  slug: string;
  featured: boolean;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  techStack: string[];
}

import { glamByFatma } from '@/content/projects/glam-by-fatma';
import { husseinBakes } from '@/content/projects/hussein-bakes';

export const projectsData: Project[] = [
  glamByFatma,
  husseinBakes,
];