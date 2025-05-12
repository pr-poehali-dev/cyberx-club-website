
import HeroSection from "@/components/cyberx/HeroSection";
import FeaturesSection from "@/components/cyberx/FeaturesSection";
import PcSpecsSection from "@/components/cyberx/PcSpecsSection/PcSpecsSection";
import BookingSection from "@/components/cyberx/BookingSection/BookingSection";
import ReviewsSection from "@/components/cyberx/ReviewsSection/ReviewsSection";
import Footer from "@/components/cyberx/Footer/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* PC Specs Section */}
      <PcSpecsSection />

      {/* Booking Section */}
      <BookingSection />

      {/* Reviews Section */}
      <ReviewsSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
