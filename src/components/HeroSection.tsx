import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e07020' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 blur-2xl animate-float" />
      <div className="absolute bottom-1/3 right-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-float animation-delay-300" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-secondary/10 blur-2xl animate-float animation-delay-500" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft mb-8 animate-fade-in-up">
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-body font-medium text-muted-foreground">
              Proudly Supporting Indian Brands
            </span>
          </div>

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
            <Button variant="hero" size="xl" className="group">
              Explore Brands
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Submit Your Brand
            </Button>
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
                <Star className="w-6 h-6 text-gold fill-gold" />
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
