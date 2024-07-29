import React from "react";
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import SimpleSlider from "./components/SimpleSlider";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <SimpleSlider />
        <Footer />
      </div>
    </>
  );
};

export default App;
