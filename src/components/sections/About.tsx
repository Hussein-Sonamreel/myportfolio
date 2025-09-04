// src/components/sections/About.tsx
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading text-cream text-center mb-12"
        >
          My Journey
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12"
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-48 h-48 md:w-1/3 md:h-auto flex-shrink-0"
          >
            <img
              src="/hussein.jpeg" // IMPORTANT: Add your image here
              alt="Hussein Salim"
              className="rounded-full border-2 border-gold/50 shadow-lg object-cover w-full h-full"
            />
          </motion.div>
          
          {/* Text Content Section */}
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-heading text-gold mb-4">
              From Luxury Hospitality to Digital Excellence
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              As a former luxury hospitality leader, I mastered the art of creating unforgettable guest experiences. I learned that trust, personalization, and an obsessive attention to detail are the cornerstones of excellence.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Now, as a Full-Stack Developer and Digital Brand Strategist, I bring that same philosophy to the digital world. My mission is to craft premium, client-winning applications that feel intentional and effortless—blending service warmth with technological precision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}