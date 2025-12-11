import { Heart, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    discover: [
      { name: "All Brands", href: "#" },
      { name: "Categories", href: "#categories" },
      { name: "New Arrivals", href: "#" },
      { name: "Featured", href: "#brands" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Mission", href: "#" },
      { name: "Press Kit", href: "#" },
      { name: "Careers", href: "#" },
    ],
    support: [
      { name: "FAQs", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Submit Brand", href: "#" },
      { name: "Partner With Us", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/vocalforlocal.in/", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/naaborhood", label: "Twitter" },
    { icon: Facebook, href: "https://www.facebook.com/vaborhood/", label: "Facebook" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">V</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight text-foreground">Vocal</span>
                <span className="text-xs text-muted-foreground font-body">for Local</span>
              </div>
            </a>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Empowering Indian brands and celebrating the spirit of local entrepreneurship.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Discover</h4>
            <ul className="space-y-3">
              {footerLinks.discover.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vocal for Local. All rights reserved.
          </p>
          <p className="font-body text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
