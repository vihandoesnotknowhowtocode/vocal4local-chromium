import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const brands = [
  {
    id: 1,
    name: "Fabindia",
    category: "Fashion & Lifestyle",
    description: "Celebrating India's craft traditions since 1960",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=300&fit=crop",
    color: "bg-terracotta/10",
  },
  {
    id: 2,
    name: "Paper Boat",
    category: "Beverages",
    description: "Traditional Indian drinks with a modern twist",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
    color: "bg-primary/10",
  },
  {
    id: 3,
    name: "Khadi Naturals",
    category: "Beauty & Wellness",
    description: "Ayurvedic skincare rooted in ancient wisdom",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop",
    color: "bg-secondary/10",
  },
  {
    id: 4,
    name: "Titan",
    category: "Watches & Accessories",
    description: "Precision craftsmanship, Made in India",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=300&fit=crop",
    color: "bg-gold/10",
  },
  {
    id: 5,
    name: "Forest Essentials",
    category: "Luxury Ayurveda",
    description: "Age-old Indian beauty secrets",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=300&fit=crop",
    color: "bg-emerald/10",
  },
  {
    id: 6,
    name: "Good Earth",
    category: "Home & Living",
    description: "Sustainable luxury inspired by Indian heritage",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    color: "bg-accent/10",
  },
];

const FeaturedBrands = () => {
  return (
    <section id="brands" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-body text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Featured Brands
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Discover India's Finest
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Curated selection of authentic Indian brands making a difference
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className={`${brand.color} backdrop-blur-sm px-3 py-1 rounded-full text-xs font-body font-medium text-foreground`}>
                    {brand.category}
                  </span>
                  <div className="flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-gold fill-gold" />
                    <span className="text-xs font-body font-semibold text-foreground">{brand.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {brand.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-4">
                  {brand.description}
                </p>
                <Button variant="ghost" className="group/btn p-0 h-auto font-body text-primary hover:text-primary/80">
                  Visit Brand
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="hero-outline" size="lg">
            View All Brands
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
