import { Users, Briefcase, TreeDeciduous, Heart } from "lucide-react";
import LiquidGlass from "./LiquidGlass";
const benefits = [
  {
    icon: Users,
    title: "Empower Communities",
    description: "Every purchase supports local artisans, small businesses, and their families across India.",
    stat: "2M+",
    statLabel: "Jobs Created"
  },
  {
    icon: Briefcase,
    title: "Boost Economy",
    description: "Keep money circulating within India, strengthening our nation's economic foundation.",
    stat: "₹500Cr+",
    statLabel: "Revenue Generated"
  },
  {
    icon: TreeDeciduous,
    title: "Sustainable Choice",
    description: "Local products mean shorter supply chains, reducing carbon footprint significantly.",
    stat: "60%",
    statLabel: "Less Carbon"
  },
  {
    icon: Heart,
    title: "Preserve Heritage",
    description: "Support traditional crafts and techniques passed down through generations.",
    stat: "1000+",
    statLabel: "Crafts Preserved"
  },
];

const WhySupport = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 border-y border-border/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-body text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Why It Matters
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            The Power of Local
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Your choice to support Indian brands creates ripples of positive change
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <LiquidGlass
              key={benefit.title}
              className="animate-fade-in-up"
            >
              <div
                className="p-8 text-center hover:-translate-y-2 transition-transform duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-hero items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Stat */}
                <div className="mb-4">
                  <div className="font-display text-3xl md:text-4xl font-bold text-gradient">
                    {benefit.stat}
                  </div>
                  <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                    {benefit.statLabel}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </LiquidGlass>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 max-w-3xl mx-auto text-center border border-border/50 dark:border-border/30 rounded-2xl p-8 md:p-12 bg-card/50">
          <blockquote className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-8xl text-primary/10 font-display">"</div>
            <p className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed relative z-10">
              When you buy local, you're not just purchasing a product—you're investing in dreams, 
              preserving traditions, and building a stronger India.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default WhySupport;
