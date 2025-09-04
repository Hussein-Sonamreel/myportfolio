// src/App.tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ToolsAndTech } from "@/components/sections/ToolsAndTech";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { BehindDigitalHus } from "@/components/sections/BehindDigitalHus";
import { Contact } from "@/components/sections/Contact"; // <-- Import here

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ToolsAndTech />
        <FeaturedProject />
        <BehindDigitalHus />
        <Contact /> {/* <-- Add the component here */}
      </main>
      <Footer />
    </>
  );
}

export default App;