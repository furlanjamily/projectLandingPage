import siteBackground from "./assets/site_background.png";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import FeatureSection from "./components/sections/FeatureSection";
import Workflow from "./components/sections/Workflow";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Testimonials";

const App = () => {
  return (
    <div className="relative min-h-dvh">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 bg-black bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${siteBackground})` }}
      />

      <Navbar />
      <HeroSection />
      <div className="mx-auto max-w-7xl px-6">
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default App;
