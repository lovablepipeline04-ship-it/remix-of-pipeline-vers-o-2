import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <WhatsAppFloat />
      <Navbar />
      <HeroSection />
      <ProcessSection />
      <ResultsSection />
      <TestimonialsSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
