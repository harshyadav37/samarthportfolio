import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FilmGrain from "./components/FilmGrain";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");

  // Track active section on scroll for navbar highlights
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050507] text-white selection:bg-purple-900/60 selection:text-white">
      {/* Film grain texture */}
      <FilmGrain />

      {/* Cinematic Custom Cursor (Desktop only) */}
      <CustomCursor />

      {/* Sticky Cinematic Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />
    </div>
  );
}
