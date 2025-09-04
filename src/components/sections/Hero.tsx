// src/components/sections/Hero.tsx
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="font-heading text-5xl sm:text-6xl md:text-7xl text-cream"
      >
        Hussein Salim
      </motion.h1>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <TypeAnimation
          sequence={[
            "Full-Stack Developer",
            2000,
            "Digital Brand Strategist",
            2000,
            "Luxury Experience Crafter",
            2000,
          ]}
          wrapper="p"
          speed={40}
          repeat={Infinity}
          className="font-display text-2xl md:text-4xl text-gold mt-4"
        />
      </motion.div>


      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        className="mt-6 max-w-2xl text-lg text-gray-300"
      >
        From luxury hospitality leadership to crafting premium digital experiences—merging service excellence, storytelling, and technology for client-winning results.
      </motion.p>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="mt-10 flex gap-4 flex-wrap justify-center"
      >
        <a
          href="#projects"
          className="rounded-full bg-gold/20 px-8 py-3 font-semibold text-gold border border-gold/30 hover:bg-gold/30 transition-all duration-300"
        >
          Explore My Work
        </a>
        <a
          href="#contact"
          className="rounded-full px-8 py-3 font-semibold text-cream border border-cream/30 hover:bg-cream/10 transition-all duration-300"
        >
          Get In Touch
        </a>
      </motion.div>
    </section>
  );
}