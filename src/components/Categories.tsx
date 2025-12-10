import { 
  Shirt, 
  Utensils, 
  Sparkles, 
  Home, 
  Leaf, 
  Gift,
  Watch,
  BookOpen
} from "lucide-react";

const categories = [
  { 
    name: "Fashion", 
    icon: Shirt, 
    count: 120,
    gradient: "from-primary to-accent"
  },
  { 
    name: "Food & Beverages", 
    icon: Utensils, 
    count: 85,
    gradient: "from-emerald to-emerald-light"
  },
  { 
    name: "Beauty & Wellness", 
    icon: Sparkles, 
    count: 95,
    gradient: "from-accent to-gold"
  },
  { 
    name: "Home & Living", 
    icon: Home, 
    count: 70,
    gradient: "from-terracotta to-primary"
  },
  { 
    name: "Organic & Natural", 
    icon: Leaf, 
    count: 60,
    gradient: "from-secondary to-emerald"
  },
  { 
    name: "Accessories", 
    icon: Watch, 
    count: 55,
    gradient: "from-gold to-accent"
  },
  { 
    name: "Gifts & Crafts", 
    icon: Gift, 
    count: 80,
    gradient: "from-primary to-terracotta"
  },
  { 
    name: "Books & Stationery", 
    icon: BookOpen, 
    count: 45,
    gradient: "from-emerald-light to-secondary"
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block font-body text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Browse Categories
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Explore diverse range of Indian products across multiple categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-card transition-all duration-500 cursor-pointer hover:-translate-y-2 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {category.count}+ brands
              </p>

              {/* Arrow */}
              <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <svg className="w-4 h-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
