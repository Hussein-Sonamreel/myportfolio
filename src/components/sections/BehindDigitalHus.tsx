// src/components/sections/BehindDigitalHus.tsx
import { motion } from "framer-motion";

export function BehindDigitalHus() {
  return (
    <section id="behind-digitalhus" className="py-24 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading text-cream mb-12"
        >
          The Philosophy Behind DigitalHus
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-lg"
        >
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            My journey from leading teams in luxury hospitality to building cutting-edge digital solutions is driven by a single obsession: creating exceptional experiences. In the world of five-star service, I learned that true luxury lies in trust, meticulous attention to detail, and a genuine understanding of people's needs.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="font-display text-2xl text-gold">DigitalHus</span> is the culmination of this philosophy. It's where the warmth and empathy of hospitality meet the precision and power of technology. I don't just build websites or apps; I architect digital environments that make your clients feel valued, understood, and confident in their choice to work with you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}