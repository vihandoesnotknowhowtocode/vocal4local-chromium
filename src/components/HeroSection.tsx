import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Star } from "lucide-react";
import BloomBackground from "./BloomBackground";
import LiquidGlass from "./LiquidGlass";
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* 3D Bloom Background */}
      <BloomBackground />
      
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-card/90 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <LiquidGlass className="inline-block mb-8 animate-fade-in-up" intensity="light">
            <div className="flex items-center gap-2 px-4 py-2">
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-body font-medium text-foreground">
                Proudly Supporting Indian Brands
              </span>
            </div>
          </LiquidGlass>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up animation-delay-100">
            Be{" "}
            <span className="text-gradient">Vocal</span>
            <br />
            for{" "}
            <span className="text-secondary">Local</span>
          </h1>

          {/* Subheading */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
            Discover and support authentic Indian brands. From handcrafted artisan products to innovative startups, 
            every purchase empowers our nation's entrepreneurs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <a href="#brands">
              <Button variant="hero" size="xl" className="group">
                Explore Brands
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border animate-fade-in-up animation-delay-400">
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">500+</div>
              <div className="font-body text-sm text-muted-foreground mt-1">Indian Brands</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground">50K+</div>
              <div className="font-body text-sm text-muted-foreground mt-1">Happy Supporters</div>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="flex items-center gap-1">
                <span className="font-display text-3xl md:text-4xl font-bold text-foreground">4.9</span>
                <Star className="w-6 h-6 text-cyan fill-cyan" />
              </div>
              <div className="font-body text-sm text-muted-foreground mt-1">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
