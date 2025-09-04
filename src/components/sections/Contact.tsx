// src/components/sections/Contact.tsx
import { motion, Variants } from "framer-motion"; // <-- 1. IMPORT VARIANTS
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

const containerVariants: Variants = { // <-- 2. APPLY THE VARIANTS TYPE
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = { // <-- 3. APPLY THE VARIANTS TYPE
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading text-cream text-center mb-6"
        >
          Let's Create Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto text-gray-300 mb-16"
        >
          Have a project in mind, or just want to explore the possibilities? I'm here to help you craft a digital experience that wins. Let's start a conversation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-lg"
        >
          {/* Form Section */}
          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <motion.div variants={itemVariants} className="grid w-full items-center gap-1.5">
              <Label htmlFor="name" className="text-cream/80">Your Name</Label>
              <Input type="text" id="name" name="name" placeholder="Hussein Salim" required autoComplete="name" className="bg-charcoal/50 border-white/20 focus:border-gold" />
            </motion.div>
            <motion.div variants={itemVariants} className="grid w-full items-center gap-1.5">
              <Label htmlFor="email" className="text-cream/80">Your Email</Label>
              <Input type="email" id="email" name="email" placeholder="hello@digitalhus.com" required autoComplete="email" className="bg-charcoal/50 border-white/20 focus:border-gold" />
            </motion.div>
            <motion.div variants={itemVariants} className="grid w-full gap-1.5">
              <Label htmlFor="message" className="text-cream/80">Your Message</Label>
              <Textarea id="message" name="message" placeholder="I'd love to discuss a project..." required autoComplete="off" className="bg-charcoal/50 border-white/20 focus:border-gold min-h-[120px]" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button type="submit" size="lg" className="group w-full bg-gold text-charcoal hover:bg-gold/90">
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.form>

          {/* Contact Info Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center gap-8"
          >
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-cream">Email</h4>
                <a href="mailto:husseinsalim23@outlook.com" className="text-gray-300 hover:text-gold transition-colors">husseinsalim23@outlook.com</a>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-cream">Location</h4>
                <p className="text-gray-300">Nairobi, Kenya · Available Worldwide</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
               <h4 className="font-semibold text-cream mb-4">Connect on Socials</h4>
               <div className="flex gap-4">
                  <a href="https://linkedin.com/in/hussein-salim" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-colors"><Linkedin size={24} /></a>
                  <a href="https://github.com/hussein-salim" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-colors"><Github size={24} /></a>
               </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}