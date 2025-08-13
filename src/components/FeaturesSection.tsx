import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Zap, TrendingUp, Clock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Expertise",
      description: "48+ years of financial guidance you can rely on",
      color: "text-blue-500",
    },
    {
      icon: Users,
      title: "50M+ Users",
      description: "Join millions who trust us with their financial decisions",
      color: "text-green-500",
    },
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized for excellence in financial services",
      color: "text-purple-500",
    },
    {
      icon: Zap,
      title: "Real-Time Data",
      description: "Up-to-date rates and market information",
      color: "text-yellow-500",
    },
    {
      icon: TrendingUp,
      title: "Expert Analysis",
      description: "In-depth market insights from financial professionals",
      color: "text-red-500",
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Tools and resources available whenever you need them",
      color: "text-cyan-500",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-accent bg-clip-text text-transparent">Cashminr</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to helping you make the smartest financial decisions for your future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group bg-card/30 backdrop-blur-glass border-border/30 hover:bg-card/50 hover:shadow-elegant transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 backdrop-blur-glass border border-border/50">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
              <CreditCard className="h-10 w-10 text-primary-foreground" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Ready to Find Your Perfect Credit Card?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Compare hundreds of credit cards with expert insights and find the one that fits your lifestyle
            </p>
            <Link to="/credit-cards">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 shadow-glow">
                Compare Credit Cards
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;