import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import LiquidGlass from "./LiquidGlass";
import fabindiaImg from "@/assets/fabindia-products.jpg";
import paperboatImg from "@/assets/paperboat-products.jpg";
import khadiImg from "@/assets/khadi-products.jpg";
import titanImg from "@/assets/titan-products.jpg";
import forestEssentialsImg from "@/assets/forest-essentials-products.jpg";
import goodEarthImg from "@/assets/good-earth-products.jpg";

const brands = [
  {
    id: 1,
    name: "Fabindia",
    category: "Fashion & Lifestyle",
    description: "Celebrating India's craft traditions since 1960",
    rating: 4.8,
    image: fabindiaImg,
    color: "bg-secondary/20",
    website: "https://www.fabindia.com",
  },
  {
    id: 2,
    name: "Paper Boat",
    category: "Beverages",
    description: "Traditional Indian drinks with a modern twist",
    rating: 4.9,
    image: paperboatImg,
    color: "bg-primary/20",
    website: "https://www.paperboatdrinks.com",
  },
  {
    id: 3,
    name: "Khadi Naturals",
    category: "Beauty & Wellness",
    description: "Ayurvedic skincare rooted in ancient wisdom",
    rating: 4.7,
    image: khadiImg,
    color: "bg-cyan/20",
    website: "https://www.khadinatural.com",
  },
  {
    id: 4,
    name: "Titan",
    category: "Watches & Accessories",
    description: "Precision craftsmanship, Made in India",
    rating: 4.8,
    image: titanImg,
    color: "bg-indigo/20",
    website: "https://www.titan.co.in",
  },
  {
    id: 5,
    name: "Forest Essentials",
    category: "Luxury Ayurveda",
    description: "Age-old Indian beauty secrets",
    rating: 4.9,
    image: forestEssentialsImg,
    color: "bg-secondary/20",
    website: "https://www.forestessentialsindia.com",
  },
  {
    id: 6,
    name: "Good Earth",
    category: "Home & Living",
    description: "Sustainable luxury inspired by Indian heritage",
    rating: 4.8,
    image: goodEarthImg,
    color: "bg-primary/20",
    website: "https://www.goodearth.in",
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
            <LiquidGlass
              key={brand.id}
              className="animate-fade-in-up hover:-translate-y-2 transition-transform duration-500"
            >
              <div style={{ animationDelay: `${index * 100}ms` }}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
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
                      <Star className="w-3 h-3 text-cyan fill-cyan" />
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
                  <a 
                    href={brand.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-body text-foreground hover:underline underline-offset-4 transition-all"
                  >
                    Visit Brand
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </LiquidGlass>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <LiquidGlass className="inline-block">
            <button className="px-8 py-3 font-body font-semibold text-foreground hover:text-primary transition-colors">
              View All Brands
            </button>
          </LiquidGlass>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
