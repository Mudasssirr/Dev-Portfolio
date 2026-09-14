import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectCarousel from "./components/ProjectCarousel";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <ExperienceTimeline />
        <ProjectCarousel />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
