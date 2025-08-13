import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight, Percent } from "lucide-react";

const RatesSection = () => {
  const cdRates = [
    { term: "6 Month", rate: "4.09%", comparison: "2.18%", type: "best" },
    { term: "1 Year", rate: "4.07%", comparison: "2.04%", type: "popular" },
    { term: "5 Year", rate: "4.09%", comparison: "2.39%", type: "featured" },
  ];

  const savingsRates = [
    { bank: "Marcus by Goldman Sachs", rate: "4.50%", minDeposit: "$0" },
    { bank: "Ally Bank Online Savings", rate: "4.25%", minDeposit: "$0" },
    { bank: "Capital One 360", rate: "4.10%", minDeposit: "$0" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Today's Best Rates
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the highest yielding accounts to maximize your money's potential
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* CD Rates */}
          <Card className="bg-card/50 backdrop-blur-glass border-border/50 hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                  <Percent className="h-5 w-5 text-primary-foreground" />
                </div>
                <span>Certificate of Deposit Rates</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cdRates.map((cd, index) => (
                <div 
                  key={cd.term}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-lg font-semibold">{cd.term}</div>
                    {cd.type === 'best' && (
                      <span className="px-2 py-1 text-xs bg-gradient-primary rounded-full text-primary-foreground">
                        Best Rate
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{cd.rate}</div>
                    <div className="text-sm text-muted-foreground">vs {cd.comparison} avg</div>
                  </div>
                </div>
              ))}
              <Button className="w-full mt-6 bg-gradient-primary hover:opacity-90" size="lg">
                Compare All CD Rates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* High-Yield Savings */}
          <Card className="bg-card/50 backdrop-blur-glass border-border/50 hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-2xl">
                <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary-foreground" />
                </div>
                <span>High-Yield Savings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {savingsRates.map((savings, index) => (
                <div 
                  key={savings.bank}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div>
                    <div className="font-semibold">{savings.bank}</div>
                    <div className="text-sm text-muted-foreground">Min: {savings.minDeposit}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">{savings.rate}</div>
                    <div className="text-sm text-muted-foreground">APY</div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-6 border-border/50 hover:bg-card/50" size="lg">
                View All Savings Accounts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RatesSection;