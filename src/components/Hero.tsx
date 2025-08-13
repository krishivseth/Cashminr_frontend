import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CreditCard, PiggyBank, TrendingUp, Home, Calculator, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-family.jpg";

const Hero = () => {
  const quickAccess = [
    { icon: CreditCard, label: "Credit Cards", href: "/credit-cards" },
    { icon: PiggyBank, label: "Savings", href: "#savings" },
    { icon: TrendingUp, label: "Investing", href: "/investing" },
    { icon: Home, label: "Mortgages", href: "#mortgages" },
    { icon: Calculator, label: "Calculators", href: "#calculators" },
    { icon: RefreshCw, label: "Refinance", href: "#refinance" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/20" />
      
      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Smarter Money,
            </span>
            <br />
            <span className="text-foreground">Brighter Future</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transform your financial journey with expert tools, insights, and guidance 
            designed to help you achieve your money goals.
          </p>

          {/* Quick Access Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 animate-scale-in">
            {quickAccess.map((item, index) => (
              <Card 
                key={item.label}
                className="p-4 bg-card/50 backdrop-blur-glass border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105 hover:shadow-glow cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.href.startsWith('/') ? (
                  <Link to={item.href} className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <a href={item.href} className="flex flex-col items-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.label}
                    </span>
                  </a>
                )}
              </Card>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 shadow-glow">
              Explore Tools
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-border/50 hover:bg-card/50">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                48+
              </div>
              <div className="text-muted-foreground">Years in Finance</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                50M+
              </div>
              <div className="text-muted-foreground">Users Helped</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">
                200+
              </div>
              <div className="text-muted-foreground">Financial Tools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;