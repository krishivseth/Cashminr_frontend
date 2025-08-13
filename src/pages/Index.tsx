import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import RatesSection from "@/components/RatesSection";
import ToolsSection from "@/components/ToolsSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <RatesSection />
      <ToolsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
