import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedBrands from "@/components/FeaturedBrands";
import Categories from "@/components/Categories";
import WhySupport from "@/components/WhySupport";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PlusPattern from "@/components/PlusPattern";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <PlusPattern />
      <Header />
      <main>
        <HeroSection />
        <FeaturedBrands />
        <Categories />
        <WhySupport />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
