// src/components/sections/ToolsAndTech.tsx
import { motion, Variants } from "framer-motion"; // <-- Import Variants
import { techStack } from "@/data/techStackData";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const containerVariants: Variants = { // <-- Add : Variants type
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = { // <-- Add : Variants type
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export function ToolsAndTech() {
  // ... the rest of your component code remains exactly the same
  return (
    <section id="tech-stack" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading text-cream text-center mb-16"
        >
          Tools & Technology
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {techStack.map((tech) => (
            <TooltipProvider key={tech.name} delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    variants={itemVariants}
                    className="group flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg cursor-pointer transition-all duration-300 hover:border-gold/50 hover:bg-gold/10 hover:scale-105"
                  >
                    <img src={tech.icon} alt={tech.name} className="h-12 w-12 object-contain" />
                    <p className="mt-4 text-sm font-semibold text-cream/80 transition-colors duration-300 group-hover:text-gold">
                      {tech.name}
                    </p>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </motion.div>
      </div>
    </section>
  );
}