import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Home, DollarSign, TrendingUp, CreditCard, PiggyBank } from "lucide-react";
import { Link } from "react-router-dom";

const ToolsSection = () => {
  const calculators = [
    {
      icon: Home,
      title: "Mortgage Calculator",
      description: "Calculate monthly payments, interest, and total cost",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: PiggyBank,
      title: "Savings Calculator",
      description: "Plan your savings goals and track growth over time",
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: CreditCard,
      title: "Credit Card Payoff",
      description: "See how long it takes to pay off your credit cards",
      gradient: "from-red-500 to-pink-600",
    },
    {
      icon: DollarSign,
      title: "Loan Calculator",
      description: "Compare loan terms and find the best rates",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      icon: TrendingUp,
      title: "Investment Calculator",
      description: "Project your investment growth and returns",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      icon: Calculator,
      title: "Budget Planner",
      description: "Create and track your monthly budget",
      gradient: "from-teal-500 to-cyan-600",
    },
  ];

  return (
    <section id="calculators" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Financial Calculators
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Make informed financial decisions with our comprehensive suite of calculators
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {calculators.map((calc, index) => (
            <Card 
              key={calc.title}
              className="group bg-card/50 backdrop-blur-glass border-border/50 hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${calc.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <calc.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {calc.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {calc.description}
                </p>
                {calc.title === "Credit Card Payoff" ? (
                  <Link to="/credit-cards">
                    <Button className="w-full bg-gradient-primary hover:opacity-90">
                      Compare Cards
                    </Button>
                  </Link>
                ) : (
                  <Button className="w-full bg-gradient-primary hover:opacity-90">
                    Use Calculator
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="border-border/50 hover:bg-card/50">
            View All 200+ Tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;