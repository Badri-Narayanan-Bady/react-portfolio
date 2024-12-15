import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TechnologiesSection from "./components/TechnologiesSection";
import WorkExperienceSection from "./components/WorkExperienceSection";
import ProjectsCompletedSection from "./components/ProjectsCompletedSection";
import ContactSection from "./components/ContactSection"; // Import Contact Section

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <WorkExperienceSection />
      <ProjectsCompletedSection />
      <ContactSection />
    </div>
  );
};

export default App;
