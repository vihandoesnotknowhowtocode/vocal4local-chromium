import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BloomBackground from "@/components/BloomBackground";
import PlusPattern from "@/components/PlusPattern";
import LiquidGlass from "@/components/LiquidGlass";
import { Heart, Users, Home } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden scroll-smooth">
      <BloomBackground />
      <PlusPattern />
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Section */}
            <span className="inline-block font-body text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Showcasing India's Local Treasures
            </h1>
            
            <LiquidGlass className="mb-12">
              <div className="p-8 md:p-12">
                <p className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  We are a brand representer showcasing the important jewels of the locals.
                </p>
                <p className="font-display text-2xl md:text-3xl font-bold text-primary mt-6">
                  Your every purchase makes 1 house wealthier.
                </p>
              </div>
            </LiquidGlass>

            {/* Values Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <LiquidGlass className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Support Local</h3>
                  <p className="font-body text-muted-foreground">Every purchase directly supports local artisans and their families.</p>
                </div>
              </LiquidGlass>

              <LiquidGlass className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-cyan/20 flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-cyan" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Build Community</h3>
                  <p className="font-body text-muted-foreground">Strengthening the bond between consumers and local creators.</p>
                </div>
              </LiquidGlass>

              <LiquidGlass className="p-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-indigo/20 flex items-center justify-center mb-4">
                    <Home className="w-8 h-8 text-indigo" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Empower Homes</h3>
                  <p className="font-body text-muted-foreground">Making households wealthier, one purchase at a time.</p>
                </div>
              </LiquidGlass>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
