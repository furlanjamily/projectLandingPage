import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import FeatureSection from "./components/sections/FeatureSection";
import Workflow from "./components/sections/Workflow";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="max-w-7xl mx-auto px-6">
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;
