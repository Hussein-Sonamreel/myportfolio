// src/pages/Home.tsx
import { About } from "@/components/sections/About";
import { BehindDigitalHus } from "@/components/sections/BehindDigitalHus";
import { FeaturedProject } from "@/components/sections/FeaturedProject"; // Corrected: FeaturedWork -> FeaturedProject
import { Hero } from "@/components/sections/Hero";
import { ToolsAndTech } from "@/components/sections/ToolsAndTech"; // Corrected: Path was wrong
import { Contact } from "@/components/sections/Contact"; // Corrected: Contacts -> Contact

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ToolsAndTech />
      <FeaturedProject />
      <BehindDigitalHus />
      <Contact /> {/* Corrected: Use the imported name Contact */}
    </main>
  );
}