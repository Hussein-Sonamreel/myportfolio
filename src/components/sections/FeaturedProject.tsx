// src/components/sections/FeaturedProject.tsx
import { motion } from "framer-motion";
import { featuredProject } from "@/data/projectsData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FeaturedProject() {
  const project = featuredProject; // Get the project data

  return (
    <section id="projects" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading text-cream text-center mb-16"
        >
          Featured Project
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg"
        >
          {/* Text Content */}
          <div className="text-left">
            <p className="text-sm font-semibold text-gold mb-2">{project.category}</p>
            <h3 className="text-3xl font-heading text-cream mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">{project.summary}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-gold"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Button
              variant="outline"
              className="group bg-transparent border-gold text-gold hover:bg-gold hover:text-charcoal"
            >
              View Case Study
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}