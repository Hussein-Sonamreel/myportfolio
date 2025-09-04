// src/components/layout/Navbar.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-x-0 top-0 z-50 bg-charcoal/30 backdrop-blur-lg border-b border-cream/10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex h-20 items-center justify-between">
        <a href="#" className="font-display text-3xl text-gold">
          DigitalHus
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-cream">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-semibold hover:text-gold transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="text-cream"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-charcoal/95 backdrop-blur-xl"
        >
          <ul className="flex flex-col items-center gap-6 p-8 text-cream">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-semibold hover:text-gold transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}