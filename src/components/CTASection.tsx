import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import LiquidGlass from "./LiquidGlass";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-card dark:bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-body font-medium text-foreground">
              Support Local Indian Brands
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up animation-delay-100">
            Be Part of the{" "}
            <span className="text-primary">Revolution</span>
          </h2>

          {/* Subheading */}
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up animation-delay-200">
            Discover amazing Indian brands and support local entrepreneurs transforming India.
          </p>

          {/* About Us Link */}
          <div className="animate-fade-in-up animation-delay-300">
            <Link to="/about">
              <LiquidGlass className="inline-block">
                <span className="px-6 py-3 font-body font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-2">
                  Learn About Us
                  <ArrowRight className="w-4 h-4" />
                </span>
              </LiquidGlass>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;